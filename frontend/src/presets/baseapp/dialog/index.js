export default {
  root: ({ state }) => ({
    class: [
      // Shape
      'rounded-2xl',
      'shadow',
      'border-0',

      // Size
      'max-h-[90vh]',
      'min-w-[500px]',
      'm-0',

      // Transitions
      'transform',
      'scale-100',

      // Maximized State
      {
        'transition-none': state.maximized,
        'transform-none': state.maximized,
        '!w-screen': state.maximized,
        '!h-screen': state.maximized,
        '!max-h-full': state.maximized,
        '!top-0': state.maximized,
        '!left-0': state.maximized
      }
    ]
  }),
  header: {
    class: [
      // Flexbox and Alignment
      'flex items-center justify-between',
      'shrink-0',

      // Font
      'font-semibold text-2xl text-white',

      // Spacing
      'px-12 py-4',

      // Shape
      'border-t-0',
      'rounded-tl-lg',
      'rounded-tr-lg',

      // Colors
      'bg-surface-0',
      'text-surface-800'
    ]
  },
  title: {
    class: ['font-bold']
  },
  headerActions: {
    class: ['flex items-center']
  },
  content: ({ state, instance }) => ({
    class: [
      // Spacing
      'p-6',
      'space-y-4',

      // Shape
      {
        grow: state.maximized,
        'rounded-bl-lg': !instance.$slots.footer,
        'rounded-br-lg': !instance.$slots.footer
      },

      // Colors
      'bg-surface-4',
      'text-surface-700',

      // Misc
      'overflow-y-auto'
    ]
  }),
  footer: {
    class: [
      // Flexbox and Alignment
      'flex items-center justify-between',
      'shrink-0',
      'text-right',
      'gap-2',

      // Spacing
      'px-6',
      'py-4',

      // Shape
      'border-t',
      'rounded-b-lg',

      // Colors
      'bg-surface-0',
      'text-surface-700'
    ]
  },
  mask: ({ props }) => ({
    class: [
      // Transitions
      'transition-all',
      'duration-200',
      { 'p-5': !props.position == 'full' },

      // Background and Effects
      {
        'has-[.mask-active]:bg-transparent bg-black/40': props.modal
      }
    ]
  }),
  transition: ({ props }) => {
    return props.position === 'top'
      ? {
          enterFromClass:
            'opacity-0 scale-75 translate-x-0 -translate-y-full translate-z-0 mask-active',
          enterActiveClass: 'transition-all duration-200 ease-out',
          leaveActiveClass: 'transition-all duration-200 ease-out',
          leaveToClass:
            'opacity-0 scale-75 translate-x-0 -translate-y-full translate-z-0 mask-active'
        }
      : props.position === 'bottom'
        ? {
            enterFromClass: 'opacity-0 scale-75 translate-y-full mask-active',
            enterActiveClass: 'transition-all duration-200 ease-out',
            leaveActiveClass: 'transition-all duration-200 ease-out',
            leaveToClass:
              'opacity-0 scale-75 translate-x-0 translate-y-full translate-z-0 mask-active'
          }
        : props.position === 'left' ||
            props.position === 'topleft' ||
            props.position === 'bottomleft'
          ? {
              enterFromClass:
                'opacity-0 scale-75 -translate-x-full translate-y-0 translate-z-0 mask-active',
              enterActiveClass: 'transition-all duration-200 ease-out',
              leaveActiveClass: 'transition-all duration-200 ease-out',
              leaveToClass:
                'opacity-0 scale-75  -translate-x-full translate-y-0 translate-z-0 mask-active'
            }
          : props.position === 'right' ||
              props.position === 'topright' ||
              props.position === 'bottomright'
            ? {
                enterFromClass:
                  'opacity-0 scale-75 translate-x-full translate-y-0 translate-z-0 mask-active',
                enterActiveClass: 'transition-all duration-200 ease-out',
                leaveActiveClass: 'transition-all duration-200 ease-out',
                leaveToClass:
                  'opacity-0 scale-75 translate-x-full translate-y-0 translate-z-0 mask-active'
              }
            : {
                enterFromClass: 'opacity-0 scale-75 mask-active',
                enterActiveClass: 'transition-all duration-200 ease-out',
                leaveActiveClass: 'transition-all duration-200 ease-out',
                leaveToClass: 'opacity-0 scale-75 mask-active'
              }
  }
}
