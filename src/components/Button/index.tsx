import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { styles } from './styles';

type ButtonProps = TouchableOpacityProps & {
  title: string;
  icon: keyof typeof Feather.glyphMap;
}

export function Button({ title, icon, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Text style={styles.text}>
        {title}
      </Text>

      <Feather name={icon} color="#FFF" size={18} />
    </TouchableOpacity>
  )
}