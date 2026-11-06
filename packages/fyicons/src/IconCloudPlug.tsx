import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCloudPlug = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCloudPlug(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="cloud-plug"><path fill="currentColor" d="M9.5 6a.5.5 0 0 1 .5.5V8l.102.005A1 1 0 0 1 11 9v.5a2.5 2.5 0 0 1-2.244 2.487L8.5 12v3h-1v-3l-.256-.013A2.5 2.5 0 0 1 5 9.5V9a1 1 0 0 1 .897-.995L6 8V6.5a.5.5 0 0 1 1 0V8h2V6.5a.5.5 0 0 1 .5-.5m-3-4a3.5 3.5 0 0 1 2.447.998.12.12 0 0 0 .099.033q.223-.03.454-.03A3.5 3.5 0 0 1 13 6.5q-.002.334-.065.65a2.999 2.999 0 0 1-.78 5.845L12 13v-1a2 2 0 0 0 .255-3.982.503.503 0 0 1-.407-.667c.097-.269.152-.555.152-.85a2.5 2.5 0 0 0-2.821-2.48 1.12 1.12 0 0 1-.931-.308 2.5 2.5 0 0 0-4.07 2.71.5.5 0 0 1-.334.667A2.5 2.5 0 0 0 2 9.5c0 1.209.86 2.215 2 2.446v1.017a3.496 3.496 0 0 1-.907-6.664A3.5 3.5 0 0 1 6.5 2M6 9.5A1.5 1.5 0 0 0 7.5 11h1A1.5 1.5 0 0 0 10 9.5V9H6z" /></SvgRoot>;
});
export default IconCloudPlug;
