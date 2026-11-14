import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconVolumeSlash = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconVolumeSlash(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="volume-slash"><path stroke="currentColor" strokeLinecap="round" d="m2.5 2.5 11 11" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m6 5.5-2.5.001a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1H6l3.252 2.89a.75.75 0 0 0 1.248-.56V3.17a.75.75 0 0 0-1.248-.56z" />{props.children}</SvgRoot>;
});
export default IconVolumeSlash;
