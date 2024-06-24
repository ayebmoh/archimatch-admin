import { Typography, UserGroupIcon } from "../RemoteComponents";

export default function CustomChip({ Color, IconColor, Number, Title, Conclusion }) {
    return (
        <div className={`p-3 rounded-xl ${Color}`}>
            <div className='flex flex-col items-start justify-start'>
                <div className={`mb-2 rounded-full p-2 ${IconColor}`}>
                    <UserGroupIcon className='h-4 w-4 text-white rounded-full' />
                </div>
                <Typography variant='h6' className='font-semibold'>{Number}</Typography>
                <Typography variant='h6'>{Title}</Typography>
                <Typography variant='pargraph' color='green'>{Conclusion}</Typography>
            </div>
        </div>)
}
