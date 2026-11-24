import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconThumbsDown = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconThumbsDown(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="thumbs-down"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8.001 11c-.5 1-.324 2.664-1.5 2.5-.865-.12-1-1-1-1.5 0-1.5.43-2.07 0-2.5H3.618c-.592 0-1.071-.48-1.071-1.071 0-.316.103-.606.276-.842a1.248 1.248 0 0 1 .298-1.915 1.25 1.25 0 0 1 .546-1.5A1.246 1.246 0 0 1 4.843 2.5h2.022v.015a4.1 4.1 0 0 1 2.263.92c.172.14.349.284.52.42.523.416.853 1.047.853 1.715V7.5c0 .63-.299 1.22-.778 1.628C9.103 9.655 8.294 10.413 8 11" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10.389 8.5h.962c.43 0 .871-.058 1.206-.327.427-.343.943-1 .943-2.173s-.516-1.83-.943-2.173c-.335-.27-.776-.327-1.206-.327H9.5" />{props.children}</SvgRoot>;
});
export default IconThumbsDown;
