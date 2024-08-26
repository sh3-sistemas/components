export default {
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
  input: ({ props, state }) => ({
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
        "text-mercury-700 dark:text-white/80":
          props.value !== props.modelValue && props.value !== undefined,
        "bg-red-500 dark:bg-mercury-900":
          props.value !== props.modelValue && props.value !== undefined,
        "border-mercury-300 dark:border-mercury-700":
          props.value !== props.modelValue && props.value !== undefined,
        "border-selenium-500 dark:border-selenium-400":
          props.value == props.modelValue && props.value !== undefined,
      },

      // States
      {
        "outline-none outline-offset-0": !props.disabled && state.focused,
        "ring-2 ring-offset-2 ring-offset-mercury-0 dark:ring-offset-mercury-800 ring-selenium-500 dark:ring-selenium-400":
          !props.disabled && state.focused,
        "opacity-60 cursor-default": props.disabled,
      },
    ],
  }),
  icon: {
    class: "hidden",
  },
};
