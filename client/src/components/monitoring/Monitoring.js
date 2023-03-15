import { useState, useEffect, useRef, useMemo } from 'react';

import './monitoring.scss';

const Monitoring = ({toggleTaskModal}) => {

    const [visibleScheduleData, setscheduleData] = useState([]);
    const [term, setTerm] = useState('');
    const [sliderPosition, setSliderPosition] = useState(0);
    const [durationAreaWidth, setDurationAreaWidth] = useState(0);

    const durationRef = useRef(null);
    const durationWrapperRef = useRef(null);
    const monthesRef = useRef(null);
    const windowRef = useRef(window);

    let windowWidth = windowRef.current.innerWidth;

    // const fetchedData = {
    //     monthes: ['JAN','FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC', 'JAN', 'FEB'],
    //     scheduleData: [
    //         {
    //             taskName: 'TASK 1',
    //             duration: '1 JAN - 25 MAR',
    //             marginLeft: '0px',
    //             width: '150px',
    //             elementsIds: ['298932', '298817', '903046']
    //         },
    //         {
    //             taskName: 'TASK 2',
    //             duration: '6 JAN - 4 APR',
    //             marginLeft: '10px',
    //             width: '160px',
    //             elementsIds: ['298932']
    //         },
    //         {
    //             taskName: 'TASK 3',
    //             duration: '14/1 - 18/3',
    //             marginLeft: '30px',
    //             width: '100px',
    //             elementsIds: ['298932', '903046']
    //         },
    //         {
    //             taskName: 'TASK 4',
    //             duration: '1/2 - 9/4',
    //             marginLeft: '60px',
    //             width: '120px',
    //             elementsIds: ['298817']
    //         },
    //         {
    //             taskName: 'TASK 5',
    //             duration: '14 JAN - 24 MAY',
    //             marginLeft: '30px',
    //             width: '230px',
    //             elementsIds: ['298932', '298817', '903046']
    //         },
    //         {
    //             taskName: 'TASK 6',
    //             duration: '15 FEB - 12 MAY',
    //             marginLeft: '90px',
    //             width: '150px',
    //             elementsIds: ['298817', '903046']
    //         },
    //         {
    //             taskName: 'TASK 7',
    //             duration: '20 MAR - 22 JUN',
    //             marginLeft: '130px',
    //             width: '190px',
    //             elementsIds: ['298932', '903046']
    //         },
    //         {
    //             taskName: 'TASK 8',
    //             duration: '13 APR - 15 JUL',
    //             marginLeft: '180px',
    //             width: '190px',
    //             elementsIds: ['298932', '298817']
    //         },
    //         {
    //             taskName: 'TASK 9',
    //             duration: '13 APR - 15 JUL',
    //             marginLeft: '180px',
    //             width: '190px',
    //             elementsIds: ['298932', '298817']
    //         },
    //         {
    //             taskName: 'TASK 9',
    //             duration: '13 APR - 15 JUL',
    //             marginLeft: '180px',
    //             width: '190px',
    //             elementsIds: ['298932', '298817']
    //         },
    //         {
    //             taskName: 'TASK 9',
    //             duration: '13 APR - 15 JUL',
    //             marginLeft: '180px',
    //             width: '190px',
    //             elementsIds: ['298932', '298817']
    //         }
    //     ]
    // }

    const fetchedData = {
        monthes: ['JAN','FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC', 'JAN', 'FEB'],
        scheduleData: [
            {
                taskName: 'Опалубка',
                duration: '1 JAN - 25 MAR',
                marginLeft: '0px',
                width: '150px',
                elementsIds: ['409464'],
                status: 'completed'
            },
            {
                taskName: 'Арматура',
                duration: '1 JAN - 25 MAR',
                marginLeft: '0px',
                width: '150px',
                elementsIds: ['409464'],
                status: 'completed'
            },
            {
                taskName: 'Бетонирование фундамента',
                duration: '1 JAN - 25 MAR',
                marginLeft: '0px',
                width: '150px',
                elementsIds: ['409464'],
                status: 'completed'
            },
            {
                taskName: 'Стены несущие_1',
                duration: '6 JAN - 4 APR',
                marginLeft: '10px',
                width: '160px',
                elementsIds: ['210852', '210764', '210949'],
                status: 'rejected'
            },
            {
                taskName: 'Стены несущие_2',
                duration: '14/1 - 18/3',
                marginLeft: '30px',
                width: '100px',
                elementsIds: ['220087', '210651', '212027'],
                status: 'progress'
            },
            {
                taskName: 'Армирование пилонов',
                duration: '1/2 - 9/4',
                marginLeft: '60px',
                width: '120px',
                elementsIds: ['298817'],
                status: 'accepted'
            },
            {
                taskName: 'Бетонирование пилонов',
                duration: '14 JAN - 24 MAY',
                marginLeft: '30px',
                width: '230px',
                elementsIds: ['298932', '298817', '903046'],
                status: 'accepted'
            },
            {
                taskName: 'Перемычки',
                duration: '15 FEB - 12 MAY',
                marginLeft: '90px',
                width: '150px',
                elementsIds: ['298817', '903046'],
                status: 'accepted'
            },
            {
                taskName: 'Армопояс',
                duration: '20 MAR - 22 JUN',
                marginLeft: '130px',
                width: '190px',
                elementsIds: ['298932', '903046'],
                status: 'accepted'
            },
            {
                taskName: 'Перекрытие кровли',
                duration: '13 APR - 15 JUL',
                marginLeft: '180px',
                width: '190px',
                elementsIds: ['298932', '298817'],
                status: 'accepted'
            },
            {
                taskName: 'Парамет газобетон',
                duration: '13 APR - 15 JUL',
                marginLeft: '190px',
                width: '190px',
                elementsIds: ['298932', '298817'],
                status: 'accepted'
            },
            {
                taskName: 'Стены надстройки',
                duration: '13 APR - 15 JUL',
                marginLeft: '200px',
                width: '190px',
                elementsIds: ['298932', '298817'],
                status: 'accepted'
            },
            {
                taskName: 'Перекрытие кровли',
                duration: '13 APR - 15 JUL',
                marginLeft: '230px',
                width: '190px',
                elementsIds: ['298932', '298817'],
                status: 'accepted'
            }
        ]
    }

    const {scheduleData, monthes} = fetchedData;
    
    /* 62 и 41 - расстояние между элементами + элемент*/
    const updateDurationAreaWidth = (value) => {
        if (value > 800) {
            setDurationAreaWidth(62 * monthes.length); 
        } else {
            setDurationAreaWidth(41 * monthes.length); 
        }
    }

    useEffect(() => {
        updateDurationAreaWidth(windowWidth);
    }, [windowWidth])
    
    
    const onChangeSlider = (value) => {
        setSliderPosition(value);
    };

    const updateSliderPosition = (value) => {
        let offset = value * ((durationAreaWidth - durationWrapperRef.current.clientWidth) / 100);
        durationRef.current.style.transform = `translateX(-${offset}px)`;
        monthesRef.current.style.transform = `translateX(-${offset}px)`;
    }
    
    useEffect(() => {
        updateSliderPosition(sliderPosition);
    }, [sliderPosition]);

    const onUpdateSearchValue = (term) => {
        setTerm(term);
    };

    const searchTask = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.taskName.toLowerCase().indexOf(term) > -1;
        })
    };

    const updateScheduleList = (data, term) => {
        const newData = searchTask(data, term);
        setscheduleData(newData);
    };

    useEffect(() => {
        updateScheduleList(scheduleData, term);
    }, [term]);

    const renderMonthesContent = (data) => {
        const monthesList = data.map((item, i) => {
            return (
                <p key={i}>{item}</p>
            )
        })

        return (
            <div ref={monthesRef} style={{width: durationAreaWidth}} className="monitoring__schedule-monthes">
                {monthesList}    
            </div>
        )
    }

    const renderScheduleContent = (data) => {
        const nameList = data.map((item, i) => {
            let reducedName;

            if (item.taskName.length > 8) {
                reducedName = `${item.taskName.slice(0, 8)}...`;
            } else {
                reducedName = item.taskName;
            }
            
            return (
                <div className='monitoring__schedule-task-name-list-single' key={i}>
                    <p 
                        onClick={(e) => toggleTaskModal(e)} 
                        data-elements={JSON.stringify({elements: item.elementsIds, status: item.status})} 
                        className="monitoring__schedule-task-name"
                    >{reducedName}</p>
                    {item.taskName.length > 8 ? <div name="taskName-popup" onClick={(e) => toggleTaskModal(e)} data-elements={{elements: item.elementsIds, status: item.status}}>{item.taskName}</div> : null}
                </div>
            )
        });

        const durationList = data.map((item, i) => {
            let adoptedWidth = item.width;
            let statusColor;

            switch (item.status) {
                case 'completed':
                    statusColor = 'rgba(76, 217, 79, 0.7)';
                    break;
                case 'rejected':
                    statusColor = 'rgba(255, 0, 0, 0.7)';
                    break;
                case 'progress':
                    statusColor = 'rgba(0, 0, 255, 0.7)';
                    break;
                default: 
                    statusColor = '#3D3D3D';
                    break;
            }

            // if (durationAreaWidth === 868) {
            //     adoptedWidth = `${item.width}px`;
            // } else {
            //     adoptedWidth = `${item.width * (41 / 62)}px`;
            // }

            return (  
                <div key={i} className="monitoring__schedule-task-duration">
                    <div onClick={(e) => {toggleTaskModal(e)}} 
                        className="monitoring__schedule-task-duration-single" 
                        data-elements={JSON.stringify({elements: item.elementsIds, status: item.status})} 
                        style={{marginLeft: item.marginLeft, width: adoptedWidth, backgroundColor: statusColor}}
                    >{item.duration}</div>
                </div> 
            )
        });

        return (
            <div className="monitoring__schedule-tasks">
                <div className="monitoring__schedule-task-name-list">
                    {nameList}
                </div>
                <div ref={durationWrapperRef} className="monitoring__schedule-task-duration-wrapper">
                    <div ref={durationRef} style={{width: durationAreaWidth}} className="monitoring__schedule-task-duration-list">
                        {durationList}
                    </div>
                </div>
            </div>
        )
    };

    const monthesContent = useMemo(() => renderMonthesContent(monthes), [monthes]);

    const scheduleContent = useMemo(() => {
        return renderScheduleContent(visibleScheduleData);
    }, [visibleScheduleData, durationAreaWidth]);

    return (
        <div className="monitoring">
            
            <div className="monitoring__wrapper">
                <div className="monitoring__schedule-head">
                    <p className="monitoring__schedule">WORK SCHEDULE</p>
                    <input id="monitoring__schedule-slider" onChange={(e) => onChangeSlider(e.target.value)} type="range" value={sliderPosition} min={0} max={100}/>
                </div>
                <div className="monitoring__schedule-dates">
                    <div className="monitoring__schedule-dates-search-wrapper">
                        <div className="monitoring__schedule-dates-search">
                            <div id='icon-search'></div>
                            <input type="text" onChange={(e) => onUpdateSearchValue(e.target.value)} value={term}/>
                        </div>
                    </div>
                    <div  className="monitoring__schedule-monthes-wrapper">
                        {monthesContent}
                    </div>
                </div>
                <div className="monitoring__schedule-tasks-wrapper">
                    {scheduleContent}
                </div>
            </div>
        </div>
    )
}

export default Monitoring;