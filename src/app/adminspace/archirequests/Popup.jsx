import {
  Dialog,
  DialogBody,
  DialogHeader,
} from "@/components/RemoteComponents";

function Popup(props) {
  const {
    open,
    handleOpen,
    header,
    children,
    headerClassName,
    bodyClassName,
    size,
  
  } = props;

  return (
    <>
      <Dialog
        open={open}
        handler={handleOpen}
        size={size}
        className="flex flex-col pb-2"
        
      >
        <DialogHeader className={headerClassName}>{header}</DialogHeader>
        <DialogBody className={bodyClassName}>{children}</DialogBody>

      </Dialog>
    </>
  );
}
export default Popup;
