"use client";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
} from "@/components/RemoteComponents";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NotAuthDrawer = (props) => {
  const { navListItems, open, setOpen, logo } = props;
  const pathname = usePathname();
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <>
      <Drawer open={open} onClose={closeDrawer}>
        <div className="mb-2 flex items-center justify-between p-4">
          <Image
            src={logo}
            className="w-40 mr-4 ml-2 cursor-pointer py-0.5"
            alt="hero image"
          />
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <List>
          {navListItems.map(({ label, url }, key) => (
            <Link href={url} key={key}>
              <ListItem
                color="blue-gray"
                className={
                  pathname == url
                    ? "flex text-client-primary items-center gap-2 lg:rounded-full"
                    : "flex items-center gap-2 lg:rounded-full "
                }
              >
                {label}
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default NotAuthDrawer;
