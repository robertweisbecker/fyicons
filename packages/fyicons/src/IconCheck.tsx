import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCheck = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCheck(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="check"><path fill="currentColor" d="M11.832 3.475a.5.5 0 0 1 .836.55l-5.75 8.75a.5.5 0 0 1-.772.078l-3.75-3.75a.5.5 0 1 1 .707-.707l3.316 3.316z" />{props.children}</SvgRoot>;
});
export default IconCheck;
