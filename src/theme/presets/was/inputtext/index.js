export default {
  root: ({ props, context, parent }) => ({
    class: [
      // Font
      "leading-6",

      // Spacing
      "m-0",
      {
        "py-3 px-4 text-lg sm:text-md": props.size == "large",
        "py-1 px-2 sm:text-sm": props.size == "small",
        "py-1.5 px-3 sm:text-sm": props.size == null,
      },

      // Colors
      "text-mercury-900 dark:text-mercury-0",
      "placeholder:text-mercury-400 dark:placeholder:text-mercury-500",
      "bg-white dark:bg-mercury-900",
      "shadow-sm",
      {
        "ring-1 ring-inset ring-mercury-300 dark:ring-mercury-700 ring-offset-0":
          parent.instance.$name !== "InputGroup",
      },

      // Shape
      { "rounded-md": parent.instance.$name !== "InputGroup" },
      {
        "first:rounded-l-md rounded-none last:rounded-r-md":
          parent.instance.$name == "InputGroup",
      },
      {
        "border-0 border-y border-l last:border-r border-mercury-300 dark:border-mercury-600":
          parent.instance.$name == "InputGroup",
      },
      {
        "first:ml-0 ml-[-1px]":
          parent.instance.$name == "InputGroup" && !props.showButtons,
      },
      "appearance-none",

      // Interactions
      {
        "outline-none focus:ring-selenium-500 dark:focus:ring-selenium-400":
          !context.disabled,
        "opacity-60 select-none pointer-events-none cursor-default":
          context.disabled,
      },
    ],
  }),
};
