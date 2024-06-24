import {
  Button,
  Option,
  Select,
  Typography,
} from "@/components/RemoteComponents";
export default function Modalaccept({ closemod, pop }) {
  return (
    <div
      onClick={() => closemod(false)}
      className={`fixed top-0 left-0  w-full h-full flex justify-center items-center bg-black bg-opacity-50  ${
        pop ? "visible bg-black bg-opacity-50" : "invisible"
      }`}
    >
      <div className="relative bg-white rounded-lg shadow ">
        <div className="py-7 px-5 flex flex-col gap-3">
          <div className=" text-black  text-center font-bold items-center  justify-center ">
            <h1 className="text-xl ">Confirmation de l’acceptaion </h1>
            <Typography className="text-lg mt-4 text-gray-600 ">
              Veuillez sélectionnez les quatre variables
            </Typography>
          </div>
          <div className="my-4 grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2 w-72">
              <label className="text-sm  text-black font-semibold">
                Type du bien
              </label>
              <Select label="Select Version">
                <Option>EXP1</Option>
              </Select>
            </div>
            <div className="flex flex-col gap-2 w-72">
              <label className="text-sm  text-black font-semibold">
                Type de traveaux
              </label>
              <Select className="m" label="Select Version">
                <Option>EXP1</Option>
              </Select>
            </div>
            <div className="flex flex-col gap-2 w-72">
              <label className="text-sm text-black font-semibold">Style</label>
              <Select label="Select Version">
                <Option>EXP1</Option>
              </Select>
            </div>
            <div className="flex flex-col gap-2 w-72">
              <label className="text-sm text-black font-semibold">
                Catégorie
              </label>
              <Select label="Select Version">
                <Option>EXP1</Option>
              </Select>
            </div>
            <div className="flex flex-col gap-2 w-72">
              <label className="text-sm text-black font-semibold">
                Compléxité projet
              </label>
              <Select label="Select Version">
                <Option>EXP1</Option>
              </Select>
            </div>
          </div>
          <div className=" flex flex-row space-x-4 ">
            <Button
              size="sm"
              className="bg-client-primary size-min  rounded-8 w-[50%]  drop-shadow-md text-base  "
            >
              Confirmer
            </Button>
            <Button
              onClick={() => {
                closemod(false);
              }}
              size="sm"
              className=" text-client-primary bg-white hover:bg-gray-100 size-min   border-gray-600 w-[50%] border outlined-8   rounded-8  drop-shadow-md text-base "
            >
              Annuler
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
