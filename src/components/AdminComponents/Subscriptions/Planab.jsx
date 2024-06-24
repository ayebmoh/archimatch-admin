import CardSkeleton from "@/components/CardSkeleton";
import { useFetchData } from "@/services/queries";
import { Button } from "@material-tailwind/react";
import { useState } from "react";
import AddPack from "../../../app/adminspace/Abonnements/Addpack";
import Abonnement from "./Cards/AbonC";
const SubsList = () => {
  const [add, setadd] = useState(false);



  const { data: plan, isLoading } = useFetchData(
    "/archimatch_app/subscriptions/", "plans"
  );


  return (
    <div className="flex flex-col ">
      <div className=" relative w-full ">
        <Button
          onClick={() => setadd(true)}
          className="flex float-end  items-center p-2 m-4"
          size="sm"
        >
          + AJOUTER
        </Button>
      </div>
      <div className="items-center mb-10 justify-center px-5 gap-0 sm:gap-3 grid grid-cols-1 md:grid-cols-2 md:gap-5 lg:grid-cols-3 2xl:grid-cols-4 ">
        {isLoading ? <div className="flex flex-row gap-3"><CardSkeleton className="border rounded-lg" /><CardSkeleton className="border rounded-lg" /><CardSkeleton className="border rounded-lg" /><CardSkeleton className="border rounded-lg" /></div> : plan.data.map((item, index) => (
          <Abonnement key={index} data={item} />
        ))}

      </div>
      {add && <AddPack closeadd={setadd} />}
    </div>
  );
};


export default SubsList;
