export default {
  root: ({ props }) => ({
    class: [
      //Font
      "text-xs font-bold border",

      //Alignments
      "inline-flex items-center justify-center",

      //Spacing
      "px-2 py-1",

      //Shape
      {
        "rounded-md": !props.rounded,
        "rounded-full": props.rounded,
      },

      //Colors
      // 'text-white dark:text-mercury-900',
      {
        "text-selenium-500 bg-selenium-50 border-selenium-500 dark:border-selenium-400":
          props.severity == null || props.severity == "selenium",
        "text-green-500 bg-green-50 border-green-500 dark:border-green-400":
          props.severity == "success",
        "text-blue-500 bg-blue-50 border-blue-500 dark:border-blue-400":
          props.severity == "info",
        "text-orange-500 bg-orange-50 border-orange-500 dark:border-orange-400":
          props.severity == "warning",
        "text-red-500 bg-red-50 border-red-500 dark:border-red-400":
          props.severity == "danger",
      },
    ],
  }),
  value: {
    class: "leading-normal",
  },
  icon: {
    class: "mr-1 text-sm",
  },
};
