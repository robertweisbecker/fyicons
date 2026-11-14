import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPresentation = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPresentation(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="presentation"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2.5 3.5h11v7a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1z" /><path stroke="currentColor" strokeLinecap="round" d="M8 3.5v-1" /><path fill="currentColor" d="M12.083 14.777a.5.5 0 0 0 .832-.554l-.416.277zM10.5 11.5l-.417.277 1.999 3 .416-.277.416-.277-1.998-3zm-7.417 2.722a.5.5 0 1 0 .831.555L3.5 14.5zM5.5 11.5l-.416-.277-2.001 3 .416.277.415.277 2.001-3z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8 11.5v2" /><path stroke="currentColor" strokeLinecap="round" d="M14.5 3.5h-13" /></SvgRoot>;
});
export default IconPresentation;
