"use client";
import Table from "@/components/Table";
import { useMemo, useState } from "react";
import { Card, CardHeader, Typography, Option, Select } from "@/components/RemoteComponents";
import { Button } from "@material-tailwind/react";
import { IoIosMail } from "react-icons/io";

const page = () => {
    const data = useMemo(() => [
        {
            "id": 1,
            "Architecte parrain": "Amin Sallemi",
            "email": "Amin@gmail.com",
            "Architecte parrainé": "Zeineb Achour",
            "inscriptions": "1",
            "Jetons gratuits": "10",

        },
        {
            "id": 2,
            "Architecte parrain": "Amin Sallemi",
            "email": "Amin@gmail.com",
            "Architecte parrainé": "Zeineb Achour",
            "inscriptions": "2",
            "Jetons gratuits": "11",


        },

        {
            "id": 3,
            "Architecte parrain": "Amin Sallemi",
            "email": "Amin@gmail.com",
            "Architecte parrainé": "Ahmed Achour",
            "inscriptions": "0",
            "Jetons gratuits": "0",

        },

        {
            "id": 4,
            "Architecte parrain": "Amin Sallemi",
            "email": "Amin@gmail.com",
            "Architecte parrainé": "Zeineb Achour",
            "inscriptions": "1",
            "Jetons gratuits": "10",

        },

        {
            "id": 5,
            "Architecte parrain": "Amin Sallemi",
            "email": "Amin@gmail.com",
            "Architecte parrainé": "Zeineb Achour",
            "inscriptions": "1",
            "Jetons gratuits": "10",


        },

        {
            "id": 6,
            "Architecte parrain": "Amin Sallemi",
            "email": "Amin@gmail.com",
            "Architecte parrainé": "Zeineb Achour",
            "inscriptions": "1",
            "Jetons gratuits": "0",

        },
        {
            "id": 7,
            "Architecte parrain": "Amin Sallemi",
            "email": "Amin@gmail.com",
            "Architecte parrainé": "Marwen Borcheni",
            "inscriptions": "0",
            "Jetons gratuits": "0",

        },
        {
            "id": 8,
            "Architecte parrain": "Amin Sallemi",
            "email": "Amin@gmail.com",
            "Architecte parrainé": "Zeineb Achour",
            "inscriptions": "1",
            "Jetons gratuits": "0",

        },
        {
            "id": 9,
            "Architecte parrain": "Amin Sallemi",
            "email": "Amin@gmail.com",
            "Architecte parrainé": "Zeineb Achour",
            "inscriptions": "1",
            "Jetons gratuits": "10",

        },
    ], []);
    const columns = [


        {
            accessorKey: "Architecte parrain",
            header: "Architecte parrain",
            cell: (props) => <p>{props.getValue()}</p>,
        },
        {
            accessorKey: "email",
            header: "Email",
            cell: (props) => <p>{props.getValue()}</p>,
        },
        {
            accessorKey: "Architecte parrainé",
            header: "Architecte parrainé",
            cell: (props) => <p>{props.getValue()}</p>,

        },


        {
            accessorKey: "inscriptions",
            header: "Inscriptions",
            cell: (props) => <p>{props.getValue()}</p>,

        },
        {
            accessorKey: "Jetons gratuits",
            header: "Jetons gratuits",
            cell: (props) => <p>{props.getValue()}</p>,

        },


        {
            accessorKey: "Relance",
            header: "Relance",
            cell: () => (
                <>
                    <Button
                        className=" bg-[#11ABEC] text-white px-2 py-2  rounded-lg mr-2 drop-shadow-lg text-base">
                        Relancer
                    </Button>
                </>
            ),

        },

        {
            accessorKey: "listIcon",
            header: "",
            cell: () => <IoIosMail className="cursor-pointer size-5" />,
        },]


    return (
        <div>
            <h2 className="text-[#11abec] font-semibold text-lg w-full mt-8"> Parrainage </h2>
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

        </div>)

}

export default page