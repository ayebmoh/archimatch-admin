import {
  Button,
  Card,
  CardHeader,
  ClipboardDocumentListIcon,
  EyeIcon,
  IconButton,
  Tooltip,
  Typography,
} from "@/components/RemoteComponents";
import TableSkeleton from "@/components/TableSkeleton";
import List from "../../../components/AdminComponents/Tables/List";
export default function Meetings({ meetings, isLoading }) {

  const today = new Date().toLocaleDateString();

  const todayMeetings = meetings.data.filter(meeting => {
    const meetingDate = new Date(meeting.created_at).toLocaleDateString();
    return meetingDate === today;
  });

  const columns = [
    {
      accessorKey: "id",
      header: "Nom et prenom",
      cell: (props) => {
        const firstName = props.row.original.first_name;
        const lastName = props.row.original.last_name;
        const email = props.row.original.email;
        return (<div className="flex flex-col text-start"><Typography className="font-semibold text-black" variant="paragraph">{`${firstName} ${lastName}`}</Typography>
          <Typography className=" text-architect-secondary_text_color" variant="paragraph">{`${email}`}</Typography></div>);
      },
    },

    {
      accessorKey: "created_at",
      header: "Date du reunion",
      cell: (props) => {
        const time = props.row.original.meeting_time
        const date = new Date(props.getValue()).toLocaleDateString()
          ; return (
            <div className="flex flex-col text-center"><Typography className=" text-architect-secondary_text_color" variant="paragraph">{date}</Typography>
              <Typography className=" text-architect-secondary_text_color" variant="paragraph">{time}</Typography></div>)
      },

    },

    {
      accessorKey: "phone_number",
      header: "Numero",
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: "responsable",
      header: "Responsable",
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: "join",
      header: "",
      cell: () => (
        <Button
          variant="filled"
          size="sm"
          className="bg-client-primary p-2 text-white rounded-8"
        >
          REJOINDRE
        </Button>
      ),
    },
    {
      accessorKey: "listIcon",
      header: "",
      cell: () => (
        <div className="flex items-center gap-3 flex-row">

          <Tooltip content="Détails">
            <IconButton variant="text">
              <EyeIcon className="h-5 w-5 text-architect-secondary_text_color" />
            </IconButton>
          </Tooltip>
          <Tooltip content="Notes">
            <IconButton variant="text">
              <ClipboardDocumentListIcon className="h-5 w-5" />
            </IconButton>
          </Tooltip>
        </div>
      ),
    },
  ];

  return (
    <Card className="mt-3 w-full shadow-none">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Typography variant="h5" color="blue-gray">
              Liste des réunions d’aujourd’hui{" "}
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Voir les informations{" "}
            </Typography>
          </div>{" "}
        </div>
      </CardHeader>
      {isLoading ? <TableSkeleton /> : <List columns={columns} data={todayMeetings} />
      }    </Card>
  );
}
