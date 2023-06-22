import { Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { styles } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

type Props = {
  title: string;
}

export function FormStepOne({ title }: Props) {
  return (
    <View style={styles.form}>
      <Text style={styles.title}>
        {title}
      </Text>

      <Input.Group>
        <Input.Icon>
          <Feather name="user" size={24} color="#DC1637" />
        </Input.Icon>

        <Input.Control placeholder="Seu nome" />
      </Input.Group>

      <Input.Group>
        <Input.Icon>
          <Feather name="mail" size={24} color="#DC1637" />
        </Input.Icon>

        <Input.Control placeholder="E-mail" />
      </Input.Group>

      <Button.Group>
        <Button.Text>
          Continuar
        </Button.Text>
        <Button.Icon>
          <Feather name="arrow-right" color="#FFF" size={18} />
        </Button.Icon>
      </Button.Group>
    </View>
  );
}