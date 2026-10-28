import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSlashSmall = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSlashSmall(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="slash-small"><path d="M10.0926 4.20874C10.253 3.98421 10.5661 3.9323 10.7908 4.09253C11.0154 4.25305 11.0675 4.56609 10.907 4.79077L5.90701 11.7908C5.74649 12.0154 5.43344 12.0675 5.20877 11.907C4.98439 11.7464 4.93216 11.4333 5.09256 11.2087L10.0926 4.20874Z" fill="currentColor" /></SvgRoot>;
});
export default IconSlashSmall;
