import CalendarSkeleton from "@/components/CalendarSkeleton";
import { ExclamationTriangleIcon } from "@/components/RemoteComponents";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";

export default function CalendarSection({ meetings, isLoading }) {
  const [events, setEvents] = useState([{ title: "+Indisponibilité", id: "1" }]);
  const [allEvents, setAllEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [idToDelete, setIdToDelete] = useState(null);
  const [activeTab, setActiveTab] = useState("html");



  console.log(meetings)


  const [newEvent, setNewEvent] = useState({
    title: "",
    start: "",
    allDay: false,
    id: 0,
  });

  useEffect(() => {
    let draggableEl = document.getElementById('draggable-el');
    if (draggableEl) {
      new Draggable(draggableEl, {
        itemSelector: '.fc-event',
        eventData: function (eventEl) {
          let title = eventEl.getAttribute('title');
          let id = eventEl.getAttribute('data');
          let start = eventEl.getAttribute('start');
          return { title, id, start };
        },
      });
    }
  }, []);
  function parseTimeString(timeString) {
    const [hours, minutes] = timeString.split('h').map(str => parseInt(str, 10));
    const date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes);
    return date;
  }
  useEffect(() => {
    if (!isLoading) {
      const events = meetings?.data?.length > 0 ? meetings.data.map((meeting) => {
        const meetingDate = new Date(meeting.meeting_date);
        const meetingTime = parseTimeString(meeting.meeting_time);

        const startDateTime = new Date(
          meetingDate.getFullYear(),
          meetingDate.getMonth(),
          meetingDate.getDate(),
          meetingTime.getHours(),
          meetingTime.getMinutes()
        );

        return {
          title: `${meeting.first_name} ${meeting.last_name}`,
          start: startDateTime,
          end: new Date(new Date(startDateTime + (meeting.meeting_duration * 60 * 1000))),
          allDay: false,
        };
      }) : [];
      setAllEvents(events);
    }
  }, [meetings, isLoading]);

  const handleDateClick = (arg) => {
    setNewEvent({
      ...newEvent,
      start: arg.date,
      allDay: arg.allDay,
      id: new Date().getTime(),
    });
    setShowModal(true);
  };

  const addEvent = (data) => {
    const event = {
      ...newEvent,
      start: data.date.toISOString(),
      title: data.draggedEl.innerText,
      allDay: data.allDay,
      id: new Date().getTime(),
      backgroundColor: "red",
    };
    setAllEvents([...allEvents, event]);
  };

  const handleDeleteModal = (data) => {
    setShowDeleteModal(true);
    setIdToDelete(Number(data.event.id));
  };

  const handleDelete = () => {
    setAllEvents(
      allEvents.filter((event) => Number(event.id) !== Number(idToDelete)),
    );
    setShowDeleteModal(false);
    setIdToDelete(null);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setNewEvent({ title: "", start: "", allDay: false, id: 0 });
    setShowDeleteModal(false);
    setIdToDelete(null);
  };

  return (
    <main className="flex w-full flex-col gap-12 items-center justify-between ">
      <div className="w-full relative">
        {events.map((event) => (
          <div
            id="draggable-el"
            className="absolute text-white text-sm right-0 fc-event mr-6 p-2 m-2 shadow-xl font-semibold cursor-pointer rounded-lg text-center bg-client-primary inline-block max-w-max"
            title={event.title}
            key={event.id}
          >
            {event.title.toUpperCase()}
          </div>
        ))}
      </div>

      <div className="grid w-full grid-cols-10">
        <div className="col-span-10 w-full">
          <div className="calendar-container p-5 ">
            {isLoading ? <CalendarSkeleton /> : <FullCalendar
              height={600}
              plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
              headerToolbar={{
                left: "prev today next",
                center: "title",
                right: "timeGridDay,dayGridMonth,timeGridWeek",
              }}
              events={allEvents}
              nowIndicator={true}
              editable={true}
              droppable={true}
              selectable={true}
              selectMirror={true}
              dateClick={handleDateClick}
              drop={(data) => addEvent(data)}
              eventClick={(data) => handleDeleteModal(data)}
              slotMinTime="08:00:00"
              slotMaxTime="18:00:00"
              allDaySlot={false}
            />}
          </div>
        </div>
      </div>

      <Transition.Root show={showDeleteModal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setShowDeleteModal}>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel
                  className="relative transform overflow-hidden rounded-lg
                   bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
                >
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div
                        className="mx-auto flex h-12 w-12 flex-shrink-0 items-center 
                      justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"
                      >
                        <ExclamationTriangleIcon
                          className="h-6 w-6 text-red-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title
                          as="h3"
                          className="text-base font-semibold leading-6 text-gray-900"
                        >
                          Supprimer?{" "}
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            Etes-vous sûr que vous voulez supprimer?{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm 
                      font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                      onClick={handleDelete}
                    >
                      Supprimer
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 
                      shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={handleDelete}
                    >
                      Annuler
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </main>
  );
}
