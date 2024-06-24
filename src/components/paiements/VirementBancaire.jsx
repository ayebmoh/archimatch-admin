"use client";
import Table from "@/components/Table";
import { useState } from "react";

import {
  Card,
  CardHeader,
  EyeIcon,
  Option,
  Select,
  Typography,
} from "@/components/RemoteComponents";
import { useActivateSub, useFetchData, useRelance } from "@/services/queries";
import { Button } from "@material-tailwind/react";
import { BsThreeDots } from "react-icons/bs";
import { FaClipboardList } from "react-icons/fa";
import TableSkeleton from "../TableSkeleton";
import ToggleSwitch from "../ToggleSwitch";
const VirementBancaire = () => {
  const [activationStates, setActivationStates] = useState({});
  const updateactivationMutation = useActivateSub("", {});

  const handleToggleChange = async (id, arch_id, subName, checked) => {
    console.log("id", id, "arch_id:", arch_id, "sub_name:", subName);
    try {
      if (checked) {
        await updateactivationMutation.mutateAsync({
          id: arch_id,
          sub_name: subName,
          req_id: id
        });
      } else {
        await updateactivationMutation.mutateAsync({
          id: arch_id,
          sub_name: subName,
          req_id: id
        });
      }

      setActivationStates((prevState) => ({
        ...prevState,
        [id]: checked,
      }));
    } catch (error) {
      console.error("Error updating subscription:", error);
    }
  };

  const { data: requests, isLoading } = useFetchData(
    "/archimatch_app/subscriptionrequest/",
    "requests",
  );

  const RelacenMutation = useRelance("", {});

  const handleRelance = (values) => {
    RelacenMutation.mutateAsync({
      email: values,
    });
  };

  const columns = [
    {
      accessorKey: "first_name",
      header: "Nom",
      cell: (props) => <p>{props.getValue()}</p>,
    },

    {
      accessorKey: "last_name",
      header: "Prenom",
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: "email",
      header: "Email",
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: "sub_name",
      header: "Nom du plan",
      cell: (props) => {
        const planName = props.getValue();
        return (
          <p
            className={
              planName === "Advanced" ? " text-[#D2B106]" : "text-[#FC5C63]"
            }
          >
            {planName}
          </p>
        );
      },
    },

    {
      accessorKey: "request_date",
      header: "Date de création",
      cell: (props) => <p>{new Date(props.getValue()).toDateString()}</p>,
    },
    {
      accessorKey: "arch_id",
      header: "Activation",
      cell: (props) =>
        <ToggleSwitch
          id={props.row.id} // Utilisez l'id de la ligne comme identifiant du ToggleSwitch
          checked={activationStates[props.row.id] || false} // Utilisez l'état de la ligne correspondante dans l'état local
          onChange={(checked) => handleToggleChange(props.row.original.id, props.getValue(), props.row.original.sub_name, checked)} // Gérez le changement d'état
        />

    },
    {
      accessorKey: "email",
      header: "Relance",
      cell: (props) => (
        <>
          <Button
            onClick={() => handleRelance(props.getValue())}
            className=" bg-[#11ABEC] text-white px-2 py-2  rounded-lg mr-2 drop-shadow-lg text-base"
          >
            Relance
          </Button>
        </>
      ),
    },

    {
      accessorKey: "id",
      header: "",
      cell: () => <EyeIcon className="cursor-pointer size-5" />,
    },
    {
      accessorKey: "id",
      header: "",
      cell: () => (
        <FaClipboardList className="cursor-pointer text-black size-5 " />
      ),
    },
    {
      accessorKey: "id",
      header: "",
      cell: () => <BsThreeDots className="cursor-pointer text-black size-5 " />,
    },
  ];


  return (
    <div>
      <div className="mt-4 flex gap-4 justify-items-start ml-2   ">
        <div className="flex flex-col  w-72">
          <label className="text-lg  text-[#263238]    font-semibold">
            Filtre
          </label>
          <Select label="Plan d'abonnement/Pack jetons">
            <Option value="Plan Premium">Plan Premium</Option>
            <Option value="Plan Advanced">Plan Advanced</Option>
          </Select>
        </div>
        <div className="flex flex-col  w-72">
          <label className="text-lg  text-[#263238]    font-semibold">
            Filtre
          </label>
          <Select label="Status">
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
                Demande d’abonnement
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                Voir les informations
              </Typography>
            </div>
          </div>
        </CardHeader>
        {isLoading ? (
          <TableSkeleton />
        ) : <Table columns={columns} data={requests.data} />}
      </Card>
    </div>
  );
}


export default VirementBancaire;
