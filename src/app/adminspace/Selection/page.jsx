"use client";
import DateSelector from "@/components/DatePicker";
import { Card, CardHeader, EyeIcon, Option, Select, Tooltip, Typography } from "@/components/RemoteComponents";
import Table from "@/components/Table";
//import { FaEye } from "react-icons/fa";
//import { HeroIcon } from "@/components/RemoteComponents";
//import Modalaccept from "@/components/modalaccept";
import TableSkeleton from "@/components/TableSkeleton";
import { useFetchData, useProlonger } from "@/services/queries";
import { IconButton } from "@mui/material";

const Page = () => {
  const { data: selections, isLoading } = useFetchData(
    "/archimatch_app/Selection/", "selection"
  );



  const prolongerMutation = useProlonger("", {});

  const handleProlongerdate = async (id, date) => {
    console.log("Selected ID:", id);
    console.log("Selected Date:", date);
    try {
      await prolongerMutation.mutateAsync({
        id: id,
        date: date,
      });
      console.log("Request sent successfully.");
    } catch (error) {
      console.error("Error sending request:", error);
    }
  };


  const columns = [

    {
      accessorKey: "announcement.client.user.first_name",
      header: "Nom client",
      cell: (props) => {
        const firstName = props.row.original.announcement.client.user.first_name;
        const lastName = props.row.original.announcement.client.user.last_name;
        const email = props.row.original.announcement.client.user.email;
        return (<div className="flex flex-col text-start"><Typography className="font-semibold text-black" variant="paragraph">{`${firstName} ${lastName}`}</Typography>
          <Typography className=" text-architect-secondary_text_color" variant="paragraph">{`${email}`}</Typography></div>);
      },
    },
    {
      accessorKey: "architect.user.first_name",
      header: "Architect",
      cell: (props) => {
        const firstName = props.row.original.architect.user.first_name;
        const lastName = props.row.original.architect.user.last_name;
        const email = props.row.original.architect.user.email;
        return (<div className="flex flex-col text-start"><Typography className="font-semibold text-black" variant="paragraph">{`${firstName} ${lastName}`}</Typography>
          <Typography className=" text-architect-secondary_text_color" variant="paragraph">{`${email}`}</Typography></div>);
      },
    },
    {
      accessorKey: "expiration_date",
      header: "Date d'expiration",
      cell: (props) => {
        return <p>{new Date(props.getValue()).toLocaleDateString()}</p>;
      },
    },
    {
      accessorKey: "id",
      header: "Prolonger",
      cell: (props) => {
        const expiration_date = props.row.original.expiration_date;
        const id = props.getValue();

        return (
          <DateSelector
            onChange={(id, date) => handleProlongerdate(id, date)}
            value={expiration_date}
            id={id}
          />
        );
      },
    },
    {
      accessorKey: "id",
      header: "",
      cell: (props) => (
        <Tooltip content="Details Selection">
          <IconButton variant="text">
            <EyeIcon className="h-5 w-5 cursor-pointer" />
          </IconButton>
        </Tooltip>
      ),
    },
  ]




  return (
    <div >
      <div className="w-full mt-10 ml-2 min-w-52 ">
        <div className="justify-items-start ">
          <h2 className="text-[#11abec] font-semibold text-lg  w-full"> Annonces</h2>
          <div className="my-4 flex gap-4  ">

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
                Liste des selections
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                Voir les informations
              </Typography>
            </div>
          </div>
        </CardHeader>
        {isLoading ? <TableSkeleton /> : <Table columns={columns} data={selections.data} />
        }      </Card>
    </div>

  );

}

export default Page;