export default {
  root: ({ props, state, parent }) => ({
      class: [
          // Display and Position
          'inline-flex',
          'relative',

          // Flex
          { 'flex-1 w-[1%]': parent.instance.$name == 'InputGroup' },

          // Shape
          'shadow-sm',
          { 'rounded-md': parent.instance.$name !== 'InputGroup' },
          { 'first:rounded-l-md rounded-none last:rounded-r-md': parent.instance.$name == 'InputGroup' },
          { 'border-0 border-y border-l last:border-r border-mercury-300 dark:border-mercury-600': parent.instance.$name == 'InputGroup' },
          { 'first:ml-0 ml-[-1px]': parent.instance.$name == 'InputGroup' && !props.showButtons },

          // Color and Background
          'bg-white dark:bg-mercury-900',

          // States

          { 'ring-1 ring-inset ring-mercury-300 dark:ring-mercury-700': parent.instance.$name !== 'InputGroup' && !state.focused, 'ring-2 ring-inset ring-selenium-500 dark:ring-selenium-400': parent.instance.$name !== 'InputGroup' && state.focused },
          { 'ring-1 ring-inset': !state.focused, 'ring-2 ring-inset ring-selenium-500 dark:ring-selenium-400': state.focused },

          { 'ring-mercury-300 dark:ring-mercury-600': !props.invalid && !state.focused },

          // Invalid State
          { 'ring-red-500 dark:ring-red-400': props.invalid && !state.focused },

          // Misc
          'cursor-default',
          'select-none',
          { 'opacity-60': props.disabled, 'pointer-events-none': props.disabled }
      ]
  }),
  input: ({ props }) => ({
      class: [
          //Font
          'font-sans',
          'leading-6',
          'sm:text-sm',

          // Display
          'block',
          'flex-auto',

          // Color and Background
          'bg-transparent',
          'border-0',
          { 'text-mercury-900 dark:text-white': props.modelValue != undefined, 'text-mercury-400 dark:text-mercury-500': props.modelValue == undefined },
          'placeholder:text-mercury-400 dark:placeholder:text-mercury-500',

          // Sizing and Spacing
          'w-[1%]',
          'py-1.5 px-3',
          { 'pr-7': props.showClear },

          //Shape
          'rounded-none',

          // Transitions
          'transition',
          'duration-200',

          // States
          'focus:outline-none focus:shadow-none',

          // Misc
          'relative',
          'cursor-pointer',
          'overflow-hidden overflow-ellipsis',
          'whitespace-nowrap',
          'appearance-none'
      ]
  }),
  trigger: {
      class: [
          //Font
          'sm:text-sm',

          // Flexbox
          'flex items-center justify-center',
          'shrink-0',

          // Color and Background
          'bg-transparent',
          'text-mercury-500',

          // Size
          'w-12',

          // Shape
          'rounded-tr-md',
          'rounded-br-md'
      ]
  },
  panel: {
      class: [
          // Position
          'absolute top-0 left-0',
          'mt-2',

          // Shape
          'border-0',
          'rounded-md',
          'shadow-md',

          // Color
          'bg-white dark:bg-mercury-800',
          'text-mercury-800 dark:text-white/80',
          'ring-1 ring-inset ring-mercury-300 dark:ring-mercury-700'
      ]
  },
  wrapper: {
      class: [
          // Sizing
          'max-h-[15rem]',

          // Misc
          'overflow-auto'
      ]
  },
  list: {
      class: 'py-1 list-none m-0'
  },
  item: ({ context }) => ({
      class: [
          // Font
          'sm:text-sm',
          'leading-none',
          { 'font-normal': !context.selected, 'font-bold': context.selected },

          // Position
          'relative',

          // Shape
          'border-0',
          'rounded-none',

          // Spacing
          'm-0',
          'py-2 px-4',

          // Color
          { 'text-mercury-700 dark:text-white/80': !context.focused && !context.selected && !context.disabled },
          { 'text-mercury-600 dark:text-white/70': !context.focused && !context.selected && context.disabled },
          { 'bg-mercury-200 dark:bg-mercury-600/60 text-mercury-700 dark:text-white/80': context.focused && !context.selected },
          { 'bg-selenium-500 dark:bg-selenium-400 text-white dark:text-mercury-700': context.focused && context.selected },
          { 'bg-transparent text-mercury-700 dark:text-white/80': !context.focused && context.selected },

          //States
          'hover:bg-selenium-500 dark:hover:bg-selenium-400 hover:text-white dark:hover:text-mercury-700',
          'focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-selenium-500 dark:focus-visible:ring-selenium-400',

          // Misc
          { 'pointer-events-none cursor-default': context.disabled },
          { 'cursor-pointer': !context.disabled },
          'overflow-hidden',
          'whitespace-nowrap'
      ]
  }),
  itemgroup: {
      class: [
          //Font
          'font-bold',
          'sm:text-sm',

          // Spacing
          'm-0',
          'py-2 px-4',

          // Color
          'text-mercury-800 dark:text-white/80',
          'bg-white dark:bg-mercury-600/80',

          // Misc
          'cursor-auto'
      ]
  },
  emptymessage: {
      class: [
          // Font
          'leading-none',
          'sm:text-sm',

          // Spacing
          'py-2 px-4',

          // Color
          'text-mercury-800 dark:text-white/80',
          'bg-transparent'
      ]
  },
  header: {
      class: [
          // Spacing
          'p-0',
          'm-0',

          //Shape
          'rounded-tl-md',
          'rounded-tr-md',

          // Color
          'text-mercury-700 dark:text-white/80',
          'bg-mercury-100 dark:bg-mercury-800'
      ]
  },
  filtercontainer: {
      class: 'relative'
  },
  filterinput: {
      class: [
          // Font
          'font-sans',
          'leading-none',
          'sm:text-sm',

          // Sizing
          'py-1.5 px-3',
          'pr-7',
          '-mr-7',
          'w-full',

          //Color
          'text-mercury-700 dark:text-white/80',
          'bg-white dark:bg-mercury-900',
          'placeholder:text-mercury-400',
          'ring-1 ring-inset ring-mercury-300 dark:ring-mercury-700',

          // Shape
          'border-0',
          'rounded-tl-md',
          'rounded-tr-md',
          'appearance-none',

          // States
          'focus:ring-2 focus:ring-inset focus:outline-none focus:outline-offset-0',
          'focus:ring-selenium-600 dark:focus:ring-selenium-500',

          // Misc
          'appearance-none'
      ]
  },
  filtericon: {
      class: ['absolute', 'top-1/2 right-3', '-mt-2']
  },
  clearicon: {
      class: [
          // Color
          'text-mercury-500',

          // Position
          'absolute',
          'top-1/2',
          'right-12',

          // Spacing
          '-mt-2'
      ]
  },
  transition: {
      enterFromClass: 'opacity-0 scale-y-[0.8]',
      enterActiveClass: 'transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]',
      leaveActiveClass: 'transition-opacity duration-100 ease-linear',
      leaveToClass: 'opacity-0'
  }
};