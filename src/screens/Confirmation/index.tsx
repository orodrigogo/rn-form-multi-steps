import { Text, View } from 'react-native';

import { useAccountForm } from '../../hooks/useAccountForm';

import { styles } from './styles';

export function Confirmation() {
  const { accountFormData } = useAccountForm();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Nome: {accountFormData.name}
      </Text>
      <Text style={styles.title}>
        E-mail: {accountFormData.email}
      </Text>
      <Text style={styles.title}>
        Telefone: {accountFormData.phone}
      </Text>
      <Text style={styles.title}>
        Data de nascimento: {accountFormData.birth}
      </Text>
      <Text style={styles.title}>
        Senha e Confirmação: {accountFormData.password} e {accountFormData.passwordConfirmation}
      </Text>
    </View>
  );
}