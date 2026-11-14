import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBookWideReading = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBookWideReading(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="book-wide-reading"><path fill="currentColor" d="M4.5 1a4 4 0 0 1 3.667 2.402c1.018-1.243 2.751-1.783 4.339-1.186 1.5.565 2.494 2 2.494 3.603v6.376a.717.717 0 0 1-1.244.486 2.976 2.976 0 0 0-4.426.06l-.954 1.089-.01.008-.026.026-.01.013-.016.01-.006.003-.058.04-.015.01-.018.008-.045.018q-.015.008-.03.012l-.014.003-.059.012-.021.004h-.023L8 14l-.025-.003H7.95l-.024-.005-.053-.01-.018-.004-.038-.014-.032-.014-.022-.01-.02-.014-.047-.03-.012-.01-.014-.01-.014-.014-.033-.032-.954-1.09a2.976 2.976 0 0 0-4.426-.059A.717.717 0 0 1 1 12.195V5.886a3.58 3.58 0 0 1 2-3.212V2a1 1 0 0 1 1-1zm7.654 2.153c-1.445-.544-3.074.195-3.653 1.63v7.386l.076-.087a3.98 3.98 0 0 1 5.423-.53V5.82a2.85 2.85 0 0 0-1.846-2.666M3 3.845c-.62.481-1 1.23-1 2.041v5.667a3.98 3.98 0 0 1 5.04.147 3 3 0 0 0-.883-.907c-.757-.512-1.665-.697-2.218-.761C3.44 9.974 3 9.554 3 9zM4 9s0 .006.009.016q.016.018.045.022c.618.071 1.712.283 2.663.925.281.19.547.419.784.687V6.51L7.5 6.5V5a3 3 0 0 0-3-3H4z" />{props.children}</SvgRoot>;
});
export default IconBookWideReading;
