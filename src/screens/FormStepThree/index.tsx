import { Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import { useAccountForm } from '../../hooks/useAccountForm';

import { styles } from './styles';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Progress } from '../../components/Progress';

export function FormStepThree() {
  const { navigate } = useNavigation();
  const { updateFormData } = useAccountForm();

  function handleNextStep() {
    updateFormData({ password: "123", passwordConfirmation: "123" });
    navigate("confirmation");
  }

  return (
    <View style={styles.container}>
      <Progress progress={100} />

      <Text style={styles.title}>
        Escolha sua senha
      </Text>

      <Input.Group>
        <Input.Icon>
          <Feather name="key" size={24} color="#DC1637" />
        </Input.Icon>

        <Input.Control
          placeholder="Senha"
          secureTextEntry
        />

        <TouchableOpacity>
          <Feather name="eye" size={24} color="#DC1637" />
        </TouchableOpacity>
      </Input.Group>

      <Input.Group>
        <Input.Icon>
          <Feather name="key" size={24} color="#DC1637" />
        </Input.Icon>

        <Input.Control
          placeholder="Confirmar senha"
          secureTextEntry
        />

        <TouchableOpacity>
          <Feather name="eye" size={24} color="#DC1637" />
        </TouchableOpacity>
      </Input.Group>

      <Button.Group onPress={handleNextStep}>
        <Button.Text>
          Finalizar
        </Button.Text>
        <Button.Icon>
          <Feather name="check" color="#FFF" size={18} />
        </Button.Icon>
      </Button.Group>
    </View>
  );
}