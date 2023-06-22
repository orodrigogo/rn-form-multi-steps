import { View } from 'react-native';

import { styles } from './styles';

import { FormStepOne } from '../FormStepOne';
import { FormStepTwo } from '../FormStepTwo';
import { Progress } from '../../components/Progress';

export function Form() {
  return (
    <View style={styles.container}>
      <Progress progress={50} />

      <FormStepOne title="Crie sua conta" />
      {/*<FormStepTwo title="Escolha sua senha" />*/}
    </View>
  );
}