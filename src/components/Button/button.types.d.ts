import { ReactNode } from 'react';

type ButtonProps = TouchableOpacityProps & {
  children: ReactNode
  isLoading?: boolean
}

type ButtonTextProps = {
  children: ReactNode
}

type ButtonIconProps = {
  children: ReactNode
}
