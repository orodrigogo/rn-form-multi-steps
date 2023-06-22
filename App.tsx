import { Routes } from './src/routes';
import { AccountFormProvider } from './src/contexts/AccountFormContext';

export default function App() {
  return (
    <AccountFormProvider>
      <Routes />
    </AccountFormProvider>
  );
}