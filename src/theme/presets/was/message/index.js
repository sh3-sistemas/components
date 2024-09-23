export default {
  root: ({ props }) => ({
    class: [
      // Spacing and Shape
      "my-2 mx-0",
      "rounded-md",
      "ring-1 ring-inset ring-mercury-200 dark:ring-mercury-700 ring-offset-0",

      // Colors
      "bg-mercury-0 dark:bg-mercury-800",

      {
        "text-copper-500 dark:text-copper-300 bg-copper-50 border border-copper-500":
          props.severity == "info",
        "text-grass-700 dark:text-grass-300 bg-grass-100 border border-grass-500":
          props.severity == "success",
        "text-amber-600 dark:text-amber-300 bg-amber-100 border border-amber-500":
          props.severity == "warn",
        "text-red-700 dark:text-red-300 bg-red-100 border border-red-500":
          props.severity == "error",
      },
    ],
  }),
  wrapper: {
    class: [
      // Flexbox
      "flex items-center",

      // Spacing
      "py-1.5 px-2",
    ],
  },
  icon: {
    class: [
      // Sizing and Spacing
      "w-5 h-5",
      "mr-3 shrink-0",
    ],
  },
  text: {
    class: [
      // Font and Text
      "text-sm leading-none",
      "font-medium",
    ],
  },
  button: ({ props }) => ({
    class: [
      // Flexbox
      "flex items-center justify-center",

      // Size
      "w-6 h-6",

      // Spacing and Misc
      "ml-auto relative",

      // Shape
      "rounded-full",

      // Colors
      "bg-transparent",
      "text-mercury-700 dark:text-mercury-0/80",

      // Transitions
      "transition duration-200 ease-in-out",

      // States
      "hover:bg-mercury-100 dark:hover:bg-mercury-700",
      "outline-none focus:ring-1 focus:ring-inset",
      "focus:ring-selenium-500 dark:focus:ring-selenium-400",
      {
        "text-copper-500 hover:bg-copper-100 dark:hover:bg-copper-300 focus:ring-copper-500 dark:focus:ring-copper-400":
          props.severity == "info",
        "text-grass-500 hover:bg-grass-100 dark:hover:bg-grass-300 focus:ring-grass-500 dark:focus:ring-grass-400":
          props.severity == "success",
        "text-amber-500 hover:bg-amber-100 dark:hover:bg-amber-300 focus:ring-amber-500 dark:focus:ring-amber-400":
          props.severity == "warn",
        "text-red-500 hover:bg-red-100 dark:hover:bg-red-300 focus:ring-red-500 dark:focus:ring-red-400":
          props.severity == "error",
      },

      // Misc
      "overflow-hidden",
    ],
  }),
  closeicon: {
    class: [
      // Sizing and Spacing
      "w-3 h-3",
      "shrink-0",
    ],
  },
  transition: {
    enterFromClass: "opacity-0",
    enterActiveClass: "transition-opacity duration-300",
    leaveFromClass: "max-h-40",
    leaveActiveClass: "overflow-hidden transition-all duration-300 ease-in",
    leaveToClass: "max-h-0 opacity-0 !m-0",
  },
};
