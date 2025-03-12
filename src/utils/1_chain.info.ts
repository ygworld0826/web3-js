import { web3 } from './0_web3.setting';

export const getChainId = async () => {
  /*
        Todo: 
        - Web3 공식문서에서 'getChainId'를 검색하여 기능을 구현하여 주세요.
        - getChainId는 비동기 작업이므로 'await'로 함수를 처리합니다.
  */

  const chainId = await web3.eth.net.getId();

  return chainId;
};
