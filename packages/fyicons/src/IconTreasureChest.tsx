import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconTreasureChest = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconTreasureChest(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="treasure-chest"><path d="M8 2C8.88738 2 9.68219 2.3876 10.2314 3H11.5C12.8807 3 14 4.11929 14 5.5V13C14 13.5523 13.5523 14 13 14H3C2.44772 14 2 13.5523 2 13V5.5C2 4.11929 3.11929 3 4.5 3H5.76855C6.31781 2.3876 7.11262 2 8 2ZM3 9V13H13V9H11V9.5C11 9.77614 10.7761 10 10.5 10H5.5C5.22386 10 5 9.77614 5 9.5V9H3ZM8 3C6.89543 3 6 3.89543 6 5V9H10V5C10 3.89543 9.10457 3 8 3ZM10.8262 4C10.9369 4.31306 11 4.649 11 5V8H13V5.5C13 4.67157 12.3284 4 11.5 4H10.8262ZM4.5 4C3.67157 4 3 4.67157 3 5.5V8H5V5C5 4.649 5.06306 4.31306 5.17383 4H4.5ZM8 5C8.55228 5 9 5.44772 9 6C9 6.36979 8.79843 6.69123 8.5 6.86426V7.5C8.5 7.77614 8.27614 8 8 8C7.72386 8 7.5 7.77614 7.5 7.5V6.86426C7.20157 6.69123 7 6.36979 7 6C7 5.44772 7.44772 5 8 5Z" fill="currentColor" /></SvgRoot>;
});
export default IconTreasureChest;
