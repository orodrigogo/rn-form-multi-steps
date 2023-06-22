import { Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import { useAccountForm } from '../../hooks/useAccountForm';

import { styles } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Progress } from '../../components/Progress';

export function FormStepTwo() {
  const { navigate } = useNavigation();
  const { updateFormData } = useAccountForm();

  function handleNextStep() {
    updateFormData({ birth: "Rodrigo", phone: "123" });
    navigate("formStepThree");
  }

  return (
    <View style={styles.container}>
      <Progress progress={60} />


      <Text style={styles.title}>
        Sobre você
      </Text>

      <Input.Group>
        <Input.Icon>
          <Feather name="calendar" size={24} color="#DC1637" />
        </Input.Icon>

        <Input.Control
          placeholder="Data de nascimento"
        />
      </Input.Group>

      <Input.Group>
        <Input.Icon>
          <Feather name="phone" size={24} color="#DC1637" />
        </Input.Icon>

        <Input.Control
          placeholder="Telefone"
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