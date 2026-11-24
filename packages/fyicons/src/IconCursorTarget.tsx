import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCursorTarget = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCursorTarget(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="cursor-target"><path fill="currentColor" d="M7.239 1.042a7 7 0 0 1 7.734 7.568.5.5 0 1 1-.996-.087 6 6 0 0 0-6.63-6.488 6 6 0 0 0-3.203 1.37 5.999 5.999 0 0 0 3.333 10.572.5.5 0 0 1-.087.996A7 7 0 0 1 3.5 2.637a7 7 0 0 1 3.74-1.595m1.177 8.042a.5.5 0 0 1 .645-.647l4.716 1.789a.5.5 0 0 1 .177.82l-.956.955 1.647 1.646a.5.5 0 0 1 .001.708l-.292.292a.5.5 0 0 1-.707 0L11.998 13l-.954.956a.5.5 0 0 1-.82-.175zM7.083 4.107a4 4 0 0 1 4.876 3.313.501.501 0 0 1-.99.146A3.003 3.003 0 0 0 7.312 5.08a3 3 0 0 0 .244 5.887.5.5 0 0 1-.148.99A4.003 4.003 0 0 1 4.11 7.07a4 4 0 0 1 2.973-2.964" />{props.children}</SvgRoot>;
});
export default IconCursorTarget;
