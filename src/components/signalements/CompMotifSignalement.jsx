import MotifSignalement from "@/components/signalements/MotifSignalement";
import { IoIosArrowRoundBack } from "react-icons/io";

const CompMotifSignalement = () => {
    return (
        <div className="flex flex-col gap-3  mt-4 ">
            <IoIosArrowRoundBack className="size-8 cursor-pointer" />
            <MotifSignalement />
            <MotifSignalement />
            <MotifSignalement />

        </div>
    )
}

export default CompMotifSignalement