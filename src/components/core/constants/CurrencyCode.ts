import Unit from './Unit';
import { IS_MAINNET } from './constants';

export default {
  [Unit.CHIALITE]: IS_MAINNET ? 'XCH' : 'TXCH',
};
