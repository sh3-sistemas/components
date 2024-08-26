export default {
  root: ({ props, state }) => ({
    class: [
      // Display and Position
      "inline-flex items-center",
      "relative",
      "px-1 py-2.5",

      // Shape
      "w-full md:w-56 h-12",
      "rounded-lg",

      // Color and Background
      "bg-transparent hover:bg-mercury-200/20",

      // States
      {
        "border border-mercury-200 dark:border-surface-700": !state.focused,
        "ring-1 ring-mercury-300 ring-inset": state.focused,
      },

      // Misc
      "cursor-pointer",
      "select-none",
      { "opacity-60": props.disabled, "pointer-events-none": props.disabled },
    ],
  }),
  input: ({ props }) => ({
    class: [
      //Font
      "font-sans",

      // Display
      "grow",
      "inline-flex items-center justify-center",

      // Color and Background
      "bg-transparent",
      "border-0",
      {
        "text-surface-800 dark:text-white/80": props.modelValue,
        "text-surface-400 dark:text-surface-500": !props.modelValue,
      },
      "placeholder:text-surface-400 dark:placeholder:text-surface-500",

      // Sizing and Spacing
      "w-[1%]",
      "px-2.5",
      { "pr-7": props.showClear },

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
  trigger: {
    class: [
      //Font
      "sm:text-sm",

      // Flexbox
      "flex items-center justify-center",
      "shrink-0",

      // Color and Background
      "text-mercury-500",

      // Sizing and Space
      "w-auto",
      "px-2.5",

      // Extra
      "cursor-pointer",
    ],
  },
  panel: {
    class: [
      // Position
      "absolute -top-1 left-0",
      "-mt-2",

      // Shape
      "border-0",
      "rounded-lg",

      // Color
      "bg-surface-0 dark:bg-surface-800",
      "text-surface-800 dark:text-white/80",
      "ring-1 ring-inset ring-copper-100/20",
    ],
  },
  wrapper: {
    class: [
      // Sizing
      "max-h-[15rem]",

      // Misc
      "overflow-auto",
    ],
  },
  list: {
    class:
      "list-none m-0 rounded-lg border border-mercury-200 bg-white divide-y divide-mercury-200 font-sans font-[Lato]",
  },
  item: ({ context }) => ({
    class: [
      // Font
      "sm:text-sm",
      "leading-none",
      "text-center",
      "font-sans font-[Lato]",
      { "font-normal": !context.selected, "font-bold": context.selected },

      // Position
      "relative",

      // Shape
      "border-0",
      "rounded-lg",

      // Spacing
      "m-0",
      "py-4 px-4",

      // Color
      {
        "text-mercury-900 bg-copper-200/20":
          !context.focused && !context.selected,
      },
      {
        "bg-mercury-200  text-mercury-700":
          context.focused && !context.selected,
      },
      { "bg-mercury-500": context.focused && context.selected },
      {
        "bg-transparent text-mercury-900": !context.focused && context.selected,
      },

      //States
      "bg-transparent hover:bg-mercury-200/20",
      "focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-mercury-300 ",

      // Misc
      "cursor-pointer",
      "overflow-hidden",
      "whitespace-nowrap",
    ],
  }),
  itemgroup: {
    class: [
      //Font
      "font-bold",
      "sm:text-sm",

      // Spacing
      "m-0",
      "py-2 px-4",

      // Color
      "text-mercury-900",
      "bg-mercury-0 ",

      // Misc
      "cursor-auto",
    ],
  },
  emptymessage: {
    class: [
      // Font
      "leading-none",
      "sm:text-sm",

      // Spacing
      "py-2 px-4",

      // Color
      "text-surface-800 dark:text-white/80",
      "bg-transparent",
    ],
  },
  header: {
    class: [
      // Spacing
      "p-0",
      "m-0",

      //Shape
      "rounded-tl-md",
      "rounded-tr-md",

      // Color
      "text-surface-700 dark:text-white/80",
      "bg-surface-100 dark:bg-surface-800",
    ],
  },
  filtercontainer: {
    class: "relative",
  },
  filterinput: {
    class: [
      // Font
      "font-sans",
      "leading-none",
      "sm:text-sm",

      // Sizing
      "px-3",
      "pr-7",
      "-mr-7",
      "w-full",

      //Color
      "text-surface-700 dark:text-white/80",
      "bg-surface-0 dark:bg-surface-900",
      "placeholder:text-surface-400",
      "ring-1 ring-inset ring-surface-300 dark:ring-surface-700",

      // Shape
      "border-0",
      "rounded-tl-md",
      "rounded-tr-md",
      "appearance-none",

      // States
      "focus:ring-2 focus:ring-inset focus:outline-none focus:outline-offset-0",
      "focus:ring-primary-600 dark:focus:ring-primary-500",

      // Misc
      "appearance-none",
    ],
  },
  filtericon: {
    class: ["absolute", "top-1/2 right-3", "-mt-2"],
  },
  clearicon: {
    class: [
      // Color
      "text-surface-500",

      // Position
      "absolute",
      "top-1/2",
      "right-12",

      // Spacing
      "-mt-2",
    ],
  },
  transition: {
    enterFromClass: "opacity-0 scale-y-[0.8]",
    enterActiveClass:
      "transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",
    leaveActiveClass: "transition-opacity duration-100 ease-linear",
    leaveToClass: "opacity-0",
  },
};
