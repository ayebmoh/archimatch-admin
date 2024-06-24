import { Button, Checkbox, Typography } from "@/components/RemoteComponents";
import { HiMiniXMark } from "react-icons/hi2";

export default function PopupDescProjet({ onclose, openModalDes, onConfirm }) {
    return (
        <div
            onClick={onclose}
            className={`fixed top-0 left-0  w-full h-full flex justify-center items-center bg-black bg-opacity-50  
        ${openModalDes ? "visible bg-black bg-opacity-50" : "invisible"
                }`}
        >
            <div onClick={(e) => e.stopPropagation()}
                className="relative bg-white rounded-lg shadow w-[35%]  min-w-52 ">

                <div className=" flex flex-col gap-3  px-10 py-7 ">
                    <div className=" text-black font-bold  text-2xl">
                        <div className="flex ">
                            <div onClick={onclose} className=" absolute top-4 right-4 cursor-pointer ">
                                < HiMiniXMark className=" font-bold " /></div>
                            <h1 className="text-xl  font-bold mt-6  ">Decision de signalement Projet</h1>

                        </div>

                        <Typography className="text-lg   text-gray-500 mt-4  ">
                            Sélectionnez l'action à prendre
                        </Typography>
                    </div>
                    <div className=" flex flex-col gap-4">

                        <Checkbox label={<span className="text-lg font-semibold text-gray-900 pl-3"> Adresser un avertissement </span>} containerProps={{
                            className: "p-0 flex flex-row items-center ",
                        }} color="black" />
                        <Checkbox label={<span className="text-lg font-semibold text-gray-900 pl-3"> Suppression projet</span>} containerProps={{
                            className: "p-0 flex flex-row items-center ",
                        }} color="black" />


                        <Checkbox label={<span className="text-lg font-semibold text-gray-900 pl-3"> Conservation projet </span>} containerProps={{
                            className: "p-0 flex flex-row items-center ",
                        }} color="black" />
                        <Checkbox label={<span className="text-lg font-semibold text-gray-900 pl-3"> None </span>} containerProps={{
                            className: "p-0 flex flex-row items-center ",
                        }} color="black" />




                    </div>
                    <div className="mt-4 ">
                        <Button onClick={onConfirm}

                            className="text-white bg-client-primary w-fit hover:bg-blue-300 focus:ring-4 focus:outline-none  focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center "
                        >
                            Confirmer
                        </Button> </div>
                </div>
            </div>

























        </div>
    )
}