import { NavigationContainer } from '@react-navigation/native';
import { FormProvider, useForm } from 'react-hook-form';

import { AccountRoutes } from './account.routes';

export function Routes() {
  const methods = useForm();

  return (
    <NavigationContainer>
      <FormProvider {...methods}>
        <AccountRoutes />
      </FormProvider>
    </NavigationContainer>
  );
}