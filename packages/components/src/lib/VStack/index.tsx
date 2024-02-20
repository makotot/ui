import { PropsWithChildren, forwardRef } from "react"
import { tv } from 'tailwind-variants';

type Props = PropsWithChildren<{
  spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  align?: 'start' | 'center' | 'end' | 'stretch'
}>

const vstack = tv({
  base: 'flex flex-col',
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
    }
  },
})

export const VStack = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { children, spacing = 'none', align, ...rest } = props

  return <div className={vstack({spacing, align})} {...rest} ref={ref}>{children}</div>
})