export default {
  root: ({ props, context, parent }) => ({
    class: [
      "relative",

      // Alignments
      "items-center justify-center inline-flex text-center align-bottom",

      // Sizes & Spacing
      "text-sm font-[Lato]",
      {
        "px-3 py-2.5 min-w-[2rem]": props.size === null && props.label !== null,
        "px-2 py-1": props.size === "small",
        "px-3 py-4": props.size === "large",
      },
      {
        "h-8 w-8 p-0": props.label == null,
      },

      // Shapes
      {
        "shadow-sm": !props.raised && !props.link && !props.text,
        "shadow-lg": props.raised,
      },
      { "rounded-md": !props.rounded, "rounded-full": props.rounded },
      {
        "rounded-none first:rounded-l-md last:rounded-r-md self-center":
          parent.instance.$name == "InputGroup",
      },

      // Link Button
      { "text-selenium-600 bg-transparent ring-transparent": props.link },

      // Plain Button
      {
        "text-white bg-gray-500 ring-1 ring-gray-500":
          props.plain && !props.outlined && !props.text,
      },
      // Plain Text Button
      { "text-gray-500": props.plain && props.text },
      // Plain Outlined Button
      { "text-gray-500 ring-1 ring-gray-500": props.plain && props.outlined },

      // Text Button
      { "bg-transparent ring-transparent": props.text && !props.plain },

      // Outlined Button
      { "bg-transparent": props.outlined && !props.plain },

      // --- Severity Buttons ---

      // Primary Button
      {
        "text-white dark:text-gray-900":
          !props.link &&
          props.severity === null &&
          !props.text &&
          !props.outlined &&
          !props.plain,
        "bg-selenium-500 dark:bg-selenium-400":
          !props.link &&
          props.severity === null &&
          !props.text &&
          !props.outlined &&
          !props.plain,
        "ring-1 ring-selenium-500 dark:ring-selenium-400":
          !props.link &&
          props.severity === null &&
          !props.text &&
          !props.outlined &&
          !props.plain,
      },
      // Primary Text Button
      {
        "text-selenium-500 dark:text-selenium-400":
          props.text && props.severity === null && !props.plain,
      },
      // Primary Outlined Button
      {
        "text-selenium-500 ring-1 ring-selenium-500 hover:bg-selenium-300/20":
          props.outlined && props.severity === null && !props.plain,
      },

      // Secondary Button
      {
        "text-white dark:text-gray-900":
          props.severity === "secondary" &&
          !props.text &&
          !props.outlined &&
          !props.plain,
        "bg-gray-500 dark:bg-gray-400":
          props.severity === "secondary" &&
          !props.text &&
          !props.outlined &&
          !props.plain,
        "ring-1 ring-gray-500 dark:ring-gray-400":
          props.severity === "secondary" &&
          !props.text &&
          !props.outlined &&
          !props.plain,
      },
      // Secondary Text Button
      {
        "text-gray-500 dark:text-gray-400":
          props.text && props.severity === "secondary" && !props.plain,
      },
      // Secondary Outlined Button
      {
        "text-gray-500 ring-1 ring-gray-500 hover:bg-gray-300/20":
          props.outlined && props.severity === "secondary" && !props.plain,
      },

      // Success Button
      {
        "text-white dark:text-grass-800":
          props.severity === "success" &&
          !props.text &&
          !props.outlined &&
          !props.plain,
        "bg-grass-500 dark:bg-grass-300":
          props.severity === "success" &&
          !props.text &&
          !props.outlined &&
          !props.plain,
        "ring-1 ring-grass-500 dark:ring-grass-300":
          props.severity === "success" &&
          !props.text &&
          !props.outlined &&
          !props.plain,
      },
      // Success Text Button
      {
        "text-grass-500 dark:text-grass-300":
          props.text && props.severity === "success" && !props.plain,
      },
      // Success Outlined Button
      {
        "text-grass-500 ring-1 ring-grass-500 hover:bg-mercury-100":
          props.outlined && props.severity === "success" && !props.plain,
      },

      // Info Button
      {
        "text-white dark:text-gray-900":
          props.severity === "info" &&
          !props.text &&
          !props.outlined &&
          !props.plain,
        "bg-blue-500 dark:bg-blue-400":
          props.severity === "info" &&
          !props.text &&
          !props.outlined &&
          !props.plain,
        "ring-1 ring-blue-500 dark:ring-blue-400":
          props.severity === "info" &&
          !props.text &&
          !props.outlined &&
          !props.plain,
      },
      // Info Text Button
      {
        "text-blue-500 dark:text-blue-400":
          props.text && props.severity === "info" && !props.plain,
      },
      // Info Outlined Button
      {
        "text-blue-500 ring-1 ring-blue-500 hover:bg-blue-300/20 ":
          props.outlined && props.severity === "info" && !props.plain,
      },

      // Warning Button
      {
        "text-white dark:text-gray-900":
          props.severity === "warning" &&
          !props.text &&
          !props.outlined &&
          !props.plain,
        "bg-amber-600 dark:bg-amber-400":
          props.severity === "warning" &&
          !props.text &&
          !props.outlined &&
          !props.plain,
        "ring-1 ring-amber-600 dark:ring-amber-400":
          props.severity === "warning" &&
          !props.text &&
          !props.outlined &&
          !props.plain,
      },
      // Warning Text Button
      {
        "text-amber-600 dark:text-amber-400":
          props.text && props.severity === "warning" && !props.plain,
      },
      // Warning Outlined Button
      {
        "text-amber-600 ring-1 ring-amber-600 hover:bg-amber-300/20":
          props.outlined && props.severity === "warning" && !props.plain,
      },

      // Help Button
      {
        "text-white dark:text-gray-900":
          props.severity === "help" &&
          !props.text &&
          !props.outlined &&
          !props.plain,
        "bg-purple-500 dark:bg-purple-400":
          props.severity === "help" &&
          !props.text &&
          !props.outlined &&
          !props.plain,
        "ring-1 ring-purple-500 dark:ring-purple-400":
          props.severity === "help" &&
          !props.text &&
          !props.outlined &&
          !props.plain,
      },
      // Help Text Button
      {
        "text-purple-500 dark:text-purple-400":
          props.text && props.severity === "help" && !props.plain,
      },
      // Help Outlined Button
      {
        "text-purple-500 ring-1 ring-purple-500 hover:bg-purple-300/20":
          props.outlined && props.severity === "help" && !props.plain,
      },

      // Danger Button
      {
        "text-white dark:text-gray-900":
          props.severity === "danger" &&
          !props.text &&
          !props.outlined &&
          !props.plain,
        "bg-red-700 dark:bg-red-400":
          props.severity === "danger" &&
          !props.text &&
          !props.outlined &&
          !props.plain,
        "ring-1 ring-red-700 dark:ring-red-400":
          props.severity === "danger" &&
          !props.text &&
          !props.outlined &&
          !props.plain,
      },
      // Danger Text Button
      {
        "text-red-700 dark:text-red-400":
          props.text && props.severity === "danger" && !props.plain,
      },
      // Danger Outlined Button
      {
        "text-red-700 ring-1 ring-red-700 hover:bg-red-300/20":
          props.outlined && props.severity === "danger" && !props.plain,
      },

      // --- Severity Button States ---
      "focus:outline-none focus:outline-offset-0 focus:ring-2 focus:ring-offset-current",
      {
        "focus:ring-offset-2":
          !props.link && !props.plain && !props.outlined && !props.text,
      },

      // Link
      { "focus:ring-selenium-500 dark:focus:ring-selenium-400": props.link },

      // Plain
      {
        "hover:bg-gray-600 hover:ring-gray-600":
          props.plain && !props.outlined && !props.text,
      },
      // Text & Outlined Button
      { "hover:bg-gray-300/20": props.plain && (props.text || props.outlined) },

      // Primary
      {
        "hover:bg-selenium-600 dark:hover:bg-selenium-300 hover:ring-selenium-600 dark:hover:ring-selenium-300":
          !props.link &&
          props.severity === null &&
          !props.text &&
          !props.outlined &&
          !props.plain,
      },
      {
        "focus:ring-selenium-500 dark:focus:ring-selenium-400":
          props.severity === null,
      },
      // Text & Outlined Button
      {
        "hover:bg-selenium-300/20":
          (props.text || props.outlined) &&
          props.severity === null &&
          !props.plain,
      },

      // Secondary
      {
        "hover:bg-gray-600 dark:hover:bg-gray-300 hover:ring-gray-600 dark:hover:ring-gray-300":
          props.severity === "secondary" &&
          !props.text &&
          !props.outlined &&
          !props.plain,
      },
      {
        "focus:ring-gray-500 dark:focus:ring-gray-400":
          props.severity === "secondary",
      },
      // Text & Outlined Button
      {
        "hover:bg-gray-300/20":
          (props.text || props.outlined) &&
          props.severity === "secondary" &&
          !props.plain,
      },

      // Success
      {
        "hover:bg-grass-800 dark:hover:bg-mercury-100 hover:ring-grass-800 dark:hover:ring-grass-300":
          props.severity === "success" &&
          !props.text &&
          !props.outlined &&
          !props.plain,
      },
      {
        "focus:ring-grass-500 dark:focus:ring-grass-300":
          props.severity === "success",
      },
      // Text & Outlined Button
      {
        "hover:bg-mercury-100":
          (props.text || props.outlined) &&
          props.severity === "success" &&
          !props.plain,
      },

      // Info
      {
        "hover:bg-blue-600 dark:hover:bg-blue-300 hover:ring-blue-600 dark:hover:ring-blue-300":
          props.severity === "info" &&
          !props.text &&
          !props.outlined &&
          !props.plain,
      },
      {
        "focus:ring-blue-500 dark:focus:ring-blue-400":
          props.severity === "info",
      },
      // Text & Outlined Button
      {
        "hover:bg-blue-300/20":
          (props.text || props.outlined) &&
          props.severity === "info" &&
          !props.plain,
      },

      // Warning
      {
        "hover:bg-amber-600 dark:hover:bg-amber-300 hover:ring-amber-600 dark:hover:ring-amber-300":
          props.severity === "warning" &&
          !props.text &&
          !props.outlined &&
          !props.plain,
      },
      {
        "focus:ring-amber-600 dark:focus:ring-amber-400":
          props.severity === "warning",
      },
      // Text & Outlined Button
      {
        "hover:bg-amber-300/20":
          (props.text || props.outlined) &&
          props.severity === "warning" &&
          !props.plain,
      },

      // Help
      {
        "hover:bg-purple-600 dark:hover:bg-purple-300 hover:ring-purple-600 dark:hover:ring-purple-300":
          props.severity === "help" &&
          !props.text &&
          !props.outlined &&
          !props.plain,
      },
      {
        "focus:ring-purple-500 dark:focus:ring-purple-400":
          props.severity === "help",
      },
      // Text & Outlined Button
      {
        "hover:bg-purple-300/20":
          (props.text || props.outlined) &&
          props.severity === "help" &&
          !props.plain,
      },

      // Danger
      {
        "hover:bg-red-600 dark:hover:bg-red-300 hover:ring-red-600 dark:hover:ring-red-300":
          props.severity === "danger" &&
          !props.text &&
          !props.outlined &&
          !props.plain,
      },
      {
        "focus:ring-red-700 dark:focus:ring-red-400":
          props.severity === "danger",
      },
      // Text & Outlined Button
      {
        "hover:bg-red-300/20":
          (props.text || props.outlined) &&
          props.severity === "danger" &&
          !props.plain,
      },

      // Disabled
      {
        "bg-mercury-100 text-mercury-600 ring-mercury-200 pointer-events-none cursor-default":
          context.disabled,
      },

      // Transitions
      "transition duration-200 ease-in-out",

      // Misc
      "cursor-pointer overflow-hidden select-none",
    ],
  }),
  label: ({ props }) => ({
    class: [
      "duration-200",
      "font-normal",
      {
        "hover:underline": props.link,
      },
      { "flex-1": props.label !== null, "invisible w-0": props.label == null },
    ],
  }),
  icon: ({ props }) => ({
    class: [
      "mx-0",
      {
        "mr-2": props.iconPos == "left" && props.label != null,
        "ml-2 order-1": props.iconPos == "right" && props.label != null,
        "mb-2": props.iconPos == "top" && props.label != null,
        "mt-2": props.iconPos == "bottom" && props.label != null,
      },
    ],
  }),
  loadingicon: ({ props }) => ({
    class: [
      "h-3 w-3",
      "mx-0",
      {
        "mr-2": props.iconPos == "left" && props.label != null,
        "ml-2 order-1": props.iconPos == "right" && props.label != null,
        "mb-2": props.iconPos == "top" && props.label != null,
        "mt-2": props.iconPos == "bottom" && props.label != null,
      },
      "animate-spin",
    ],
  }),
  badge: ({ props }) => ({
    class: [
      {
        "ml-2 w-4 h-4 leading-none flex items-center justify-center":
          props.badge,
      },
    ],
  }),
};
