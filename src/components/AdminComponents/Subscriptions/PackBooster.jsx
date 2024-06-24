import { Button } from "@material-tailwind/react";
import Booster from "./Cards/Booster";

const BoosterComp = () => {
  return (
    <div className="flex flex-col">
      <div className=" relative w-full ">
        <Button className="flex float-end  items-center p-2 m-4" size="sm">
          + AJOUTER
        </Button>
      </div>
      <div className="mb-10 items-center justify-center px-5 py-4 gap-5 grid grid-cols-3">
        <Booster />
      </div>
    </div>
  );
};

export default BoosterComp;
