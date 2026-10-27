import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconVectorSvg = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconVectorSvg(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlnsXlink="http://www.w3.org/1999/xlink" {...props} ref={ref} idPrefix={idPrefix}><g id={idPrefix + "Repeat group 2_inner"} data-figma-trr="r8u1-0f"><path d="M8.00049 4.25V8" stroke="currentColor" strokeLinecap="square" /><circle cx={8} cy={3} r={1} stroke="currentColor" /></g><use xlinkHref={"#" + idPrefix + "Repeat%20group%202_inner"} transform="translate(8.00006 -3.31387) rotate(45)" /><use xlinkHref={"#" + idPrefix + "Repeat%20group%202_inner"} transform="translate(16.0002 -0.000243553) rotate(90)" /><use xlinkHref={"#" + idPrefix + "Repeat%20group%202_inner"} transform="translate(19.3141 7.99981) rotate(135)" /><use xlinkHref={"#" + idPrefix + "Repeat%20group%202_inner"} transform="translate(16.0005 16) rotate(-180)" /><use xlinkHref={"#" + idPrefix + "Repeat%20group%202_inner"} transform="translate(8.0004 19.3138) rotate(-135)" /><use xlinkHref={"#" + idPrefix + "Repeat%20group%202_inner"} transform="translate(0.000243807 16.0002) rotate(-90)" /><use xlinkHref={"#" + idPrefix + "Repeat%20group%202_inner"} transform="translate(-3.31363 8.00015) rotate(-45)" /></SvgRoot>;
});
export default IconVectorSvg;
