"use client";
import BoosterComp from "@/components/AdminComponents/Subscriptions/PackBooster";
import Packjet from "@/components/AdminComponents/Subscriptions/PackJet";
import SubsList from "@/components/AdminComponents/Subscriptions/Planab";
import { Card, CardHeader, Typography } from "@/components/RemoteComponents";
import { useState } from "react";
export default function page() {
  const [navigation, setnavigation] = useState("Plan d’abonnement");
  const handleTabClick = (tabValue) => {
    setnavigation(tabValue);
  };
  return (
    <Card className="rounded-md mt-4">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div className="w-full">
            <Typography variant="h5" className="text-client-primary">
              Abonnement
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
                  className={`me-2 ${navigation == "Plan d’abonnement"
                    ? "border-client-primary border-b-2 text-client-primary"
                    : " "
                    }`}
                >
                  <button
                    className="inline-block p-4   rounded-t-lg "
                    value="Plan d’abonnement"
                    onClick={() => handleTabClick("Plan d’abonnement")}
                  >
                    Plan d’abonnement
                  </button>
                </li>
                <li
                  className={`me-2 ${navigation == "Pack jeton"
                    ? "border-b-2 border-client-primary text-client-primary"
                    : ""
                    }`}
                >
                  <button
                    className="inline-block p-4 border-client-primary rounded-t-lg"
                    value="Pack jeton"
                    onClick={() => handleTabClick("Pack jeton")}
                  >
                    Pack jeton
                  </button>
                </li>
                <li
                  className={`me-2 ${navigation == "Pack booster"
                    ? "border-b-2 border-client-primary text-client-primary"
                    : ""
                    }`}
                >
                  <button
                    className="inline-block p-4 border-client-primary rounded-t-lg"
                    value="Pack booster"
                    onClick={() => handleTabClick("Pack booster")}
                  >
                    Pack booster
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </CardHeader>
      {navigation === "Plan d’abonnement" && <SubsList />}
      {navigation === "Pack jeton" && <Packjet />}
      {navigation === "Pack booster" && <BoosterComp />}
    </Card>
  );
}
