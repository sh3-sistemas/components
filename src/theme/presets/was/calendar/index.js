export default {
  root: ({ props }) => ({
    class: [
      // Display and Position
      "inline-flex",
      "max-w-full",
      "relative",
      "shadow-sm",
      "rounded-md",
      // Misc
      {
        "opacity-40 select-none pointer-events-none cursor-default":
          props.disabled,
      },
    ],
  }),
  input: ({ props }) => ({
    class: [
      // Font
      "font-sans leading-none sm:text-sm",

      // Colors
      "text-mercury-900 dark:text-white",
      "placeholder:text-mercury-400 dark:placeholder:text-mercury-500",
      "bg-white dark:bg-mercury-900",
      "ring-1 ring-inset ring-mercury-300 dark:ring-mercury-700 ring-offset-0",

      // Spacing
      "m-0 py-1.5 px-3",
      "-ml-[1px]",

      // Shape
      "appearance-none",
      { "rounded-md": !props.showIcon || props.iconDisplay == "input" },
      {
        "rounded-l-md  flex-1 pr-9 ":
          props.showIcon && props.iconDisplay !== "input",
      },
      {
        "rounded-md flex-1 pr-9":
          props.showIcon && props.iconDisplay === "input",
      },

      // Transitions
      "transition-colors",
      "duration-200",

      // States
      "outline-none focus:ring-selenium-500 dark:focus:ring-selenium-400",
    ],
  }),
  inputicon: {
    class: [
      "sm:text-sm",
      "absolute top-[50%] -mt-2",
      "text-mercury-600 dark:text-mercury-200",
      "right-[.75rem]",
    ],
  },
  dropdownbutton: {
    root: {
      class: [
        "relative text-sm",

        // Alignments
        "items-center inline-flex text-center align-bottom",

        // Shape
        "rounded-r-md",

        // Size
        "px-2.5 py-1.5 leading-none",

        // Colors
        "text-mercury-600 dark:text-mercury-100",
        "bg-mercury-100 dark:bg-mercury-800",
        "ring-1 ring-inset ring-mercury-300 dark:ring-mercury-700",

        // States
        "hover:bg-mercury-200 dark:hover:bg-mercury-700",
        "focus:outline-none focus:outline-offset-0 focus:ring-1",
        "focus:ring-selenium-500 dark:focus:ring-selenium-400",
      ],
    },
  },
  panel: ({ props }) => ({
    class: [
      // Display & Position
      {
        absolute: !props.inline,
        "inline-block": props.inline,
      },

      // Size
      { "w-auto p-2 ": !props.inline },
      { "min-w-[80vw] w-auto p-2 ": props.touchUI },
      { "p-2 min-w-full": props.inline },

      // Shape
      "rounded-lg",
      {
        "shadow-md ring-1": !props.inline,
      },

      // Colors
      "bg-white dark:bg-mercury-800",
      "ring-mercury-200 dark:ring-mercury-700",

      //misc
      { "overflow-x-auto": props.inline },
    ],
  }),
  datepickerMask: {
    class: [
      "fixed top-0 left-0 w-full h-full",
      "flex items-center justify-center",
      "bg-black bg-opacity-90",
    ],
  },
  header: ({ props }) => ({
    class: [
      //Font
      "font-semibold text-md",

      // Flexbox and Alignment
      "flex items-center justify-between",

      // Spacing
      "m-0",
      {
        "py-2 pb-4": !(props.numberOfMonths > 1),
        "py-2 pb-4": props.numberOfMonths > 1,
      },

      // Shape
      "rounded-t-md",

      // Colors
      "text-mercury-700 dark:text-white/80",
      "bg-white dark:bg-mercury-800",
    ],
  }),
  previousbutton: ({ props }) => ({
    class: [
      "relative",

      // Flexbox and Alignment
      "inline-flex items-center justify-center",
      // { ' order-2': !(props.numberOfMonths > 1), 'order-1': props.numberOfMonths > 1 },
      // Size
      "p-1.5 m-0",

      // Colors
      "text-mercury-500 dark:text-white/60",
      "border-0",
      "bg-transparent",

      // States
      "hover:text-mercury-700 dark:hover:text-white/80",

      // Misc
      "cursor-pointer overflow-hidden",
    ],
  }),
  title: ({ props }) => ({
    class: [
      // Text
      "leading-6",
      "my-0",
      // 'order-1',
      {
        /* 'mr-auto': !(props.numberOfMonths > 1), */ " mx-auto":
          props.numberOfMonths > 1,
      },
    ],
  }),
  monthTitle: {
    class: [
      // Font
      "text-base leading-6",
      "font-semibold",

      // Colors
      "text-mercury-700 dark:text-white/80",

      // Transitions
      "transition duration-200",

      // Spacing
      "m-0 mr-2",

      // States
      "hover:text-selenium-500 dark:hover:text-selenium-400",

      // Misc
      "cursor-pointer",
    ],
  },
  yearTitle: {
    class: [
      // Font
      "text-base leading-6",
      "font-semibold",

      // Colors
      "text-mercury-700 dark:text-white/80",

      // Transitions
      "transition duration-200",

      // Spacing
      "m-0",

      // States
      "hover:text-selenium-500 dark:hover:text-selenium-400",

      // Misc
      "cursor-pointer",
    ],
  },
  nextbutton: ({ props }) => ({
    class: [
      "relative",

      // Flexbox and Alignment
      "inline-flex items-center justify-center",
      // { ' order-3': !(props.numberOfMonths > 1), 'order-1': props.numberOfMonths > 1 },

      // Size
      "p-1.5 m-0",

      // Colors
      "text-mercury-500 dark:text-white/60",
      "border-0",
      "bg-transparent",

      // States
      "hover:text-mercury-700 dark:hover:text-white/80",

      // Misc
      "cursor-pointer overflow-hidden",
    ],
  }),
  table: {
    class: [
      // Size & Shape
      "w-full",

      // Spacing
      "m-0 my-2",
    ],
  },
  tableheadercell: {
    class: [
      // Spacing
      "p-0 md:p-2",
    ],
  },
  tablebodyrow: {
    //class: ['border-b border-mercury-200 dark:border-mercury-700 last:border-b-0']
  },
  weekheader: {
    class: [
      "leading-6 text-sm font-normal",
      "text-mercury-600 dark:text-white/70",
      "opacity-40 cursor-default",
      "mb-2",
    ],
  },
  weeknumber: {
    class: [
      "text-mercury-600 dark:text-white/70 font-normal",
      "opacity-40 cursor-default",
    ],
  },
  weekday: {
    class: [
      // Colors
      "text-mercury-500 dark:text-white/60 font-normal",
    ],
  },
  day: {
    class: [
      // Spacing
      "p-0 md:p-2",
    ],
  },
  weeklabelcontainer: ({ context }) => ({
    class: [
      // Flexbox and Alignment
      "flex items-center justify-center",
      "mx-auto",

      // Shape & Size
      "w-10 h-10",
      "rounded-full",
      "border-transparent border",

      // Colors
      {
        "text-mercury-600 dark:text-white/70 bg-transparent":
          !context.selected && !context.disabled,
        "text-selenium-500  dark:text-selenium-400":
          context.selected && !context.disabled,
      },

      // States
      "focus:outline-none focus:outline-offset-0 focus:ring focus:ring-selenium-400/50 dark:focus:ring-selenium-300/50",
      {
        "hover:bg-mercury-100 dark:hover:bg-mercury-800/80": !context.disabled,
      },
      {
        "opacity-40 cursor-default": context.disabled,
        "cursor-pointer": !context.disabled,
      },
    ],
  }),
  daylabel: ({ context }) => ({
    class: [
      // Flexbox and Alignment
      "flex items-center justify-center",
      "mx-auto",

      // Shape & Size
      "w-8 h-8",
      "rounded-full",

      // Colors
      {
        "text-white bg-mercury-200 dark:text-mercury-900 dark:bg-white":
          context.date.today && !context.selected && !context.disabled,
        "text-mercury-600 dark:text-white/70 bg-transparent":
          !context.selected && !context.disabled && !context.date.today,
        "text-white dark:text-selenium-400 bg-selenium-600":
          context.selected && !context.disabled && !context.date.today,
        "text-white dark:text-selenium-600 bg-selenium-400 dark:bg-white":
          context.selected && !context.disabled && context.date.today,
      },

      // States
      "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-selenium-500 dark:focus:ring-selenium-400",
      {
        "hover:bg-mercury-100 dark:hover:bg-mercury-600/80": !context.disabled,
        "hover:bg-mercury-700 dark:hover:bg-mercury-200":
          !context.disabled && context.date.today,
      },

      {
        "opacity-40 cursor-default": context.disabled,
        "cursor-pointer": !context.disabled,
      },
    ],
  }),
  monthpicker: {
    class: [
      // Spacing
      "my-2",
    ],
  },
  month: ({ context }) => ({
    class: [
      // Flexbox and Alignment
      "inline-flex items-center justify-center",

      // Size
      "w-1/3",
      "px-2.5 py-1.5",
      "mt-1",
      "text-md leading-none",

      // Shape
      "rounded-md",

      // Colors
      {
        "text-mercury-600 dark:text-white/70 bg-transparent":
          !context.selected && !context.disabled,
        "text-selenium-500 dark:text-selenium-400":
          context.selected && !context.disabled,
      },

      // States
      "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-selenium-500 dark:focus:ring-selenium-400",
      "hover:bg-mercury-100 dark:hover:bg-mercury-600/80",

      // Misc
      "cursor-pointer",
    ],
  }),
  yearpicker: {
    class: [
      // Spacing
      "my-2",
    ],
  },
  year: ({ context }) => ({
    class: [
      // Flexbox and Alignment
      "inline-flex items-center justify-center",

      // Size
      "w-1/3",
      "px-2.5 py-1.5",
      "mt-1",
      "text-md leading-none",

      // Shape
      "rounded-md",

      // Colors
      {
        "text-mercury-600 dark:text-white/70 bg-transparent":
          !context.selected && !context.disabled,
        "text-selenium-500 dark:text-selenium-400":
          context.selected && !context.disabled,
      },

      // States
      "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-selenium-500 dark:focus:ring-selenium-400",
      "hover:bg-mercury-100 dark:hover:bg-mercury-600/80",

      // Misc
      "cursor-pointer",
    ],
  }),
  timepicker: {
    class: [
      // Flexbox
      "flex",
      "justify-center items-center",

      // Spacing
      "p-1.5",
    ],
  },
  separatorcontainer: {
    class: [
      // Flexbox and Alignment
      "flex",
      "items-center",
      "flex-col",

      // Spacing
      "px-2",
    ],
  },
  separator: {
    class: [
      // Text
      "text-xl",
    ],
  },
  hourpicker: {
    class: [
      // Flexbox and Alignment
      "flex",
      "items-center",
      "flex-col",

      // Spacing
      "px-2",
    ],
  },
  minutepicker: {
    class: [
      // Flexbox and Alignment
      "flex",
      "items-center",
      "flex-col",

      // Spacing
      "px-2",
    ],
  },
  ampmpicker: {
    class: [
      // Flexbox and Alignment
      "flex",
      "items-center",
      "flex-col",

      // Spacing
      "px-2",
    ],
  },
  incrementbutton: {
    class: [
      "relative",

      // Flexbox and Alignment
      "inline-flex items-center justify-center",

      // Size
      "p-1.5 m-0",

      // Colors
      "text-mercury-500 dark:text-white/60",
      "border-0",
      "bg-transparent",

      // States
      "hover:text-mercury-700 dark:hover:text-white/80",

      // Misc
      "cursor-pointer overflow-hidden",
    ],
  },
  decrementbutton: {
    class: [
      "relative",

      // Flexbox and Alignment
      "inline-flex items-center justify-center",

      // Size
      "p-1.5 m-0",

      // Colors
      "text-mercury-500 dark:text-white/60",
      "border-0",
      "bg-transparent",

      // States
      "hover:text-mercury-700 dark:hover:text-white/80",

      // Misc
      "cursor-pointer overflow-hidden",
    ],
  },
  groupcontainer: {
    class: [
      // Flexbox
      "flex",
    ],
  },
  group: {
    class: [
      // Flexbox and Sizing
      "flex-1",

      // Borders
      "border-l",
      "border-mercury-200 dark:border-mercury-700",

      // Spacing
      "pr-0.5",
      "pl-0.5",
      "pt-0",
      "pb-0",

      // Pseudo-Classes
      "first:pl-0",
      "first:border-l-0",
    ],
  },
  buttonbar: {
    class: [
      // Flexbox
      "flex justify-between items-center",

      // Spacing
      "pt-2.5 pb-1.5 px-0",

      // Shape
      "border-t border-mercury-200 dark:border-mercury-700",
    ],
  },
  todaybutton: {
    root: {
      class: [
        // Flexbox and Alignment
        "inline-flex items-center justify-center",

        // Spacing
        "px-2.5 py-1.5 text-sm leading-none",

        // Shape
        "rounded-md",

        // Colors
        "bg-transparent border-transparent",
        "text-selenium-500 dark:text-selenium-400",

        // Transitions
        "transition-colors duration-200 ease-in-out",

        // States
        "focus:outline-none focus:outline-offset-0 focus:ring-2 ring-inset",
        "focus:ring-selenium-500 dark:focus:ring-selenium-400",
        "hover:bg-selenium-300/20",

        // Misc
        "cursor-pointer",
      ],
    },
  },
  clearbutton: {
    root: {
      class: [
        // Flexbox and Alignment
        "inline-flex items-center justify-center",

        // Spacing
        "px-2.5 py-1.5 text-sm leading-none",

        // Shape
        "rounded-md",

        // Colors
        "bg-transparent border-transparent",
        "text-selenium-500 dark:text-selenium-400",

        // Transitions
        "transition-colors duration-200 ease-in-out",

        // States
        "focus:outline-none focus:outline-offset-0 focus:ring-2 ring-inset",
        "focus:ring-selenium-500 dark:focus:ring-selenium-400",
        "hover:bg-selenium-300/20",

        // Misc
        "cursor-pointer",
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
};
