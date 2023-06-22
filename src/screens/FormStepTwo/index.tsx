import { Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { useFormContext } from 'react-hook-form';

import { styles } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Progress } from '../../components/Progress';

export function FormStepTwo() {
  const { navigate } = useNavigation();
  const { control, handleSubmit, formState: { errors } } = useFormContext<AccountProps>();

  function handleNextStep() {
    navigate("formStepThree");
  }

  return (
    <View style={styles.container}>
      <Progress progress={60} />


      <Text style={styles.title}>
        Sobre você
      </Text>

      <Input
        icon="calendar"
        error={errors.birth?.message}
        formProps={{
          control,
          name: "birth",
          rules: {
            required: "Data de nascimento é obrigatória.",
            pattern: {
              value: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/,
              message: "Data de nascimento inválido."
            }
          }
        }
        }
        inputProps={{ placeholder: "Data de nascimento" }}
      />

      <Input
        icon="phone"
        error={errors.phone?.message}
        formProps={{
          control,
          name: "phone",
          rules: {
            required: "Telefone é obrigatório.",
            pattern: {
              value: /^\+\d{2}\d{2}\d{5}\d{4}$/,
              message: "Telefone inválido."
            }
          }
        }}
        inputProps={{ placeholder: "Telefone" }}
      />

      <Button
        title="Continuar"
        icon="arrow-right"
        onPress={handleSubmit(handleNextStep)}
      />
    </View>
  );
}