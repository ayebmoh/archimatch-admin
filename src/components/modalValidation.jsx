import { Button, Typography } from '@/components/RemoteComponents';
import Snackbar from '@mui/material/Snackbar';
import { useState } from 'react';
import { FaCheckCircle } from "react-icons/fa";

const ModalValidation = ({ openModalvalidation, onclose }) => {
    const [showReason, setShowReason] = useState(false);
    const [refusalReason, setRefusalReason] = useState('');
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarAnchor, setSnackbarAnchor] = useState({ vertical: 'top', horizontal: 'center' });

    const handleRefuseClick = () => {
        setShowReason(true); // Affiche la zone de texte pour la raison de refus
    };

    const handleConfirmClick = () => {
        if (showReason && refusalReason) {
            // Gérer l'action de confirmation avec une raison de refus (par exemple, sauvegarder la raison de refus)
            console.log('Raison de refus :', refusalReason);
            // Fermer la popup après confirmation
            handleClose();
        } else {
            // Gérer l'action de confirmation sans raison de refus (par exemple, afficher un message d'erreur)
            console.log('Action de confirmation sans raison de refus');
            // Afficher le snackbar de succès
            setSnackbarOpen(true);
            // Fermer la popup
            setTimeout(() => { handleClose(true) }, 1500)

        }
    };

    const handleClose = () => {
        // Réinitialiser les états et fermer la popup
        setShowReason(false);
        setRefusalReason('');
        onclose();
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    return (
        <div onClick={onclose} className={`fixed top-0 left-0 w-full h-full flex justify-center items-center ${openModalvalidation ? "visible bg-black bg-opacity-50" : "invisible"}`}>
            <div onClick={(e) => e.stopPropagation()} className='bg-white rounded-xl shadow p-6 transition-all w-auto min-w-min '>
                <div className='mt-4 ml-2 mr-2 '>
                    <h1 className='text-black text-xl font-bold'>Validation publication profil architecte</h1>
                    <Typography className='text-sm font-bold text-[#888FA7] ml-5 mt-2'>Confirmer/ refuser la publication du profil</Typography>
                </div>

                {/* Afficher le textarea pour la raison de refus si showReason est vrai */}
                {showReason && (
                    <div className="mt-4 ml-2">
                        <Typography className="text-sm font-bold text-black  mt-2">Motifs du refus <span className=" text-red-500"> *</span></Typography>
                        <textarea
                            className="w-full h-20 border border-gray-300 rounded-md p-2 mt-2 focus:outline-none focus:ring focus:ring-blue-400"
                            value={refusalReason}
                            onChange={(e) => setRefusalReason(e.target.value)}
                            placeholder="Raison du refus"
                        ></textarea>
                    </div>
                )}

                <div className='flex justify-center mt-8 space-x-10'>
                    <Button onClick={handleConfirmClick} className='bg-[#11ABEC] px-2 py-1 rounded-md mr-2 drop-shadow-md text-base md:w-28'>
                        Confirmer
                    </Button>
                    <Button onClick={handleRefuseClick} className='text-[#B71D18] bg-white px-2 py-1 rounded-md mr-2 drop-shadow-md text-base md:w-28'>
                        Refuser
                    </Button>
                </div>
            </div>

            {/* Snackbar pour afficher les messages */}
            {openModalvalidation && (
                <Snackbar
                    anchorOrigin={snackbarAnchor}
                    open={snackbarOpen}
                    autoHideDuration={6000}
                    onClose={handleSnackbarClose}
                    sx={{
                        '& .MuiSnackbarContent-root': {
                            backgroundColor: snackbarOpen ? '#55B832' : 'inherit', // Change background color to green when open
                        },
                    }}
                    message={
                        <> <div className=" flex justify-items-start">
                            <FaCheckCircle className="bg-[#55B832]" />
                            <div className="flex flex-col ml-2">
                                <Typography className=" text-lg">Profil architecte validé</Typography>
                                <Typography className="text-gray-200">Profil architecte ajouté dans l’espace vitrine</Typography>
                            </div>
                        </div>
                        </>
                    }
                    key={`${snackbarAnchor.vertical},${snackbarAnchor.horizontal}`}
                />
            )}
        </div>
    );
};

export default ModalValidation;
