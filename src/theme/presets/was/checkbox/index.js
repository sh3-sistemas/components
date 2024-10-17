export default {
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
  input: ({ props, context }) => ({
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

      // States
      "focus:outline-none focus:outline-offset-0",
      {
        "ring-2 ring-selenium-500 dark:ring-selenium-400":
          !props.disabled && context.focused,
        "cursor-default opacity-60": props.disabled,
      },

      // Transitions
      "transition-colors",
      "duration-200",
    ],
  }),
  box: { class: ["hidden"] },
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
};
