import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLinkSlash = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLinkSlash(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="link-slash"><path fill="currentColor" d="M2.146 2.146a.5.5 0 0 1 .707 0l11 11a.5.5 0 0 1-.707.707l-11-11a.5.5 0 0 1 0-.707" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m7.5 3.501 1-1a3.536 3.536 0 1 1 5 5l-1 1m-4 3.998-1 1a3.536 3.536 0 0 1-5-5l1-1" /></SvgRoot>;
});
export default IconLinkSlash;
