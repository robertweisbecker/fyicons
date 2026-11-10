import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconIdFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconIdFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="id-fill"><path fill="currentColor" d="M13 3a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM3.501 5a.5.5 0 0 0 0 1h1v4h-1a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-1V6h1a.5.5 0 0 0 0-1zm5.201.005h-.151l-.041.002h-.015a.5.5 0 0 0-.494.5v4.985a.5.5 0 0 0 .493.5h.004l.01.001h.042l.151.002.508.004c.4.002.894.002 1.253-.007 1.477-.035 2.539-1.394 2.54-2.867.001-1.684-.962-3.084-2.541-3.118A53 53 0 0 0 9.21 5c-.2 0-.38.003-.508.004m1.738 1.002c.79.017 1.473.672 1.554 1.87l.008.247c-.001 1.055-.746 1.85-1.564 1.87-.343.007-.824.007-1.223.005L9 9.997V6.002L9.214 6c.399-.002.881-.002 1.226.006" /></SvgRoot>;
});
export default IconIdFill;
