"use client";
import { Typography } from "@/components/RemoteComponents";
import { useState } from "react";
import Statistiques from "./Statistique";

export default function Home() {
    const [showMeetings, setShowMeetings] = useState(false);

    const handleTabClick = (tabValue) => {
        setShowMeetings(tabValue === "Statistiques");
    };


    const data = [
        { label: 'construction', value: 40, percentage: 40 },
        { label: 'Rénovation', value: 28, percentage: 28 },
        { label: 'Décoration intérieure', value: 32, percentage: 32 },
    ];
    const Projectdata = [
        { month: '2024-01-01', projects: 50 },
        { month: '2024-02-01', projects: 120 },
        { month: '2024-03-01', projects: 150 },
    ];
    return (
        <div className="flex flex-col  md:flex-row md:items-center">
            <div className="w-full">
                <Typography variant="h5" className="text-client-primary">
                    Réunions
                </Typography>

                <div
                    className=" border-b border-gray-200"
                    value={showMeetings ? "Statistiques" : "WorkBox"}
                >
                    <ul
                        className="flex flex-wrap -mb-px text-sm font-medium text-center bg-transparent border-b-2  shadow-none rounded-none"

                    >
                        <li
                            className={`me-2 ${showMeetings
                                ? ""
                                : "border-client-primary border-b-2 text-client-primary "
                                }`}
                        >
                            <button
                                className="inline-block p-4   rounded-t-lg "
                                value="WorkBox"
                                onClick={() => handleTabClick("WorkBox")}
                            >
                                WorkBox
                            </button>
                        </li>
                        <li
                            className={`me-2 ${showMeetings
                                ? "border-b-2 border-client-primary text-client-primary"
                                : ""
                                }`}
                        >
                            <button
                                className="inline-block p-4 border-client-primary rounded-t-lg"
                                value="Statistiques"
                                onClick={() => handleTabClick("Statistiques")}
                            >
                                Statistiques
                            </button>
                        </li>
                    </ul>
                </div>
                {showMeetings ? <Statistiques data={data} Projectdata={Projectdata} /> : null}

            </div>

        </div>


    );
}
