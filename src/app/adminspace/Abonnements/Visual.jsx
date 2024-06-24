import {
  CheckIcon,
  Cog8ToothIcon,
  Typography,
  XMarkIcon,
} from "@/components/RemoteComponents";
const Visualiser = ({ closevis, data }) => {
  return (
    <div className="fixed top-0 left-0  w-full h-full flex justify-center items-center bg-black bg-opacity-50 ">
      <div className="relative z-50 w-auto bg-white  rounded-lg shadow ">
        <div className="flex items-center justify-between p-4 md:p-5 border-b  rounded-t ">
          <div className="flex flex-row items-center gap-2 text-black">
            <Cog8ToothIcon className="w-7 h-7" />

            <h3 className="text-lg font-bold text-gray-900 ">
              {" "}
              Service Offerts{" "}
            </h3>
          </div>
          <button
            onClick={() => closevis(false)}
            type="button"
            className=" text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg  w-6 h-6 ms-auto inline-flex justify-center items-center"
          >
            <XMarkIcon />
          </button>
        </div>
        <div className="flex flex-col gap-2 p-6">
          <div className=" flex flex-row gap-1">
            {data.prop_platform == true
              ? <CheckIcon className=" text-green-500 h-5 w-5" />

              : <XMarkIcon className="text-red-500 h-5 w-5" />
            }
            <Typography variant="small">
              Projets clients proposés par la plateforme            </Typography>
          </div>
          <div className=" flex flex-row gap-1">
            {data.prop_profil == true
              ? <CheckIcon className=" text-green-500 h-5 w-5" />

              : <XMarkIcon className="text-red-500 h-5 w-5" />
            }
            <Typography variant="small">
              Projets clients proposés sur votre profil            </Typography>
          </div>
          <div className=" flex flex-row gap-1 ">
            {data.realization_expo == true
              ? <CheckIcon className=" text-green-500 h-5 w-5" />

              : <XMarkIcon className="text-red-500 h-5 w-5" />
            }
            <Typography variant="small">Exposition de vos réalisations sur ArchiMatch </Typography>
          </div>
          <div className=" flex flex-row gap-1 ">
            {data.fournisseur == true
              ? <CheckIcon className=" text-green-500 h-5 w-5" />

              : <XMarkIcon className="text-red-500 h-5 w-5" />
            }
            <Typography variant="small">Accès privilégié aux fournisseurs partenaires

            </Typography>
          </div>
          <div className=" flex flex-row gap-1 ">
            {data.archi_supp == true
              ? <CheckIcon className=" text-green-500 h-5 w-5" />

              : <XMarkIcon className="text-red-500 h-5 w-5" />
            }
            <Typography variant="small">
              Accès au support ArchiMatch{" "}
            </Typography>
          </div>
          <div className=" flex flex-row gap-1">
            {data.prop_selon_pref == true
              ? <CheckIcon className=" text-green-500 h-5 w-5" />

              : <XMarkIcon className="text-red-500 h-5 w-5" />
            }
            <Typography variant="small">
              Proposition des projets selon vos Préférences           </Typography>
          </div>
          <div className=" flex flex-row gap-1 ">
            {data.mev_profil == true
              ? <CheckIcon className=" text-green-500 h-5 w-5" />

              : <XMarkIcon className="text-red-500 h-5 w-5" />
            }
            <Typography variant="small">
              Mise en vedette de profil dans ArchiMatch{" "}
            </Typography>
          </div>
          <div className=" flex flex-row gap-1 ">
            {data.devi_gen == true
              ? <CheckIcon className=" text-green-500 h-5 w-5" />

              : <XMarkIcon className="text-red-500 h-5 w-5" />
            }
            <Typography variant="small">
              Génération des devis

              {" "}
            </Typography>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Visualiser;
