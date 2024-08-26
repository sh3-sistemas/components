export default {
  navContainer: ({ props }) => ({
    class: [
      // Position
      "relative",
      "-mb-3",

      // Misc
      { "overflow-hidden": props.scrollable },
    ],
  }),
  navContent: {
    class: [
      // Overflow and Scrolling
      "overflow-y-hidden overscroll-contain",
      "overscroll-auto",
      "scroll-smooth",
      "[&::-webkit-scrollbar]:hidden",
    ],
  },
  previousButton: {
    class: [
      // Flexbox and Alignment
      "flex items-center justify-center",

      // Position
      "!absolute",
      "top-0 left-0",
      "z-20",

      // Size and Shape
      "h-full w-12",
      "rounded-full",

      // Colors
      "bg-mercury-0 dark:bg-mercury-800",
      "text-selenium-500 hover:text-selenium-700 dark:text-selenium-400",
      "shadow-md",
    ],
  },
  nextButton: {
    class: [
      // Flexbox and Alignment
      "flex items-center justify-center",

      // Position
      "!absolute",
      "top-0 right-0",
      "z-20",

      // Size and Shape
      "h-full w-12",
      "rounded-full",

      // Colors
      "bg-mercury-0 dark:bg-mercury-800",
      "text-selenium-500 hover:text-selenium-700 dark:text-selenium-400",
      "shadow-md",
    ],
  },
  nav: {
    class: [
      // Flexbox
      "flex flex-1",

      // Spacing
      "space-x-1",
      "list-none",
      "p-0 m-0",

      // Colors
      "bg-mercury-0 dark:bg-mercury-800",
      "text-mercury-900 dark:text-mercury-0/80",
    ],
  },
  tabpanel: {
    header: ({ props }) => ({
      class: [
        // Spacing
        "mr-0",

        // Misc
        {
          "opacity-60 cursor-default user-select-none select-none pointer-events-none":
            props?.disabled,
        },
      ],
    }),
    headerAction: ({ parent, context }) => ({
      class: [
        "relative",

        //Size and shape
        "min-w-[200px]",
        "rounded-t-xl",

        // Font
        "font-medium",
        "text-md",

        // Flexbox and Alignment
        "flex items-center justify-center",

        // Spacing
        "pt-3 pb-4 px-4",

        // Colors and Conditions
        {
          "border-mercury-0 dark:border-mercury-700":
            parent.state.d_activeIndex !== context.index,
          "bg-mercury-100 dark:bg-mercury-800":
            parent.state.d_activeIndex !== context.index,
          "text-mercury-800 dark:text-mercury-0/80":
            parent.state.d_activeIndex !== context.index,

          "bg-white dark:bg-mercury-800":
            parent.state.d_activeIndex === context.index,
          "border-selenium-0 dark:border-selenium-400":
            parent.state.d_activeIndex === context.index,
          "text-mercury-950 dark:text-selenium-400":
            parent.state.d_activeIndex === context.index,
        },

        // States
        /* 'focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring-2 focus-visible:ring-inset',
                'focus-visible:ring-selenium-500 dark:focus-visible:ring-selenium-400', */
        {
          "hover:bg-mercury-200 dark:hover:bg-mercury-800/80":
            parent.state.d_activeIndex !== context.index,
          "hover:border-mercury-0 dark:hover:border-mercury-600":
            parent.state.d_activeIndex !== context.index,
          "hover:text-mercury-900 dark:hover:text-mercury-0":
            parent.state.d_activeIndex !== context.index,
        },

        // Transitions
        "transition-all duration-200",

        // Misc
        "cursor-pointer select-none text-decoration-none",
        "overflow-hidden",
        "user-select-none",
        "whitespace-nowrap",
      ],
    }),
    headerTitle: {
      class: [
        // Text
        "leading-none",
        "whitespace-nowrap",
      ],
    },
    content: {
      class: [
        // Spacing
        "pb-0",

        // Shape
        "rounded-b-md",

        // Colors
        "bg-mercury-0 dark:bg-mercury-800",
        "text-mercury-700 dark:text-mercury-0/80",
        "border-0",
      ],
    },
  },
};
