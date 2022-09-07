/* @Services */
import { ethersProvider } from '../../providers'
import { Erc20Factory } from 'models/contracts/ethers/factories/Erc20Factory'
import { toLowBN } from 'utils/transformNumber'

export const contractAccountApi = {
  getProvider: () => ethersProvider.getProvider(),

  async getAccount(): Promise<string | undefined> {
    const accounts = await this.getProvider()!.listAccounts()

    return accounts[0]
  },

  async getChainId(): Promise<number> {
    const network = await this.getProvider()!.getNetwork()

    return network.chainId
  },

  async getTokenBalance(
    userAddress: string,
    tokenAddress: string
  ): Promise<number> {
    const tokenInstance = Erc20Factory.connect(
      tokenAddress,
      this.getProvider()!
    )

    return toLowBN(await tokenInstance.balanceOf(userAddress!), 18).toNumber()
  },
}
