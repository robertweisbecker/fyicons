import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLetterS = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLetterS(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="letter-s"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.02} d="M4.5 11.5c.517 1.37 2.077 2.11 3.7 2.07 2.32-.059 3.98-1.917 3.303-3.64C10.411 7.153 4.595 7.655 4.5 4.7c-.044-1.388 1.287-2.44 3.134-2.365.95.039 2.057.377 2.866 1.165" />{props.children}</SvgRoot>;
});
export default IconLetterS;
