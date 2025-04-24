import { TruckRentalPreset } from '@penske-rentalnet/complex-ui';
import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

// Modified and optimized preset based on the truck rental UI
// const TruckRentalPreset = definePreset(Aura, {
//   primitive: {
//     borderRadius: {
//       none: "0",
//       xs: "2px",
//       sm: "4px",
//       md: "6px",
//       lg: "8px",
//       xl: "12px"
//     },
//     colors: {
//       white: "#FFFFFF",
//       grey: {
//         10: "#F7FAFD", // Frost Gray
//         20: "#F4F8FB",
//         30: "#F1F5F8",
//         40: "#EDF1F4",
//         50: "#E8ECEF",
//         80: "#D4D7D9",
//         110: "#B3B6B8",
//         130: "#959899",
//         150: "#717274",
//         160: "#5C5D5E",
//         170: "#464747",
//         180: "#2F2F30",
//         190: "#171718"
//       },
//       blue: {
//         0: "#F2F9FF",
//         25: "#EAF6FF", // Changed key to avoid decimal
//         10: "#D2ECFF",
//         30: "#96D0FC",
//         50: "#5FB3F5",
//         100: "#0073CF" // Bright Blue
//       },
//       reflexBlue: {
//         100: "#113BC2",
//         130: "#002496", // Reflex Blue (primary)
//         140: "#002084",
//         150: "#001B71",
//         160: "#00165C", // Midnight Blue
//         170: "#001146",
//         180: "#000B2F"
//       },
//       yellow: {
//         25: "#FFFCE6", // Changed key to avoid decimal
//         30: "#FFED7C",
//         60: "#FFD41C",
//         70: "#FECB00" // Penske Yellow (secondary)
//       },
//       green: {
//         0: "#F2FFF3",
//         140: "#068A15",
//         170: "#02490A"
//       },
//       orange: {
//         0: "#FFF9F2",
//         80: "#F59006",
//         dark: "#D14900"
//       },
//       red: {
//         0: "#FFF2F3",
//         100: "#D0021B",
//         140: "#8E0011"
//       },
//       semantic: {
//         primary: "{primitive.colors.reflexBlue.130}", // Reflex Blue
//         primaryHover: "{primitive.colors.blue.100}", // Bright Blue
//         secondary: "{primitive.colors.yellow.70}", // Penske Yellow
//         textColor: "{primitive.colors.grey.190}", // Grey-190
//         textMuted: "{primitive.colors.grey.150}", // Grey-150
//         textDisabled: "{primitive.colors.grey.130}", // Grey-130
//         borderColor: "{primitive.colors.grey.80}", // Grey-80
//         dividerColor: "{primitive.colors.grey.50}", // Grey-50
//         actionBarBg: "{primitive.colors.grey.40}", // Grey-40
//         success: "{primitive.colors.green.140}", // Green-140
//         warning: "{primitive.colors.orange.80}", // Orange-80
//         error: "{primitive.colors.red.100}", // Red-100
//         successBg: "{primitive.colors.green.0}", // Green-0
//         warningBg: "{primitive.colors.orange.0}", // Orange-0
//         errorBg: "{primitive.colors.red.0}", // Red-0
//         leftNavBg: "{primitive.colors.reflexBlue.170}", // RB-170
//         leftNavExpandedBg: "{primitive.colors.reflexBlue.160}", // RB-160
//         leftNavActiveBg: "{primitive.colors.reflexBlue.140}", // RB-140
//         leftNavSelected: "{primitive.colors.yellow.70}", // PY-70
//         wizardHeaderBg: "{primitive.colors.reflexBlue.130}", // RB-130
//         wizardSubnavBg: "{primitive.colors.white}", // White
//         wizardSubnavHighlight: "{primitive.colors.blue.0}", // BB-0
//         wizardFooterBg: "{primitive.colors.grey.30}", // BB-grey-30
//         checkboxDisabled: "{primitive.colors.grey.110}",
//         dropdownHover: "{primitive.colors.blue.25}"
//       }
//     }
//   },
//   semantic: {
//     focusRing: {
//       width: "2px",
//       style: "solid",
//       color: "{primitive.colors.semantic.primaryHover}",
//       offset: "2px",
//       shadow: "none"
//     },
//     fontFamily: "Avenir LT Std, sans-serif",
//     fontSize: "16px",
//     fontWeight: {
//       book: "200", // Adjusted for Avenir LT Std compatibility
//       medium: "500",
//       heavy: "700"
//     },
//     transitionDuration: "0.2s",
//     primary: {
//       50: "{primitive.colors.blue.0}",
//       100: "{primitive.colors.blue.10}",
//       500: "{primitive.colors.blue.50}",
//       600: "{primitive.colors.reflexBlue.100}",
//       700: "{primitive.colors.reflexBlue.130}",
//       900: "{primitive.colors.reflexBlue.180}"
//     },
//     formField: {
//       paddingX: "0.75rem",
//       paddingY: "0.5rem",
//       fontSize: "14px",
//       lineHeight: "1.5",
//       sm: {
//         fontSize: "12px",
//         paddingX: "0.625rem",
//         paddingY: "0.375rem"
//       },
//       md: {
//         fontSize: "14px",
//         paddingX: "0.75rem",
//         paddingY: "0.5rem"
//       },
//       lg: {
//         fontSize: "16px",
//         paddingX: "0.875rem",
//         paddingY: "0.625rem"
//       },
//       borderRadius: "{border.radius.xs}",
//       focusRing: {
//         width: "2px",
//         style: "solid",
//         color: "{primitive.colors.semantic.primaryHover}",
//         offset: "2px",
//         shadow: "none"
//       },
//       transitionDuration: "{transition.duration}"
//     },
//     colorScheme: {
//       light: {
//         surface: {
//           0: "{primitive.colors.white}",
//           50: "{primitive.colors.grey.10}",
//           100: "{primitive.colors.grey.30}",
//           200: "{primitive.colors.grey.50}",
//           300: "{primitive.colors.grey.80}",
//           500: "{primitive.colors.grey.150}",
//           800: "{primitive.colors.grey.180}",
//           900: "{primitive.colors.grey.190}"
//         },
//         primary: {
//           color: "{primitive.colors.reflexBlue.100}",
//           contrastColor: "{primitive.colors.white}",
//           hoverColor: "{primitive.colors.reflexBlue.130}",
//           activeColor: "{primitive.colors.reflexBlue.180}"
//         }
//       },
//       dark: {
//         surface: {
//           0: "{primitive.colors.grey.190}",
//           100: "{primitive.colors.grey.180}",
//           300: "{primitive.colors.grey.160}",
//           500: "{primitive.colors.grey.130}",
//           900: "{primitive.colors.blue.0}"
//         },
//         primary: {
//           color: "{primitive.colors.blue.50}",
//           contrastColor: "{primitive.colors.grey.190}",
//           hoverColor: "{primitive.colors.blue.30}",
//           activeColor: "{primitive.colors.blue.10}"
//         },
//         checkbox: {
//           root: {
//             background: "{primitive.colors.grey.160}",
//             checked: {
//               background: "{primitive.colors.blue.50}"
//             },
//             disabled: {
//               background: "{primitive.colors.grey.130}"
//             }
//           }
//         },
//         button: {
//           root: {
//             primary: {
//               background: "{primitive.colors.blue.50}",
//               hoverBackground: "{primitive.colors.blue.30}",
//               activeBackground: "{primitive.colors.blue.10}",
//               borderColor: "{primitive.colors.blue.50}",
//               color: "{primitive.colors.grey.190}"
//             }
//           }
//         },
//         inputtext: {
//           root: {
//             background: "{primitive.colors.grey.160}",
//             borderColor: "{primitive.colors.grey.130}",
//             color: "{primitive.colors.blue.0}"
//           }
//         }
//       }
//     }
//   },
//   components: {
//     global: {
//       fontFamily: "Avenir LT Std, sans-serif",
//       fontSize: "16px"
//     },
//     checkbox: {
//       root: {
//         width: "1.3rem",
//         height: "1.3rem",
//         transitionDuration: "0.2s",
//         background: "{primitive.colors.white}",
//         checked: {
//           background: "{primitive.colors.semantic.primary}",
//           hover: {
//             background: "{primitive.colors.semantic.primaryHover}"
//           }
//         },
//         border: {
//           radius: "4px",
//           color: "{primitive.colors.semantic.borderColor}"
//         },
//         disabled: {
//           background: "{primitive.colors.semantic.checkboxDisabled}"
//         },
//         invalid: {
//           border: {
//             color: "{primitive.colors.semantic.error} !important"
//           }
//         }
//       },
//       box: {
//         width: "18px",
//         height: "18px"
//       }
//     },
//     button: {
//       root: {
//         borderRadius: "4px",
//         gap: "0.5rem",
//         paddingX: "0.75rem",
//         paddingY: "0.5rem",
//         fontSize: "14px",
//         fontFamily: "Avenir LT Std, sans-serif",
//         transition: "all 0.2s ease-in-out",
//         label: {
//           fontWeight: "{fontWeight.heavy}",
//           fontSize: "14px"
//         },
//         raisedShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
//         focusRing: {
//           width: "2px",
//           style: "solid",
//           color: "{primitive.colors.semantic.primaryHover}",
//           offset: "2px",
//           shadow: "none"
//         }
//       },
//       colorScheme: {
//         light: {
//           root: {
//             primary: {
//               background: "{primitive.colors.semantic.primary}",
//               hoverBackground: "{primitive.colors.semantic.primaryHover}",
//               activeBackground: "{primitive.colors.reflexBlue.180}",
//               borderColor: "{primitive.colors.reflexBlue.100}",
//               color: "{primitive.colors.white}"
//             },
//             secondary: {
//               background: "{primitive.colors.white}",
//               hoverBackground: "{primitive.colors.grey.10}",
//               activeBackground: "{primitive.colors.grey.30}",
//               borderColor: "{primitive.colors.grey.80}",
//               color: "{primitive.colors.semantic.textMuted}"
//             },
//             danger: {
//               background: "{primitive.colors.red.100}",
//               hoverBackground: "{primitive.colors.red.140}",
//               activeBackground: "{primitive.colors.red.140}",
//               borderColor: "{primitive.colors.red.100}",
//               color: "{primitive.colors.white}"
//             }
//           }
//         }
//       }
//     },
//     select: {
//       root: {
//         background: "{primitive.colors.white}",
//         border: {
//           radius: "4px",
//           color: "{primitive.colors.semantic.borderColor}"
//         },
//         option: {
//           color: "{primitive.colors.semantic.textColor}",
//           focus: {
//             background: "{primitive.colors.semantic.dropdownHover} !important",
//             color: "{primitive.colors.semantic.textMuted}"
//           },
//           selected: {
//             background: "{primitive.colors.semantic.dropdownHover}"
//           }
//         },
//         color: "{primitive.colors.semantic.textColor}",
//         focusRing: {
//           width: "0px",
//           style: "none",
//           color: "transparent",
//           offset: "0px",
//           shadow: "none"
//         }
//       }
//     },
//     tabs: {
//       tab: {
//         active: {
//           color: "{primitive.colors.semantic.textColor}",
//           border: {
//             color: "{primitive.colors.semantic.secondary}"
//           }
//         },
//         color: "{primitive.colors.semantic.textMuted}"
//       },
//       active: {
//         bar: {
//           height: "5px",
//           background: "{primitive.colors.semantic.secondary}"
//         }
//       }
//     },
//     datepicker: {
//       panel: {
//         background: "{primitive.colors.white}",
//         color: "{primitive.colors.semantic.primaryHover}", // blue.100 (#0073CF)
//         shadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//         border: {
//           radius: "4px",
//           color: "{primitive.colors.semantic.borderColor}" // grey.80 (#D4D7D9)
//         },
//         fontSize: "14px" // Ensure panel-level font size
//       },
//       header: {
//         background: "{primitive.colors.white}",
//         color: "{primitive.colors.semantic.textColor}", // grey.190 (#171718)
//         border: {
//           color: "{primitive.colors.semantic.dividerColor}" // grey.50 (#E8ECEF)
//         },
//         padding: "0.75rem",
//         fontSize: "14px",
//         fontWeight: "{fontWeight.medium}" // 500
//       },
//       date: {
//         fontSize: "14px",
//         fontWeight: "{fontWeight.book}", // 200 (aligned with typography.scss)
//         padding: "0.2rem",
//         color: "{primitive.colors.semantic.textColor}", // grey.190 (#171718)
//         background: "{primitive.colors.white}",
//         hover: {
//           background: "{primitive.colors.semantic.dropdownHover}", // blue.25 (#EAF6FF)
//           color: "{primitive.colors.semantic.textColor}"
//         },
//         selected: {
//           background: "{primitive.colors.semantic.primaryHover}", // blue.100 (#0073CF)
//           color: "{primitive.colors.white}",
//           fontWeight: "{fontWeight.heavy}" // 700
//         },
//         disabled: {
//           color: "{primitive.colors.semantic.textDisabled}" // grey.130 (#959899)
//         }
//       },
//       week: {
//         day: {
//           font: {
//             size: "14px",
//             weight: "{fontWeight.book}" // 200
//           },
//           padding: "0.2rem",
//           color: "{primitive.colors.semantic.textMuted}" // grey.150 (#717274)
//         }
//       },
//       dayView: {
//         fontSize: "14px",
//         fontWeight: "{fontWeight.book}", // 200
//         background: "{primitive.colors.white}",
//         color: "{primitive.colors.semantic.textColor}" // grey.190 (#171718)
//       },
//       monthView: {
//         fontSize: "14px",
//         fontWeight: "{fontWeight.book}",
//         background: "{primitive.colors.white}",
//         color: "{primitive.colors.semantic.textColor}"
//       },
//       yearView: {
//         fontSize: "14px",
//         fontWeight: "{fontWeight.book}",
//         background: "{primitive.colors.white}",
//         color: "{primitive.colors.semantic.textColor}"
//       },
//       buttonbar: {
//         background: "{primitive.colors.white}",
//         border: {
//           color: "{primitive.colors.semantic.dividerColor}"
//         },
//         padding: "0.75rem"
//       },
//       focusRing: {
//         width: "2px",
//         style: "solid",
//         color: "{primitive.colors.semantic.primaryHover}",
//         offset: "2px",
//         shadow: "none"
//       }
//     },
//     inputtext: {
//       root: {
//         background: "{primitive.colors.white}",
//         disabledBackground: "{primitive.colors.grey.30}",
//         borderColor: "{primitive.colors.semantic.borderColor}",
//         hoverBorderColor: "{primitive.colors.grey.110}",
//         focusBorderColor: "{primitive.colors.semantic.primaryHover}",
//         color: "{primitive.colors.semantic.textColor}",
//         paddingX: "0.75rem",
//         paddingY: "0.5rem",
//         borderRadius: "4px",
//         fontSize: "14px",
//         fontFamily: "Avenir LT Std, sans-serif",
//         focusRing: {
//           width: "0px",
//           style: "none",
//           color: "{primitive.colors.semantic.primaryHover}",
//           offset: "0px",
//           shadow: "none"
//         }
//       }
//     },
//     card: {
//       root: {
//         background: "{primitive.colors.white}",
//         borderRadius: "4px",
//         color: "{primitive.colors.semantic.textColor}",
//         shadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
//         fontSize: "14px"
//       },
//       body: {
//         padding: "1rem",
//         gap: "0.5rem",
//         fontSize: "14px"
//       },
//       title: {
//         fontSize: "1.25rem",
//         fontWeight: "{fontWeight.medium}"
//       },
//       subtitle: {
//         color: "{primitive.colors.semantic.textMuted}",
//         fontSize: "14px"
//       }
//     },
//     datatable: {
//       root: {
//         transitionDuration: "0.2s",
//         fontSize: "14px"
//       },
//       header: {
//         background: "{primitive.colors.white}",
//         borderColor: "{primitive.colors.semantic.dividerColor}",
//         color: "{primitive.colors.semantic.textColor}",
//         borderWidth: "0 0 1px 0",
//         padding: "0.75rem 1rem"
//       },
//       headerCell: {
//         background: "{primitive.colors.white}",
//         hoverBackground: "{primitive.colors.grey.30}",
//         selectedBackground: "{primitive.colors.blue.0}",
//         borderColor: "{primitive.colors.semantic.dividerColor}",
//         color: "{primitive.colors.semantic.textColor}",
//         padding: "0.75rem 1rem",
//         fontSize: "16px",
//         focusRing: {
//           width: "2px",
//           style: "solid",
//           color: "{primitive.colors.semantic.primaryHover}",
//           offset: "2px",
//           shadow: "none"
//         }
//       },
//       columnTitle: {
//         fontWeight: "{fontWeight.medium}",
//         fontSize: "16px"
//       },
//       row: {
//         background: "{primitive.colors.white}",
//         hoverBackground: "{primitive.colors.grey.10}",
//         selectedBackground: "{primitive.colors.blue.0}",
//         color: "{primitive.colors.semantic.textColor}",
//         fontSize: "14px"
//       },
//       bodyCell: {
//         borderColor: "{primitive.colors.semantic.dividerColor}",
//         padding: "0.75rem 1rem",
//         fontSize: "14px"
//       }
//     },
//     tabmenu: {
//       root: {
//         transitionDuration: "0.2s",
//         fontSize: "14px"
//       },
//       tablist: {
//         borderWidth: "0 0 1px 0",
//         background: "{primitive.colors.white}",
//         borderColor: "{primitive.colors.semantic.dividerColor}"
//       },
//       item: {
//         background: "{primitive.colors.white}",
//         hoverBackground: "{primitive.colors.grey.30}",
//         activeBackground: "{primitive.colors.semantic.primary}",
//         borderWidth: "0 0 3px 0",
//         borderColor: "transparent",
//         hoverBorderColor: "{primitive.colors.grey.80}",
//         activeBorderColor: "{primitive.colors.semantic.primary}",
//         color: "{primitive.colors.semantic.textMuted}",
//         hoverColor: "{primitive.colors.semantic.textColor}",
//         activeColor: "{primitive.colors.white}",
//         padding: "0.75rem 1rem",
//         fontWeight: "{fontWeight.heavy}",
//         margin: "0",
//         gap: "0.5rem",
//         fontSize: "16px"
//       }
//     },
//     badge: {
//       root: {
//         borderRadius: "4px",
//         padding: "0 0.5rem",
//         fontSize: "0.75rem",
//         fontWeight: "{fontWeight.heavy}",
//         minWidth: "1.5rem",
//         height: "1.5rem"
//       }
//     }
//   }
// });

// export default TruckRentalPreset;

const ExtendedTruckRentalPreset = definePreset(TruckRentalPreset, {
  components: {
    global: {
      fontFamily: 'Avenir LT Std, sans-serif',
      fontSize: '16px',
    },
    button: {
      root: {
        borderRadius: '4px',
        gap: 'とのみ',
        paddingX: '0.75rem',
        paddingY: '0.5rem',
        fontSize: '14px',
        fontFamily: 'Avenir LT Std, sans-serif',
        transition: 'all 0.2s ease-in-out',
        label: {
          fontWeight: '{fontWeight.heavy}',
          fontSize: '14px',
        },
        raisedShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        focusRing: {
          width: '2px',
          style: 'solid',
          color: '{primitive.colors.semantic.primaryHover}',
          offset: '2px',
          shadow: 'none',
        },
      },
      colorScheme: {
        light: {
          root: {
            primary: {
              background: 'blue',
              hoverBackground: 'yellow',
              activeBackground: 'yellow',
              borderColor: 'yellow',
              color: 'yellow',
            },
          },
        },
      },
    },
    datatable: {
      root: {
        transitionDuration: "0.2s",
        fontSize: "14px"
      },
      header: {
        background: "red !important",
        borderColor: "red !impotant",
        color: "red !important",
        borderWidth: "0 0 1px 0",
        padding: "0.75rem 1rem",
        border:{
          color:'red'
        },
        cell:{
         hover:{
          background :'#96D0FC'
         }
        }
      }
      ,
      row :{
        // striped: {
        //   background: 'gray', // Even rows when stripedRows is true
        // },
        selected :{
          background: 'yellow', // Even rows when stripedRows is true
        } ,
        hover:{
          background :'#EAF6FF'
         }
      
      }
    }
     
  },
});

export default ExtendedTruckRentalPreset;