import { useContext } from 'react'

import { AccountFormContext } from '../contexts/AccountFormContext';

export function useAccountForm() {
  const context = useContext(AccountFormContext)

  return context
}