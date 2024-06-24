import { openAlert } from "@/components/OpenAlert";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";





export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function handleErrors(error) {
  console.log(error);
  if (error.originalStatus === 500 || error.status === 500) {
    console.log("Erreur de serveur");
    error.data.message
      ? openAlert(false, error.data.message)
      : openAlert(false, "Erreur de serveur");
  } else if (error.originalStatus === 400 || error.status === 400) {
    console.log("Veuillez verifier tous vos données");
    error.data.message
      ? openAlert(false, error.data.message)
      : openAlert(false, "Veuillez verifier tous vos données");
  }
}
