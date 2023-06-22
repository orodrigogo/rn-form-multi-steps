import { Text, TouchableOpacity, View } from 'react-native';
import { ButtonIconProps, ButtonProps, ButtonTextProps } from './button.types';

import { styles } from './styles';

function ButtonGroup({ children, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.group} {...rest}>
      {children}
    </TouchableOpacity>
  )
}

function ButtonIcon({ children }: ButtonIconProps) {
  return (
    <View style={styles.icon}>
      {children}
    </View>
  )
}

function ButtonText({ children }: ButtonTextProps) {
  return (
    <Text style={styles.text}>
      {children}
    </Text>
  )
}

export const Button = {
  Group: ButtonGroup,
  Text: ButtonText,
  Icon: ButtonIcon,
}