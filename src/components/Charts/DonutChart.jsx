import { Typography } from '@material-tailwind/react';
import Chart from 'chart.js/auto';
import { useEffect, useRef } from 'react';
import 'tailwindcss/tailwind.css';

const DonutChart = ({ data }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');

        const chart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: data.map(entry => entry.label),
                datasets: [{
                    data: data.map(entry => entry.value),
                    backgroundColor: ['#28a745', '#dfffd6', '#a4edc6'],
                    hoverBackgroundColor: ['#28a745', '#dfffd6', '#a4edc6'],
                    borderWidth: 0,
                    cutout: '65%',
                    radius: '60%'
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        callbacks: {
                            label: (context) => {
                                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                const value = context.raw;
                                const percentage = ((value / total) * 100).toFixed(0);
                                return `${context.label}: ${percentage}%`;
                            }
                        }
                    }
                }
            }
        });

        return () => chart.destroy();
    }, [data]);

    return (
        <div className=" bg-white w-[95%]  flex flex-col">
            <Typography className=" font-bold ">Les projets les plus demandés</Typography>
            <div className="relative w-full " style={{ height: '100%' }}>
                <canvas ref={chartRef}></canvas>
            </div>
            <div className=" grid grid-cols-2 gap-1">
                {data.map((entry, index) => (
                    <div key={index} className="flex items-center">
                        <span
                            className="inline-block  w-2 h-2 rounded-full mr-2"
                            style={{ backgroundColor: ['#28a745', '#dfffd6', '#a4edc6'][index] }}
                        ></span>
                        <div className='flex flex-row gap-1'>                        <Typography className="text-xs text-gray-700">{entry.label}</Typography>
                            <Typography className="text-xs text-gray-500">{entry.percentage}%</Typography></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DonutChart;
