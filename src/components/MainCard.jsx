import { cn } from "@/utils";

const MainCard = (props) => {
  const { className, children } = props;

  return (
    <div
      className={cn(" bg-white shadow-md   rounded-[10px] p-[20px]", className)}
    >
      {children}
    </div>
  );
};

export default MainCard;
