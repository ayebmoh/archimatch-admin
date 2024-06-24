import clientLogo from "@/assets/ClientLogo.svg";
import { CustomNavbar } from "@/components";

const navListItems = [
  {
    label: "Trouver mon architect",
    url: "/trouverarchitecte",
  },
  {
    label: "Mes projets publiés",
    url: "/projetspublies",
  },
];
export default function ClientVisitorRootLayout({ children }) {
  return (
    <>
      <CustomNavbar navListItems={navListItems} logo={clientLogo} />
      {children}
    </>
  );
}
