import Archimatchlogo from "@/assets/Archimatchlogo.svg";
import {
  BarsArrowUpIcon,
  CalendarIcon,
  CreditCardIcon,
  CurrencyDollarIcon,
  DocumentCheckIcon,
  ExclamationTriangleIcon,
  List,
  ListItem,
  ListItemPrefix,
  MegaphoneIcon,
  PresentationChartBarIcon,
  TableCellsIcon,
  UserCircleIcon,
  UserGroupIcon,
  UserPlusIcon,
} from "@/components/RemoteComponents";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Sidebar = ({ url }) => {
  const pathname = usePathname()
  console.log("pathname!", pathname)

  return (
    <div className=" left-0 top-0 rounded-none h-full lg:w-full max-w-[12rem] bg-client-dark_blue lg:max-w-[16rem] p-4">
      <div className="mb-2 p-4 ">
        <Image
          alt="Archimatchlogo"
          className=" w-full h-full cursor-pointer lg:w-[85%]"
          src={Archimatchlogo}
          priority={true}
        />
      </div>
      <List className="text-white gap-5 ">
        <Link href="/adminspace/Dashboard" >
          <ListItem
            className={`w-[70%] lg:w-auto hover:text-white hover:bg-client-primary ${pathname === "/adminspace/Dashboard" ? "bg-client-primary " : ""}`}

          >
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            Dashboard
          </ListItem>
        </Link>
        <Link href="/adminspace/archirequests">
          <ListItem className={`w-[70%] lg:w-auto hover:text-white hover:bg-client-primary ${pathname === "/adminspace/archirequests" ? "bg-client-primary " : ""}`}
          >
            <ListItemPrefix>
              <BarsArrowUpIcon className="h-5 w-5" />
            </ListItemPrefix>
            Demandes Architectes
          </ListItem>
        </Link>
        <Link href="/adminspace/meetings">        <ListItem className={`w-[70%] lg:w-auto hover:text-white hover:bg-client-primary ${pathname === "/adminspace/meetings" ? "bg-client-primary " : ""}`}
        >
          <ListItemPrefix>
            <CalendarIcon className="h-5 w-5" />
          </ListItemPrefix>
          Réunions
        </ListItem>
        </Link>
        <Link href="/adminspace/ProfilArchitecte">
          <ListItem className={`w-[70%] lg:w-auto hover:text-white hover:bg-client-primary ${pathname === "/adminspace/ProfilArchitecte" ? "bg-client-primary " : ""}`}
          >
            <ListItemPrefix>
              <UserGroupIcon className="h-5 w-5" />
            </ListItemPrefix>
            Profil Architecte
          </ListItem>
        </Link>
        <Link href="/adminspace/Announcements">
          <ListItem className={`w-[70%] lg:w-auto hover:text-white hover:bg-client-primary ${pathname === "/adminspace/Announcements" ? "bg-client-primary " : ""}`}>
            <ListItemPrefix>
              <MegaphoneIcon className="h-5 w-5" />
            </ListItemPrefix>
            Annonces
          </ListItem>
        </Link>
        <Link href="/adminspace/Selection">
          <ListItem className={`w-[70%] lg:w-auto hover:text-white hover:bg-client-primary ${pathname === "/adminspace/Selection" ? "bg-client-primary " : ""}`}
          >
            <ListItemPrefix>
              <TableCellsIcon className="h-5 w-5" />
            </ListItemPrefix>
            Suivi
          </ListItem>
        </Link>
        <Link href="/adminspace/Signalement">
          <ListItem className={`w-[70%] lg:w-auto hover:text-white hover:bg-client-primary ${pathname === "/adminspace/Signalement" ? "bg-client-primary " : ""}`}
          >
            <ListItemPrefix>
              <ExclamationTriangleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Signalement
          </ListItem>
        </Link>
        <Link href="/adminspace/subscriptions">
          <ListItem className={`w-[70%] lg:w-auto hover:text-white hover:bg-client-primary ${pathname === "/adminspace/subscriptions" ? "bg-client-primary " : ""}`}
          >
            <ListItemPrefix>
              <DocumentCheckIcon className="h-5 w-5" />
            </ListItemPrefix>
            Abonnement
          </ListItem>
        </Link>
        <Link href="/adminspace/paiement/">
          <ListItem className={`w-[70%] lg:w-auto hover:text-white hover:bg-client-primary ${pathname === "/adminspace/paiement" ? "bg-client-primary " : ""}`}
          >
            <ListItemPrefix>
              <CurrencyDollarIcon className="h-5 w-5" />
            </ListItemPrefix>
            Paiement
          </ListItem>
        </Link>
        <Link href="adminspace/Blog">
          <ListItem className={`w-[70%] lg:w-auto hover:text-white hover:bg-client-primary ${pathname === "/adminspace/blog" ? "bg-client-primary " : ""}`}
          >
            <ListItemPrefix>
              <CreditCardIcon className="h-5 w-5" />
            </ListItemPrefix>
            Blog
          </ListItem>
        </Link>
        <Link href="/adminspace/Parrainage">        <ListItem className={`w-[70%] lg:w-auto hover:text-white hover:bg-client-primary ${pathname === "/adminspace/Parrainage" ? "bg-client-primary " : ""}`}
        >
          <ListItemPrefix>
            <UserPlusIcon className="h-5 w-5" />
          </ListItemPrefix>
          Parrainage
        </ListItem>
        </Link>

        <Link href="/adminspace/acces" >
          <ListItem
            className={`w-[70%] lg:w-auto hover:text-white hover:bg-client-primary ${pathname === "/adminspace/acces" ? "bg-client-primary " : ""}`}
          >

            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Accés
          </ListItem>
        </Link>
      </List>
    </div>
  );
};
export default Sidebar;
