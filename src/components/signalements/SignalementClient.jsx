"use client";
import { Card, CardHeader, EyeIcon, IconButton, Option, Select, Tooltip, Typography } from "@/components/RemoteComponents";
import Table from "@/components/Table";
import PopupDesc from "@/components/signalements/popupDesc";
import { useFetchData } from "@/services/queries";
import { Button } from "@material-tailwind/react";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import TableSkeleton from "../TableSkeleton";

const SignalementClient = () => {
    const router = useRouter();
    const { data: reports, isLoading } = useFetchData('/archimatch_app/admin/client_reports/', "clientreports")

    const handledetails = (id) => {
        // router.push(`/adminspace/Signalement/${id}`)
    }
    const columns = [

        {
            accessorKey: "client.user.first_name",
            header: "Nom et prénom",
            cell: (props) => {
                const { client } = props.row.original;
                const firstName = client.user.first_name;
                const lastName = client.user.last_name;
                const email = client.user.email;
                return (
                    <div className="flex flex-col text-start">
                        <Typography className="font-semibold text-black" variant="paragraph">{`${firstName} ${lastName}`}</Typography>
                        <Typography className="text-architect-secondary_text_color" variant="paragraph">{`${email}`}</Typography>
                    </div>
                );
            }
        },
        {
            accessorKey: "rep_count",
            header: "Nombre  signalement",
            cell: (props) => <Typography variant="h6">{props.getValue()}</Typography>

        },
        {
            accessorKey: "status",
            header: "Status",
            cell: (props) => {
                const stSignalement = props.getValue();
                return (
                    <p className={stSignalement === "traité" ? " text-black" : "text-[#FC5C63]"}>
                        {stSignalement}
                    </p>
                );
            },

        },
        {
            accessorKey: "Action",
            header: "Action",
            cell: () => (
                <>
                    <Button onClick={() => setopenModalDes(true)}
                        className=" bg-[#11ABEC] text-white px-2 py-2  rounded-lg mr-2 drop-shadow-lg text-base">
                        Décision
                    </Button>
                </>
            ),

        },
        {
            accessorKey: "id",
            header: "",
            cell: (props) => <Tooltip content="Descriptions"><IconButton variant="text" onClick={() => {
                console.log(props.getValue())
                handledetails(props.getValue())
            }}><EyeIcon className="cursor-pointer size-5" />
            </IconButton></Tooltip>,
        }, ,]

    const [openModalDes, setopenModalDes] = useState(false);
    const handleConfirmModalAccept = () => {
        setopenModalDes(false);

        // Close the modal after confirmation
    };

    return (
        <div>
            <div className="flex flex-col mt-8 w-72">
                <label className="text-lg  text-[#263238] font-semibold">
                    Filtre
                </label>
                <Select label="Statut"  >
                    <Option value="Traité">Traité</Option>
                    <Option value="Non traité">Non traité</Option>
                </Select>
            </div>
            <Card className="mt-5 border ml-2 shadow-none  ">
                <CardHeader floated={false} shadow={false} className="rounded-none">
                    <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
                        <div>
                            <Typography variant="h5" color="blue-gray">
                                Liste des signalements
                            </Typography>
                            <Typography color="gray" className="mt-1 font-normal">
                                Voir les informations
                            </Typography>
                        </div>
                    </div>
                </CardHeader>
                {isLoading ? <TableSkeleton /> : <Table columns={columns} data={reports.data.clientreports} />
                }            </Card>
            {openModalDes && <PopupDesc openModalDes onclose={() => setopenModalDes(false)}
                onConfirm={handleConfirmModalAccept} />}
















        </div>
    )
}

export default SignalementClient