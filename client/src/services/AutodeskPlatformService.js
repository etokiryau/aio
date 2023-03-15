import { useCallback, useEffect } from 'react';

import { useHttpAps } from '../hooks/http.aps.hook';

export const useAutodeskPlatformService = () => {
    const Autodesk = window.Autodesk;
    const THREE = window.THREE;
    
    const { getToken } = useHttpAps();

    const colorCompleted = new THREE.Vector4( 0, 255, 0, 0.5 );
    const colorInProgress = new THREE.Vector4( 0, 0, 255, 0.5 );
    const colorRejected = new THREE.Vector4( 255, 0, 0, 0.3 );

    let viewer;

    const renderViewer = async (modelUrn, viewerContainer, toolbar = true) => {
        const accessToken = await getToken();

        const options = {
            env: 'AutodeskProduction', 
            api: 'derivativeV2',
            locale: 'en-US',
            language: 'en',
            accessToken: accessToken,
        };

        Autodesk.Viewing.Initializer(options, async () => {
            viewer = await new Autodesk.Viewing.GuiViewer3D(viewerContainer.current);

            let startedCode = viewer.start();
             
            if (startedCode > 0) {
                console.error('Failed to create a Viewer: WebGL not supported.');
                return;
            }  

            viewer.setTheme("light-theme");
        });
        
        Autodesk.Viewing.Document.load(
            `urn:${modelUrn}`,
            async (doc) => {
                const defaultModel = doc.getRoot().getDefaultGeometry();
                
                await viewer.loadDocumentNode(doc, defaultModel);
                
                viewer.setLightPreset(7);

                if (!toolbar) {
                    viewer.toolbar.setVisible(false);
                }
            },
            (error) => {
                console.error(error);
            },
            { accessToken }
        );  

        return <div ref={viewerContainer} />
    }
    
    const isolateElements = useCallback(async (elements, status) => {
        let color;

        const getForgeIds = async () => {
            const forgeIdsArray = [];

            for (let i = 0; i < elements.length; i++) {
                const forgeId = await new Promise(resolve => {
                    viewer.search(elements[i], 
                        (dbIds) => {
                            resolve(dbIds);
                        }, 
                    () => {})
                })
            
                forgeIdsArray.push(forgeId[0]);
            }

            return forgeIdsArray;
        };

        const forgeIdsArray = await getForgeIds();    

        viewer.setGhosting(true);
        await viewer.isolate(forgeIdsArray);
        
        switch (status) {
            case 'completed':
                color = colorCompleted;
                break;
            case 'rejected':
                color = colorRejected
                break;
            case 'progress':
                color = colorInProgress
                break;
            default: 
                break;
        }

        forgeIdsArray.forEach(item => {
            viewer.setThemingColor(item, color);
        })

        viewer.fitToView();
    }, []);

    const paintEverything = useCallback(async (elements, status) => {
        let color;

        const getForgeIds = async () => {
            const forgeIdsArray = [];

            for (let i = 0; i < elements.length; i++) {
                const forgeId = await new Promise(resolve => {
                    viewer.search(elements[i], 
                        (dbIds) => {
                            resolve(dbIds);
                        }, 
                    () => {})
                })
            
                forgeIdsArray.push(forgeId[0]);
            }

            return forgeIdsArray;
        };

        const forgeIdsArray = await getForgeIds();    

        switch (status) {
            case 'completed':
                color = colorCompleted;
                break;
            case 'rejected':
                color = colorRejected
                break;
            case 'progress':
                color = colorInProgress
                break;
            default: 
                break;
        }

        forgeIdsArray.forEach(item => {
            viewer.setThemingColor(item, color);
        })
    }, [])

    const resetIsolation = useCallback(() => {
        viewer.isolate();
        viewer.clearThemingColors();
        viewer.fitToView();
    }, []);

    const isolateOnly = useCallback(async (elements) => {
        const getForgeIds = async () => {
            const forgeIdsArray = [];

            for (let i = 0; i < elements.length; i++) {
                const forgeId = await new Promise(resolve => {
                    viewer.search(elements[i], 
                        (dbIds) => {
                            resolve(dbIds);
                        }, 
                    () => {})
                })
            
                forgeIdsArray.push(forgeId[0]);
            }

            return forgeIdsArray;
        };

        const forgeIdsArray = await getForgeIds();
        
        viewer.isolate(forgeIdsArray);
    }, []);

    const setStatus = useCallback(async () => {
        
        const data = [
            {elements: ['409464'], status: 'completed'},
            {elements: ['210852', '210764', '210949'], status: 'rejected'},
            {elements: ['220087', '210651', '212027'], status: 'progress'}
        ];

        let elements = [];

        data.forEach(item => {
            elements = [...elements, ...item.elements];
        })

        await isolateOnly(elements);

        data.forEach(async (item) => {
            await paintEverything(item.elements, item.status)
        })

        
        
    }, [])

    const resetToolbarVisibility = useCallback(() => {
        viewer.toolbar.setVisible(false);
    }, []);

    const getProperties = useCallback(async() => {
        const selectedElement = viewer.getSelection()[0];
        viewer.getProperties(selectedElement, function(result) {
            console.log(result);
        });
    }, [])

    return {
        viewer, 
        renderViewer,
        isolateElements, 
        resetIsolation, 
        resetToolbarVisibility,
        setStatus,
        getProperties
    };
}

        // const modelInstances = viewer.getVisibleModels();
        // const modelInstance = modelInstances[0];
        // const colorCompleted = new THREE.Vector4( 255 / 255, 0, 0, 1 );
        // viewer.setThemingColor([3593], colorCompleted );
        // viewer.isolate(3593)
        // viewer.impl.selector.setAggregateSelection(selection);

// viewer.registerContextMenuCallback(  'MyChangingColorMenuItems', ( menu, status ) => {
        //     if( status.hasSelected ) {
        //         menu.push({
        //             title: 'Override colorCompleted of selected elements to the red',
        //             target: () => {
        //                 const selSet = viewer.getSelection();
        //                 viewer.clearSelection();
        
        //                 const colorCompleted = new THREE.Vector4( 255 / 255, 0, 0, 1 );
        //                 for( let i = 0; i < selSet.length; i++ ) {
        //                     viewer.setThemingColor( selSet[i], colorCompleted );
        //                 }
        //             }
        //         });
        //     } else {
        //         menu.push({
        //             title: 'Clear overridden colorCompleted',
        //             target: () => {
        //                 viewer.clearThemingColors();
        //             }
        //         });
        //     }
        // });