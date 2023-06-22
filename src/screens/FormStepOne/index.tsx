import { Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import { useAccountForm } from '../../hooks/useAccountForm';

import { styles } from './styles';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Progress } from '../../components/Progress';

export function FormStepOne() {
  const { updateFormData } = useAccountForm();
  const { navigate } = useNavigation();

  function handleNextStep() {
    updateFormData({ name: "Rodrigo", email: "rodrigo@email.com" });
    navigate("formStepTwo");
  }

  return (
    <View style={styles.container}>
      <Progress progress={30} />

      <Text style={styles.title}>
        Criar sua conta
      </Text>

      <Input.Group>
        <Input.Icon>
          <Feather name="user" size={24} color="#DC1637" />
        </Input.Icon>

        <Input.Control
          placeholder="Seu nome"
        />
      </Input.Group>

      <Input.Group>
        <Input.Icon>
          <Feather name="mail" size={24} color="#DC1637" />
        </Input.Icon>

        <Input.Control
          placeholder="E-mail"
        />
      </Input.Group>

      <Button.Group onPress={handleNextStep}>
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