import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFlagBurgee = React.forwardRef<SVGSVGElement, IconProps>(function IconFlagBurgee(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M3.5 1.00049C3.77612 1.00052 4 1.22436 4 1.50049V1.8999L14.6709 5.78076C14.8684 5.85268 15 6.04032 15 6.25049C14.9998 6.46051 14.8683 6.6484 14.6709 6.72021L4 10.6001V14.5005C3.99976 14.7764 3.77597 15.0005 3.5 15.0005C3.22401 15.0005 3.00024 14.7764 3 14.5005V1.50049C3 1.22435 3.22386 1.00049 3.5 1.00049ZM4 9.53662L13.0371 6.25049L4 2.96338V9.53662Z" fill="currentColor" /><circle cx={6} cy={6} r={1} fill="currentColor" /></SvgRoot>;
});
export default IconFlagBurgee;
