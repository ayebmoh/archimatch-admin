import {
  Card,
  CardFooter,
  CardHeader,
  EyeIcon,
  IconButton,
  PencilIcon,
  Tooltip,
  TrashIcon,
  Typography,
} from "@/components/RemoteComponents";

const Booster = ({ data }) => {
  return (
    <Card
      color=""
      variant="gradient"
      className="  w-full max-w-[20rem] py-5 px-8"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 mb-3 rounded-none  pb-8 text-center"
      >
        <Typography variant="h4" >
          Pack1
        </Typography>
        <Typography
          variant="h1"
          className="mt-6 flex justify-center gap-1 text-5xl font-normal"
        >
          <span className="mt-2 text-2xl"></span>1000{" "}
          <span className="self-end text-4xl">dt/mo</span>
        </Typography>
      </CardHeader>

      <CardFooter className=" border-t-2 p-0">
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
          <Tooltip content="Visualiser Pack">
            <IconButton variant="text">
              {" "}
              <EyeIcon className=" h-5 w-5" />
            </IconButton>
          </Tooltip>
        </div>
      </CardFooter>
    </Card >
  );
};

export default Booster;
