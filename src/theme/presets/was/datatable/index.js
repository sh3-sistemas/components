export default {
  root: ({ props }) => ({
    class: [
      "relative",

      // Flex & Alignment
      { "flex flex-col": props.scrollable && props.scrollHeight === "flex" },

      // Size
      { "h-full": props.scrollable && props.scrollHeight === "flex" },

      // Shape
      "border-spacing-0 border-separate",
    ],
  }),
  loadingoverlay: {
    class: [
      // Position
      "absolute",
      "top-0 left-0",
      "z-[90]",

      // Flex & Alignment
      "flex items-center justify-center",

      // Size
      "w-full h-full",

      // Color
      //"bg-mercury-100/40 dark:bg-mercury-800/40",
      "bg-mercury-500/70 dark:bg-mercury-700/70 backdrop-blur-sm",

      // Transition
      "transition duration-200",
    ],
  },
  loadingicon: {
    class: "w-8 h-8 animate-spin text-selenium-600",
  },
  wrapper: ({ props }) => ({
    class: [
      {
        relative: props.scrollable,
        "flex flex-col grow": props.scrollable && props.scrollHeight === "flex",
      },

      // Size
      { "h-full": props.scrollable && props.scrollHeight === "flex" },
    ],
  }),
  header: ({ props }) => ({
    class: [
      "font-semibold",

      // Shape
      props.showGridlines ? "border-b" : "border-b border-x-0",

      // Spacing
      "py-3.5 px-3",

      // Color
      "bg-white dark:bg-mercury-800",
      "border-mercury-300 dark:border-mercury-600",
      "text-mercury-700 dark:text-white/80",
    ],
  }),
  table: {
    class: "w-full border-spacing-0 border-separate",
  },
  thead: ({ context }) => ({
    class: [
      {
        "top-0 z-40 sticky": context.scrollable,
      },
    ],
  }),
  tbody: ({ instance, context }) => ({
    class: [
      "border-t border-mercury-300 dark:border-mercury-600",
      {
        "sticky z-20 font-semibold": instance.frozenRow && context.scrollable,
      },
      "bg-white dark:bg-mercury-800",
    ],
  }),
  tfoot: ({ context }) => ({
    class: [
      {
        "bottom-0 z-0": context.scrollable,
      },
    ],
  }),
  footer: {
    class: [
      "font-semibold",

      // Shape
      "border-t-0 border-t border-x-0",

      // Spacing
      "p-4",

      // Color
      "bg-white dark:bg-mercury-800",
      "border-mercury-200 dark:border-mercury-700",
      "text-mercury-700 dark:text-white/80",
    ],
  },
  column: {
    headercell: ({ context, props }) => ({
      class: [
        "font-semibold",
        "text-sm",

        // Position
        { "sticky z-20 border-b": props.frozen || props.frozen === "" },
        { relative: context.resizable },

        // Alignment
        "text-left",

        // Shape
        { "border-r last:border-r-0": context?.showGridlines },
        "border-0 border-b border-solid",

        // Spacing
        context?.size === "small"
          ? "py-2.5 px-2"
          : context?.size === "large"
            ? "py-5 px-4"
            : "py-3.5 px-3",
        // Color
        (props.sortable === "" || props.sortable) && context.sorted
          ? "text-selenium-500 bg-mercury-100"
          : "bg-mercury-100 text-mercury-700",
        (props.sortable === "" || props.sortable) && context.sorted
          ? "dark:text-selenium-400"
          : "dark:text-white/80 dark:bg-mercury-800",
        "border-mercury-200 dark:border-mercury-700 ",

        // States
        "focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-selenium-500 dark:focus-visible:ring-selenium-400",

        // Transition
        { "transition duration-200": props.sortable === "" || props.sortable },

        // Misc
        { "cursor-pointer": props.sortable === "" || props.sortable },
        {
          "overflow-hidden space-nowrap bg-clip-padding": context.resizable,
        },
      ],
    }),
    headercontent: {
      class: "flex items-center",
    },
    sort: ({ context }) => ({
      class: [
        context.sorted ? "text-selenium-500" : "text-mercury-700",
        context.sorted ? "dark:text-selenium-400" : "dark:text-white/80",
      ],
    }),
    bodycell: ({ props, context, state, parent }) => ({
      class: [
        //Position
        { "sticky box-border border-b": parent.instance.frozenRow },
        {
          "sticky box-border border-b z-20":
            props.frozen || props.frozen === "",
        },
        "text-sm",

        // Alignment
        "text-left",

        "border-0 border-b border-solid",
        { "last:border-r-0 border-r border-b": context?.showGridlines },
        {
          "bg-white dark:bg-mercury-800":
            parent.instance.frozenRow || props.frozen || props.frozen === "",
        },

        // Spacing
        { "py-2.5 px-2": context?.size === "small" && !state["d_editing"] },
        { "py-5 px-4": context?.size === "large" && !state["d_editing"] },
        {
          "py-3.5 px-3":
            context?.size !== "large" &&
            context?.size !== "small" &&
            !state["d_editing"],
        },
        { "py-[0.6rem] px-2": state["d_editing"] },

        // Color
        "border-mercury-200 dark:border-mercury-700",

        // Misc
        "space-nowrap",
      ],
    }),
    footercell: ({ context }) => ({
      class: [
        // Font
        "font-bold",

        // Alignment
        "text-left",

        // Shape
        { "border-r last:border-r-0": context?.showGridlines },
        "border-0 border-t border-solid",

        // Spacing
        context?.size === "small"
          ? "p-2"
          : context?.size === "large"
            ? "p-5"
            : "p-4",

        // Color
        "border-mercury-200 dark:border-mercury-700",
        "text-mercury-700 dark:text-white/80",
        "bg-white dark:bg-mercury-800",
      ],
    }),
    sorticon: {
      class: "ml-2",
    },
    sortbadge: {
      class: [
        // Flex & Alignment
        "flex items-center justify-center align-middle",

        // Shape
        "rounded-full",

        // Size
        "w-[1.143rem] leading-[1.143rem]",

        // Spacing
        "ml-2",

        // Color
        "text-selenium-700 dark:text-white",
        "bg-selenium-50 dark:bg-selenium-400/30",
      ],
    },
    columnfilter: {
      class: "inline-flex items-center ml-auto",
    },
    filteroverlay: {
      class: [
        // Position
        "absolute top-0 left-0",
        "mt-2",

        // Shape
        "border-0",
        "rounded-md",
        "shadow-md",

        // Size
        "min-w-[12.5rem]",

        // Color
        "bg-white dark:bg-mercury-800",
        "text-mercury-800 dark:text-white/80",
        // 'ring-1 ring-inset ring-mercury-300 dark:ring-mercury-700'
      ],
    },
    filtermatchmodedropdown: {
      root: ({ state }) => ({
        class: [
          // Display and Position
          "flex",
          "relative",

          // Spacing
          "mb-2",

          // Shape
          "w-full",
          "rounded-md",
          "shadow-sm",

          // Color and Background
          "bg-white dark:bg-mercury-900",
          {
            "ring-1 ring-inset ring-mercury-300 dark:ring-mercury-700":
              !state.focused,
          },

          // Transitions
          "transition-all",
          "duration-200",

          // States
          {
            "outline-none outline-offset-0 ring-2 ring-selenium-500 dark:ring-selenium-400":
              state.focused,
          },

          // Misc
          "cursor-default",
          "select-none",
        ],
      }),
      input: ({ props }) => ({
        class: [
          //Font
          "font-sans",
          "leading-6",
          "sm:text-sm",

          // Display
          "block",
          "flex-auto",

          // Color and Background
          "bg-transparent",
          "border-0",
          {
            "text-mercury-800 dark:text-white/80": props.modelValue,
            "text-mercury-400 dark:text-mercury-500": !props.modelValue,
          },
          "placeholder:text-mercury-400 dark:placeholder:text-mercury-500",

          "py-1.5 px-3",

          //Shape
          "rounded-none",

          // Transitions
          "transition",
          "duration-200",

          // States
          "focus:outline-none focus:shadow-none",

          // Misc
          "relative",
          "cursor-pointer",
          "overflow-hidden overflow-ellipsis",
          "whitespace-nowrap",
          "appearance-none",
        ],
      }),
    },
    filterrowitems: {
      class: "py-1 list-none m-0",
    },
    filterrowitem: ({ context }) => ({
      class: [
        // Font
        "sm:text-sm",
        "leading-none",
        {
          "font-normal": !context?.highlighted,
          "font-bold": context?.highlighted,
        },

        // Position
        "relative",

        // Shape
        "border-0",
        "rounded-none",

        // Spacing
        "m-0",
        "py-2 px-4",

        // Color
        { "text-mercury-700 dark:text-white/80": !context?.highlighted },
        {
          "bg-white dark:bg-mercury-800 text-mercury-700 dark:text-white/80":
            !context?.highlighted,
        },
        {
          "bg-selenium-500 dark:bg-selenium-400 text-white dark:text-mercury-700":
            context?.highlighted,
        },

        //States
        "hover:bg-selenium-500 dark:hover:bg-selenium-400 hover:text-white dark:hover:text-mercury-700",
        "focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-selenium-500 dark:focus-visible:ring-selenium-400",

        // Transitions
        "transition-shadow",
        "duration-200",

        // Misc
        "cursor-pointer",
        "overflow-hidden",
        "whitespace-nowrap",
      ],
    }),
    filteroperator: {
      class: [
        // Spacing
        "p-4",

        // Shape
        "border-b border-solid",
        "rounded-t-md",

        // Color
        "text-mercury-700 dark:text-white/80",
        "border-mercury-200 dark:border-mercury-700",
      ],
    },
    filteroperatordropdown: {
      root: ({ state }) => ({
        class: [
          // Display and Position
          "flex",
          "relative",

          // Shape
          "w-full",
          "rounded-md",
          "shadow-sm",

          // Color and Background
          "text-mercury-800 dark:text-white/80",
          "placeholder:text-mercury-400 dark:placeholder:text-mercury-500",
          "bg-white dark:bg-mercury-900",
          {
            "ring-1 ring-inset ring-mercury-300 dark:ring-mercury-700":
              !state.focused,
          },

          // Transitions
          "transition-all",
          "duration-200",

          // States
          {
            "outline-none outline-offset-0 ring-2 ring-selenium-500 dark:ring-selenium-400":
              state.focused,
          },

          // Misc
          "cursor-default",
          "select-none",
        ],
      }),
      input: {
        class: [
          //Font
          "font-sans",
          "leading-6",
          "sm:text-sm",

          // Display
          "block",
          "flex-auto",

          // Color and Background
          "bg-transparent",
          "border-0",
          "text-mercury-800 dark:text-white/80",
          "placeholder:text-mercury-400 dark:placeholder:text-mercury-500",

          "py-1.5 px-3",

          //Shape
          "rounded-none",

          // Transitions
          "transition",
          "duration-200",

          // States
          "focus:outline-none focus:shadow-none",

          // Misc
          "relative",
          "cursor-pointer",
          "overflow-hidden overflow-ellipsis",
          "whitespace-nowrap",
          "appearance-none",
        ],
      },
      trigger: {
        class: [
          // Flexbox
          "flex items-center justify-center",
          "shrink-0",

          // Color and Background
          "bg-transparent",
          "text-mercury-500",

          // Size
          "w-12",

          // Shape
          "rounded-tr-md",
          "rounded-br-md",
        ],
      },
      panel: {
        class: [
          // Position
          "absolute top-0 left-0",
          "mt-2",

          // Shape
          "border-0",
          "rounded-md",
          "shadow-md",

          // Size
          "min-w-[12.5rem]",

          // Color
          "bg-white dark:bg-mercury-800",
          "text-mercury-800 dark:text-white/80",
          "ring-1 ring-inset ring-mercury-300 dark:ring-mercury-700",
        ],
      },
      list: {
        class: "py-1 list-none m-0",
      },
      item: ({ context }) => ({
        class: [
          // Font
          "sm:text-sm",
          "leading-none",
          {
            "font-normal": !context?.highlighted,
            "font-bold": context?.highlighted,
          },

          // Position
          "relative",

          // Shape
          "border-0",
          "rounded-none",

          // Spacing
          "m-0",
          "py-2 px-4",

          // Color
          { "text-mercury-700 dark:text-white/80": !context?.highlighted },
          {
            "bg-white dark:bg-mercury-800 text-mercury-700 dark:text-white/80":
              !context?.highlighted,
          },
          {
            "bg-selenium-500 dark:bg-selenium-400 text-white dark:text-mercury-700":
              context?.highlighted,
          },

          //States
          "hover:bg-selenium-500 dark:hover:bg-selenium-400 hover:text-white dark:hover:text-mercury-700",

          // Transitions
          "transition-shadow",
          "duration-200",

          // Misc
          "cursor-pointer",
          "overflow-hidden",
          "whitespace-nowrap",
        ],
      }),
    },
    filterconstraint: {
      class: [
        // Spacing
        "p-4",

        // Shape
        "border-b border-solid",

        // Color
        "border-mercury-200 dark:border-mercury-700",
      ],
    },
    filteraddrule: {
      class: "pt-4 pb-2 px-4",
    },
    filteraddrulebutton: {
      root: {
        class: [
          "relative",

          // Alignments
          "items-center inline-flex text-center align-bottom justify-center",

          // Sizes & Spacing
          "text-sm px-2.5 py-1.5 min-w-[2rem] w-full",

          // Shape
          "rounded-md",

          "bg-transparent border-transparent",
          "text-selenium-500 dark:text-selenium-400",
          "hover:bg-selenium-300/20",
          "focus:outline-none focus:outline-offset-0 focus:ring-2 focus:ring-offset-current",
          "focus:ring-selenium-500 dark:focus:ring-selenium-400",

          // Transitions
          "transition duration-200 ease-in-out",

          // Misc
          "cursor-pointer overflow-hidden select-none",
        ],
      },
      label: {
        class: "flex-auto grow-0",
      },
      icon: {
        class: "mr-2",
      },
    },
    filterremovebutton: {
      root: {
        class: [
          "relative",

          // Alignments
          "items-center inline-flex text-center align-bottom justify-center",

          // Sizes & Spacing
          "text-sm px-2.5 py-1.5 min-w-[2rem] w-full mt-2",

          // Shape
          "rounded-md",

          "bg-transparent border-transparent",
          "text-red-500 dark:text-red-400",
          "hover:bg-red-300/20",
          "focus:outline-none focus:outline-offset-0 focus:ring-2 focus:ring-offset-current",
          "focus:ring-red-500 dark:focus:ring-red-400",

          // Transitions
          "transition duration-200 ease-in-out",

          // Misc
          "cursor-pointer overflow-hidden select-none",
        ],
      },
      label: {
        class: "flex-auto grow-0",
      },
      icon: {
        class: "mr-2",
      },
    },
    filterbuttonbar: {
      class: [
        // Flex & Alignment
        "flex items-center justify-between",

        // Space
        "py-4 px-4",
      ],
    },
    filterclearbutton: {
      root: {
        class: [
          "relative",

          // Alignments
          "items-center inline-flex text-center align-bottom justify-center",

          // Sizes & Spacing
          "text-sm px-2.5 py-1.5 min-w-[2rem]",

          // Shape
          "rounded-md shadow-sm border-0",

          "text-selenium-500 ring-1 ring-selenium-500 hover:bg-selenium-300/20",
          "hover:bg-selenium-300/20",
          "focus:ring-selenium-500 dark:focus:ring-selenium-400",

          // Transitions
          "transition duration-200 ease-in-out",

          // Misc
          "cursor-pointer overflow-hidden select-none",
        ],
      },
    },
    filterapplybutton: {
      root: {
        class: [
          "relative",

          // Alignments
          "items-center inline-flex text-center align-bottom justify-center",

          // Sizes & Spacing
          "text-sm px-2.5 py-1.5 min-w-[2rem]",

          // Shape
          "rounded-md border-0",

          "text-white dark:text-mercury-900",
          "bg-selenium-500 dark:bg-selenium-400",
          "ring-1 ring-selenium-500 dark:ring-selenium-400",
          "hover:bg-selenium-600 dark:hover:bg-selenium-300 hover:ring-selenium-600 dark:hover:ring-selenium-300",
          "focus:ring-selenium-500 dark:focus:ring-selenium-400",

          // Transitions
          "transition duration-200 ease-in-out",

          // Misc
          "cursor-pointer overflow-hidden select-none",
        ],
      },
    },
    filtermenubutton: ({ context }) => ({
      class: [
        "relative",
        // Flex & Alignment
        "inline-flex items-center justify-center",

        // Size
        "w-8 h-8",

        // Spacing
        "ml-2",

        // Shape
        "rounded-full",

        // Color
        { "bg-selenium-50 text-selenium-700": context.active },
        "dark:text-white/70 dark:hover:text-white/80 dark:bg-mercury-800",

        // States
        "hover:text-mercury-700 hover:bg-mercury-300/20",
        "focus:outline-none focus:outline-offset-0 focus:ring-2 focus:ring-inset focus:ring-selenium-500 dark:focus:ring-selenium-400",

        // Transition
        "transition duration-200",

        // Misc
        "cursor-pointer no-underline overflow-hidden",
      ],
    }),
    headerfilterclearbutton: ({ context }) => ({
      class: [
        "relative",

        // Flex & Alignment
        "inline-flex items-center justify-center",
        "text-left",

        // Shape
        "border-none",

        // Spacing
        "m-0 p-0 ml-2",

        // Color
        "bg-transparent",

        // Misc
        "cursor-pointer no-underline overflow-hidden select-none",
        {
          invisible: !context.hidden,
        },
      ],
    }),
    rowtoggler: {
      class: [
        "relative",

        // Flex & Alignment
        "inline-flex items-center justify-center",
        "text-left",

        // Spacing
        "m-0 p-0",

        // Size
        "w-8 h-8",

        // Shape
        "border-0 rounded-full",

        // Color
        "text-mercury-500 dark:text-white/70",
        "bg-transparent",
        "focus-visible:outline-none focus-visible:outline-offset-0",
        "focus-visible:ring-2 focus-visible:ring-selenium-500 dark:focus-visible:ring-selenium-400",

        // Transition
        "transition duration-200",

        // Misc
        "overflow-hidden",
        "cursor-pointer select-none",
      ],
    },
    columnresizer: {
      class: [
        "block",

        // Position
        "absolute top-0 right-0",

        // Sizing
        "w-2 h-full",

        // Spacing
        "m-0 p-0",

        // Color
        "border border-transparent",

        // Misc
        "cursor-col-resize",
      ],
    },
    rowreordericon: {
      class: "cursor-move",
    },
    roweditorinitbutton: {
      class: [
        "relative",

        // Flex & Alignment
        "inline-flex items-center justify-center",
        "text-left",

        // Size
        "w-8 h-8",

        // Shape
        "border-0 rounded-full",

        // Color
        "text-mercury-700 dark:text-white/70",
        "border-transparent",

        // States
        "focus:outline-none focus:outline-offset-0 focus:ring-2 focus:ring-inset focus:ring-selenium-500 dark:focus:ring-selenium-400",
        "hover:text-mercury-700 hover:bg-mercury-300/20",

        // Transition
        "transition duration-200",

        // Misc
        "overflow-hidden",
        "cursor-pointer select-none",
      ],
    },
    roweditorsavebutton: {
      class: [
        "relative",

        // Flex & Alignment
        "inline-flex items-center justify-center",
        "text-left",

        // Size
        "w-8 h-8",

        // Shape
        "border-0 rounded-full",

        // Color
        "text-mercury-700 dark:text-white/70",
        "border-transparent",

        // States
        "focus:outline-none focus:outline-offset-0 focus:ring-2 focus:ring-inset focus:ring-selenium-500 dark:focus:ring-selenium-400",
        "hover:text-mercury-700 hover:bg-mercury-300/20",

        // Transition
        "transition duration-200",

        // Misc
        "overflow-hidden",
        "cursor-pointer select-none",
      ],
    },
    roweditorcancelbutton: {
      class: [
        "relative",

        // Flex & Alignment
        "inline-flex items-center justify-center",
        "text-left",

        // Size
        "w-8 h-8",

        // Shape
        "border-0 rounded-full",

        // Color
        "text-mercury-700 dark:text-white/70",
        "border-transparent",

        // States
        "focus:outline-none focus:outline-offset-0 focus:ring-2 focus:ring-inset focus:ring-selenium-500 dark:focus:ring-selenium-400",
        "hover:text-mercury-700 hover:bg-mercury-300/20",

        // Transition
        "transition duration-200",

        // Misc
        "overflow-hidden",
        "cursor-pointer select-none",
      ],
    },
    radiobuttonwrapper: {
      class: [
        "relative",

        // Flex & Alignment
        "inline-flex align-bottom",

        // Size
        "w-4 h-4",

        // Misc
        "cursor-pointer select-none",
      ],
    },
    rowRadioButton: {
      root: {
        class: [
          "relative",

          // Flexbox & Alignment
          "inline-flex",
          "align-bottom",

          // Size
          "w-4 h-4",

          // Misc
          "cursor-default",
          "select-none",
        ],
      },
      box: ({ props }) => ({
        class: [
          // Flexbox
          "flex justify-center items-center",

          // Size
          "w-4 h-4",
          "text-sm",
          "font-medium",

          // Shape
          "border-2",
          "rounded-full",

          // Transition
          "transition duration-200 ease-in-out",

          // Colors
          {
            "text-mercury-700 dark:text-white/80": !props.modelValue,
            "bg-mercury-0 dark:bg-mercury-900": !props.modelValue,
            "border-mercury-300 dark:border-mercury-700": !props.modelValue,
            "border-selenium-500 dark:border-selenium-400": props.modelValue,
            "bg-selenium-500 dark:bg-selenium-400": props.modelValue,
          },

          // States
          {
            "peer-hover:border-selenium-500 dark:peer-hover:border-selenium-400":
              !props.disabled,
            "peer-hover:border-selenium-600 dark:peer-hover:border-selenium-300 peer-hover:bg-selenium-600 dark:peer-hover:bg-selenium-300":
              !props.disabled && props.modelValue,
            "peer-focus-visible:border-selenium-500 dark:peer-focus-visible:border-selenium-400 peer-focus-visible:ring-2 peer-focus-visible:ring-selenium-400/20 dark:peer-focus-visible:ring-selenium-300/20":
              !props.disabled,
            "opacity-60 cursor-default": props.disabled,
          },
        ],
      }),
      input: {
        class: [
          "peer",

          // Size
          "w-full ",
          "h-full",

          // Position
          "absolute",
          "top-0 left-0",
          "z-10",

          // Spacing
          "p-0",
          "m-0",

          // Shape
          "opacity-0",
          "rounded-md",
          "outline-none",
          "border-2 border-mercury-300 dark:border-mercury-700",

          // Misc
          "appearance-none",
          "cursor-default",
        ],
      },
      icon: ({ props }) => ({
        class: [
          "block",

          // Shape
          "rounded-full",

          // Size
          "w-2 h-2",

          // Colors
          "bg-white dark:bg-mercury-900",

          // Conditions
          {
            "backface-hidden scale-10 invisible": !props.modelValue,
            "transform visible scale-[1.1]": props.modelValue,
          },

          // Transition
          "transition duration-200",
        ],
      }),
    },
    headerCheckbox: {
      root: {
        class: [
          "relative",

          // Alignment
          "inline-flex",
          "align-bottom",

          // Size
          "w-4",
          "h-4",

          // Misc
          "cursor-default",
          "select-none",
        ],
      },
      box: ({ props, context }) => ({
        class: [
          // Alignment
          "flex",
          "items-center",
          "justify-center",

          // Size
          "w-4",
          "h-4",

          // Shape
          "rounded",
          "border",

          // Colors
          "text-mercury-600",
          {
            "border-mercury-300 bg-white dark:border-mercury-700 dark:bg-mercury-900":
              !context.checked,
            "border-selenium-500 bg-selenium-500 dark:border-selenium-400 dark:bg-selenium-400":
              context.checked,
          },

          {
            "ring-2 ring-selenium-500 dark:ring-selenium-400":
              !props.disabled && context.focused,
            "cursor-default opacity-60": props.disabled,
          },

          // States
          {
            "peer-focus-visible:ring-2 peer-focus-visible:ring-selenium-500 dark:peer-focus-visible:ring-selenium-400":
              !props.disabled,
            "cursor-default opacity-60": props.disabled,
          },

          // Transitions
          "transition-colors",
          "duration-200",
        ],
      }),
      input: {
        class: [
          "peer",

          // Size
          "w-full ",
          "h-full",

          // Position
          "absolute",
          "top-0 left-0",
          "z-10",

          // Spacing
          "p-0",
          "m-0",

          // Shape
          "rounded",
          "border",

          // Shape
          "opacity-0",
          "rounded-md",
          "outline-none",
          "border-2 border-mercury-300 dark:border-mercury-700",

          // Misc
          "appearance-none",
        ],
      },
      icon: {
        class: [
          // Font
          "text-normal",

          // Size
          "w-3",
          "h-3",

          // Colors
          "text-white dark:text-mercury-900",

          // Transitions
          "transition-all",
          "duration-200",
        ],
      },
    },
    rowCheckbox: {
      root: {
        class: [
          "relative",

          // Alignment
          "inline-flex",
          "align-bottom",

          // Size
          "w-4",
          "h-4",

          // Misc
          "cursor-default",
          "select-none",
        ],
      },
      box: ({ props, context }) => ({
        class: [
          // Alignment
          "flex",
          "items-center",
          "justify-center",

          // Size
          "w-4",
          "h-4",

          // Shape
          "rounded",
          "border",

          // Colors
          "text-mercury-600",
          {
            "border-mercury-300 bg-white dark:border-mercury-700 dark:bg-mercury-900":
              !context.checked,
            "border-selenium-500 bg-selenium-500 dark:border-selenium-400 dark:bg-selenium-400":
              context.checked,
          },

          {
            "ring-2 ring-selenium-500 dark:ring-selenium-400":
              !props.disabled && context.focused,
            "cursor-default opacity-60": props.disabled,
          },

          // States
          {
            "peer-focus-visible:ring-2 peer-focus-visible:ring-selenium-500 dark:peer-focus-visible:ring-selenium-400":
              !props.disabled,
            "cursor-default opacity-60": props.disabled,
          },

          // Transitions
          "transition-colors",
          "duration-200",
        ],
      }),
      input: {
        class: [
          "peer",

          // Size
          "w-full ",
          "h-full",

          // Position
          "absolute",
          "top-0 left-0",
          "z-10",

          // Spacing
          "p-0",
          "m-0",

          // Shape
          "rounded",
          "border",

          // Shape
          "opacity-0",
          "rounded-md",
          "outline-none",
          "border-2 border-mercury-300 dark:border-mercury-700",

          // Misc
          "appearance-none",
        ],
      },
      icon: {
        class: [
          // Font
          "text-normal",

          // Size
          "w-3",
          "h-3",

          // Colors
          "text-white dark:text-mercury-900",

          // Transitions
          "transition-all",
          "duration-200",
        ],
      },
    },
    transition: {
      enterFromClass: "opacity-0 scale-y-[0.8]",
      enterActiveClass:
        "transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",
      leaveActiveClass: "transition-opacity duration-100 ease-linear",
      leaveToClass: "opacity-0",
    },
  },
  bodyrow: ({ context, props }) => ({
    class: [
      // Color
      "dark:text-white/80",
      {
        "bg-selenium-100 dark:bg-mercury-500/30":
          context.selected && context.stripedRows,
      },
      {
        "bg-selenium-100 dark:bg-selenium-500/30":
          context.selected && !context.stripedRows,
      },
      { "bg-white text-mercury-600 dark:bg-mercury-800": !context.selected },
      { "bg-mercury-100 dark:bg-mercury-800 z-20": props.frozenRow },
      {
        "odd:bg-white odd:text-mercury-600 dark:odd:bg-mercury-800 even:bg-mercury-50 even:text-mercury-600 dark:even:bg-mercury-900/60":
          context.stripedRows && !context.selected,
      },

      // State
      {
        "focus:outline-none focus:outline-offset-0 focus:ring-2 focus:ring-selenium-500 ring-inset dark:focus:ring-selenium-400":
          props.selectionMode,
      },
      {
        "hover:bg-mercury-300/20 hover:text-mercury-600":
          props.selectionMode && !context.selected,
      },

      // Transition
      {
        "transition duration-200":
          (props.selectionMode && !context.selected) || props.rowHover,
      },

      // Misc
      { "cursor-pointer": props.selectionMode },
    ],
  }),
  rowexpansion: {
    class: "bg-white dark:bg-mercury-800 text-mercury-600 dark:text-white/80",
  },
  rowgroupheader: {
    class: [
      "sticky z-20",
      "bg-white text-mercury-600 dark:text-white/70",
      "dark:bg-mercury-800",
    ],
  },
  rowgroupfooter: {
    class: [
      "sticky z-20",
      "bg-white text-mercury-600 dark:text-white/70",
      "dark:bg-mercury-800",
    ],
  },
  rowgrouptoggler: {
    class: [
      "relative",

      // Flex & Alignment
      "inline-flex items-center justify-center",
      "text-left",

      // Spacing
      "m-0 p-0",

      // Size
      "w-8 h-8",

      // Shape
      "border-0 rounded-full",

      // Color
      "text-mercury-500 dark:text-white/70",
      "bg-transparent",
      "focus-visible:outline-none focus-visible:outline-offset-0",
      "focus-visible:ring-2 focus-visible:ring-selenium-500 dark:focus-visible:ring-selenium-400",

      // Transition
      "transition duration-200",

      // Misc
      "overflow-hidden",
      "cursor-pointer select-none",
    ],
  },
  rowgrouptogglericon: {
    class: "inline-block w-4 h-4",
  },
  resizehelper: {
    class: "absolute hidden w-[2px] z-20 bg-selenium-500 dark:bg-selenium-400",
  },
};
