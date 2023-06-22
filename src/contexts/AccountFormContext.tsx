import React, { ReactNode, createContext, useState } from 'react';

type AccountProps = {
  name?: string;
  email?: string;
  phone?: string;
  birth?: string;
  password?: string;
  passwordConfirmation?: string;
}

type AccountFormContextProviderProps = {
  children: ReactNode;
}

type AccountFormContextDataProps = {
  accountFormData: AccountProps;
  updateFormData: (value: AccountProps) => void;
}

const AccountFormContext = createContext<AccountFormContextDataProps>({} as AccountFormContextDataProps);

const AccountFormProvider = ({ children }: AccountFormContextProviderProps) => {
  const [accountFormData, setAccountFormData] = useState<AccountProps>({} as AccountProps);

  function updateFormData(data: any) {
    setAccountFormData((prevState) => ({ ...prevState, ...data }));
  };

  return (
    <AccountFormContext.Provider value={{ accountFormData, updateFormData }}>
      {children}
    </AccountFormContext.Provider>
  );
};

export { AccountFormContext, AccountFormProvider };