import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconGas = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconGas(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="gas"><path stroke="currentColor" d="M10.5 14.5V4.1c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C9.74 2.5 9.46 2.5 8.9 2.5H5.1c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C3.5 3.26 3.5 3.54 3.5 4.1v10.4z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10.5 7.5h1a1 1 0 0 1 1 1v3a1 1 0 1 0 2 0v-6" /><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M14.5 6.5 13 5l1-1 .5.5z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m14.5 4.5-2-2m-1 12h-9m8-7h-7" />{props.children}</SvgRoot>;
});
export default IconGas;
