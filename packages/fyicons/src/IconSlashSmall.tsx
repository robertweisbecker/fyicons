import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSlashSmall = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSlashSmall(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="slash-small"><path fill="currentColor" d="M10.093 4.209a.501.501 0 0 1 .814.582l-5 7a.501.501 0 0 1-.814-.582z" /></SvgRoot>;
});
export default IconSlashSmall;
