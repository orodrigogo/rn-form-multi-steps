import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { FormStepOne } from '../screens/FormStepOne';
import { FormStepTwo } from '../screens/FormStepTwo';
import { FormStepThree } from '../screens/FormStepThree';

const { Navigator, Screen } = createNativeStackNavigator();

export function AccountRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false, animation: "none" }}>
      <Screen name="formStepOne" component={FormStepOne} />
      <Screen name="formStepTwo" component={FormStepTwo} />
      <Screen name="formStepThree" component={FormStepThree} />
    </Navigator>
  )
}