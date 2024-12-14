export default {
  root: ({ props }) => ({
    class: [
      'relative',

      // Flex & Alignment
      { 'flex flex-col': props.scrollable && props.scrollHeight === 'flex' },

      // Size
      { 'h-full': props.scrollable && props.scrollHeight === 'flex' }
    ]
  }),
  mask: {
    class: [
      // Position
      'absolute',
      'top-0 left-0',
      'z-20',

      // Flex & Alignment
      'flex items-center justify-center',

      // Size
      'w-full h-full',

      // Color
      'bg-surface-100/40',

      // Transition
      'transition duration-200'
    ]
  },
  loadingIcon: {
    class: 'w-8 h-8 animate-spin'
  },
  tableContainer: ({ props }) => ({
    class: [
      {
        relative: props.scrollable,
        'flex flex-col grow': props.scrollable && props.scrollHeight === 'flex'
      },

      // Size
      { 'h-full': props.scrollable && props.scrollHeight === 'flex' }
    ]
  }),
  header: ({ props }) => ({
    class: [
      'font-bold',

      // Shape
      props.showGridlines ? 'border-x border-t border-b-0' : 'border-y border-x-0',

      // Spacing
      'p-4',

      // Color
      'bg-surface-50',
      'border-surface-300',
      'text-surface-700'
    ]
  }),
  table: {
    class: 'w-full border-b border-b-surface-200'
  },
  thead: ({ context }) => ({
    class: [
      {
        'bg-surface-50 top-0 z-40 sticky': context.scrollable
      }
    ]
  }),
  tbody: ({ instance, context }) => ({
    class: [
      'divide-y divide-surface-200 bg-white',
      {
        'sticky z-20': instance.frozenRow && context.scrollable
      }
    ]
  }),
  tfoot: ({ context }) => ({
    class: [
      {
        'bg-surface-50 bottom-0 z-0': context.scrollable
      }
    ]
  }),
  footer: {
    class: [
      'font-bold',

      // Shape
      'border-t-0 border-b border-x-0',

      // Spacing
      'p-4',

      // Color
      'bg-surface-50',
      'border-surface-200',
      'text-surface-700'
    ]
  },
  column: {
    headerCell: ({ context, props }) => ({
      class: [
        'font-bold',

        // Position
        { 'sticky z-20 border-b': props.frozen || props.frozen === '' },

        { relative: context.resizable },

        // Alignment
        'text-left',

        // Shape
        { 'first:border-l border-y border-r': context?.showGridlines },
        'border-b border-r last:border-r-0',

        // Spacing
        context?.size === 'small' ? 'p-2' : context?.size === 'large' ? 'p-5' : 'px-2 py-2',

        // Font
        'text-lg font-semibold font-akaya-kanadaka leading-tight',

        // Color
        'bg-surface-0 text-black',
        'border-b-black border-r-surface-200 ',

        // States
        'focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring focus-visible:ring-inset focus-visible:ring-primary-400/50',

        // Transition
        { 'transition duration-200': props.sortable === '' || props.sortable },

        // Misc
        { 'cursor-pointer': props.sortable === '' || props.sortable },
        {
          'overflow-hidden space-nowrap border-y bg-clip-padding': context.resizable // Resizable
        }
      ]
    }),
    columnHeaderContent: {
      class: 'flex items-center'
    },
    headerTitle: {
      class: 'text-black'
    },
    sort: ({ context }) => ({
      class: ['text-xl', context.sorted ? 'text-surface-600' : 'text-surface-300']
    }),
    bodyCell: ({ props, context, state, parent }) => ({
      class: [
        //Position
        { 'sticky box-border border-b': parent.instance.frozenRow },
        { 'sticky box-border border-b': props.frozen || props.frozen === '' },

        // Alignment
        'text-left align-top',

        // Shape
        'border-0 border-b border-solid',
        { 'first:border-l border-r border-b': context?.showGridlines },
        {
          'bg-surface-0': parent.instance.frozenRow || props.frozen || props.frozen === ''
        },

        // Spacing
        { 'p-2': context?.size === 'small' && !state['d_editing'] },
        { 'p-5': context?.size === 'large' && !state['d_editing'] },
        {
          'px-2 py-3': context?.size !== 'large' && context?.size !== 'small' && !state['d_editing']
        },
        { 'py-[0.6rem] px-2': state['d_editing'] },

        // Font
        'text-base font-normal font-akaya-kanadaka leading-tight',

        // Color
        'border-surface-200'
      ]
    }),
    footerCell: ({ context }) => ({
      class: [
        // Font
        'font-bold',

        // Alignment
        'text-left',

        // Shape
        'border-0 border-b border-solid',
        { 'border-x border-y': context?.showGridlines },

        // Spacing
        context?.size === 'small' ? 'p-2' : context?.size === 'large' ? 'p-5' : 'p-4',

        // Color
        'border-surface-200',
        'text-surface-700',
        'bg-surface-50'
      ]
    }),
    sortIcon: ({ context }) => ({
      class: ['ml-2', context.sorted ? 'text-primary-700' : 'text-surface-700']
    }),
    sortbadge: {
      class: [
        // Flex & Alignment
        'flex items-center justify-center align-middle',

        // Shape
        'rounded-full',

        // Size
        'w-[1.143rem] leading-[1.143rem]',

        // Spacing
        'ml-2',

        // Color
        'text-primary-700',
        'bg-primary-50'
      ]
    },
    filterOverlay: {
      class: [
        // Position
        'absolute top-0 left-0',

        // Shape
        'border-0',
        'rounded-md',
        'shadow-md',

        // Size
        'min-w-[12.5rem]',

        // Color
        'bg-surface-0',
        'text-surface-800'
      ]
    },
    filtermatchmodedropdown: {
      root: ({ state }) => ({
        class: [
          // Display and Position
          'flex',
          'relative',

          // Spacing
          'my-2',

          // Shape
          'w-full',
          'rounded-md',

          // Color and Background
          'bg-surface-0',
          'border border-surface-300',
          'text-surface-800',
          'placeholder:text-surface-400',

          // Transitions
          'transition-all',
          'duration-200',

          // States
          'hover:border-primary-500',
          {
            'outline-none outline-offset-0 ring ring-primary-400/50': state.focused
          },

          // Misc
          'cursor-pointer',
          'select-none'
        ]
      })
    },
    filterConstraintList: {
      class: 'm-0 p-0 py-3 list-none'
    },
    filterConstraint: ({ context }) => ({
      class: [
        // Font
        'font-normal',
        'leading-none',

        // Position
        'relative',

        // Shape
        'border-0',
        'rounded-none',

        // Spacing
        'm-0',
        'py-3 px-5',

        // Color
        { 'text-surface-700': !context?.highlighted },
        {
          'bg-surface-0 text-surface-700': !context?.highlighted
        },
        {
          'bg-primary-100 text-primary-700': context?.highlighted
        },
        {
          'bg-primary-50 text-primary-700': context?.highlighted
        },

        //States
        {
          'hover:bg-surface-100': !context?.highlighted
        },
        {
          'hover:text-surface-700 hover:bg-surface-100': !context?.highlighted
        },
        'focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring focus-visible:ring-inset focus-visible:ring-primary-400/50',

        // Transitions
        'transition-shadow',
        'duration-200',

        // Misc
        'cursor-pointer',
        'overflow-hidden',
        'whitespace-nowrap'
      ]
    }),
    filterOperator: {
      class: [
        // Spacing
        'px-5 py-3',

        // Shape
        'border-b border-solid',
        'rounded-t-md',

        // Color
        'text-surface-700',
        'border-surface-200',
        'bg-surface-0'
      ]
    },
    filter: {
      class: 'inline-flex items-center ml-auto gap-1'
    },
    pcfilteroperatordropdown: {
      root: ({ state }) => ({
        class: [
          // Display and Position
          'inline-flex',
          'relative',

          // Shape
          'w-full',
          'rounded-md',

          // Color and Background
          'bg-surface-0',
          'border border-surface-300',

          // Transitions
          'transition-all',
          'duration-200',

          // States
          'hover:border-primary-500',
          {
            'outline-none outline-offset-0 ring ring-primary-400/50': state.focused
          },

          // Misc
          'cursor-pointer',
          'select-none'
        ]
      }),
      input: ({ props }) => ({
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
          // Flexbox
          'flex items-center justify-center',
          'shrink-0',

          // Color and Background
          'bg-transparent',
          'text-surface-500',

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

          // Shape
          'border-0',
          'rounded-md',
          'shadow-md',

          // Color
          'bg-surface-0',
          'text-surface-800'
        ]
      },
      item: ({ context }) => ({
        class: [
          // Font
          'font-normal',
          'leading-none',

          // Position
          'relative',

          // Shape
          'border-0',
          'rounded-none',

          // Spacing
          'm-0',
          'py-3 px-5',

          // Color
          {
            'text-surface-700': !context.focused && !context.selected
          },
          {
            'bg-surface-50 text-surface-700': context.focused && !context.selected
          },
          {
            'bg-primary-100 text-primary-700': context.focused && context.selected
          },
          {
            'bg-primary-50 text-primary-700': !context.focused && context.selected
          },

          //States
          {
            'hover:bg-surface-100': !context.focused && !context.selected
          },
          {
            'hover:text-surface-700 hover:bg-surface-100': context.focused && !context.selected
          },

          // Transitions
          'transition-shadow',
          'duration-200',

          // Misc
          'cursor-pointer',
          'overflow-hidden',
          'whitespace-nowrap'
        ]
      })
    },
    filterconstraint: {
      class: [
        // Spacing
        'py-3 px-5',

        // Shape
        'border-b border-solid',

        // Color
        'border-surface-200'
      ]
    },
    filteraddrule: {
      class: 'py-3 px-5'
    },
    pcfilteraddrulebutton: {
      root: {
        class: [
          'relative',

          // Alignments
          'items-center inline-flex text-center align-bottom justify-center',

          // Sizes & Spacing
          'text-xs py-2 px-3 w-full',

          // Shape
          'rounded-md',

          'bg-transparent border-transparent',
          'text-primary-500',
          'hover:bg-primary-300/20',

          // Transitions
          'transition duration-200 ease-in-out',

          // Misc
          'cursor-pointer overflow-hidden select-none'
        ]
      },
      label: {
        class: 'flex-auto grow-0'
      },
      icon: {
        class: 'mr-2'
      }
    },
    filterremovebutton: {
      root: {
        class: [
          'relative',

          // Alignments
          'items-center inline-flex text-center align-bottom justify-center',

          // Sizes & Spacing
          'text-xs py-2 px-3 w-full mt-2',

          // Shape
          'rounded-md',

          'bg-transparent border-transparent',
          'text-red-500',
          'hover:bg-red-300/20',

          // Transitions
          'transition duration-200 ease-in-out',

          // Misc
          'cursor-pointer overflow-hidden select-none'
        ]
      },
      label: {
        class: 'flex-auto grow-0'
      },
      icon: {
        class: 'mr-2'
      }
    },
    filterbuttonbar: {
      class: [
        // Flex & Alignment
        'flex items-center justify-between',

        // Space
        'py-3 px-5'
      ]
    },
    filterclearbutton: {
      root: {
        class: [
          'relative',

          // Alignments
          'items-center inline-flex text-center align-bottom justify-center',

          // Sizes & Spacing
          'text-xs py-2 px-3',

          // Shape
          'rounded-md',

          'text-primary-500 border border-primary-500',
          'hover:bg-primary-300/20',

          // Transitions
          'transition duration-200 ease-in-out',

          // Misc
          'cursor-pointer overflow-hidden select-none'
        ]
      }
    },
    filterapplybutton: {
      root: {
        class: [
          'relative',

          // Alignments
          'items-center inline-flex text-center align-bottom justify-center',

          // Sizes & Spacing
          'text-xs py-2 px-3',

          // Shape
          'rounded-md',

          'text-surface-0',
          'bg-primary-500',
          'hover:bg-primary-600 hover:border-primary-600',

          // Transitions
          'transition duration-200 ease-in-out',

          // Misc
          'cursor-pointer overflow-hidden select-none'
        ]
      }
    },
    filtermenubutton: ({ context }) => ({
      class: [
        'relative',
        // Flex & Alignment
        'inline-flex items-center justify-center',

        // Size
        'w-8 h-8',

        // Spacing
        'ml-2',

        // Shape
        'rounded-full',

        // Color
        { 'bg-primary-50 text-primary-700': context.active },

        // States
        'hover:text-surface-700 hover:bg-surface-300/20',
        'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50',

        // Transition
        'transition duration-200',

        // Misc
        'cursor-pointer no-underline overflow-hidden'
      ]
    }),
    headerfilterclearbutton: ({ context }) => ({
      class: [
        'relative',

        // Flex & Alignment
        'inline-flex items-center justify-center',
        'text-left',

        // Shape
        'border-none',

        // Spacing
        'm-0 p-0 ml-2',

        // Color
        'bg-transparent',

        // Misc
        'cursor-pointer no-underline overflow-hidden select-none',
        {
          invisible: !context.hidden
        }
      ]
    }),
    rowToggleButton: {
      class: [
        'relative',

        // Flex & Alignment
        'inline-flex items-center justify-center',
        'text-left',

        // Spacing
        'm-0 p-0',

        // Size
        'w-8 h-8',

        // Shape
        'border-0 rounded-full',

        // Color
        'text-surface-500',
        'bg-transparent',
        'focus-visible:outline-none focus-visible:outline-offset-0',
        'focus-visible:ring focus-visible:ring-primary-400/50',

        // Transition
        'transition duration-200',

        // Misc
        'overflow-hidden',
        'cursor-pointer select-none'
      ]
    },
    columnResizer: {
      class: [
        'block',

        // Position
        'absolute top-0 right-0',

        // Sizing
        'w-2 h-full',

        // Spacing
        'm-0 p-0',

        // Color
        'border border-transparent',

        // Misc
        'cursor-col-resize'
      ]
    },
    rowreordericon: {
      class: 'cursor-move'
    },
    roweditorinitbutton: {
      class: [
        'relative',

        // Flex & Alignment
        'inline-flex items-center justify-center',
        'text-left',

        // Size
        'w-8 h-8',

        // Shape
        'border-0 rounded-full',

        // Color
        'text-surface-700',
        'border-transparent',

        // States
        'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50',
        'hover:text-surface-700 hover:bg-surface-300/20',

        // Transition
        'transition duration-200',

        // Misc
        'overflow-hidden',
        'cursor-pointer select-none'
      ]
    },
    roweditorsavebutton: {
      class: [
        'relative',

        // Flex & Alignment
        'inline-flex items-center justify-center',
        'text-left',

        // Size
        'w-8 h-8',

        // Shape
        'border-0 rounded-full',

        // Color
        'text-surface-700',
        'border-transparent',

        // States
        'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50',
        'hover:text-surface-700 hover:bg-surface-300/20',

        // Transition
        'transition duration-200',

        // Misc
        'overflow-hidden',
        'cursor-pointer select-none'
      ]
    },
    roweditorcancelbutton: {
      class: [
        'relative',

        // Flex & Alignment
        'inline-flex items-center justify-center',
        'text-left',

        // Size
        'w-8 h-8',

        // Shape
        'border-0 rounded-full',

        // Color
        'text-surface-700',
        'border-transparent',

        // States
        'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50',
        'hover:text-surface-700 hover:bg-surface-300/20',

        // Transition
        'transition duration-200',

        // Misc
        'overflow-hidden',
        'cursor-pointer select-none'
      ]
    },
    rowRadiobutton: {
      root: {
        class: [
          'relative',

          // Flexbox & Alignment
          'inline-flex',
          'align-bottom',

          // Size
          'w-[1.571rem] h-[1.571rem]',

          // Misc
          'cursor-pointer',
          'select-none'
        ]
      },
      box: ({ props }) => ({
        class: [
          // Flexbox
          'flex justify-center items-center',

          // Size
          'w-[1.571rem] h-[1.571rem]',

          // Shape
          'border-2',
          'rounded-full',

          // Transition
          'transition duration-200 ease-in-out',

          // Colors
          {
            'text-surface-700': !props.modelValue,
            'bg-surface-0': !props.modelValue,
            'border-surface-300': !props.modelValue,
            'border-primary-500': props.modelValue,
            'bg-primary-500': props.modelValue
          },

          // States
          {
            'peer-hover:border-primary-500': !props.disabled,
            'peer-hover:border-primary-600 peer-hover:bg-primary-600':
              !props.disabled && props.modelValue,
            'peer-focus-visible:border-primary-500 peer-focus-visible:ring-2 peer-focus-visible:ring-primary-400/20':
              !props.disabled,
            'opacity-60 cursor-default': props.disabled
          }
        ]
      }),
      input: {
        class: [
          'peer',

          // Size
          'w-full ',
          'h-full',

          // Position
          'absolute',
          'top-0 left-0',
          'z-10',

          // Spacing
          'p-0',
          'm-0',

          // Shape
          'opacity-0',
          'rounded-md',
          'outline-none',
          'border-2 border-surface-200',

          // Misc
          'appearance-none',
          'cursor-pointer'
        ]
      },
      icon: ({ props }) => ({
        class: [
          'block',

          // Shape
          'rounded-full',

          // Size
          'w-[0.857rem] h-[0.857rem]',

          // Colors
          'bg-surface-0',

          // Conditions
          {
            'backface-hidden scale-10 invisible': !props.modelValue,
            'transform visible scale-[1.1]': props.modelValue
          },

          // Transition
          'transition duration-200'
        ]
      })
    },
    headercheckbox: {
      root: {
        class: [
          'relative',

          // Alignment
          'inline-flex',
          'align-bottom',

          // Size
          'w-4',
          'h-4',

          // Misc
          'cursor-pointer',
          'select-none'
        ]
      },
      box: ({ props, context }) => ({
        class: [
          // Alignment
          'flex',
          'items-center',
          'justify-center',

          // Size
          'w-4',
          'h-4',

          // Shape
          'rounded',
          'border-2',

          // Colors
          {
            'border-surface-300 bg-surface-0': !context.checked && !props.invalid,
            'border-primary-500 bg-primary-500': context.checked
          },

          // Invalid State
          { 'border-red-500': props.invalid },

          // States
          {
            'peer-hover:border-primary-500': !props.disabled && !context.checked && !props.invalid,
            'peer-hover:bg-primary-600 peer-hover:border-primary-700':
              !props.disabled && context.checked,
            // TODO: use `primary-*` colors to define and align the focus styling in this, other PrimeVue and non PrimeVue components
            'peer-focus-visible:outline-none peer-focus-visible:outline-offset-0 peer-focus-visible:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]':
              !props.disabled,
            'cursor-default opacity-60': props.disabled
          },

          // Transitions
          'transition-colors',
          'duration-200'
        ]
      }),
      input: {
        class: [
          'peer',

          // Size
          'w-full ',
          'h-full',

          // Position
          'absolute',
          'top-0 left-0',
          'z-10',

          // Spacing
          'p-0',
          'm-0',

          // Shape
          'opacity-0',
          'rounded-md',
          'outline-none',
          'border-2 border-surface-200',

          // Misc
          'appearance-none',
          'cursor-pointer'
        ]
      },
      icon: {
        class: [
          // Font
          'text-base leading-none',

          // Size
          'w-4',
          'h-4',

          // Colors
          'text-surface-0',

          // Transitions
          'transition-all',
          'duration-200'
        ]
      }
    },
    rowCheckbox: {
      root: {
        class: [
          'relative',

          // Alignment
          'inline-flex',
          'align-bottom',

          // Size
          'w-4',
          'h-4',

          // Misc
          'cursor-pointer',
          'select-none'
        ]
      },
      box: ({ props, context }) => ({
        class: [
          // Alignment
          'flex',
          'items-center',
          'justify-center',

          // Size
          'w-4',
          'h-4',

          // Shape
          'rounded',
          'border-2',

          // Colors
          {
            'border-surface-300 bg-surface-0': !context.checked && !props.invalid,
            'border-primary-500 bg-primary-500': context.checked
          },

          // Invalid State
          { 'border-red-500': props.invalid },

          // States
          {
            'peer-hover:border-primary-500': !props.disabled && !context.checked && !props.invalid,
            'peer-hover:bg-primary-600 peer-hover:border-primary-700':
              !props.disabled && context.checked,
            // TODO: use `primary-*` colors to define and align the focus styling in this, other PrimeVue and non PrimeVue components
            'peer-focus-visible:outline-none peer-focus-visible:outline-offset-0 peer-focus-visible:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]':
              !props.disabled,
            'cursor-default opacity-60': props.disabled
          },

          // Transitions
          'transition-colors',
          'duration-200'
        ]
      }),
      input: {
        class: [
          'peer',

          // Size
          'w-full ',
          'h-full',

          // Position
          'absolute',
          'top-0 left-0',
          'z-10',

          // Spacing
          'p-0',
          'm-0',

          // Shape
          'opacity-0',
          'rounded-md',
          'outline-none',
          'border-2 border-surface-200',

          // Misc
          'appearance-none',
          'cursor-pointer'
        ]
      },
      icon: {
        class: [
          // Font
          'text-base leading-none',

          // Size
          'w-4',
          'h-4',

          // Colors
          'text-surface-0',

          // Transitions
          'transition-all',
          'duration-200'
        ]
      }
    },
    transition: {
      enterFromClass: 'opacity-0 scale-y-[0.8]',
      enterActiveClass:
        'transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]',
      leaveActiveClass: 'transition-opacity duration-100 ease-linear',
      leaveToClass: 'opacity-0'
    }
  },
  bodyRow: ({ context, props }) => ({
    class: [
      // Color
      {
        'bg-primary-50 text-primary-700': context.selected
      },
      {
        'bg-surface-0 text-black': !context.selected
      },
      { 'font-bold bg-surface-0': props.frozenRow },
      {
        'odd:bg-surface-0 odd:text-surface-600 even:bg-surface-50 even:text-surface-600':
          context.stripedRows
      },

      // State
      {
        'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 ring-inset':
          context.selectable
      },
      {
        'hover:bg-surface-300/20 hover:text-surface-600': props.selectionMode && !context.selected
      },

      // Transition
      {
        'transition duration-200': (props.selectionMode && !context.selected) || props.rowHover
      },

      // Misc
      { 'cursor-pointer': props.selectionMode }
    ]
  }),
  rowExpansion: {
    class: 'bg-surface-0 text-surface-600'
  },
  rowGroupHeader: {
    class: ['sticky z-20', 'bg-surface-0 text-surface-600']
  },
  rowToggleButton: {
    class: [
      'relative',

      // Flex & Alignment
      'inline-flex items-center justify-center',
      'text-left',

      // Spacing
      'm-0 p-0',

      // Size
      'w-8 h-8',

      // Shape
      'border-0 rounded-full',

      // Color
      'text-surface-500',
      'bg-transparent',
      'focus-visible:outline-none focus-visible:outline-offset-0',
      'focus-visible:ring focus-visible:ring-primary-400/50',

      // Transition
      'transition duration-200',

      // Misc
      'overflow-hidden',
      'cursor-pointer select-none'
    ]
  },
  rowToggleIcon: {
    class: 'inline-block w-4 h-4'
  },
  columnResizeIndicator: {
    class: 'absolute hidden w-[2px] z-20 bg-primary-500'
  }
}
