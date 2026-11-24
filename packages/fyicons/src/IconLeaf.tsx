import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLeaf = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLeaf(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="leaf"><path stroke="currentColor" strokeLinejoin="round" d="M13.5 2.5V8A5.5 5.5 0 1 1 8 2.5z" /><path stroke="currentColor" strokeLinecap="round" d="m8.5 7.5-7 7" />{props.children}</SvgRoot>;
});
export default IconLeaf;
