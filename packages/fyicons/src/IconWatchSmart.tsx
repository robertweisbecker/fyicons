import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconWatchSmart = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconWatchSmart(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="watch-smart"><path fill="currentColor" d="M5.72 1.838c.05-.147.075-.221.106-.285a1 1 0 0 1 .754-.543C6.65 1 6.728 1 6.884 1h2.233c.155 0 .233 0 .303.01a1 1 0 0 1 .755.544c.031.063.056.137.105.284.04.12.06.181.084.24a2 2 0 0 0 .48.703c.046.043.094.084.192.166l.965.803H4l.963-.803c.098-.082.147-.123.193-.166a2 2 0 0 0 .48-.703c.023-.058.043-.119.084-.24M12 8c0-.232 0-.349.026-.444a.75.75 0 0 1 .53-.53C12.652 7 12.768 7 13.001 7c.232 0 .348 0 .444.026a.75.75 0 0 1 .53.53C14 7.65 14 7.768 14 8s0 .349-.026.444a.75.75 0 0 1-.53.53C13.349 9 13.233 9 13 9s-.35 0-.445-.026a.75.75 0 0 1-.53-.53C12 8.349 12 8.232 12 8m-6.28 7.162c.05.147.074.221.106.285a1 1 0 0 0 .754.543c.07.01.148.01.303.01h2.234c.155 0 .233 0 .302-.01a1 1 0 0 0 .755-.544c.032-.063.056-.137.105-.284.04-.12.06-.181.084-.24a2 2 0 0 1 .48-.703c.046-.043.095-.084.193-.165L12 13.25H4l.964.803c.098.082.147.123.192.166a2 2 0 0 1 .48.703c.024.058.044.119.084.24" /><rect width={9} height={10} x={3.5} y={3.5} stroke="currentColor" rx={2.5} /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8.5 6.5v3h-2" /></SvgRoot>;
});
export default IconWatchSmart;
