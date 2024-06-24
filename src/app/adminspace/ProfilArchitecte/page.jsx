"use client";
import { Card, CardHeader, Option, Select, Typography } from "@/components/RemoteComponents";
import Table from "@/components/Table";
import TableSkeleton from "@/components/TableSkeleton";
import Modalvalidation from "@/components/modalValidation";
import { useFetchData } from "@/services/queries";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";


const page = () => {

  const { data: architects, isLoading } = useFetchData('/archimatch_app/architect/', "archiects")
  const columns = [

    {
      accessorKey: "user.first_name",
      header: "Nom client",
      id: "client_name",
      cell: (props) => {
        const firstName = props.row.original.user.first_name;
        const lastName = props.row.original.user.last_name;
        const email = props.row.original.user.email;
        return (<div className="flex flex-col text-start"><Typography className="font-semibold text-black" variant="paragraph">{`${firstName} ${lastName}`}</Typography>
          <Typography className=" text-architect-secondary_text_color" variant="paragraph">{`${email}`}</Typography></div>);
      },
    },
    {
      accessorKey: "created_at",
      header: "Date d'inscription",
      cell: (props) => <Typography className=" text-architect-secondary_text_color" variant="paragraph">{new Date(props.getValue()).toLocaleDateString()}</Typography>

    },
    {
      accessorKey: "shared",
      header: "Publication vitrine",
      cell: (props) => {
        const pubvitrine = props.getValue();
        return (
          <p className={pubvitrine ? " text-black" : "text-[#B71D18]"}>
            {pubvitrine ? "Publié" : "A réviser"}
          </p>
        );
      },
    },
    {
      accessorKey: "",
      header: "Statut",
      cell: () => <p>**</p>,
    },
    {
      accessorKey: "listIcon",
      header: "",
      cell: () => <BsThreeDots className="cursor-pointer text-black size-5 " />,
    }


  ]



  const [openModalvalidation, setOpenModalvalidation] = useState(false);


  return (
    <div>
      <h2 className="text-[#11abec] font-semibold text-lg w-full mt-8"> Profil architecte </h2>
      <div className="mt-4 flex gap-4 justify-items-start ml-2   ">
        <div className="flex flex-col  w-72">
          <label className="text-lg  text-[#263238]    font-semibold">
            Filtre
          </label>
          <Select label="Plan d'abonnement/Pack jetons"  >
            <Option value="Plan Premium">Plan Premium</Option>
            <Option value="Plan Advanced">Plan Advanced</Option>
          </Select>
        </div>
        <div className="flex flex-col  w-72">
          <label className="text-lg  text-[#263238]    font-semibold">
            Filtre
          </label>
          <Select label="Status"  >
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
                Liste des archiectes
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                Voir les informations
              </Typography>
            </div>
          </div>
        </CardHeader>
        {isLoading ? <TableSkeleton /> : <Table columns={columns} data={architects.data} />
        }      </Card>
      {openModalvalidation && < Modalvalidation openModalvalidation onclose={() => setOpenModalvalidation(false)} />}
    </div>
  )
}

export default page