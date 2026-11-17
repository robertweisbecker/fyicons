import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCursorTarget = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCursorTarget(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="cursor-target"><path fill="currentColor" d="M7.239 1.042a7 7 0 0 1 7.734 7.568.5.5 0 0 1-.996-.087 6 6 0 0 0-.716-3.409A6.002 6.002 0 0 0 2.24 6.321a6.002 6.002 0 0 0 5.237 7.656.5.5 0 0 1-.087.996A7.002 7.002 0 0 1 3.5 2.637a7 7 0 0 1 3.74-1.595m1.177 8.042a.5.5 0 0 1 .645-.648l4.716 1.79a.5.5 0 0 1 .177.82l-.956.955 1.647 1.646a.5.5 0 0 1 .001.707l-.292.292a.5.5 0 0 1-.707 0l-1.649-1.645-.955.955a.5.5 0 0 1-.819-.175zM7.083 4.106a4 4 0 0 1 4.876 3.314.5.5 0 0 1-.99.145A3.003 3.003 0 0 0 7.312 5.08a3 3 0 0 0-2.161 3.856 3 3 0 0 0 2.405 2.03.5.5 0 0 1-.148.99 4.002 4.002 0 0 1-2.232-6.79 4 4 0 0 1 1.907-1.06" />{props.children}</SvgRoot>;
});
export default IconCursorTarget;
