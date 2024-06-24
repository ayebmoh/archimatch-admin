"use client";
import Table from "@/components/Table";

import { Card, CardHeader, EyeIcon, Option, Select, Typography } from "@/components/RemoteComponents";
import ToggleSwitch from "@/components/ToggleSwitch";
import { Button,Switch } from "@material-tailwind/react";
import { useMemo, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaClipboardList } from "react-icons/fa";
const PaiementEnLigne = () => {

  const data = useMemo(() => [

    {
      "id": 1,
      "nomEtPrenom": "Amin Sallemi",
      "email": "Amin@gmail.com",
      "Nom du plan": "Premium",
      "Datecréation": "01 Nov 23",
      "Status": "P.refus",
    },
    {
      "id": 2,
      "nomEtPrenom": "Amin Sallemi",
      "email": "Amin@gmail.com",
      "Nom du plan": "Advanced",
      "Datecréation": "01 Nov 23",
      "Status": "P.refus",
    },

    {
      "nomEtPrenom": "Amin Sallemi",
      "email": "Amin@gmail.com",
      "Nom du plan": "Premium",
      "Datecréation": "01 Nov 23",
      "Status": "P.réussi",
    },

    {
      "id": 4,
      "nomEtPrenom": "Amin Sallemi",
      "email": "Amin@gmail.com",
      "Nom du plan": "Advanced",
      "Datecréation": "01 Nov 23",
      "Status": "P.réussi",
    },

    {
      "id": 5,
      "nomEtPrenom": "Amin Sallemi",
      "email": "Amin@gmail.com",
      "Nom du plan": "Premium",
      "Datecréation": "01 Nov 23",
      "Status": "P.réussi",
    },

    {
      "id": 7,
      "nomEtPrenom": "Amin Sallemi",
      "email": "Amin@gmail.com",
      "Nom du plan": "Advanced",
      "Datecréation": "01 Nov 23",
      "Status": "P.réussi",
    },
    {
      "id": 8,
      "nomEtPrenom": "Amin Sallemi",
      "email": "Amin@gmail.com",
      "Nom du plan": "Premium",
      "Datecréation": "01 Nov 23",
      "Status": "P.réussi",
    },
    {
      "id": 9,
      "nomEtPrenom": "ahle mnoamen",
      "email": "Amin@gmail.com",
      "Nom du plan": "Premium",
      "Datecréation": "01 Nov 23",
      "Status": "P.réussi",
    },
    {
      "id": 6,
      "nomEtPrenom": "Amin Sallemi",
      "email": "Amin@gmail.com",
      "Nom du plan": "Premium",
      "Datecréation": "01 Nov 23",
      "Status": "P.réussi",
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
      accessorKey: "Nom du plan",
      header: "Nom du plan",
      cell: (props) => {
        const planName = props.getValue();
        return (
          <p className={planName === "Advanced" ? " text-[#D2B106]" : "text-[#FC5C63]"}>
            {planName}
          </p>
        );
      },
    },

    {
      accessorKey: "Datecréation",
      header: "Date de création",
      cell: (props) => <p>{props.getValue()}</p>,

    },
    {
      accessorKey: "Status",
      header: "Status",
      cell: (props) => <p>{props.getValue()}</p>,

    },


    {
      accessorKey: "Activation",
      header: "Activation",
      cell: () => <Switch color="green"/>
    },
    {
      accessorKey: "Relance",
      header: "Relance",
      cell: () => (
        <>
          <Button
            className=" bg-[#11ABEC] text-white px-2 py-2  rounded-lg mr-2 drop-shadow-lg text-base">
            Relance
          </Button>
        </>
      ),

    },

    {
      accessorKey: "listIcon",
      header: "",
      cell: () => <EyeIcon className="cursor-pointer size-5" />,
    },
    {
      accessorKey: "listIcon",
      header: "",
      cell: () => <FaClipboardList className="cursor-pointer text-black size-5 " />,
    },
    {
      accessorKey: "listIcon",
      header: "",
      cell: () => <BsThreeDots className="cursor-pointer text-black size-5" />,
    }];
  const [filterText, setFilterText] = useState("");
  const filterselectvalue = (filtervalue) => {
    setFilterText(filtervalue);
  };

  const filterdataSelect = data.filter((cell) => {
    if (filterText === "Plan Premium") {
      return cell["Nom du plan"] === "Premium";
    } else if (filterText === "Plan Advanced") {
      return cell["Nom du plan"] === "Advanced";
    } else if (filterText === "P.réussi") {
      return cell["Status"] === "P.réussi";
    }
    else if (filterText === "P.refus") {
      return cell["Status"] === "P.refus";
    } else if (filterText === "P.refus" && filterText === "Plan Premium") {
      return cell["Status"] === "P.refus" && cell["Nom du plan"] ==="Premium";
  
    }else {
      return true;
    }
  });
  const Onfilterchange = (selectedValue) => {
    filterselectvalue(selectedValue);
  };

return (
    <div>
      <div className="mt-4 flex gap-4 justify-items-start ml-2   ">
        <div className="flex flex-col   w-72">
          <label className="text-lg  text-[#263238]    font-semibold">
            Filtre
          </label>
          <Select label="Plan d'abonnement/Pack jetons" onChange={(selectedValue) => Onfilterchange(selectedValue)} >
            <Option value="Plan Premium">Plan Premium</Option>
            <Option value="Plan Advanced">Plan Advanced</Option>
          </Select>
        </div>
        <div className="flex flex-col  w-72">
          <label className="text-lg  text-[#263238]    font-semibold">
            Filtre
          </label>
          <Select label="Status" onChange={(selectedValue) => Onfilterchange(selectedValue)} >
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
        <Table columns={columns} data={filterdataSelect} />
      </Card>
    </div>
  )
}

export default PaiementEnLigne