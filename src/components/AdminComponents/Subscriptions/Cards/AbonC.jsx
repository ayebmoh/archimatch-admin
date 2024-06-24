import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CheckIcon,
  EyeIcon,
  GiftIcon,
  IconButton,
  PencilIcon,
  Tooltip,
  TrashIcon,
  Typography, XMarkIcon
} from "@/components/RemoteComponents";
import { useState } from "react";
import ModPack from "../../../../app/adminspace/Abonnements/Modify";
import SuppPlan from "../../../../app/adminspace/Abonnements/Suppr";
import Visualiser from "../../../../app/adminspace/Abonnements/Visual";
const Abonnement = ({ data }) => {
  const [vis, setvis] = useState(false);
  const [mod, setmod] = useState(false);
  const [sup, setsup] = useState(false);

  return (
    <Card
      variant="gradient"
      className=" mb-4 border bg-gradient-to-br  w-full max-w-[18rem] p-8"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 mb-8 rounded-none border-b border-gray-300 pb-8 text-center"
      >
        {" "}
        <div className="flex flex-row justify-center items-center mb-8 gap-1">{data.active == true
          ? <CheckIcon className=" text-green-500 h-5 w-5" />

          : <XMarkIcon className="text-red-500 h-5 w-5" />
        }
          <h5 variant="h5" className="  font-bold uppercase 
          ">
            {" "}
            Active
          </h5>
        </div>
        <Typography
          variant="h4"

          className="text-client-primary font-normal uppercase"
        >
          {data.sub_name}
        </Typography>
        <Typography
          variant="h1"
          className="text-black mt-6 flex justify-center gap-1 text-5xl font-normal"
        >
          <span className="mt-2 text-3xl">{data.price}</span>{" "}
          <span className="self-end  text-xl">dt</span>
          <span className="self-end text-gray-500 text-sm">/mois</span>
        </Typography>
      </CardHeader>
      <CardBody className="p-0">
        <ul className="flex flex-col ">

          <li className="flex flex-row items-center gap-3">
            <GiftIcon className=" text-client-primary h-8 w-8  p-1"></GiftIcon>
            <Typography className="text-black font-normal ">
              jetons gratuits:
            </Typography>
            <Typography className=" text-client-primary w-min">{data.token_num}</Typography>
          </li>
        </ul>
      </CardBody>
      <CardFooter className="mt-12 border-t-2 p-0">
        <div className=" flex items-center justify-center mt-4  flex-row">
          <Tooltip content="Supprimer Abonnement">
            <IconButton variant="text">
              {" "}
              <TrashIcon
                onClick={() => {
                  setsup(true);
                }}
                className="text-black h-5 w-5"
              />{" "}
            </IconButton>
          </Tooltip>
          <Tooltip content="Modifier Abonnement">
            <IconButton variant="text">
              {" "}
              <PencilIcon
                onClick={() => {
                  setmod(true);
                }}
                className="text-black h-5 w-5"
              />
            </IconButton>
          </Tooltip>
          <Tooltip content="Details Abonnement">
            <IconButton variant="text">
              {" "}
              <EyeIcon
                onClick={() => {
                  setvis(true);
                }}
                className="text-black h-5 w-5"
              />
            </IconButton>
          </Tooltip>
        </div>
      </CardFooter>
      {vis && (
        <div className="z-50 fixed top-0 left-0 w-full h-full flex justify-center items-center">
          <Visualiser data={data} closevis={setvis} />{" "}
        </div>
      )}
      {mod && (
        <div className="z-50 fixed top-0 left-0 w-full h-full flex justify-center items-center">
          <ModPack closemod={setmod} data={data} />{" "}
        </div>
      )}
      {sup && (
        <div className="z-50 fixed top-0 left-0 w-full h-full flex justify-center items-center">
          <SuppPlan closesup={setsup} id={data.id} />{" "}
        </div>
      )}
    </Card>
  );
};

export default Abonnement;
