export default {
  root: ({ context, props }) => ({
    class: [
      // Position
      "absolute",
      // Spacing
      {
        "px-1.5":
          (context == null ? void 0 : context.right) ||
          (context == null ? void 0 : context.left) ||
          (!(context != null && context.right) &&
            !(context != null && context.left) &&
            !(context != null && context.top) &&
            !(context != null && context.bottom)),
        "py-1.5":
          (context == null ? void 0 : context.top) ||
          (context == null ? void 0 : context.bottom),
      },
    ],
  }),
  arrow: ({ context, props }) => ({
    class: [
      // Position
      "absolute",
      // Size
      "w-0",
      "h-0",
      // Shape
      "border-transparent",
      "border-solid",
      {
        "border-y-[0.25rem] border-r-[0.25rem] border-l-0 border-r-mercury-100":
          (context == null ? void 0 : context.right) ||
          (!(context != null && context.right) &&
            !(context != null && context.left) &&
            !(context != null && context.top) &&
            !(context != null && context.bottom)),
        "border-y-[0.25rem] border-l-[0.25rem] border-r-0 border-l-mercury-200":
          context == null ? void 0 : context.left,
        "border-x-[0.25rem] border-t-[0.25rem] border-b-0 border-t-mercury-200":
          context == null ? void 0 : context.top,
        "border-x-[0.25rem] border-b-[0.25rem] border-t-0 border-b-mercury-200":
          context == null ? void 0 : context.bottom,
      },
      // Spacing
      {
        "-mt-1 ":
          (context == null ? void 0 : context.right) ||
          (!(context != null && context.right) &&
            !(context != null && context.left) &&
            !(context != null && context.top) &&
            !(context != null && context.bottom)),
        "-mt-1": context == null ? void 0 : context.left,
        "-ml-1":
          (context == null ? void 0 : context.top) ||
          (context == null ? void 0 : context.bottom),
      },
    ],
  }),
  text: {
    class: [
      "text-xs leading-none",
      "p-2",
      "rounded-md",
      "text-mercury-900 dark:text-mercury-0/80",
      "bg-mercury-100 dark:bg-mercury-900",
      "shadow",
      "ring-1 ring-inset ring-mercury-100 dark:ring-mercury-800 ring-offset-0",
      "whitespace-pre-line",
      "break-words",
    ],
  },
};
