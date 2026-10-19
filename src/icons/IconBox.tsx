import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconBox = React.forwardRef<SVGSVGElement, IconProps>(function IconBox(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M7.24414 1.44043C7.71108 1.16825 8.28897 1.16811 8.75586 1.44043L13.2559 4.06543C13.7166 4.33418 13.9999 4.82795 14 5.36133V10.6387L13.9873 10.8359C13.9269 11.2916 13.6592 11.6993 13.2559 11.9346L8.75586 14.5596L8.5752 14.6484C8.20687 14.8015 7.79212 14.8016 7.42383 14.6484L7.24414 14.5596L2.74414 11.9346C2.34084 11.6993 2.07313 11.2916 2.0127 10.8359L2 10.6387V5.36133C2.00011 4.82796 2.28342 4.3342 2.74414 4.06543L7.24414 1.44043ZM3 10.6387C3.00007 10.8164 3.09455 10.9807 3.24805 11.0703L7.5 13.5498V7.80859L3 5.55859V10.6387ZM8.5 7.80859V13.5498L12.752 11.0703C12.9055 10.9807 12.9999 10.8164 13 10.6387V5.55859L8.5 7.80859ZM8.25195 2.30469C8.09636 2.21395 7.90367 2.21402 7.74805 2.30469L3.58398 4.73242L8 6.94043L12.415 4.73242L8.25195 2.30469Z" fill="currentColor" /><path d="M8 2.5V6.5" stroke="currentColor" strokeLinecap="round" /><path d="M10 9L11.5 8.25" stroke="currentColor" strokeLinecap="round" /></SvgRoot>;
});
export default IconBox;
