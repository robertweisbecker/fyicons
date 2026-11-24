import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSunrise = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSunrise(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="sunrise"><g clipPath={"url(#" + idPrefix + "clip0_1880_2607)"}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m3.5 7.5 1 1" /><path fill="currentColor" d="m7.794 2.172-1.772 2.56a.25.25 0 0 0 .205.393h3.546a.25.25 0 0 0 .205-.392L8.206 2.172a.25.25 0 0 0-.412 0" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m11.5 8.5 1-1M8 7.5v-4m-7.5 7 2 1m13-1-2 1m-10 2h9m-8-.5a3.5 3.5 0 1 1 7 0" /></g><defs><clipPath id={idPrefix + "clip0_1880_2607"}><path fill="white" d="M0 0h16v16H0z" /></clipPath></defs>{props.children}</SvgRoot>;
});
export default IconSunrise;
