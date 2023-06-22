import { Alert, Text, View } from 'react-native';

import { styles } from './styles';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Progress } from '../../components/Progress';
import { useFormContext } from 'react-hook-form';

export function FormStepThree() {
  const { control, handleSubmit, formState: { errors }, getValues } = useFormContext<AccountProps>();

  function handleNextStep(data: AccountProps) {
    console.log(data);
    Alert.alert(JSON.stringify(data));
  }

  function validatePasswordConfirmation(passwordConfirmation: string) {
    const { password } = getValues();
    return password === passwordConfirmation || 'As senhas devem ser iguais';
  };

  return (
    <View style={styles.container}>
      <Progress progress={100} />

      <Text style={styles.title}>
        Escolha sua senha
      </Text>

      <Input
        icon="key"
        error={errors.password?.message}
        formProps={{
          control,
          name: "password",
          rules: {
            required: "Senha é obrigatória.",
            minLength: {
              value: 6,
              message: "A senha deve ter pelo menos 6 dígitos"
            }
          }
        }
        }
        inputProps={{
          placeholder: "Senha",
          secureTextEntry: true
        }}
      />

      <Input
        icon="key"
        error={errors.passwordConfirmation?.message}
        formProps={{
          control,
          name: "passwordConfirmation",
          rules: {
            required: "Senha é obrigatória.",
            validate: validatePasswordConfirmation,
          }
        }
        }
        inputProps={{
          placeholder: "Confirmação da senha",
          secureTextEntry: true
        }}
      />

      <Button
        title="Finalizar"
        icon="check"
        onPress={handleSubmit(handleNextStep)}
      />
    </View>
  );
}