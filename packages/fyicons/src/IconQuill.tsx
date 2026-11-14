import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconQuill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconQuill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="quill"><path stroke="currentColor" strokeLinejoin="round" d="m3.5 11.5 1.397.42a7 7 0 0 0 6.493-1.328l.11-.092-1-2 .522-.174a4.5 4.5 0 0 0 2.99-3.387L14.5 2.5l-4.318.196A7 7 0 0 0 3.5 9.69z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3.5 11.5s1.579-1.912 3.158-3.441C8.237 6.529 10.5 5.5 10.5 5.5" /><path fill="currentColor" d="m1 15 1-.5 2-2.75-.75-.5-2 2.75z" /></SvgRoot>;
});
export default IconQuill;
