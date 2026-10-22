import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconTargetCrosshair = React.forwardRef<SVGSVGElement, IconProps>(function IconTargetCrosshair(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M8 1C8.27614 1 8.5 1.22386 8.5 1.5V2.02246C11.4148 2.263 13.737 4.58523 13.9775 7.5H14.5C14.7761 7.5 15 7.72386 15 8C15 8.27614 14.7761 8.5 14.5 8.5H13.9775C13.737 11.4147 11.4147 13.736 8.5 13.9766V14.5C8.5 14.7761 8.27614 15 8 15C7.72386 15 7.5 14.7761 7.5 14.5V13.9766C4.58527 13.736 2.263 11.4147 2.02246 8.5H1.5C1.22386 8.5 1 8.27614 1 8C1 7.72386 1.22386 7.5 1.5 7.5H2.02246C2.263 4.58523 4.58523 2.263 7.5 2.02246V1.5C7.5 1.22386 7.72386 1 8 1ZM3.02441 8.5C3.25893 10.8622 5.13781 12.74 7.5 12.9746V8.5H3.02441ZM8.5 8.5V12.9746C10.8622 12.74 12.7411 10.8622 12.9756 8.5H8.5ZM8.5 7.5H12.9756C12.7411 5.13777 10.8622 3.25894 8.5 3.02441V7.5ZM7.5 3.02441C5.13777 3.25894 3.25894 5.13777 3.02441 7.5H7.5V3.02441Z" fill="currentColor" /></SvgRoot>;
});
export default IconTargetCrosshair;
