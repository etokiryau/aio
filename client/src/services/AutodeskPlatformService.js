import { useState, useCallback } from 'react';
// import Autodesk from 'autodesk-forge-viewer';

import { useHttpAps } from '../hooks/http.aps.hook';

export const useAutodeskPlatformService = () => {
    const [isModelLoaded, setIsModelLoaded] = useState(false);

    const { getToken } = useHttpAps();

    const Autodesk = window.Autodesk;
    const THREE = window.THREE;
    
    const colorCompleted = new THREE.Vector4( 0, 255, 0, 0.5 );
    const colorInProgress = new THREE.Vector4( 0, 0, 255, 0.5 );
    const colorRejected = new THREE.Vector4( 255, 0, 0, 0.3 );

    let viewer;

    const renderViewer = useCallback(async (modelUrn, viewerContainer, toolbar = true, documentBrowser, isGhosting = true) => {
        setIsModelLoaded(false);

        const accessToken = await getToken();

        const options = {
            env: 'AutodeskProduction', 
            api: 'derivativeV2',
            locale: 'en-US',
            language: 'en',
            accessToken: accessToken,
        };

        async function initViewer() {
            await Autodesk.Viewing.Initializer(options, async () => {
                const config = {
                    extensions: documentBrowser ? ['Autodesk.DocumentBrowser'] : []
                };
    
                viewer = await new Autodesk.Viewing.GuiViewer3D(viewerContainer.current, config);

                const setPreset = () => {
                    viewer.setLightPreset(7);
                };

                viewer.addEventListener(Autodesk.Viewing.VIEWER_INITIALIZED, setPreset);

                let startedCode = viewer.start();
                 
                if (startedCode > 0) {
                    console.error('Failed to create a Viewer: WebGL not supported.');
                    return;
                }  
                
                viewer.setTheme("light-theme");

                return viewer.removeEventListener(Autodesk.Viewing.VIEWER_INITIALIZED, setPreset);
            });
        }

        async function loadDocument() {
            await Autodesk.Viewing.Document.load(
                `urn:${modelUrn}`,
                async (doc) => {
                    const defaultModel = doc.getRoot().getDefaultGeometry();
                    
                    await viewer.loadDocumentNode(doc, defaultModel);

                    viewer.toolbar.setVisible(toolbar);

                    viewer.setGhosting(isGhosting);

                    viewer.waitForLoadDone()
                        .then(() => setIsModelLoaded(true))
                        .catch((err) => console.log(err))
                },
                (error) => {
                    console.error(error);
                },
                { accessToken }
            );  
        }

        initViewer();
        loadDocument();
    }, [])
    
    const isolateElements = useCallback(async (elements, status, isGhosting = true) => {   
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

        viewer.setGhosting(isGhosting);
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
        // viewer.isolate();
        // viewer.clearThemingColors();
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
        
        viewer.setGhosting(true);
        viewer.isolate(forgeIdsArray);
    }, []);

    const setStatus = useCallback(async () => {
        const data = [
            {elements: ['409464'], status: 'completed'},
            {elements: ['210852', '210764', '210949'], status: 'rejected'},
            {elements: ['220087', '210651', '212027'], status: 'progress'}
        ];

        const elements = [];

        data.forEach(item => {
            elements.push(...item.elements);
        });

        data.forEach((item) => {
            paintEverything(item.elements, item.status)
        });

        await isolateOnly(elements);

        viewer.fitToView();
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
        isModelLoaded,
        viewer, 
        renderViewer,
        isolateElements, 
        resetIsolation, 
        resetToolbarVisibility,
        setStatus,
        getProperties
    };
}

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