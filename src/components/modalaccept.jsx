import { Button, Typography } from '@/components/RemoteComponents';
import Modal from 'react-modal';
import SelectBox from './SelectBox';
export default function Modalaccept({ isOpen, onClose, selectedVariables, onSelectVariables, onConfirm }){
  const labelOptions = [
    {
      label: 'Type de bien',
      options: ['Type1', 'Type2', 'Type3'],
    },
    {
      label: 'Style',
      options: ['Style1', 'Style2', 'Style3'],
    },
    {
      label: 'Compléxité projet',
      options: ['cprojet1', 'cprojet2', 'cprojet3'],
    },
    {
      label: 'Type de traveaux',
      options: ['Typetr1', 'Typetr2', 'Typetr3'],
    },
    {
      label: 'Catégorie',
      options: ['Catégorie1', 'Catégorie2', 'Catégorie3'],
    },
  ];
    return (
      <div onClick={onClose} className={`fixed top-0 left-0  w-full h-full flex justify-center items-center
    ${isOpen? "visible bg-black bg-opacity-50" :"invisible"}`}>
   <Modal 
      isOpen={isOpen}
      onRequestClose={onClose}
      ariaHideApp={false}
      className="w-96 h-52 justify-center">
       
       <div onClick={(e)=>e.stopPropagation()} 
      className='bg-white rounded-xl shodow p-6 transition-all  '>
<div className='mt-4 justify-center'>
     <h1 style={{color: '#000000' }} className='text-lg ml-10'> Confirmation de l’acceptaion </h1>
 <Typography style={{color: '#888FA7' }} className='text-sm ml-8 mt-2'> 
 Veuillez sélectionnez les quatre variables
 </Typography>
 </div>
 <div className="flex flex-wrap gap-4 mt-4">
    {labelOptions.map((variable) => (
      <div key={variable.label} className="flex flex-col md:w-20rem w-full">
        <label className="text-base text-gray-700">{variable.label}</label>
        <SelectBox
          className=" rounded-md p-2"
          options={variable.options}
          selectedValue={selectedVariables[variable.label] || ''}
          onChange={(value) => onSelectVariables(variable.label, value)}
        />
      </div>
    ))}
  </div>
 <div className='flex justify-center mt-8 space-x-10'>
 <Button onClick={onConfirm}
  style={{background: '#11ABEC' }} className='px-2 py-1 rounded-md mr-2 drop-shadow-md text-base md:w-28 '>
 Confirmer 
 </Button>
 <Button  onClick={onClose}
  style={{background: '#11ABEC' }} className='px-2 py-1 rounded-md mr-2 drop-shadow-md text-base md:w-28'>
 Annuler
 </Button>
 </div>
 </div>
</Modal>
</div>
  );
};
    