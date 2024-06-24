import { Button, Typography } from '@/components/RemoteComponents';
import { useHandleArchitectRequest } from '@/services/queries';


export default function Modalcanc({ openModalCa, onclose, onConfirm, activeRequest }) {
   
   const handleArchitectRequestMutation = useHandleArchitectRequest(
      "architect_requests",
      {},
   );
   const handleArchitectRequest = (values) => {
      const userData = handleArchitectRequestMutation.mutate({ ...values, id: activeRequest, accept: false });
   };

   return (
      // backdrop
      <div onClick={onclose} className={`fixed top-0 left-0  w-full h-full flex justify-center items-center
    ${openModalCa ? "visible bg-black bg-opacity-50" : "invisible"}`}>
         {/*  modal*/}

         <div onClick={(e) => e.stopPropagation()}
            className='bg-white rounded-xl shodow p-6 transition-all w-96 h-52 '  >
            <div className='mt-4'>
               <h1 className='text-black  text-xl font-bold  ml-10'> Confirmez-vous le refus? </h1>
               <Typography className=' text-sm font-bold text-gray-600  ml-4 mt-2'>
                  Si vous confirmez,le L’architecte sera  supprimé
               </Typography></div>
            {/*buttons  */}
            <div className='flex  justify-center mt-8 space-x-10'>
               <Button onClick={() => { handleArchitectRequest({}); onclose() }}
                  className=' bg-[#11ABEC] px-2 py-1 rounded-md mr-2 drop-shadow-md text-base md:w-28 '>
                  Confirmer
               </Button>
               <Button onClick={onclose}
                  className=' bg-[#11ABEC]  px-2 py-1 rounded-md mr-2 drop-shadow-md text-base md:w-28'>
                  Annuler
               </Button>
            </div>

         </div>
      </div>
   )




}