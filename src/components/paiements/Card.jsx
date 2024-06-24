
export default function Card({ title, typography1, typography2, typography3, color }) {
    return (
        <div className="relative flex flex-col  text-gray-700 bg-white shadow-md shadow-[#93A3AB] border-gray-400 rounded-xl w-auto mt-4 pl-3 pt-2 ">
            <div className="">
                <h5 style={{ color: color }} className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal ">
                    {title}
                </h5>

            </div>
            <div className="  pt-0 text-[#93A3AB] text-lg">

                {typography1}

            </div>
            <div className="flex flex-row space-x-32  pb-2 ">
                <div className="  pt-2 text-black font-bold text-lg ">

                    {typography2}

                </div>
                <div className=" pt-2 pl-4 pr-4 text-[#65C565] font-bold  rounded-lg text-lg ">

                    {typography3}

                </div>
            </div>
        </div>
    )
}

