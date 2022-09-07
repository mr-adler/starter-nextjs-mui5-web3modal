import React, { FC } from 'react'
import { makeStyles } from 'styles/makeStyles'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Typography from '@mui/material/Typography'
import { TransitionDialog } from 'components/common'
import { chainNames, Chains } from 'constants/chains'
import { SwitchableNetworkButton } from 'components/ConnectButton'

const useStyles = makeStyles({ name: 'WrongChainModal' })((theme) => ({
  title: {
    fontWeight: 700,
  },
  label: {
    a: {
      color: theme.palette.primary.main,

      '&:hover': {
        textDecoration: 'underline',
      },
    },
  },
  actions: {
    justifyContent: 'center',
    marginBottom: theme.spacing(1.5),
  },
}))

type Props = {
  isOpen: boolean
  validChain: Chains
}

export const WrongChainModal: FC<Props> = ({ isOpen, validChain }) => {
  const { classes } = useStyles()

  return (
    <Dialog open={isOpen} TransitionComponent={TransitionDialog} keepMounted>
      <DialogTitle>
        <span className={classes.title}>Please change your Network</span>
      </DialogTitle>
      <DialogContent>
        <Typography variant={'caption'} display={'block'}>
          It looks like your Metamask is connected to the wrong network.
        </Typography>
        <Typography variant={'caption'}>
          Please change to the {chainNames[validChain]} on this page.
        </Typography>
      </DialogContent>
      <DialogActions className={classes.actions}>
        <SwitchableNetworkButton validChain={validChain} />
      </DialogActions>
    </Dialog>
  )
}
