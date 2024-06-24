"use client";
import MainCard from "@/components/MainCard";
import NoImageCardSkeleton from "@/components/NoImageCardSkeleton";
import { Chip, Typography } from "@/components/RemoteComponents";
import { useFetchData } from "@/services/queries";
import {
    EnvelopeIcon,
    MapPinIcon,
    PhoneIcon,
    UserIcon
} from "@heroicons/react/24/outline";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useParams, useRouter } from "next/navigation";
const annoucDetails = () => {
    const router = useRouter()
    const handleRetour = () => {
        router.push("/adminspace/Announcement/")
    }
    const { id } = useParams()
    console.log("id", id)

    const { data: announcement, isLoading } = useFetchData(`/archimatch_app/announcement/${id}/`)
    console.log("ann", announcement)

    return (
        <>
            <div className="flex flex-col">
                <Typography variant="h6" className=" text-client-primary ">Annonces</Typography>
                <ArrowLeftIcon onClick={() => handleRetour()} className=" cursor-pointer h-5 w-6" />
                <div className="w-full flex flex-row gap-16">

                    {isLoading ? <MainCard className=" w-[50%] self-center" ><NoImageCardSkeleton className="w-[50%] h-72" /></MainCard> : <MainCard className=" w-[50%]  self-center" >
                        <div className="flex flex-col ">

                            <div className="flex  items-center justify-between ml-6 ">
                                <Typography className="text-architect-secondary_text_color text-[12px]">
                                    {" "}
                                    Details du projet
                                </Typography>
                                <div className="flex  items-center gap-2 self-end mr-6">
                                    <div className="flex flex-row gap-2">
                                        <Typography className="text-architect-secondary_text_color text-[12px]">
                                            {" "}
                                            Code de l’annonce:
                                        </Typography>
                                        <Typography className="text-client-primary     text-[12px]">
                                            {" "}
                                            {announcement?.data?.id}
                                        </Typography>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-1 ml-6 ">
                                <Typography className="text-client-primary  text-[16px] font-bold">
                                    {" "}
                                    Besoin
                                </Typography>
                            </div>
                            <div className="flex flex-row mb-5 ml-6  ">
                                <div className="flex flex-col basis-0 flex-grow">
                                    <div className="flex flex-col items-start  ">

                                        <Typography className="text-architect-secondary_text_color  text-sm">
                                            {" "}
                                            Type Architect
                                        </Typography>
                                        <Typography variant="paragraph" className="  text-md ">
                                            {" "}
                                            {announcement?.data?.architect_type?.display}
                                        </Typography>
                                        <div className="flex flex-row items-center gap-2">


                                        </div>

                                    </div>

                                    <div className="flex flex-col items-start  mt-7">
                                        <Typography className="text-architect-secondary_text_color  text-sm ">
                                            {" "}
                                            Type Traveaux
                                        </Typography>
                                        <div className="flex flex-row items-center gap-2">

                                            <Typography className=" text-md">
                                                {" "}
                                                {announcement?.data?.work_type}                                            </Typography>
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-start gap-2 mt-7">
                                        <Typography className="text-architect-secondary_text_color  text-sm ">
                                            {" "}
                                            Besoin
                                        </Typography>
                                        <div className="flex flex-row items-center gap-2">
                                            <Chip
                                                size="sm"
                                                value={announcement?.data?.need}

                                                className="self-center  text-6C6C6C  bg-architect-secondary_text_color bg-opacity-15 border-0 "
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col basis-0 flex-grow">
                                    <div className="flex flex-col items-start gap-2 ">

                                        <Typography className="text-architect-secondary_text_color  text-sm">
                                            {" "}
                                            Type du Bien
                                        </Typography>
                                        <div className="flex flex-row items-center ">

                                            <Typography className="  text-md">
                                                {" "}
                                                {announcement?.data?.house_type}
                                            </Typography>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className=" flex flex-col border-b-[1px] border-dashed "></div>
                            <div className="flex flex-col gap-2 px-6 py-7">
                                <Typography className="text-client-primary text-[16px] font-semibold">
                                    {" "}
                                    Adresse</Typography>
                                <div className="flex flex-row items-center mt-3 pl-1 gap-1  ">

                                    <MapPinIcon className="h-6 w-6 text-architect-secondary_text_color " />
                                    <Typography className="text-architect-font_gris text-[14px]">
                                        {" "}
                                        {announcement?.data?.town}
                                    </Typography>
                                </div>
                            </div>
                            <div className=" flex flex-col border-b-[1px] border-dashed "></div>
                            <div className="flex flex-col gap-2 px-6 py-7">
                                <Typography className="text-client-primary text-[16px] font-semibold">
                                    {" "}
                                    Détails d’exécution
                                </Typography>

                            </div>

                            <div className="flex flex-row mb-5 ml-6  ">
                                <div className="flex flex-col basis-0 flex-grow">
                                    <div className="flex flex-col items-start">

                                        <Typography className=" text-architect-secondary_text_color  text-sm">
                                            {" "}
                                            Date debut
                                        </Typography>
                                        <div className="flex flex-row items-center ">

                                            <Chip
                                                size="sm"
                                                value={new Date(announcement?.data?.created_at).toLocaleDateString()}

                                                color="green"
                                                className="self-center text-green-700  bg-green-300 bg-opacity-15 border-0"
                                            />
                                        </div>

                                    </div>

                                    <div className="flex flex-col items-start  mt-5">
                                        <Typography className=" text-architect-secondary_text_color  text-sm ">
                                            {" "}
                                            Surface totale du terrain
                                        </Typography>
                                        <div className="flex flex-row items-center ">

                                            <Typography className="text-architect-font_gris  text-md">
                                                {" "}
                                                {announcement?.data?.surface_terrain}
                                            </Typography>
                                        </div>
                                    </div>

                                </div>

                                <div className="flex flex-col basis-0 flex-grow">
                                    <div className="flex flex-col items-start  ">

                                        <Typography className="text-architect-secondary_text_color  text-sm">
                                            {" "}
                                            budget maximum
                                        </Typography>
                                        <div className="flex flex-row items-center ">

                                            <Typography className="text-architect-font_gris  text-md">
                                                {" "}
                                                {announcement?.data?.budget}
                                            </Typography>
                                        </div>

                                    </div>

                                    <div className="flex flex-col items-start  mt-7">
                                        <Typography className="text-architect-secondary_text_color  text-sm ">
                                            {" "}
                                            Surface approximative des travaux
                                        </Typography>
                                        <div className="flex flex-row items-center ">

                                            <Typography className="text-architect-font_gris  text-md">
                                                {" "}
                                                {announcement?.data?.surface_travaux}
                                            </Typography>
                                        </div>

                                    </div>
                                </div>

                            </div>

                            <div className="flex flex-col items-start gap-2 mt-2 ml-6">
                                <Typography className="text-architect-secondary_text_color  text-sm ">
                                    {" "}
                                    Plus de details
                                </Typography>
                                <div className=" border-2 border-gray-300 bg-gray-300 px-3 pb-1 rounded-md ">

                                    <Typography className="text-[#1B2534] items-center text-md mt-4">
                                        {announcement?.data?.details}                                    </Typography>
                                </div>
                            </div>

                        </div>
                    </MainCard>}

                    <div className="w-[30%] flex flex-col gap-5">
                        {isLoading ? <MainCard className=" w-max  xl:flex relative self-start flex flex-col  border-gray-400"><NoImageCardSkeleton className="w-max  xl:flex relative self-start flex flex-col  border-gray-400" /></MainCard> : <MainCard className=" w-max  xl:flex relative self-start flex flex-col  border-gray-400">

                            <Typography variant="paragraph" className="text-gray-600 text-xs self-start">Cordonnées client</Typography>


                            <div className="px-">
                                <div className=" gap-6 w-full  md:max-w-[400px] ">

                                    <div className="flex justify-start mt-4 flex-row  gap-2 border-b">
                                        <UserIcon className="text-architect-secondary_text_color h-6 w-6"></UserIcon>                            <div className="self-end">
                                            <Typography
                                                variant="paragraph"
                                                className="font-bold  text-md mb-5 "
                                            >
                                                {announcement?.data?.client?.user.first_name}{" "}{announcement?.data?.client?.user.last_name}</Typography>
                                        </div>
                                    </div>
                                </div>
                                <div className="  mt-4 pr-20 ">
                                    <div className="flex flex-col justify-start mt-4 ">
                                        <div className=" items-start  rounded-md flex  justify-between  flex-row  ">
                                            <div className="flex flex-row items-center p-[8px] gap-3 w-max">
                                                <EnvelopeIcon className="h-6 w-6 text-architect-secondary_text_color " />
                                                <Typography className=" text-md">
                                                    {" "}
                                                    {announcement?.data?.client?.user.email}                                            </Typography>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center p-[8px] gap-3 w-max  ">
                                        <PhoneIcon className="h-6 w-6 text-architect-secondary_text_color " />
                                        <Typography className=" text-md">
                                            {" "}
                                            {announcement?.data?.client?.user.phone_number}                                    </Typography>
                                    </div>

                                </div>
                            </div>
                        </MainCard>}

                    </div>
                </div>
            </div></>)

}

export default annoucDetails;