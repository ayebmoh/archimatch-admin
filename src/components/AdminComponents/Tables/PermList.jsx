import {
  Chip,
  Option,
  Select,
  Typography,
} from "@/components/RemoteComponents";
import AdminTab from "./AdminTab";
const PermissionsList = () => {
  return (
    <>
      <Typography variant="h5" className="text-client-primary">
        Accés
      </Typography>
      <Typography color="gray" className="mt-2 font-normal">
        Filter{" "}
      </Typography>
      <div className=" mt-2 flex lg:flex-row flex-col gap-6">
        <div className="w-72 flex flex-col gap-6">
          <Select className="px-22" label="Droit">
            <Option>Annonce</Option>
            <Option>Blog</Option>
            <Option>Demande Architecte</Option>
            <Option>Support Client</Option>
            <Option>Paiement</Option>
            <Option>Parrainage</Option>
            <Option>Profil Architecte</Option>
            <Option>Reunion</Option>
            <Option>Suivi</Option>
            <Option>Signalement</Option>
          </Select>
        </div>
        <div className="ml-7 flex flex-wrap gap-2 ">
          <Chip color="blue" value="Annonce" />
          <Chip color="red" value="Blog" />
          <Chip color="green" value="Demande Architecte" />
          <Chip color="amber" value="Support Client" />
          <Chip color="teal" value="Paiement" />
          <Chip color="indigo" value="Parrainage" />
          <Chip color="purple" value="Profil Architecte" />
          <Chip color="pink" value="Reunion" />
          <Chip color="orange" value="Suivi" />
          <Chip color="brown" value="Signalement" />
        </div>
      </div>
      <div className="overflow-x-hidden overflow-y-hidden">
        {" "}
        <AdminTab />
      </div>
    </>
  );
};

export default PermissionsList;
