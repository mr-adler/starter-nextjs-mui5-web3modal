import { ComponentProps, FC, memo } from 'react'
import { makeStyles } from 'styles/makeStyles'
import Button from '@mui/material/Button'
import { chainNames, Chains } from 'constants/chains'
import { SwitchableNetworks } from 'constants/switchableNetworks'
import { ISwitchableNetwork } from 'models/ISwitchableNetwork'
import { switchNetwork } from 'utils/switchNetwork'
import { ConnectButton } from 'components/ConnectButton/ConnectButton'
import { useAppSelector } from 'store/hooks/redux'
import { isUserLoggedSelector } from 'store/reducers/user/selectors'

const useStyles = makeStyles({ name: 'SwitchableNetworkButton' })(() => ({}))

type Props = ComponentProps<typeof Button> & {
  className?: string
  validChain: Chains
}

const SwitchableNetworkButtonComponent: FC<Props> = ({
  className,
  variant = 'contained',
  color = 'primary',
  validChain,
  ...rest
}) => {
  const { cx } = useStyles()

  const isUserLogged = useAppSelector(isUserLoggedSelector)

  const switchableNetwork = SwitchableNetworks.find(
    (network: ISwitchableNetwork) => network.chainId === validChain
  )

  if (!isUserLogged) {
    return (
      <ConnectButton
        className={cx(className)}
        variant={variant}
        size={'medium'}
        color={color}
        {...rest}
      />
    )
  }

  return (
    <Button
      className={cx(className)}
      variant={variant}
      size={'medium'}
      color={color}
      onClick={() => {
        switchNetwork(switchableNetwork)
      }}
      {...rest}
    >
      Switch to the {validChain && chainNames[validChain]}
    </Button>
  )
}

export const SwitchableNetworkButton = memo(SwitchableNetworkButtonComponent)
