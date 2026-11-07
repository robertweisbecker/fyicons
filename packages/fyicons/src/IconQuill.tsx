import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconQuill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconQuill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="quill"><path stroke="currentColor" strokeLinejoin="round" d="M2.5 12.5h3.88a7 7 0 0 0 3.884-1.176L11.5 10.5l-1-1 .996-.664A4.5 4.5 0 0 0 13.5 5.092V2.5L7.785 4.214A7 7 0 0 0 2.867 9.93z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M1.5 14.5S3.144 11 5.608 8.75 13 3 13 3" /></SvgRoot>;
});
export default IconQuill;
