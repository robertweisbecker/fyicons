import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrowCounterClockwise = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrowCounterClockwise(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="arrow-counter-clockwise"><g fill="currentColor" clipPath={"url(#" + idPrefix + "clip0_529_7942)"}><path d="M9.167 2.115A6.002 6.002 0 0 0 1.997 8a.5.5 0 0 0 1 0 5.003 5.003 0 0 1 5.975-4.905A5.001 5.001 0 0 1 7.997 13a.5.5 0 0 0 0 1 6.001 6.001 0 0 0 1.17-11.885" /><path d="M2.13 10.852a.5.5 0 0 0 .734 0l1.858-2.013A.5.5 0 0 0 4.355 8H.64a.5.5 0 0 0-.367.84z" /></g><defs><clipPath id={idPrefix + "clip0_529_7942"}><path fill="white" d="M0 0h16v16H0z" /></clipPath></defs>{props.children}</SvgRoot>;
});
export default IconArrowCounterClockwise;
