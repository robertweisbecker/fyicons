import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconRuler = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconRuler(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="ruler"><path fill="currentColor" d="M9.44 1.853a1.5 1.5 0 0 1 2.12 0l2.586 2.586a1.5 1.5 0 0 1 0 2.12l-7.585 7.587a1.5 1.5 0 0 1-2.122 0L1.854 11.56a1.5 1.5 0 0 1 0-2.121zm1.414.707a.5.5 0 0 0-.707 0l-.941.94 1.001 1-.707.707-1.001-1-.792.792 2 2L9 7.706l-2.001-2-.793.793L7.207 7.5l-.707.707-1.001-1-.793.792L6.707 10 6 10.707l-2.001-2-1.438 1.439a.5.5 0 0 0 0 .707l2.585 2.586a.5.5 0 0 0 .708 0l7.586-7.586a.5.5 0 0 0 0-.707z" />{props.children}</SvgRoot>;
});
export default IconRuler;
