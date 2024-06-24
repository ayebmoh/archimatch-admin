"use client";
import {
  Button,
  Card,
  CardHeader,
  IconButton,
  PencilIcon,
  Tooltip,
  TrashIcon,
  Typography
} from "@/components/RemoteComponents";
import { useFetchData } from "@/services/queries";
import { useState } from "react";
//components
import TableSkeleton from "@/components/TableSkeleton";
import ModiForm from "../Popups//Acces/ModifyFrom";
import AddForm from "../Popups/Acces/AddForm";
import SuppAdmin from "../Popups/Acces/Delete";
import List from "./List";

function AdminTab() {
  const [admin, setadmin] = useState(null);
  const [error, setError] = useState(null);
  const [pop, setpop] = useState(false);
  const [modi, setmodi] = useState(false);
  const [deletepop, setdeletepop] = useState(false);


  const { data: admins, isLoading } = useFetchData(
    "/archimatch_app/admin/",
    "admins",
  );
  const columns = [
    {
      accessorKey: "user.email",
      header: "Email",
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: "user.first_name",
      header: "Nom",
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: "user.last_name",
      header: "Prenom",
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: "rights",
      header: "Droit",
      cell: (props) => (
        <div className=" flex justify-start items-start flex-wrap">
          {props.getValue().map((right) => (
            <div key={right.display} className="w-4 h-4 mr-2 ">
              {right.display && (
                <div
                  className={` ${(() => {
                    switch (right.display) {
                      case "annouce":
                        return "bg-blue-500  border-gray-500 w-4 h-4 rounded-full border-2";
                      case "demande_architecte":
                        return "bg-green-500 border-gray-500 w-4 h-4 rounded-full border-2";
                      case "paiement":
                        return "bg-teal-500 border-gray-500 w-4 h-4 rounded-full border-2";
                      case "profil_architecte":
                        return "bg-green-700 border-gray-500 w-4 h-4 rounded-full border-2";
                      case "blog":
                        return "bg-red-400 border-gray-500 w-4 h-4 rounded-full border-2";
                      case "support_client":
                        return "bg-amber-500 border-gray-500 w-4 h-4 rounded-full border-2";
                      case "parrainage":
                        return "bg-indigo-500 border-gray-500 w-4 h-4 rounded-full border-2";
                      case "reunion":
                        return "bg-pink-500 border-gray-500 w-4 h-4 rounded-full border-2";
                      case "signalement":
                        return "bg-brown-500 border-gray-500 w-4 h-4 rounded-full border-2";
                      case "suivi":
                        return "bg-orange-500 border-gray-500 w-4 h-4 rounded-full border-2";
                    }
                  })()}`}
                />
              )}
            </div>
          ))}
        </div>
      ),
    },
    {
      accessorKey: "id",
      header: "",
      cell: (props) => (
        <div className=" flex items-center gap-3 flex-row">
          <Tooltip content="Modifier Admin">
            <IconButton

              onClick={() => {
                setmodi(true);
                const targetId = props.getValue();
                const ad = admins.data.find(admin => admin.id === targetId);
                setadmin(ad)
                console.log(ad)
                console.log(admin)
              }}

              variant="text"
            >

              <PencilIcon className="h-4 w-4" />
            </IconButton>
          </Tooltip>
          <Tooltip content="Supprimer Admin">
            <IconButton onClick={() => {
              setdeletepop(true);
              const targetId = props.getValue();
              const ad = admins.data.find(admin => admin.id === targetId);
              setadmin(ad)
              console.log(ad)
              console.log(admin)
            }} variant="text">
              <TrashIcon className="h-4 w-4" />

            </IconButton>
          </Tooltip>
        </div>
      ),
    },
  ];



  if (error) {
    return (
      <div className="flex mt-20 justify-center items-center h-full">
        Error: {error.message}
      </div>
    );
  }

  return (
    <Card className="mt-3 w-full border border-gray-4 shadow-lg">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Typography variant="h5" color="blue-gray">
              List des Admins{" "}
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Voir les informations{" "}
            </Typography>
          </div>
          <Button
            onClick={() => {
              setpop(true);
            }}
            className="flex items-center w-20"
            size="sm"
          >
            Ajouter
          </Button>
        </div>
      </CardHeader>
      {isLoading ? (
        <TableSkeleton />
      ) : <List data={admins.data} columns={columns} />}
      {pop && <AddForm closemod={setpop} />}
      {modi && <ModiForm closemodi={setmodi} currentdata={admin} />}
      {deletepop && <SuppAdmin closesup={setdeletepop} id={admin.id} />}
    </Card>
  );
}

export default AdminTab;