import { NavigationContainer } from '@react-navigation/native';

import { AccountRoutes } from './account.routes';

export function Routes() {
  return (
    <NavigationContainer>
      <AccountRoutes />
    </NavigationContainer>
  );
}