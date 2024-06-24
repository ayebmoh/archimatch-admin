import DonutChart from '@/components/Charts/DonutChart';
import HistogramChart from '@/components/Charts/HistogramChart';
import CustomChip from '@/components/Custom/CustomChip';
import { Typography } from '@material-tailwind/react';


const Statistiques = ({ data, Projectdata }) => {


    return (
        <div className="flex flex-col">
            <div className='flex flex-row border-b-2 border-gray-400'>
                <div className='flex flex-col  h-full  '>
                    <div className=' flex justify-between w-full py-5'>

                        <Typography variant="h6" className=''>Projet</Typography></div>
                    <div className='   flex flex-row gap-2'>
                        <div className=" w-[90%]   flex items-center justify-center ">
                            <HistogramChart Projectdata={Projectdata} backgroundColor="#4CAF50" Title="300 Projets publiés" />
                        </div>
                        <div className="border-l-2 mb-6 border-gray-300 "></div>
                        <div className="pb-5 w-[60%] flex  items-center justify-center">
                            <DonutChart data={data} /></div>

                    </div>

                </div>

                <div className='flex flex-col'>
                    <div className='flex flex-col border-l-2 border-gray-400  h-full  '>

                        <div className=' flex justify-between w-full p-5'>

                            <Typography variant="h6">Architectes</Typography></div>

                        <div className='gap-5  flex flex-row '>

                            <div className=" px-4 w-full border-r-2 gap-10 flex flex-col items-center justify-center ">
                                <CustomChip Color="bg-[#FFE5E6]" IconColor='bg-architect-primary' Title="Nombre d'architectes inscrits" Number='100' Conclusion="20% par rapport a janvier" />
                                <CustomChip Color="bg-[#FFE5E6]" IconColor='bg-architect-primary' Title="Nombre d'architectes incatifs" Number='10' />
                            </div>
                            <div className=" w-[100%]  flex items-start justify-start ">
                                <HistogramChart Projectdata={Projectdata} backgroundColor="#FC5C63" Title="Nombre d'architecte par abonnement" />
                            </div>                        </div>
                    </div>
                </div>

            </div>


        </div>


    )
    {/* <div>
                <div className="  flex items-center justify-center">
                    <DonutChart data={data} /></div>
            </div>
            <div>
                <div className="  flex items-center justify-center">
                    <DonutChart data={data} /></div>
            </div>
            <div>
                <div className=" flex items-center justify-center">
                    <DonutChart data={data} /></div>
            </div> */}

}

export default Statistiques;
