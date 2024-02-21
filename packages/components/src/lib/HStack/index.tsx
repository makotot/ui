import { ElementType, PropsWithChildren, createElement, forwardRef } from "react"
import { tv } from 'tailwind-variants';

type Props = PropsWithChildren<{
  spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  align?: 'start' | 'center' | 'end' | 'stretch'
  wrap?: 'none' | 'wrap',
  element?: ElementType,
}>

const hstack = tv({
  base: 'flex flex-row',
  defaultVariants: {
    spacing: 'none',
  },
  variants: {
    spacing: {
      none: '',
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-6',
      xl: 'gap-8',
    },
    align: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      stretch: 'items-stretch',
    },
    wrap: {
      none: 'flex-nowrap',
      wrap: 'flex-wrap',
    }
  },
})

export const HStack = forwardRef<HTMLElement, Props>((props, ref) => {
  const { children, spacing = 'none', align, wrap, element = 'div', ...rest } = props

  return createElement(element, {className: hstack({spacing, align, wrap}), ...rest, ref}, children)
})