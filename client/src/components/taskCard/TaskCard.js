import { useState, useRef, useMemo } from 'react';

import TaskOverview from '../taskOverview/TaskOverview';
import TaskPhoto from '../taskPhoto/TaskPhoto'
import TaskComments from '../taskComments/TaskComments';

import './taskCard.scss';

const TaskCard = ({toggleTaskModal}) => {
    
    const [tab, setTab] = useState('photo');

    const windowRef = useRef(window);
    let windowHeight = windowRef.current.innerHeight;

    const setContent = (tab) => {
        switch (tab) {
            case 'overview':
                return  <TaskOverview />;
            case 'photo':
                return <TaskPhoto />
            case 'comments':
                return <TaskComments />
            default:
                new Error('Such content does not exist')
        }
    }

    const tabContent = useMemo(() => setContent(tab), [tab]);
  
    return (
        <div className='task-card'>
            <div className='task-card__wrapper'>
                <div  className='task-card__wrapper-crossbtn'>
                    <svg onClick={toggleTaskModal} viewBox="0 0 100 100">
                        <line x1="10" y1="10" x2="90" y2="90" stroke="black" strokeWidth="10" />
                        <line x1="90" y1="10" x2="10" y2="90" stroke="black" strokeWidth="10" />
                    </svg>
                </div>
                <div className='task-card__navigation'>
                    <ul>
                        <li onClick={() => setTab('overview')} style={{borderBottom: tab === 'overview' ? 'solid #3D3D3D' : 'none'}}>Overview</li>
                        <li onClick={() => setTab('photo')} style={{borderBottom: tab === 'photo' ? 'solid #3D3D3D' : 'none'}}>Photo</li>
                        <li onClick={() => setTab('comments')} style={{borderBottom: tab === 'comments' ? 'solid #3D3D3D' : 'none'}}>Comments</li>
                    </ul>
                </div>
                <div className='task-card__content' >
                    {tabContent}
                </div>
            </div>
        </div>
    )
}

export default TaskCard;