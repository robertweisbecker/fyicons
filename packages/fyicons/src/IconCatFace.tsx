import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCatFace = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCatFace(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="cat-face"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m9.5 4.5 1.679-1.679a1 1 0 0 1 1.687.511L13.5 6.5c.5 1.5-.75 2 1 2-.896 3.152-2.108 3.47-4.03 4.463-.644.333-1.353.537-2.078.537H8M6.5 4.491 4.821 2.812a1 1 0 0 0-1.687.511L2.5 6.491c-.5 1.5.75 2-1 2 .896 3.152 2.108 3.47 4.03 4.463.644.332 1.353.537 2.078.537H8" /><path fill="currentColor" d="M5.342 8.196c.4.108.797-.076.887-.41s-.163-.69-.563-.797-.797.076-.886.41c-.09.333.162.69.562.797m5.324.065c.4-.107.652-.464.563-.798-.09-.333-.486-.517-.886-.41s-.652.465-.563.799c.09.333.486.516.886.41M8 9.5c0-.375 1-.375 1-1.125C9 8.065 8.5 8 8 8s-1 .064-1 .375c0 .75 1 .75 1 1.125" /><path stroke="currentColor" strokeLinecap="round" d="M9.5 4.5a4.74 4.74 0 0 0-3 0" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={0.75} d="m11.5 10.5 3 1m-3 1 2 1m-9-3-3 1m3 1-2 1" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.75} d="M6.75 10.75a1.4 1.4 0 0 0 1.166-.624L8 10l.084.126a1.4 1.4 0 0 0 1.166.624" />{props.children}</SvgRoot>;
});
export default IconCatFace;
