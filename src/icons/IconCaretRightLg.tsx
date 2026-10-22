import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCaretRightLg = React.forwardRef<SVGSVGElement, IconProps>(function IconCaretRightLg(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M6 4.06152C6 3.45271 6.67602 3.11356 7.1582 3.43164L7.25195 3.50391L11.6279 7.44238C11.9589 7.74032 11.9589 8.25971 11.6279 8.55762L7.25195 12.4961C6.76935 12.9303 6.00012 12.5877 6 11.9385V4.06152Z" fill="currentColor" /></SvgRoot>;
});
export default IconCaretRightLg;
