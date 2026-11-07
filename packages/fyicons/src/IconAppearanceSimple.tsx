import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconAppearanceSimple = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconAppearanceSimple(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="appearance-simple"><path fill="currentColor" fillRule="evenodd" d="M8 1a7 7 0 1 1 0 14A7 7 0 1 1 8 1m0 1a6 6 0 1 1 0 12z" /></SvgRoot>;
});
export default IconAppearanceSimple;
