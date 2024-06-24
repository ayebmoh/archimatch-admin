"use client";
import { Typography } from "@/components/RemoteComponents";
import CA from "@/components/paiements/CA";
import PaiementEnLigne from "@/components/paiements/PaiementEnLigne";
import VirementBancaire from "@/components/paiements/VirementBancaire";
import { useState } from "react";
const Page = () => {
    const [showpaiment, setShowpaiment] = useState("Virement Bancaire");
    const handleTabClick = (tabValue) => {
        setShowpaiment(tabValue);
    };
    return (
        <div>

            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
                <div className="w-full">
                    <Typography variant="h5" className="text-client-primary mt-8">
                        Paiement
                    </Typography>

                    <div className=" border-b border-gray-200">
                        <ul
                            className="flex flex-wrap -mb-px text-sm font-medium text-center"
                            indicatorprops={{
                                className:
                                    "text-sm bg-transparent border-b-2 border-client-primary shadow-none rounded-none",
                            }}
                        >
                            <li
                                className={`me-2 ${showpaiment == "Virement Bancaire"
                                    ? "border-client-primary border-b-2 text-client-primary"
                                    : " "
                                    }`}
                            >
                                <button
                                    className="inline-block p-4  rounded-t-lg "
                                    value="Virement Bancaire"
                                    onClick={() => handleTabClick("Virement Bancaire")}
                                >
                                    Virement Bancaire
                                </button>
                            </li>
                            <li
                                className={`me-2 ${showpaiment == "Paiement En Ligne"
                                    ? "border-b-2 border-client-primary text-client-primary"
                                    : ""}`}
                            >
                                <button
                                    className="inline-block p-4 border-client-primary rounded-t-lg"
                                    value="Paiement En Ligne"
                                    onClick={() => handleTabClick("Paiement En Ligne")}
                                >
                                    Paiement En Ligne
                                </button>
                            </li>
                            <li
                                className={`me-2 ${showpaiment == "Chiffre d'affaire"
                                    ? "border-b-2 border-client-primary text-client-primary"
                                    : ""
                                    }`}
                            >
                                <button
                                    className="inline-block p-4 border-client-primary rounded-t-lg"
                                    value="Chiffre d'affaire"
                                    onClick={() => handleTabClick("Chiffre d'affaire")}
                                >
                                    Chiffre d'affaire
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {showpaiment === "Virement Bancaire" && <VirementBancaire />}
            {showpaiment === "Paiement En Ligne" && <PaiementEnLigne />}
            {showpaiment === "Chiffre d'affaire" && <CA />}

        </div>


    )
}

export default Page;