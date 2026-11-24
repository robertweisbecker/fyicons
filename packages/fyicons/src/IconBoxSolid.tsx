import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBoxSolid = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBoxSolid(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="box-solid"><path stroke="currentColor" strokeLinejoin="round" d="M2.5 5.606v4.788c0 .53.28 1.022.737 1.291l4 2.364a1.5 1.5 0 0 0 1.526 0l4-2.364a1.5 1.5 0 0 0 .737-1.291V5.606a1.5 1.5 0 0 0-.737-1.291l-4-2.364a1.5 1.5 0 0 0-1.526 0l-4 2.364a1.5 1.5 0 0 0-.737 1.29Z" /><path fill="currentColor" d="m8 7.5 5.625-2.812v6.564L8 14.5zM8 8 3 5.5a.559.559 0 0 1 0-1l5-3z" /><path stroke="currentColor" strokeLinecap="round" d="m5.5 9.25-1-.5" />{props.children}</SvgRoot>;
});
export default IconBoxSolid;
