import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconAtom = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconAtom(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="atom"><path stroke="currentColor" d="M5.818 11.78C6.242 13.372 6.97 14.5 8 14.5s1.759 -1.129 2.182 -2.72A13.5 13.5 0 0 1 8 10.96C7.257 11.31 6.514 11.592 5.818 11.78zM8 5.04c0.743 -0.35 1.486 -0.632 2.182 -0.82C9.76 2.63 9.032 1.5 8 1.5c-1.031 0 -1.759 1.129 -2.182 2.72C6.514 4.409 7.257 4.691 8 5.04z" clipRule="evenodd" /><path stroke="currentColor" d="M5.437 6.52a13.5 13.5 0 0 1 0.381 -2.3c-1.59 -0.428 -2.931 -0.363 -3.447 0.53c-0.515 0.893 0.098 2.088 1.265 3.25l0.03 -0.03q0.082 -0.08 0.167 -0.16C4.302 7.367 4.847 6.93 5.437 6.52zm5.127 2.96c0.674 -0.469 1.29 -0.971 1.8 -1.48c1.168 1.163 1.781 2.357 1.266 3.25c-0.516 0.893 -1.857 0.959 -3.448 0.53a13.4 13.4 0 0 0 0.382 -2.3zM13.629 4.75c0.516 0.893 -0.098 2.087 -1.265 3.25a13.5 13.5 0 0 0 -1.8 -1.48a13.5 13.5 0 0 0 -0.382 -2.3C11.772 3.792 13.114 3.857 13.629 4.75zm-7.81 7.03a13.5 13.5 0 0 1 -0.382 -2.3A13.5 13.5 0 0 1 3.636 8c-1.167 1.163 -1.78 2.357 -1.265 3.25c0.515 0.894 1.857 0.96 3.447 0.53z" clipRule="evenodd" /><path fill="currentColor" d="M8 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />{props.children}</SvgRoot>;
});
export default IconAtom;
