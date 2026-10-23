import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPlusLarge = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPlusLarge(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M8 1C8.27614 1 8.5 1.22386 8.5 1.5V7.5H14.5C14.7761 7.5 15 7.72386 15 8C15 8.27614 14.7761 8.5 14.5 8.5H8.5V14.5C8.5 14.7761 8.27614 15 8 15C7.72386 15 7.5 14.7761 7.5 14.5V8.5H1.5C1.22386 8.5 1 8.27614 1 8C1 7.72386 1.22386 7.5 1.5 7.5H7.5V1.5C7.5 1.22386 7.72386 1 8 1Z" fill="currentColor" /></SvgRoot>;
});
export default IconPlusLarge;
