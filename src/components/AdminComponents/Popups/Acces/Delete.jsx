import { useDeleteAdmin } from "@/services/queries";
import { Button, Typography } from "@material-tailwind/react";

const SuppAdmin = ({ closesup, id }) => {

    const onSubmit = () => {
        // You can handle form submission here
        console.log("Form submitted with id:", id);

        handleDeleteAdmin()
        closesup(false)
    }


    const deleteAdminMutation = useDeleteAdmin("");

    const handleDeleteAdmin = async () => {
        console.log("Deleting subscription with ID:", id);
        try {
            await deleteAdminMutation.mutateAsync(id
            );
            console.log("Admin deleted successfully.");
        } catch (error) {
            console.error("Error deleting Admin:", error);
        }
    };
    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 ">
            <div className="relative z-50 p-6 w-auto bg-white  rounded-lg shadow ">
                <div className=" py-7 items-center justify-center text-center ">
                    <div className="px-16 ">
                        <Typography variant="h5" className="text-black">
                            Confirmez- vous la suppression
                        </Typography>
                        <Typography className="mt-5">
                            Si vous confirmez, l'admin sera definitivement effacé
                        </Typography>
                    </div>
                    <div className="mt-7 flex gap-3 px-6 flex-row">
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

export default SuppAdmin;
