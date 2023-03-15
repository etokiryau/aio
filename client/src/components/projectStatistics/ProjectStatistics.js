import { useMemo, useRef } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import {  Bar, Line } from 'react-chartjs-2';

import calendar from './img/calendar.png';
import render1 from './img/render1.png';
import render2 from './img/render2.png';
import render3 from './img/render3.png';

import './projectStatistics.scss';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

const ProjectStatistics = () => {

    const windowrRef = useRef(window);
    let windowWidth = windowrRef.current.innerWidth;

    const dataRenders = [render1, render2, render3];

    const barLabels = ['Purchased', 'Need to buy'];

    const barOptions = {
        responsive: true,
        aspectRatio: windowWidth > 620 ? 1.3 : 1.7,
        borderRadius: 22,
        plugins: {
            legend: {
                display: false,
                position: 'top'
            },
            title: {
                display: false,
                text: 'Material volume',
            }
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                ticks: {
                  stepSize: 10,
                  beginAtZero: true, 
                },
            }
        }
    };

    const barData = {
        labels: barLabels,
        datasets: [
          {
            label: 'Purchased',
            data: [50, 30],
            backgroundColor: 'rgb(166, 166, 166)',
          },

        ],
    };

    const lineLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const lineOptions = {
        responsive: true,
        aspectRatio: windowWidth > 620 ? 1.3 : 1.7,
        interaction: {
            mode: 'index',
            intersect: false,
        },
        plugins: {
            tooltip: {
                enabled: true
            },
            legend: {
                display: false,
                position: 'top',
            },
            title: {
                display: false,
                text: 'PLAN/FACT',
            },
            tooltip: {
                intersect: true, 
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                    
                },
                ticks: {
                    display: false
                }
            },
            y: {
                max: 100,
                ticks: {
                    stepSize: 25,
                    beginAtZero: true, 
                },
            },
            
        },
    };

    const lineData = {
        labels: lineLabels,
        datasets: [
          {
            label: 'Plan',
            data: [0, 16, 25, 45, 57, 75, 100],
            borderColor: 'rgb(61, 61, 61)',
            pointBackgroundColor: 'rgb(61, 61, 61)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            tension: 0.1
          },
          {
            label: 'Fact',
            data: [0, 10, 15, 40, 67, 75, 90],
            borderColor: 'rgb(152, 250, 132)',
            pointBackgroundColor: 'rgb(152, 250, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            tension: 0.1
          },

        ],
    };

    const renderRenders = () => {
        const content = dataRenders.map((item, i) => {
            return <img src={item} alt="render" key={i} />
        })

        return content;
    };

    const renderContent = useMemo(() => renderRenders(), [dataRenders]);
    
    return (
        <>
            <div className="project__statistics-wrapper-external">
                <p className="project__statistics">Project statistics</p>
                <div className="project__statistics-wrapper">
                    <div className="project__statistics-end-date">
                        <p name="head">PLANNED END DATE</p>
                        <div className="project__statistics-end-date-inner-wrapper">
                            <div className="project__statistics-end-date-inner">
                                <div>
                                    <img src={calendar} alt="calendar" />
                                </div>
                                <p name="date">20.01.2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="project__statistics-material-volume">
                        <p name="head">MATERIAL VOLUME</p>
                        <div>
                            <Bar options={barOptions} data={barData} />
                        </div>
                    </div>
                    <div className="project__statistics-fact">
                        <p name="head">FACT</p>
                        <div className="project__statistics-fact-wrapper">
                            <div className="project__statistics-fact-ring">
                                <svg>
                                    <circle cx="50%" cy="50%" r="60"/>
                                    <circle cx="50%" cy="50%" r="60"
                                        strokeDashoffset={377 - (377 * 35) / 100}/>
                                </svg>
                                <p name="progress">35%</p>
                            </div>
                        </div>
                    </div>
                    <div className="project__statistics-plan-fact">
                        <p name="head">PLAN/FACT</p>
                        <div>
                            <Line options={lineOptions} data={lineData} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="project__statistics-renders">
                {renderContent}
            </div>
        </>
  
    )
}

export default ProjectStatistics;