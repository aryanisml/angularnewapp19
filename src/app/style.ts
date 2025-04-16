import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

// Modified and optimized preset based on the truck rental UI
const TruckRentalPreset = definePreset(Aura, {
  primitive: {
    borderRadius: {
      none: "0",
      xs: "2px",
      sm: "4px",
      md: "6px",
      lg: "8px",
      xl: "12px"
    },
    
    // Updated colors using the provided color palette
    colors: {
      white: "#FFFFFF",
      
      // Grey colors
      grey: {
        10: "#F7FAFD",   // Frost Gray
        20: "#F4F8FB",
        30: "#F1F5F8",
        40: "#EDF1F4",
        50: "#E8ECEF",
        80: "#D4D7D9",
        110: "#B3B6B8",
        130: "#959899",
        150: "#717274",
        160: "#5C5D5E",
        170: "#464747",
        180: "#2F2F30",
        190: "#171718"
      },
      
      // Blues
      blue: {
        0: "#F2F9FF",
        2.5: "#EAF6FF",
        10: "#D2ECFF",
        30: "#96D0FC",
        50: "#5FB3F5",
        100: "#0073CF"    // Bright Blue
      },
      
      // Reflex Blues
      reflexBlue: {
        100: "#113BC2",
        130: "#002496",   // Reflex Blue (primary)
        140: "#002084",
        150: "#001B71",
        160: "#00165C",   // Midnight Blue
        170: "#001146",
        180: "#000B2F"
      },
      
      // Yellows
      yellow: {
        2.5: "#FFFCE6",
        30: "#FFED7C",
        60: "#FFD41C",
        70: "#FECB00"     // Penske Yellow (secondary)
      },
      
      // Greens
      green: {
        0: "#F2FFF3",
        140: "#068A15",
        170: "#02490A"
      },
      
      // Oranges
      orange: {
        0: "#FFF9F2",
        80: "#F59006",
        dark: "#D14900"
      },
      
      // Reds
      red: {
        0: "#FFF2F3",
        100: "#D0021B",
        140: "#8E0011"
      },
      
      // Semantic colors
      semantic: {
        primary: "#002496",        // Reflex Blue
        primaryHover: "#0073CF",   // Bright Blue
        secondary: "#FECB00",      // Penske Yellow
        textColor: "#171718",      // Grey-190
        textMuted: "#717274",      // Grey-150
        textDisabled: "#959899",   // Grey-130
        borderColor: "#D4D7D9",    // Grey-80
        dividerColor: "#E8ECEF",   // Grey-50
        actionBarBg: "#EDF1F4",    // Grey-40
        success: "#068A15",        // Green-140
        warning: "#F59006",        // Orange-80
        error: "#D0021B",          // Red-100
        successBg: "#F2FFF3",      // Green-0
        warningBg: "#FFF9F2",      // Orange-0
        errorBg: "#FFF2F3",        // Red-0
        leftNavBg: "#001146",      // RB-170
        leftNavExpandedBg: "#00165C", // RB-160
        leftNavActiveBg: "#002084",   // RB-140
        leftNavSelected: "#FECB00",   // PY-70
        wizardHeaderBg: "#002496",    // RB-130
        wizardSubnavBg: "#FFFFFF",    // White
        wizardSubnavHighlight: "#F2F9FF", // BB-0
        wizardFooterBg: "#F1F5F8" ,    // BB-grey-30
        checkboxDisabled :"#B3B6B8",
        dropdownHover :"#EAF6FF"
      }
    }
  },
  semantic: {
    focusRing: {
      width: "0 !important",
      style: "none !important",
      color: "transparent !important",
      offset: "0 !important" ,
      shadow: "none !important"
    },
    // Base typography and theming
    fontFamily: "Avenir LT Std, sans-serif",
    fontSize: "16px",
    fontWeight: {
      book: "200",
      medium: "500",
      heavy: "700"
    },
    transitionDuration: "0.2s",
    // Simplified primary color palette
    primary: {
      50: "#f0f7ff",
      100: "#d6e8ff",
      500: "#3376ff",
      600: "#1e5ad0",
      700: "#1747a8",
      900: "#0b2058"
    },
    // Simplified form field settings
    formField: {
      paddingX: "0.75rem",
      paddingY: "0.5rem",
      fontSize: "14px",
      lineHeight: "1.5",
      sm: {
        fontSize: "12px",
        paddingX: "0.625rem",
        paddingY: "0.375rem"
      },
      md: {
        fontSize: "14px",
        paddingX: "0.75rem",
        paddingY: "0.5rem"
      },
      lg: {
        fontSize: "16px",
        paddingX: "0.875rem",
        paddingY: "0.625rem"
      },
      borderRadius: "{border.radius.xs}",
      focusRing: {
        width: "0 !important",
        style: "none !important",
        color: "transparent !important",
        offset: "0 !important" ,
        shadow: "none !important"
      },
      transitionDuration: "{transition.duration}"
    },
    // Simplified color schemes
    colorScheme: {
      light: {
        surface: {
          0: "#ffffff",
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          500: "#64748b",
          800: "#1e293b",
          900: "#0f172a"
        },
        primary: {
          color: "#1e5ad0",
          contrastColor: "#ffffff",
          hoverColor: "#113380",
          activeColor: "#0b2058"
        }
      },
      dark: {
        surface: {
          0: "#0f172a",
          100: "#1a2539",
          300: "#2d3f61",
          500: "#4e659f",
          900: "#d2dcf5"
        },
        primary: {
          color: "#5c9eff",
          contrastColor: "#020617",
          hoverColor: "#85baff",
          activeColor: "#add1ff"
        }
      }
    }
  },
  components: {
    // Global component settings
    global: {
      fontFamily: "Avenir, sans-serif",
      fontSize: "16px"
    },
    
    // Focused component styling (keeping only what's essential)
    checkbox: {
      root: {
        width : "1.30rem !important",
        height : "1.30rem !important",
        transitionDuration: "0.2s",
         background: "#ffffff",
         checked:{
          background: "{primitive.colors.semantic.primary}" ,
          hover : {
            background: "{primitive.colors.semantic.primaryHover}" 
          },
        
         },
         border: {
          radius :"4px"
        },
        disabled : {
          background :"{primitive.colors.semantic.checkboxDisabled}" 
        },
        invalid : {
          boroder :{
            color:"{primitive.colors.semantic.errorBg}"
          }
        }
      },
      box: {
        width: "18px",
        height: "18px",
      }
    },
    
    // Core component styling
    button: {
      root: {
        borderRadius: "4px",
        gap: "0.5rem",
        paddingX: "0.75rem",
        paddingY: "0.5rem",
        fontSize: "14px",
        fontFamily: "Avenir, sans-serif",
        transition: "all 0.2s ease-in-out",
        label: {
          fontWeight: "{fontWeight.heavy}",
          fontSize: "14px"
        },
        raisedShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        focusRing: {
          width: "0",
          style: "none",
          color: "transparent",
          offset: "0",
          shadow: "none"
        }
      },
      colorScheme: {
        light: {
          root: {
            primary: {
              background: "#002496",
              hoverBackground: "#0073CF",
              activeBackground: "#0b2058",
              borderColor: "#1e5ad0",
              color: "#ffffff"
            },
            secondary: {
              background: "#ffffff",
              hoverBackground: "#f9fafb",
              activeBackground: "#f1f5f9",
              borderColor: "#d1d5db",
              color: "#717274"
            },
            danger: {
              background: "#c41c1c",
              hoverBackground: "#e74c4c",
              activeBackground: "#b91c1c",
              borderColor: "#c41c1c",
              color: "#ffffff"
            },
          }
        }
      },
    },
    select :{
      root :{
         background :"#ffffff",
         border :{
          radius :"4px",
          color:"{primitive.colors.semantic.borderColor}"
         },
         option:{
          color:"#171718 !important",
          focus:{
            background :"{primitive.colors.semantic.dropdownHover} !important",
             color :"#717274 !important",
          },
          selected :{
            background :"primitive.colors.semantic.dropdownHover} !important"
          }
         },
         color:"#171718 !important",
         focusRing :{
              width: "0 !important",
              style: "none !important",
              color: "transparent !important",
              offset: "0 !important",
              shadow: "none !important"
          }
         }
      },
      tabs: {
        tab: {
          active: {
            color: '#171718 !important',
            border: {
              color: '#FECB00 !important'  // Use your Penske Yellow from the palette
            }
          },
          color :"#717274 !important"
        },
        active: {
          bar: {
            height:'5px !important',
            background: '#FECB00 !important'  // This controls the active indicator

          }
        }
      }
//tabs.tab.active.background
    // chip : {
    //   root :{
    //      background : 'gray !important',
    //      color:"red !important",
    //   }
    // }
    
    // card: {
    //   root: {
    //     background: "#ffffff",
    //     borderRadius: "4px",
    //     color: "#1e293b",
    //     shadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
    //     fontSize: "14px"
    //   },
    //   body: {
    //     padding: "1rem",
    //     gap: "0.5rem",
    //     fontSize: "14px"
    //   },
    //   title: {
    //     fontSize: "1.25rem",
    //     fontWeight: "{fontWeight.medium}"
    //   },
    //   subtitle: {
    //     color: "#64748b",
    //     fontSize: "14px"
    //   }
    // },
    
    // datatable: {
    //   root: {
    //     transitionDuration: "0.2s",
    //     fontSize: "14px"
    //   },
    //   header: {
    //     background: "#ffffff",
    //     borderColor: "#e2e8f0",
    //     color: "#1e293b",
    //     borderWidth: "0 0 1px 0",
    //     padding: "0.75rem 1rem"
    //   },
    //   headerCell: {
    //     background: "#ffffff",
    //     hoverBackground: "#f1f5f9",
    //     selectedBackground: "#dbeafe",
    //     borderColor: "#e2e8f0",
    //     color: "#1e293b",
    //     padding: "0.75rem 1rem",
    //     fontSize: "16px",
    //     focusRing: {
    //       width: "0",
    //       style: "none",
    //       color: "transparent",
    //       offset: "0",
    //       shadow: "none"
    //     }
    //   },
    //   columnTitle: {
    //     fontWeight: "{fontWeight.medium}",
    //     fontSize: "16px"
    //   },
    //   row: {
    //     background: "#ffffff",
    //     hoverBackground: "#f8fafc",
    //     selectedBackground: "#dbeafe",
    //     color: "#1e293b",
    //     fontSize: "14px"
    //   },
    //   bodyCell: {
    //     borderColor: "#e2e8f0",
    //     padding: "0.75rem 1rem",
    //     fontSize: "14px"
    //   }
    // },
    
    // tabmenu: {
    //   root: {
    //     transitionDuration: "0.2s",
    //     fontSize: "14px"
    //   },
    //   tablist: {
    //     borderWidth: "0 0 1px 0",
    //     background: "#ffffff",
    //     borderColor: "#e2e8f0"
    //   },
    //   item: {
    //     background: "#ffffff",
    //     hoverBackground: "#f1f5f9",
    //     activeBackground: "#1e5ad0",
    //     borderWidth: "0 0 3px 0",
    //     borderColor: "transparent",
    //     hoverBorderColor: "#cbd5e1",
    //     activeBorderColor: "#1e5ad0",
    //     color: "#64748b",
    //     hoverColor: "#1e293b",
    //     activeColor: "#ffffff",
    //     padding: "0.75rem 1rem",
    //     fontWeight: "{fontWeight.heavy}",
    //     margin: "0",
    //     gap: "0.5rem",
    //     fontSize: "16px"
    //   }
    // },
    
    // inputtext: {
    //   root: {
    //     background: "#ffffff",
    //     disabledBackground: "#f1f5f9",
    //     borderColor: "#cbd5e1",
    //     hoverBorderColor: "#94a3b8",
    //     focusBorderColor: "#3376ff",
    //     color: "#1e293b",
    //     paddingX: "0.75rem",
    //     paddingY: "0.5rem",
    //     borderRadius: "4px",
    //     fontSize: "14px",
    //     focusRing: {
    //       width: "0",
    //       style: "none",
    //       color: "transparent",
    //       offset: "0",
    //       shadow: "none"
    //     }
    //   }
    // },
    
    // badge: {
    //   root: {
    //     borderRadius: "4px",
    //     padding: "0 0.5rem",
    //     fontSize: "0.75rem",
    //     fontWeight: "{fontWeight.heavy}",
    //     minWidth: "1.5rem",
    //     height: "1.5rem"
    //   }
    // }
  }
});

export default TruckRentalPreset;