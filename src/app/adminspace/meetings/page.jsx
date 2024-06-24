"use client";
import CalendarSection from "@/app/adminspace/Scheduler/FullCalendar";
import Meetings from "@/app/adminspace/Scheduler/Meetings";
import { Card, CardHeader, Typography } from "@/components/RemoteComponents";
import { useFetchData } from "@/services/queries";
import { useState } from "react";

export default function Home() {
  const [showMeetings, setShowMeetings] = useState(false);

  const handleTabClick = (tabValue) => {
    setShowMeetings(tabValue === "Réunions d’aujourdhui");
  };
  const { data: meetings, isLoading } = useFetchData('/archimatch_app/architectRequest/')

  return (
    <Card className="rounded-md">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div className="w-full">
            <Typography variant="h5" className="text-client-primary">
              Réunions
            </Typography>

            <div
              className=" border-b border-gray-200"
              value={showMeetings ? "Réunions d’aujourdhui" : "Planification"}
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
                    value="Planification"
                    onClick={() => handleTabClick("Planification")}
                  >
                    Planification
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
                    value="Réunions d’aujourdhui"
                    onClick={() => handleTabClick("Réunions d’aujourdhui")}
                  >
                    Réunions d’aujourdhui
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </CardHeader>
      {showMeetings ? <Meetings meetings={meetings} isLoading={isLoading} /> : <CalendarSection meetings={meetings} isLoading={isLoading} />}

    </Card>
  );
}
