import { AllHTMLAttributes, ElementType, PropsWithChildren, createElement, forwardRef } from "react"
import { tv } from 'tailwind-variants';

type Props = PropsWithChildren<{
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  bgColor?: 'none' | 'white' | 'black',
  element?: ElementType,
} & AllHTMLAttributes<HTMLElement>>

const box = tv({
  base: '',
  defaultVariants: {
    padding: 'none',
    bgColor: 'none',
  },
  variants: {
    padding: {
      none: '',
      sm: 'p-2',
      md: 'p-4',
      lg: 'p-6',
      xl: 'p-8',
    },
    bgColor: {
      none: '',
      black: 'bg-black',
      white: 'bg-white',
    }
  },
})

export const Box = forwardRef<HTMLElement, Props>((props, ref) => {
  const { children, padding = 'none', bgColor = 'none', element = 'div', ...rest } = props

  return createElement(element, {className: box({padding, bgColor}), ...rest, ref}, children)
})