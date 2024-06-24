"use client";
import { Card, CardHeader, EyeIcon, Option, Select, Typography } from "@/components/RemoteComponents";
import Table from "@/components/Table";
import { Button } from "@material-tailwind/react";
import { useState } from "react";
import { FaClipboardList } from "react-icons/fa";
//import { FaEye } from "react-icons/fa";
//import { HeroIcon } from "@/components/RemoteComponents";
import Modalca from "@/components/modalcanc";
//import Modalaccept from "@/components/modalaccept";
import TableSkeleton from "@/components/TableSkeleton";
import PopupAccpt from '@/components/popupAccpt';
import Respnsbmodal from "@/components/respnsbmodal";
import { useFetchData } from "@/services/queries";

const Page = () => {
  const { data: requests, isLoading } = useFetchData(
    "/archimatch_app/architectRequest/", "architect_account_requests"
  );
  const [activeRequest, setActiveRequest] = useState()


  const columns = [

    {
      accessorKey: "email",
      header: "Email",
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: "meeting_date",
      header: "Date De Reunion",
      cell: (props) => <p>{new Date(props.getValue()).toDateString()}</p>,
    },

    {
      accessorKey: "status",
      header: "Status",
      cell: (props) => <p>{props.getValue()}</p>,

    },
    {
      accessorKey: "responsble",
      header: "Responsable",
      cell: () => (
        <>
          <Button onClick={() => setopenModalResp(true)}
            className=" bg-[#11ABEC] text-white px-2 py-2  rounded-lg mr-2 drop-shadow-lg text-base">
            Attribuer
          </Button>
        </>
      ),

    },
    {
      accessorKey: "id",
      header: "Descision",
      cell: (props) => (
        <>

          <Button onClick={() => { setActiveRequest(props.getValue()); setOpenModalAccept(true) }}
            disabled={props.row.original.status === "Accepted" || props.row.original.status === "Refused"}
            className=" min-w-20    bg-[#16B364] text-white px-2 py-2 w-[30%] rounded-lg mr-2 drop-shadow-lg text-base">
            Accepter
          </Button>
          <Button onClick={() => { setActiveRequest(props.getValue()); setOpenModalCa(true) }}
            disabled={props.row.original.status === "Accepted" || props.row.original.status === "Refused"}

            className=" min-w-20 bg-[#B71D18] text-white px-2 py-2 w-[30%] rounded-lg mr-2 drop-shadow-lg text-base">
            Réfuser
          </Button>
        </>
      ),
    },
    {
      accessorKey: "listIcon",
      header: "",
      cell: () => <EyeIcon className="cursor-pointer size-5" onClick={() => setopenModalinfoArchi(true)} />,
    },
    {
      accessorKey: "listIcon",
      header: "",
      cell: () => <FaClipboardList className="cursor-pointer text-black size-5 " />,
    }

  ]
  const [openModalCa, setOpenModalCa] = useState(false);
  const [openModalAccept, setOpenModalAccept] = useState(false);
  const [openModalResp, setopenModalResp] = useState(false);
  const [openModalinfoArchi, setopenModalinfoArchi] = useState(false);
  //const [selectedVariables, setSelectedVariables] = useState({});

  const handleConfirmModalAccept = () => {
    // Handle the confirmation logic with the selected variables
    //console.log('Confirmed with selected variables:', selectedVariables);
    setOpenModalAccept(false);
    setOpenModalCa(false);
    setopenModalResp(false);

    // Close the modal after confirmation
  };

  return (
    <div >
      <div className="w-full mt-10 ml-2 min-w-52 ">
        <div className="justify-items-start ">
          <h2 className="text-[#11abec] font-semibold text-lg  w-full"> Demandes Architectes</h2>
          <div className="my-4 flex gap-4  ">
            <div className="flex flex-col   w-72">
              <label className="text-lg  text-[#263238]    font-semibold">
                Filtre
              </label>
              <Select label="Statuts" >
                <Option>Réfusé</Option>
                <Option>Accepté</Option>
              </Select>
            </div>
            <div className="flex flex-col  w-72">
              <label className="text-lg  text-[#263238]    font-semibold">
                Filtre
              </label>
              <Select label="Responsables" >
                <Option>Responsable1</Option>
                <Option>Responsable2</Option>
              </Select>
            </div>
          </div>
        </div>
      </div>

      <Card className="mt-5 border ml-2 shadow-none  ">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <Typography variant="h5" color="blue-gray">
                Liste des demandes
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                Voir les informations
              </Typography>
            </div>
          </div>
        </CardHeader>
        {isLoading ? <TableSkeleton /> : <Table columns={columns} data={requests.data} />
        }      </Card>
      {openModalCa && <Modalca openModalCa onclose={() => setOpenModalCa(false)} onConfirm={handleConfirmModalAccept} activeRequest={activeRequest} />}
      {openModalAccept && <PopupAccpt openModalAccept onclose={() => setOpenModalAccept(false)} activeRequest={activeRequest}
        onConfirm={handleConfirmModalAccept}
      />}
      {openModalResp && <Respnsbmodal openModalResp onclose={() => setopenModalResp(false)}
        onConfirm={handleConfirmModalAccept} />}
    </div>

  );

}

export default Page;