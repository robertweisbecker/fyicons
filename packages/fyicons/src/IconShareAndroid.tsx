import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconShareAndroid = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconShareAndroid(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="share-android"><circle cx={3.5} cy={8} r={2} stroke="currentColor" /><circle cx={11.5} cy={3.5} r={2} stroke="currentColor" /><circle cx={11.5} cy={12.5} r={2} stroke="currentColor" /><path fill="currentColor" d="M9.765 4.924a.5.5 0 1 0-.53-.848L9.5 4.5zM9.5 4.5l-.265-.424-4 2.5L5.5 7l.265.424 4-2.5zm.265 6.576a.5.5 0 1 1-.53.848L9.5 11.5zM9.5 11.5l-.265.424-4-2.5L5.5 9l.265-.424 4 2.5z" /></SvgRoot>;
});
export default IconShareAndroid;
