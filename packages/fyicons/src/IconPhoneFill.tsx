import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPhoneFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPhoneFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M2.812 1.348a1.5 1.5 0 0 1 2.16.252l1.395 1.86a2.5 2.5 0 0 1-.118 3.146l-.099.112a.5.5 0 0 0 .005.664l1.16 1.287 1.301 1.172a.5.5 0 0 0 .664.005l.112-.098a2.5 2.5 0 0 1 3.146-.119l1.861 1.397a1.5 1.5 0 0 1 .253 2.16l-.159.19a4.5 4.5 0 0 1-6.637.302L5.1 10.922l-.013-.01-2.768-2.768a4.5 4.5 0 0 1 .302-6.637z" /></SvgRoot>;
});
export default IconPhoneFill;
