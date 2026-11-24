import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCaretLeftLg = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCaretLeftLg(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="caret-left-lg"><path fill="currentColor" stroke="currentColor" strokeLinejoin="round" d="M9.5 12.5v-9L4.5 8z" />{props.children}</SvgRoot>;
});
export default IconCaretLeftLg;
