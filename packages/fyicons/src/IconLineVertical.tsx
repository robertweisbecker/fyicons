import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLineVertical = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLineVertical(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="line-vertical"><path d="M8.5 1C8.77614 1 9 1.22386 9 1.5V14.5C9 14.7761 8.77614 15 8.5 15C8.22386 15 8 14.7761 8 14.5V1.5C8 1.22386 8.22386 1 8.5 1Z" fill="currentColor" /></SvgRoot>;
});
export default IconLineVertical;
