"use client";
import { Card, CardHeader, EyeIcon, IconButton, Option, Select, Tooltip, Typography } from "@/components/RemoteComponents";
import Table from "@/components/Table";
import TableSkeleton from "@/components/TableSkeleton";
import { useFetchData } from "@/services/queries";
import { useRouter } from "next/navigation";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { TbFlag3Filled } from "react-icons/tb";

const page = () => {
    const router = useRouter()



    const handledetails = (id) => {
        router.push(`/adminspace/Announcements/${id}`)

    }

    const { data: Announcement, isLoading, error } = useFetchData("/archimatch_app/announcement/", "announcements")
    // console.log(Announcement)
    const columns = [


        {
            accessorKey: "client.user.first_name",
            header: "Nom client",
            id: "client_name",
            cell: (props) => {
                const firstName = props.row.original.client.user.first_name;
                const lastName = props.row.original.client.user.last_name;
                const email = props.row.original.client.user.email;
                return (<div className="flex flex-col text-start"><Typography className="font-semibold text-black" variant="paragraph">{`${firstName} ${lastName}`}</Typography>
                    <Typography className=" text-architect-secondary_text_color" variant="paragraph">{`${email}`}</Typography></div>);
            },
        },


        {
            accessorKey: "architect_type.display",
            header: "Type d’architete",
            cell: (props) => <Typography className=" text-architect-secondary_text_color" variant="paragraph">{props.getValue()}</Typography>

        },

        {
            accessorKey: "updated_at",
            header: "Date",
            cell: (props) => <Typography className=" text-architect-secondary_text_color" variant="paragraph">{new Date(props.getValue()).toLocaleDateString()}</Typography>,

        },
        {
            accessorKey: "selection_count",
            header: "Sélection",
            cell: (props) => <Typography className={props.getValue() ? "text-architect-secondary_text_color" : "text-architect-primary"} variant="paragraph">{props.getValue() ? (props.getValue() + " sélection") : "Pas de sélection"}</Typography>,

        },
        {
            accessorKey: "id",
            header: "Acceptation",
            cell: (props) => (
                <RiCheckboxCircleFill className=" text-green-600 size-5" />
            ),

        },

        {
            accessorKey: "id",
            header: "Flag",
            cell: () => <TbFlag3Filled className="cursor-pointer size-5 text-red-700" />,
        },


        {
            accessorKey: "id",
            header: "",
            cell: (props) => <Tooltip content="Details Annonce"><IconButton variant="text" onClick={() => {
                console.log(props.getValue())
                handledetails(props.getValue())
            }}><EyeIcon className="cursor-pointer size-5" />
            </IconButton></Tooltip>,
        },
    ]

    if (error) {
        return (
            <div className="flex mt-20 justify-center items-center h-full">
                Error: {error.message}
            </div>
        );
    }
    return (
        <div>
            <Typography className="text-client-primary font-semibold text-xl  w-full">Annonces</Typography>

            <div className="mt-4 flex gap-4 justify-items-start ml-2   ">

                <div className="flex flex-col  w-72">
                    <label className="text-lg  text-[#263238]    font-semibold">
                        Filtre
                    </label>
                    <Select variant="outlined" label="Date"  >
                        <Option value="date">date</Option>
                        <Option value="date">date</Option>
                    </Select>
                </div>
                <div className="flex flex-col  w-72">
                    <label className="text-lg  text-[#263238]    font-semibold">
                        Filtre
                    </label>
                    <Select className="" label="Acceptation"  >
                        <Option value="P.réussi">P.réussi</Option>
                        <Option value="P.refus">P.refus</Option>

                    </Select>
                </div>
                <div className="flex flex-col  w-72">
                    <label className="text-lg  text-[#263238]    font-semibold">
                        Filtre
                    </label>
                    <Select label="Sélection"  >
                        <Option value="P.réussi">P.réussi</Option>
                        <Option value="P.refus">P.refus</Option>

                    </Select>
                </div>
            </div>
            <Card className="mt-5 border ml-2 shadow-none  ">
                <CardHeader floated={false} shadow={false} className="rounded-none">
                    <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
                        <div>
                            <Typography variant="h5" color="blue-gray">
                                Liste des Annonces
                            </Typography>
                            <Typography color="gray" className="mt-1 font-normal">
                                Voir les informations
                            </Typography>
                        </div>
                    </div>
                </CardHeader>
                {isLoading ? (
                    <TableSkeleton />
                ) : (
                    <Table columns={columns} data={Announcement?.data} />
                )}

            </Card>



        </div>
    )

}

export default page;