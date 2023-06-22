import { Text, TextInput, View } from 'react-native';

import { useFormContext } from "react-hook-form"
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Progress } from '../../components/Progress';
import { useRef } from 'react';

export function FormStepOne() {
  const { navigate } = useNavigation();
  const { control, handleSubmit, formState: { errors } } = useFormContext<AccountProps>();

  const emailRef = useRef<TextInput>(null);

  function handleNextStep() {
    navigate("formStepTwo");
  }

  return (
    <View style={styles.container}>
      <Progress progress={30} />

      <Text style={styles.title}>
        Criar sua conta
      </Text>

      <Input
        icon="user"
        error={errors.name?.message}
        formProps={{
          control,
          name: "name",
          rules: {
            required: "Nome é obrigatório."
          }
        }
        }
        inputProps={{
          placeholder: "Nome",
          onSubmitEditing: () => emailRef.current?.focus(),
          returnKeyType: "next"
        }}
      />

      <Input
        ref={emailRef}
        icon="mail"
        error={errors.email?.message}
        formProps={{
          control,
          name: "email",
          rules: {
            required: "E-mail é obrigatório.",
            pattern: {
              value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              message: "E-mail inválido."
            }
          }
        }}
        inputProps={{
          placeholder: "E-mail",
          onSubmitEditing: handleSubmit(handleNextStep),
          returnKeyType: "next"
        }}
      />

      <Button
        title="Continuar"
        icon="arrow-right"
        onPress={handleSubmit(handleNextStep)}
      />
    </View>
  );
}