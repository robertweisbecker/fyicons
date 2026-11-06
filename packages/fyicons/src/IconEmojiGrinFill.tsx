import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconEmojiGrinFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconEmojiGrinFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="emoji-grin-fill"><path fill="currentColor" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m4.383 8.523c.086-.37-.308-.633-.661-.49A10 10 0 0 1 8 9.75a10 10 0 0 1-3.72-.717c-.354-.142-.747.12-.66.49a4.5 4.5 0 0 0 8.763 0M6 5c-.552 0-1 .672-1 1.5q0 .114.012.225c.012.122.179.132.242.026.183-.308.45-.5.746-.501.296 0 .561.193.744.5.063.106.231.096.244-.026Q7 6.614 7 6.5C7 5.672 6.552 5 6 5m4 0c-.552 0-1 .672-1 1.5q0 .114.012.225c.012.122.179.132.242.027.183-.308.45-.502.746-.502.297 0 .563.194.745.502.063.106.23.096.243-.026Q11 6.615 11 6.5c0-.828-.448-1.5-1-1.5" /></SvgRoot>;
});
export default IconEmojiGrinFill;
