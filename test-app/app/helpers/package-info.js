import { helper } from '@ember/component/helper';
import config from '../config/environment';

export default helper(function packageInfo(/*params, named*/) {
  const version = config.packageVersion;
  return { version };
});
