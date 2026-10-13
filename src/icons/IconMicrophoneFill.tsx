import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconMicrophoneFill = React.forwardRef<SVGSVGElement, IconProps>(function IconMicrophoneFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M12.5 7C12.7761 7 13 7.22386 13 7.5C13 10.0936 11.0251 12.2251 8.49707 12.4746C8.49749 12.4831 8.5 12.4914 8.5 12.5V14.5C8.5 14.7761 8.27614 15 8 15C7.72386 15 7.5 14.7761 7.5 14.5V12.5C7.5 12.4915 7.50153 12.483 7.50195 12.4746C4.9744 12.2246 3 10.0933 3 7.5C3 7.22386 3.22386 7 3.5 7C3.77614 7 4 7.22386 4 7.5C4 9.70914 5.79086 11.5 8 11.5C10.2091 11.5 12 9.70914 12 7.5C12 7.22386 12.2239 7 12.5 7ZM8 1C9.38071 1 10.5 2.11929 10.5 3.5V7.5C10.5 8.88071 9.38071 10 8 10C6.61929 10 5.5 8.88071 5.5 7.5V3.5C5.5 2.11929 6.61929 1 8 1Z" fill="currentColor" /></SvgRoot>;
});
export default IconMicrophoneFill;
