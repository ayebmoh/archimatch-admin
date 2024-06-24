const ArchitectTheme = {
  button: {
    defaultProps: {
      variant: "filled",
      size: "md",
      color: "architect-primary",
      fullWidth: false,
      ripple: true,
      className: "",
    },



    
    valid: {
      colors: ["architect-primary"],
    },
    styles: {
      sizes: {
        sm: {
          fontSize: "text-[12px]",
          py: "py-[9px]",
          px: "px-[16px]",
          borderRadius: "rounded-[6px]",
        },
        md: {
          fontSize: "text-[18px]",
          py: "py-[14px]",
          px: "px-[24px]",
          borderRadius: "rounded-[10px]",
          fontWeight: "font-normal",
        },
        lg: {
          fontSize: "text-[22px]",
          py: "py-[22px]",
          px: "px-[50px]",
          borderRadius: "rounded-[12px]",
          fontWeight: "font-bold",
        },
      },
      variants: {
        filled: {
          "architect-primary": {
            backgroud: "bg-architect-primary",
            color: "text-white",
            shadow: "shadow-md shadow-orange-500/20",
            hover:
              "hover:shadow-lg hover:opacity-[0.85]  hover:bg-architect-primary-opacity[0.1]",
            focus: "focus:opacity-[0.85] focus:shadow-none",
            active: "active:opacity-[0.85] active:shadow-none",
            case: "normal-case",
          },
        },
        outlined: {
          "architect-primary": {
            border: "border border-architect-primary",
            color: "text-architect-primary",
            hover:
              "hover:bg-architect-primary hover:text-white hover:shadow-lg hover:transition-colors hover:duration-300 ",
            focus: "focus:ring focus:ring-orange-200",
            active: "active:opacity-[0.85]",
            case: "normal-case",
          },
        },
      },
    },
  },
  input: {
    defaultProps: {
      variant: "outlined",
      size: "md",
      color: "architect-primary",
      label: "",
      error: false,
      success: false,
      icon: undefined,
      labelProps: {
        className: "before:content-none after:content-none",
      },
      containerProps: undefined,
      shrink: false,
      className: "",
    },
    valid: {
      variants: ["standard", "outlined", "static"],
      sizes: ["md", "lg"],
      colors: ["architect-primary"],
    },
    styles: {
      base: {
        input: {
          borderRadius: "rounded-[8px]",
          height: "h-[48px]",
        },
      },
      variants: {
        outlined: {
          base: {
            input: {
              borderWidth: "placeholder-shown:border",
              borderColor: "",
              floated: {
                borderWidth: "border focus:border-2",
                borderColor: "border-t-transparent focus:border-t-transparent",
              },
            },
          },
          colors: {
            input: {
              "architect-primary": {
                borderColor: "border-blue-gray-200 !border-t-blue-gray-200 ",
                borderColorFocused:
                  "focus:border-architect-primary focus:!border-t-architect-primary",
              },
            },
            label: {
              "architect-primary": {
                color: "!text-black peer-focus:text-black",
                before: "",
                after: "",
              },
            },
          },
          error: {
            input: {
              borderColor:
                "border-architect-destructive placeholder-shown:border-t-architect-destructive placeholder-shown:border-architect-destructive !border-t-architect-destructive",
              borderColorFocused:
                "focus:border-architect-destructive focus:border-t-architect-destructive",
            },
            label: {
              color:
                "text-architect-destructive peer-focus:text-architect-destructive peer-placeholder-shown:text-architect-destructive",
              before: "",
              after: "",
            },
          },
          success: {
            input: {
              borderColor:
                "border-architect-success placeholder-shown:border-t-architect-success placeholder-shown:border-architect-success !border-t-architect-success",
              borderColorFocused:
                "focus:border-architect-success focus:border-t-architect-success",
            },
            label: {
              color:
                "text-architect-success peer-focus:text-architect-success peer-placeholder-shown:text-architect-success",
              before: "",
              after: "",
            },
          },
        },
      },
    },
  },
  navbar: {
    defaultProps: {
      variant: "filled",
      color: "white",
      shadow: true,
      blurred: true,
      fullWidth: true,
      className: "normal",
    },
  },
  menu: {
    defaultProps: {
      placement: "bottom",
      offset: 5,
      dismiss: {
        itemPress: true,
      },
      animate: {
        unmount: {},
        mount: {},
      },
      lockScroll: false,
    },
    styles: {
      base: {
        menu: {
          bg: "bg-white",
          minWidth: "min-w-[180px]",
          p: "p-3",
          border: "border border-blue-gray-50",
          borderRadius: "rounded-md",
          boxShadow: "shadow-lg shadow-blue-gray-500/10",
          fontFamily: "font-sans",
          fontSize: "text-sm",
          fontWeight: "font-normal",
          color: "text-blue-gray-500",
          overflow: "overflow-auto",
          outline: "focus:outline-none",
          zIndex: "z-[999]",
        },
        item: {
          initial: {
            display: "block",
            width: "w-full",
            minWidth: "w-max",
            pt: "pt-[14px]",
            pb: "pb-0",
            px: "px-3",
            borderRadius: "rounded-md",
            textAlign: "text-start",
            lightHeight: "leading-tight",
            cursor: "cursor-pointer",
            userSelect: "select-none",
            transition: "transition-all",
            bg: "bg-white",
            color:
              "text-architect-secondary_text_color hover:text-architect-text_hover focus:text-architect-primary active:text-architect-primary",
            outline: "outline-none",
            fontWeight: "font-semibold",
            fontFamily: "Lato",
            fontSize: "text-base",
          },
          disabled: {
            opacity: "opacity-50",
            cursor: "cursor-not-allowed",
            pointerEvents: "pointer-events-none",
            userSelect: "select-none",
            bg: "hover:bg-transparent focus:bg-transparent active:bg-transparent",
            color:
              "hover:text-blue-gray-500 focus:text-blue-gray-500 active:text-blue-gray-500",
          },
        },
      },
    },
  },
  chip: {
    defaultProps: {
      variant: "outlined",
      size: "md",
      color: "architect-primary",
      icon: undefined,
      open: true,
      onClose: undefined,
      action: undefined,
      animate: {
        unmount: {},
        mount: {},
      },
      className: "",
    },
    valid: {
      variants: ["filled", "gradient", "outlined", "ghost"],
      sizes: ["sm", "md", "lg"],
      colors: ["architect-primary"],
    },
    styles: {
      base: {
        chip: {
          position: "relative",
          display: "grid",
          placeItems: "items-center",
          fontFamily: "font-sans",
          fontWeight: "font-normal",
          textTransform: "lowercase",
        },
      },
      variants: {
        filled: {
          "architect-primary": {
            backgroud: "bg-architect-primary",
            color: "text-white",
          },
        },
        outlined: {
          "architect-primary": {
            border: "border border-gray-500",
            color: "text-gray-700",
          },
        },
      },
    },
  },
};

export default ArchitectTheme;
