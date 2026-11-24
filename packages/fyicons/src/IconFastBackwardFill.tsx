import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFastBackwardFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFastBackwardFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="fast-backward-fill"><path fill="currentColor" d="M13.607 3.252a.88.88 0 0 1 1.394.714v8.064a.88.88 0 0 1-1.394.715L8 8.715v3.319a.88.88 0 0 1-1.394.715L.994 8.714a.88.88 0 0 1 0-1.428l5.612-4.034A.88.88 0 0 1 8 3.966V7.28z" />{props.children}</SvgRoot>;
});
export default IconFastBackwardFill;
