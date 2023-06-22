import { TextInput, TextInputProps, View } from 'react-native';
import { InputIconProps, InputProps } from './input.types';

import { styles } from './styles';

function InputControl({ ...rest }: TextInputProps) {
  return (
    <TextInput style={styles.control} {...rest} />
  )
}

function InputIcon({ children }: InputIconProps) {
  return (
    <View style={styles.icon}>
      {children}
    </View>
  )
}

export function InputGroup({ children }: InputProps) {
  return (
    <View style={styles.group}>
      {children}
    </View>
  )
}

export const Input = {
  Group: InputGroup,
  Control: InputControl,
  Icon: InputIcon,
}