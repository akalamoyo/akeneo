export default {
  root: ({ props, state }) => ({
    class: [
      // Display and Position
      'inline-flex',
      'relative',

      // Shape
      'rounded-md',

      // Color and Background
      'bg-surface-0',
      'border',
      { 'border-surface-300': !props.invalid },

      // Invalid State
      { 'border-red-500': props.invalid },

      // Transitions
      'transition-all',
      'duration-200',

      // States
      { 'hover:border-primary': !props.invalid },
      { 'outline-none outline-offset-0 ring ring-primary-400/50': state.focused },

      // Misc
      'cursor-pointer',
      'select-none',
      {
        'opacity-60': props.disabled,
        'pointer-events-none': props.disabled,
        'cursor-default': props.disabled
      }
    ]
  }),
  label: ({ props }) => ({
    class: [
      //Font
      'font-sans',
      'leading-none',

      // Display
      'block',
      'flex-auto',

      // Color and Background
      'bg-transparent',
      'border-0',
      {
        'text-surface-800': props.modelValue,
        'text-surface-400': !props.modelValue
      },
      'placeholder:text-surface-400',

      // Sizing and Spacing
      'w-[1%]',
      'p-3',
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
  dropdown: {
    class: [
      // Flexbox
      'flex items-center justify-left',
      'shrink-0',

      // Color and Background
      'bg-transparent',
      'text-surface-500',

      // Size
      'w-6',

      // Shape
      'rounded-tr-md',
      'rounded-br-md'
    ]
  },
  overlay: {
    class: [
      // Shape
      'border-0',
      'rounded-md',
      'shadow-md',

      // Color
      'bg-gray-100',
      'text-surface-800'
    ]
  },
  listContainer: {
    class: [
      // Sizing
      'max-h-[200px]',

      // Misc
      'overflow-auto'
    ]
  },
  list: {
    class: 'py-1 list-none m-0'
  },
  option: ({ context }) => ({
    class: [
      // Font
      'font-normal',
      'leading-none',
      'text-sm',

      // Position
      'relative',

      // Shape
      'border-0',
      'rounded-none',

      // Spacing
      'm-0',
      'py-3 px-5',

      // Colors
      {
        'text-surface-700': !context.focused && !context.selected && !context.disabled
      },
      {
        'text-surface-600': !context.focused && !context.selected && context.disabled
      },
      {
        'bg-surface-200 text-surface-700': context.focused && !context.selected
      },
      {
        'bg-primary-100 text-primary-700': context.focused && context.selected
      },
      {
        'bg-primary-50 text-primary-700': !context.focused && context.selected
      },

      //States
      { 'hover:bg-surface-100': !context.focused && !context.selected },
      {
        'hover:text-surface-700 hover:bg-surface-100': context.focused && !context.selected
      },
      'focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring focus-visible:ring-inset focus-visible:ring-primary-400/50',

      // Transitions
      'transition-shadow',
      'duration-200',

      // Misc
      { 'pointer-events-none cursor-default': context.disabled },
      { 'cursor-pointer': !context.disabled },
      'overflow-hidden',
      'whitespace-nowrap'
    ]
  }),
  optionGroup: {
    class: [
      //Font
      'font-bold',

      // Spacing
      'm-0',
      'py-3 px-5',

      // Color
      'text-surface-800',
      'bg-surface-0',

      // Misc
      'cursor-auto'
    ]
  },
  emptyMessage: {
    class: [
      // Font
      'leading-none',

      // Spacing
      'py-3 px-5',

      // Color
      'text-surface-800',
      'bg-transparent'
    ]
  },
  header: {
    class: [
      // Spacing
      'py-2 px-3',
      'm-0',

      //Shape
      'border-b',
      'rounded-tl-md',
      'rounded-tr-md',

      // Color
      'text-surface-700',
      'border-surface-300'
    ]
  },
  pcfiltercontainer: {
    class: 'relative'
  },
  pcfilter: {
    class: [
      // Font
      'font-sans',
      'leading-none',

      // Sizing
      'pr-7 py-3 px-3',
      '-mr-7',
      'w-full',

      //Color
      'text-surface-700',
      'bg-surface-0',
      'border-surface-200',

      // Shape
      'border',
      'rounded-lg',
      'appearance-none',

      // Transitions
      'transition',
      'duration-200',

      // States
      'hover:border-primary-500',
      'focus:ring focus:outline-none focus:outline-offset-0',
      'focus:ring-primary-400/50',

      // Misc
      'appearance-none'
    ]
  },
  filterIcon: {
    class: ['absolute', 'top-1/2 right-3', '-mt-2']
  },
  clearIcon: {
    class: [
      // Color
      'text-surface-500',

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
    enterActiveClass:
      'transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]',
    leaveActiveClass: 'transition-opacity duration-100 ease-linear',
    leaveToClass: 'opacity-0'
  }
}
