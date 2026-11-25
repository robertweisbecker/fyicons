import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLetterS = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLetterS(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="letter-s"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.02} d="M4.5 11.5c.517 1.37 2.077 2.11 3.7 2.07 2.32-.06 3.98-1.917 3.303-3.64C10.411 7.153 4.595 7.905 4.5 4.95c-.044-1.388 1.285-2.615 3.134-2.615 1.164 0 2.616.165 3.616 1.665" />{props.children}</SvgRoot>;
});
export default IconLetterS;
