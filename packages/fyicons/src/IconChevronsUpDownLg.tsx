import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconChevronsUpDownLg = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconChevronsUpDownLg(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="chevrons-up-down-lg"><path fill="currentColor" d="M11.648 10.147a.5.5 0 1 1 .707.707l-4 4a.5.5 0 0 1-.708 0l-3.999-4a.5.5 0 0 1 .707-.707l3.647 3.645zm-4.002-9a.5.5 0 0 1 .708 0l4 4a.5.5 0 1 1-.707.707L8 2.207 4.354 5.854a.5.5 0 0 1-.708-.707z" />{props.children}</SvgRoot>;
});
export default IconChevronsUpDownLg;
