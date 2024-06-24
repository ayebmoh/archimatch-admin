
const CalendarSkeleton = () => {
    const rows = 5;
    const columns = 7;

    return (
        <div className="w-full p-4 space-y-4 border-2 rounded-md">
            <div className="flex justify-between mb-2">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
                    <div key={index} className="w-1/7 text-center text-sm font-medium text-gray-500">
                        {day}
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-7 gap-4 animate-pulse">
                {Array.from({ length: rows * columns }).map((_, index) => (
                    <div key={index} className="flex items-center justify-center h-20 bg-gray-200 rounded-md"></div>
                ))}
            </div>
        </div>
    );
};

export default CalendarSkeleton;
