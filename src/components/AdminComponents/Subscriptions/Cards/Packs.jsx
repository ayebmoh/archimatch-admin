import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  GiftIcon,
  IconButton,
  PencilIcon,
  TicketIcon,
  Tooltip,
  TrashIcon,
  Typography
} from "@/components/RemoteComponents";

const Packs = ({ data }) => {
  return (
    <Card
      color=""
      variant="gradient"
      className=" w-full max-w-[20rem] p-8"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
      >
        <Typography variant="h4" className="font-semibold ">
          Pack1
        </Typography>
        <Typography
          variant="h1"
          className="mt-6 flex justify-center gap-1 text-7xl font-normal"
        >
          <span className="mt-2 text-4xl"></span>0{" "}
          <span className="self-end text-4xl">dt/mo</span>
        </Typography>
      </CardHeader>
      <CardBody className="p-0">
        <ul className="flex flex-col gap-4">
          <li className="flex items-center gap-4">
            <TicketIcon className="rounded-full text-architect-primary border border-white/20 h-8 w-8 bg-white/20 p-1"></TicketIcon>
            <Typography className=" font-normal">
              Nbr jetons inclut : 35
            </Typography>
          </li>
          <li className="flex items-center gap-4">
            <GiftIcon className="rounded-full border text-architect-primary h-8 w-8 border-white/20 bg-white/20 p-1"></GiftIcon>
            <Typography className=" font-normal">
              Nbr jetons gratuits : 35
            </Typography>
          </li>
        </ul>
      </CardBody>
      <CardFooter className="mt-12 border-t-2 p-0">
        <div className=" flex items-center justify-center mt-4  flex-row">
          <Tooltip content="Supprimer Pack">
            <IconButton variant="text">
              {" "}
              <TrashIcon className=" h-5 w-5" />{" "}
            </IconButton>
          </Tooltip>
          <Tooltip content="Modifier Pack">
            <IconButton variant="text">
              {" "}
              <PencilIcon className=" h-5 w-5" />
            </IconButton>
          </Tooltip>

        </div>
      </CardFooter>
    </Card>
  );
};

export default Packs;
