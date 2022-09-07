import { FC, ReactNode } from 'react'
import { useIsValidChainId } from 'hooks/useIsValidChainId'
import { WrongChainModal } from 'components/Modals'
import { Chains } from 'constants/chains'
import { useAppSelector } from 'store/hooks/redux'
import { isUserLoggedSelector } from 'store/reducers/user/selectors'

type Props = {
  validChain: Chains
  children: ReactNode
}

export const GuardValidChainLayout: FC<Props> = ({ validChain, children }) => {
  const [isValidChainId] = useIsValidChainId(validChain)
  const isUserLogged = useAppSelector(isUserLoggedSelector)

  return (
    <>
      {children}
      <WrongChainModal
        isOpen={isUserLogged && !isValidChainId}
        validChain={validChain}
      />
    </>
  )
}
