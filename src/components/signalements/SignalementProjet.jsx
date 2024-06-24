"use client";
import Table from "@/components/Table";
import { useMemo, useState } from "react";
import { Card, CardHeader, Typography, Option, Select, EyeIcon } from "@/components/RemoteComponents";
import { Button } from "@material-tailwind/react";
import PopupDescProjet from "@/components/signalements/PopupDescProjet";
import { useRouter } from 'next/navigation';

const SignalementProjet = () => {
    const router = useRouter();

    const data = useMemo(() => [
        {
            "id": 1,
            "nomEtPrenom": "Amin Sallemi",
            "email": "Amin@gmail.com",
            "Nombre signalement": "1",
            "Status": "Traité",

        },
        {
            "id": 2,
            "nomEtPrenom": "Amin Sallemi",
            "email": "Amin@gmail.com",
            "Nombre signalement": "3",
            "Status": "Non traité",

        },

        {
            "id": 3,
            "nomEtPrenom": "Amin Sallemi",
            "email": "Amin@gmail.com",
            "Nombre signalement": "2",
            "Status": "Traité",

        },

        {
            "id": 4,
            "nomEtPrenom": "Amin Sallemi",
            "email": "Amin@gmail.com",
            "Nombre signalement": "1",
            "Status": "Traité",

        },

        {
            "id": 5,
            "nomEtPrenom": "Amin Sallemi",
            "email": "Amin@gmail.com",
            "Nombre signalement": "1",
            "Status": "Non traité",

        },

        {
            "id": 6,
            "nomEtPrenom": "Amin Sallemi",
            "email": "Amin@gmail.com",
            "Nombre signalement": "2",
            "Status": "Traité",

        },
        {
            "id": 7,
            "nomEtPrenom": "Amin Sallemi",
            "email": "Amin@gmail.com",
            "Nombre signalement": "1",
            "Status": "Traité",

        },
        {
            "id": 8,
            "nomEtPrenom": "Amin Sallemi",
            "email": "Amin@gmail.com",
            "Nombre signalement": "3",
            "Status": "Traité",

        },
        {
            "id": 9,
            "nomEtPrenom": "Amin Sallemi",
            "email": "Amin@gmail.com",
            "Nombre signalement": "1",
            "Status": "Non traité",

        },
    ], []);
    const columns = [


        {
            accessorKey: "nomEtPrenom",
            header: "Nom Et Prenom",
            cell: (props) => <p>{props.getValue()}</p>,
        },
        {
            accessorKey: "email",
            header: "Email",
            cell: (props) => <p>{props.getValue()}</p>,
        },
        {
            accessorKey: "Nombre signalement",
            header: "Nombre signalement",
            cell: (props) => <p>{props.getValue()}</p>,

        },


        {
            accessorKey: "Status",
            header: "Status",
            cell: (props) => {
                const stSignalement = props.getValue();
                return (
                    <p className={stSignalement === "Traité" ? " text-black" : "text-[#FC5C63]"}>
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
            accessorKey: "listIcon",
            header: "",
            cell: () => <EyeIcon onClick={() => router.push('/adminspace/Signalement/1')} className="cursor-pointer size-5" />,
        },]

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
                <Table columns={columns} data={data} />
            </Card>
            {openModalDes && <PopupDescProjet openModalDes onclose={() => setopenModalDes(false)}
        onConfirm={handleConfirmModalAccept} />}
















        </div>
    )
}

export default SignalementProjet