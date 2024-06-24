"use client";
import SignalementArchitecte from "@/components/Signalements/SignalementArchitecte";
import SignalementClient from "@/components/Signalements/SignalementClient";
import SignalementAvisClient from "@/components/Signalements/SignalementAvisClient";
import SignalementProjet from "@/components/Signalements/SignalementProjet";
import { Typography } from "@/components/RemoteComponents";
import { useState } from "react";
const Page = () => {
    
    const [showsignalement, setShowsignalement] = useState("Signalement architectes");
    const handleTabClick = (tabValue) => {
        setShowsignalement(tabValue);
    };
    return (
        <div>

            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
                <div className="w-full">
                    <Typography variant="h5" className="text-client-primary mt-8">
                        Signalement
                    </Typography>

                    <div className=" border-b border-gray-200">
                        <ul
                            className="flex flex-wrap -mb-px text-sm font-medium text-center"
                            indicatorProps={{
                                className:
                                    "text-sm bg-transparent border-b-2 border-client-primary shadow-none rounded-none",
                            }}
                        >
                            <li
                                className={`me-2 ${showsignalement == "Signalement architectes"
                                    ? "border-client-primary border-b-2 text-client-primary"
                                    : " "
                                    }`}
                            >
                                <button
                                    className="inline-block p-4  rounded-t-lg "
                                    value="Signalement architectes"
                                    onClick={() => handleTabClick("Signalement architectes")}
                                >
                                    Signalement architectes
                                </button>
                            </li>
                            <li
                                className={`me-2 ${showsignalement == "Signalement clients"
                                    ? "border-b-2 border-client-primary text-client-primary"
                                    : ""}`}
                            >
                                <button
                                    className="inline-block p-4 border-client-primary rounded-t-lg"
                                    value="Signalement clients"
                                    onClick={() => handleTabClick("Signalement clients")}
                                >
                                    Signalement clients
                                </button>
                            </li>
                            <li
                                className={`me-2 ${showsignalement == "Signalement avis client"
                                    ? "border-b-2 border-client-primary text-client-primary"
                                    : ""
                                    }`}
                            >
                                <button
                                    className="inline-block p-4 border-client-primary rounded-t-lg"
                                    value="Signalement avis client"
                                    onClick={() => handleTabClick("Signalement avis client")}
                                >
                                    Signalement avis client
                                </button>
                            </li>
                            <li
                                className={`me-2 ${showsignalement == "Signalement projet"
                                    ? "border-b-2 border-client-primary text-client-primary"
                                    : ""
                                    }`}
                            >
                                <button
                                    className="inline-block p-4 border-client-primary rounded-t-lg"
                                    value="Signalement projet"
                                    onClick={() => handleTabClick("Signalement projet")}
                                >
                                    Signalement projets
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {showsignalement === "Signalement architectes" && <SignalementArchitecte />}
            {showsignalement === "Signalement clients" && <SignalementClient />}
            {showsignalement === "Signalement avis client" && <SignalementAvisClient />}
            {showsignalement === " Signalement projet" && <SignalementProjet />}
            {showsignalement === "Signalement projet" && <SignalementProjet />}


        </div>


    )
}

export default Page;