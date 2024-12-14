export default {
  root: ({ props, context, parent }) => ({
    class: [
      'relative',

      // Alignments
      'items-center inline-flex text-center align-bottom justify-center',

      // Font
      'text-sm font-normal',

      // Sizes & Spacing
      'gap-2 leading-tight',
      {
        'px-4 py-2': props.size === null,
        'text-sm py-2 px-3': props.size === 'small',
        'text-xl py-3 px-4': props.size === 'large'
      },
      {
        'w-12 p-0 py-3': props.label == null && props.icon !== null
      },

      // Shapes
      { 'shadow-lg': props.raised },
      { 'rounded-lg': !props.rounded, 'rounded-full': props.rounded },
      {
        'rounded-none first:rounded-l-md last:rounded-r-md': parent.instance.$name == 'InputGroup'
      },

      // Link Button
      { 'text-primary-600 bg-transparent border-transparent': props.link },

      // Plain Text Button
      { 'text-surface-500': props.plain && props.text },
      // Plain Outlined Button
      {
        'text-surface-500 border border-gray-500': props.plain && props.outlined
      },

      // Text Button
      { 'bg-transparent border-transparent': props.text && !props.plain },

      // Outlined Button
      { 'bg-transparent border': props.outlined && !props.plain },

      // --- Severity Buttons ---

      // Primary Button
      {
        'text-surface-0':
          !props.link && props.severity === null && !props.text && !props.outlined && !props.plain,
        'bg-primary-600':
          !props.link && props.severity === null && !props.text && !props.outlined && !props.plain
      },
      // Primary Text Button
      {
        'text-primary-600': props.text && props.severity === null && !props.plain
      },
      // Primary Outlined Button
      {
        'text-primary-600 border border-primary-600 hover:bg-primary-300/20':
          props.outlined && props.severity === null && !props.plain
      },

      // Secondary Button
      {
        'text-primary-600':
          props.severity === 'secondary' && !props.text && !props.outlined && !props.plain,
        'bg-violet-100':
          props.severity === 'secondary' && !props.text && !props.outlined && !props.plain
      },
      // Secondary Text Button
      {
        'text-surface-500': props.text && props.severity === 'secondary' && !props.plain
      },
      // Secondary Outlined Button
      {
        'text-surface-500 border border-surface-500 hover:bg-surface-300/20':
          props.outlined && props.severity === 'secondary' && !props.plain
      },

      // Success Button
      {
        'text-surface-0':
          props.severity === 'success' && !props.text && !props.outlined && !props.plain,
        'bg-green-500':
          props.severity === 'success' && !props.text && !props.outlined && !props.plain
      },
      // Success Text Button
      {
        'text-green-500': props.text && props.severity === 'success' && !props.plain
      },
      // Success Outlined Button
      {
        'text-green-500 border border-green-500 hover:bg-green-300/20':
          props.outlined && props.severity === 'success' && !props.plain
      },

      // Info Button
      {
        'text-surface-0':
          props.severity === 'info' && !props.text && !props.outlined && !props.plain,
        'bg-blue-500': props.severity === 'info' && !props.text && !props.outlined && !props.plain
      },
      // Info Text Button
      {
        'text-blue-500': props.text && props.severity === 'info' && !props.plain
      },
      // Info Outlined Button
      {
        'text-blue-500 border border-blue-500 hover:bg-blue-300/20 ':
          props.outlined && props.severity === 'info' && !props.plain
      },

      // Warning Button
      {
        'text-surface-0':
          props.severity === 'warning' && !props.text && !props.outlined && !props.plain,
        'bg-orange-500':
          props.severity === 'warning' && !props.text && !props.outlined && !props.plain
      },
      // Warning Text Button
      {
        'text-orange-500': props.text && props.severity === 'warning' && !props.plain
      },
      // Warning Outlined Button
      {
        'text-orange-500 border border-orange-500 hover:bg-orange-300/20':
          props.outlined && props.severity === 'warning' && !props.plain
      },

      // Help Button
      {
        'text-surface-0':
          props.severity === 'help' && !props.text && !props.outlined && !props.plain,
        'bg-purple-500': props.severity === 'help' && !props.text && !props.outlined && !props.plain
      },
      // Help Text Button
      {
        'text-purple-500': props.text && props.severity === 'help' && !props.plain
      },
      // Help Outlined Button
      {
        'text-purple-500 border border-purple-500 hover:bg-purple-300/20':
          props.outlined && props.severity === 'help' && !props.plain
      },

      // Danger Button
      {
        'text-surface-0':
          props.severity === 'danger' && !props.text && !props.outlined && !props.plain,
        'bg-red-500': props.severity === 'danger' && !props.text && !props.outlined && !props.plain
      },
      // Danger Text Button
      {
        'text-red-500': props.text && props.severity === 'danger' && !props.plain
      },
      // Danger Outlined Button
      {
        'text-red-500 border border-red-500 hover:bg-red-300/20':
          props.outlined && props.severity === 'danger' && !props.plain
      },

      // --- Severity Button States ---
      // TODO: use `primary-*` colors to define and align the focus styling in this, other PrimeVue and non PrimeVue components
      {
        'focus:outline-none focus:outline-offset-0 focus:ring': !props.plain && !props.link
      },

      // Link
      {
        'focus:ring-primary-400/50': props.link
      },

      // Text & Outlined Button
      {
        'hover:bg-surface-300/20': props.plain && (props.text || props.outlined)
      },

      // Primary
      {
        'hover:bg-primary-800':
          !props.link && props.severity === null && !props.text && !props.outlined && !props.plain
      },
      {
        'focus:ring-primary-400/50': props.severity === null
      },
      // Text & Outlined Button
      {
        'hover:bg-primary-300/20':
          (props.text || props.outlined) && props.severity === null && !props.plain
      },

      // Secondary
      {
        'hover:bg-primary-600 hover:text-surface-0':
          props.severity === 'secondary' && !props.text && !props.outlined && !props.plain
      },
      {
        'focus:ring-surface-400/50': props.severity === 'secondary'
      },
      // Text & Outlined Button
      {
        'hover:bg-surface-300/20':
          (props.text || props.outlined) && props.severity === 'secondary' && !props.plain
      },

      // Success
      {
        'hover:bg-green-600':
          props.severity === 'success' && !props.text && !props.outlined && !props.plain
      },
      {
        'focus:ring-green-400/50': props.severity === 'success'
      },
      // Text & Outlined Button
      {
        'hover:bg-green-300/20':
          (props.text || props.outlined) && props.severity === 'success' && !props.plain
      },

      // Info
      {
        'hover:bg-blue-600':
          props.severity === 'info' && !props.text && !props.outlined && !props.plain
      },
      {
        'focus:ring-blue-400/50': props.severity === 'info'
      },
      // Text & Outlined Button
      {
        'hover:bg-blue-300/20':
          (props.text || props.outlined) && props.severity === 'info' && !props.plain
      },

      // Warning
      {
        'hover:bg-orange-600':
          props.severity === 'warning' && !props.text && !props.outlined && !props.plain
      },
      {
        'focus:ring-orange-400/50': props.severity === 'warning'
      },
      // Text & Outlined Button
      {
        'hover:bg-orange-300/20':
          (props.text || props.outlined) && props.severity === 'warning' && !props.plain
      },

      // Help
      {
        'hover:bg-purple-600':
          props.severity === 'help' && !props.text && !props.outlined && !props.plain
      },
      {
        'focus:ring-purple-400/50': props.severity === 'help'
      },
      // Text & Outlined Button
      {
        'hover:bg-purple-300/20':
          (props.text || props.outlined) && props.severity === 'help' && !props.plain
      },

      // Danger
      {
        'hover:bg-red-600':
          props.severity === 'danger' && !props.text && !props.outlined && !props.plain
      },
      {
        'focus:ring-red-400/50': props.severity === 'danger'
      },
      // Text & Outlined Button
      {
        'hover:bg-red-300/20':
          (props.text || props.outlined) && props.severity === 'danger' && !props.plain
      },

      // Disabled
      { 'opacity-50 pointer-events-none cursor-default': context.disabled },

      // Misc
      'cursor-pointer overflow-hidden select-none'
    ]
  }),
  label: ({ props }) => ({
    class: [
      {
        'hover:underline': props.link
      },
      { 'flex-1': props.label !== null, 'invisible w-0': props.label == null }
    ]
  }),
  icon: ({ props }) => ({
    class: [
      'mx-0',
      {
        'mr-2': props.iconPos == 'left' && props.label != null,
        'ml-2 order-1': props.iconPos == 'right' && props.label != null,
        'mb-2': props.iconPos == 'top' && props.label != null,
        'mt-2': props.iconPos == 'bottom' && props.label != null
      }
    ]
  }),
  loadingicon: ({ props }) => ({
    class: [
      'h-4 w-4',
      'mx-0',
      {
        'mr-2': props.iconPos == 'left' && props.label != null,
        'ml-2 order-1': props.iconPos == 'right' && props.label != null,
        'mb-2': props.iconPos == 'top' && props.label != null,
        'mt-2': props.iconPos == 'bottom' && props.label != null
      },
      'animate-spin'
    ]
  }),
  badge: ({ props }) => ({
    class: [
      {
        'ml-2 w-4 h-4 leading-none flex items-center justify-center': props.badge
      }
    ]
  })
}
