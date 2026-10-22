import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFilePdf = React.forwardRef<SVGSVGElement, IconProps>(function IconFilePdf(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M7.46484 1C8.26036 1.0001 9.02342 1.31639 9.58594 1.87891L12.4141 4.70703C12.7891 5.08205 12.9999 5.59074 13 6.12109V7.5C13 7.77614 12.7761 8 12.5 8C12.2239 8 12 7.77614 12 7.5V6.12109C12 6.08039 11.9971 6.03999 11.9922 6H9.5C9.10218 6 8.72076 5.84185 8.43945 5.56055C8.15815 5.27924 8 4.89783 8 4.5V2.07422C7.82712 2.02613 7.64741 2.00003 7.46484 2H5C4.44772 2 4 2.44772 4 3V7.5C4 7.77614 3.77614 8 3.5 8C3.22386 8 3 7.77614 3 7.5V3C3 1.89543 3.89543 1 5 1H7.46484ZM9 4.5C9 4.63261 9.05272 4.75975 9.14648 4.85352C9.24025 4.94728 9.36739 5 9.5 5H11.293L9 2.70703V4.5Z" fill="currentColor" /><path d="M7.84979 9.50671C9.05357 9.50671 9.75016 10.4929 9.75 11.4999C9.74984 12.5068 8.82143 13.4926 7.84979 13.4926L6.5 13.4926V9.50671H7.84979Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M11.5 13.5V11.5M14 9.5H11.5V11.5M11.5 11.5H13.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M2.5 13.5L2.5 12.5M2.5 12.5L2.5 9.5C2.5 9.5 3 9.5 3.5 9.5C4.12514 9.5 5 10 5 11C5 12 4 12.5 3.5 12.5C2.71895 12.5 2.5 12.5 2.5 12.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></SvgRoot>;
});
export default IconFilePdf;
