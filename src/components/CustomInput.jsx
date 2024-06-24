/* eslint-disable react/prop-types */
import { Input, Typography } from "@/components/RemoteComponents";
import { cn } from "@/utils";

const CustomInput = (props) => {
  // eslint-disable-next-line react/prop-types
  const {
    label,
    containerClassName,
    success,
    error,
    variant,
    placeholder,
    inputClassName,
    labelcolor,
    value,
    onBlur,
    errorMessage,
    name,
    onChange,
  } = props;

  return (
    <div className={cn("flex flex-col gap-[3px]", containerClassName)}>
      <Typography
        variant="paragraph"
        labelcolor={labelcolor}
        className={cn(
          "text-architect-dark_blue !font-semiBold text-[14px]",
          success && "text-architect-success",
          error && "text-architect-destructive",
        )}
      >
        {label}
      </Typography>
      <Input
        placeholder={placeholder}
        variant={variant ? variant : "outlined"}
        className={inputClassName}
        value={value}
        error={error}
        success={success}
        onBlur={onBlur}
        name={name}
        onChange={onChange}
      />
      {errorMessage && (
        <Typography
          variant="paragraph"
          labelcolor={labelcolor}
          className={cn(
            "text-architect-destructive !font-semiBold text-sm mt-[3px]",
          )}
        >
          {errorMessage}
        </Typography>
      )}
    </div>
  );
};

export default CustomInput;
