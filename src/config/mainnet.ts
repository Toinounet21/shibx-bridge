import {ChainId} from '@layerzerolabs/lz-sdk';
import {Token} from 'x-shibx-bridge';

const tokens = [
  new Token(ChainId.ARBITRUM, '0x7f4dB37D7bEb31F445307782Bc3Da0F18dF13696', 18, 'SHIBX'),
  new Token(ChainId.AVALANCHE, '0x59414b3089ce2AF0010e7523Dea7E2b35d776ec7', 18, 'SHIBX'),
];

const proxy = [
  {
    chainId: ChainId.AVALANCHE,
    address: '0x656D33bfB74863E7aB1F5496a7a86a717A18a8D9',
  },
];

export const mainnet = {tokens, proxy};
