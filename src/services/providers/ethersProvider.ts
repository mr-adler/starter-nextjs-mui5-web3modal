import { ethers } from 'ethers'

type TEthersProvider = ethers.providers.Web3Provider | null

class EthersProvider {
  provider: TEthersProvider

  tempProvider: TEthersProvider

  constructor(provider: TEthersProvider = null) {
    this.provider = provider
    this.tempProvider = null
  }

  getProvider(): TEthersProvider {
    return this.provider
  }

  setProvider(provider: TEthersProvider): void {
    this.provider = provider
  }

  getTempProvider(): TEthersProvider {
    return this.provider
  }

  setTempProvider(provider: TEthersProvider): void {
    this.tempProvider = provider
  }
}

export default EthersProvider
