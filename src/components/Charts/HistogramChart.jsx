import { Typography } from '@material-tailwind/react';
import Chart from 'chart.js/auto';
import 'chartjs-adapter-date-fns';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { useEffect, useRef } from 'react';
import 'tailwindcss/tailwind.css';

const HistogramChart = ({ Projectdata, backgroundColor, Title }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');

        const chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: Projectdata.map(entry => format(new Date(entry.month), 'MMM, yyyy', { locale: fr })),
                datasets: [{
                    label: `${Title}`,
                    data: Projectdata.map(entry => entry.projects),
                    backgroundColor: `${backgroundColor}`,
                    borderColor: `${backgroundColor}`,
                    borderWidth: 1,
                    borderRadius: 4,
                    barThickness: 10,
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            title: (tooltipItems) => {
                                return format(new Date(tooltipItems[0].label), 'MMMM yyyy', { locale: fr });
                            }
                        }
                    }
                },
                scales: {


                    y: {

                        beginAtZero: true,
                        ticks: {
                            stepSize: 50 // Adjust this according to your data range
                        }
                    }
                }
            }
        });

        return () => chart.destroy();
    }, [Projectdata]);

    return (
        <div className=" bg-white w-[100%]  flex flex-col h-full ">
            <Typography className=" font-bold mb-4">{Title}</Typography>
            <div className=" relative pt-16" style={{ height: '100%' }}>
                <canvas ref={chartRef}></canvas>
            </div>
        </div>
    );
};

export default HistogramChart;
