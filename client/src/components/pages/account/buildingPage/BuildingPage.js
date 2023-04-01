import { useState, useRef, useEffect, useCallback, useMemo, lazy } from 'react';
import { Helmet } from "react-helmet";


import { useAutodeskPlatformService } from '../../../../services/AutodeskPlatformService';
import Monitoring from '../../../monitoring/Monitoring';
import { Context } from '../../../../utilis/Context';

import './buildingPage.scss';

const TaskCard = lazy(() => import("../../../taskCard/TaskCard"));

const Building = () => {
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visibleElements, setVisibleElements] = useState({});

  const taskModalRef = useRef(null);
  const windowRef = useRef(window);
  let windowWidth = windowRef.current.innerWidth;
  const viewerContainer = useRef(null);

  const {renderViewer, setStatus, isolateElements, stub, isModelLoaded} = useAutodeskPlatformService();

  // const modelUrn = 'dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6dHN3aWdsenZ5dWJtbTZwaG04d2Ria2IzZHhqbmZrcnYtcHJvamVjdF9hL3Byb2plY3RfYV9mcmVlLm53ZA';
  // const modelUrn = 'dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6dGVzdF9wbGF0Zm9ybS90ZXN0MDEuemlw';
  // const modelUrn = 'dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6cHJvamVjdF9hX2J5L3Byb2plY3RfYV9jLnppcA'
  const modelUrn = 'dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6dGVzdF9wbGF0Zm9ybS9wcm9qZWN0X2FfdjIuemlw'

  const toggleTaskModal = () => {
    setIsTaskModalOpen(!isTaskModalOpen);
  }

  const updateVisibleElements = useCallback(async(e) => {
    if (!isTaskModalOpen) {
      const data = JSON.parse(e.target.getAttribute('data-elements'));
      setVisibleElements({...visibleElements, ...data});
      isolateElements(data.elements, data.status);
    } else {
      setStatus();
    }
  }, [isTaskModalOpen])

  const handleMouseDown = (event) => {
      const initialX = event.clientX - position.x;
      const initialY = event.clientY - position.y;
      
      document.body.style.userSelect = 'none';
  
      const handleMouseMove = (event) => {
          let newX = event.clientX - initialX;
          let newY = event.clientY - initialY;
          let rightModalShift = windowRef.current.innerWidth > 800 ? 60 : 0;
    
          if (newX < 0) {
            newX = 0;
          } else if (newX + taskModalRef.current.offsetWidth + taskModalRef.current.firstChild.clientWidth + 60 > windowRef.current.innerWidth) {
            newX = windowRef.current.innerWidth - taskModalRef.current.offsetWidth - taskModalRef.current.firstChild.clientWidth - rightModalShift;
          }
    
          if (newY < 0) {
            newY = 0;
          } else if (newY + taskModalRef.current.offsetHeight + taskModalRef.current.firstChild.clientHeight > windowRef.current.innerHeight) {
            newY = windowRef.current.innerHeight - taskModalRef.current.offsetHeight - taskModalRef.current.firstChild.clientHeight;
          }
    
          setPosition({ x: newX, y: newY });
      };
      
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', () => {
          document.removeEventListener('mousemove', handleMouseMove);
          document.body.style.userSelect = '';
      });
  };

  useEffect(() => {
    renderViewer(modelUrn, viewerContainer);
  }, []);

  useEffect(() => {
    if (isModelLoaded) {
      setTimeout(() => setStatus(), 500)
    }
  }, [isModelLoaded])

  return (
    <>
      <Helmet>
        <title>Building</title>
        <meta property="og:title" content="Building" />
        <meta property="og:url" content="http://www.aio-construction.online/building" />
      </Helmet>
    
      <Context.Provider value={{isTaskModalOpen, visibleElements, modelUrn}}>
        <div className='building__wrapper'>
          <h1>Monitoring of construction</h1>

          <div className='building'>
          
            <div className='building__content'>
              <Monitoring toggleTaskModal={(e) => {toggleTaskModal(); updateVisibleElements(e)}} />
            </div>

            <div className='building__content viewer'>
              <div className='viewer-container' ref={viewerContainer} />
              {stub}
            </div>

            <div ref={taskModalRef}
                  style={{display: isTaskModalOpen ? 'block' : 'none', 
                          left: position.x,
                          top: position.y, 
                          }}
                  className="taskcard-wrapper"
                  onMouseDown={handleMouseDown}>
              <TaskCard toggleTaskModal={(e) => {toggleTaskModal(); updateVisibleElements(e)}}/>
            </div>

          </div> 
        </div>
      </Context.Provider>
    </>
  )
}

export default Building;