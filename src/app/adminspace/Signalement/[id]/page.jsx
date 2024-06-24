"use client";
import { Typography } from "@/components/RemoteComponents";
import TableSkeleton from "@/components/TableSkeleton";
import { useGetarchiReportDescription } from "@/services/queries";
import { ShieldExclamationIcon } from "@heroicons/react/24/solid";
import { useParams, useRouter } from 'next/navigation';
import { IoIosArrowRoundBack } from "react-icons/io";

const MotifSignalement = () => {
    const { id } = useParams()

    const router = useRouter();
    const { data: descriptions, isLoading } = useGetarchiReportDescription(id)
    const handleClickBack = () => {
        router.back();
    };
    return (
        <div className="flex flex-col mt-4 ">
            <IoIosArrowRoundBack className="size-8 cursor-pointer " onClick={handleClickBack} />
            {isLoading ? <div className="flex flex-col gap-2"><TableSkeleton /><TableSkeleton /></div> :
                descriptions.data.descriptions.map((report) => <> <div className="flex flex-row mt-6 space-x-7">
                    <Typography className="text-architect-primary text-lg font-semibold " > Signalé par: </Typography>
                    <Typography className="text-lg font-medium"  >{report.user.first_name}{" "}{report.user.last_name}  </Typography>
                </div>
                    <div className="flex flex-col">
                        <Typography className="text-lg font-bold mt-4" > Motif de signalement: </Typography>
                        <div class="relative w-full min-w-[200px]">
                            <div className=" peer flex flex-row gap-1 h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200  bg-transparent px-3 py-2.5 ">
                                <ShieldExclamationIcon className="mt-0.5 h-5 w-5 text-gray-500" />
                                <Typography variant="paragraph" className=" text-gray-700">{report.description}</Typography>
                            </div>
                        </div>
                    </div></>)}


        </div>
    )
}

export default MotifSignalement