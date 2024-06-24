import { useDeleteSub } from "@/services/queries";
import { Button, Typography } from "@material-tailwind/react";

const SuppPlan = ({ closesup, id }) => {

  const onSubmit = () => {
    // You can handle form submission here
    console.log("Form submitted with id:", id);

    handleDeleteSub()
    closesup(false)
  }


  const deleteSubMutation = useDeleteSub("");

  const handleDeleteSub = async () => {
    console.log("Deleting subscription with ID:", id);
    try {
      await deleteSubMutation.mutateAsync(id
      );
      console.log("Subscription deleted successfully.");
    } catch (error) {
      console.error("Error deleting Subscription:", error);
    }
  };
  return (
    <div className="fixed top-0 left-0  w-full h-full flex justify-center items-center bg-black bg-opacity-50 ">
      <div className="relative z-50 w-auto bg-white  rounded-lg shadow ">
        <div className=" py-7 items-center justify-center text-center ">
          <div className="px-16 ">
            <Typography variant="h5" className="text-black">
              Confirmez- vous la suppression
            </Typography>
            <Typography className="mt-5">
              Si vous confirmez, le plan d’abonnement sera definitivement effacé
            </Typography>
          </div>
          <div className="mt-7 flex gap-3 p-6 flex-row">
            <Button onClick={() =>
              onSubmit()
            } size="md" className="w-[50%] p-2 rounded-xl text-base">
              Confirmer
            </Button>
            <Button
              onClick={() => {
                closesup(false)
              }}
              size="md"
              className="w-[50%] bg-white text-client-primary drop-shadow-md outline-8 border text-base hover:bg-gray-100 p-2 rounded-xl"
            >
              Annuler
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuppPlan;
