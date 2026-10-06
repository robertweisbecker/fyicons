import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconPaperclipWideTilt = React.forwardRef<SVGSVGElement, IconProps>(function IconPaperclipWideTilt(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><g clipPath={`url(#${idPrefix}clip0_315_17553)`}><path d="M14.0103 4.1106C15.3771 5.47743 15.3771 7.69351 14.0103 9.06035L10.1212 12.9494C8.16855 14.9021 5.00272 14.9021 3.0501 12.9494C1.09768 10.9968 1.09755 7.83092 3.0501 5.87837L5.52498 3.40349C5.72017 3.2083 6.0368 3.20843 6.23208 3.40349C6.42734 3.59875 6.42734 3.91534 6.23208 4.1106L3.75721 6.58547C2.19518 8.1475 2.19531 10.6802 3.75721 12.2423C5.31931 13.8044 7.85196 13.8044 9.41406 12.2423L13.3031 8.35324C14.2795 7.37693 14.2795 5.79402 13.3031 4.81771C12.3268 3.84159 10.7439 3.84146 9.76762 4.81771L5.87853 8.70679C5.48807 9.09725 5.4882 9.73047 5.87853 10.121C6.26905 10.5115 6.90222 10.5115 7.29274 10.121L10.1819 7.23181C10.3771 7.03672 10.6938 7.03678 10.889 7.23181C11.0843 7.42704 11.0842 7.74365 10.889 7.93892L7.99985 10.8281C7.2188 11.6092 5.95247 11.6092 5.17142 10.8281C4.39057 10.047 4.39044 8.78067 5.17142 7.99969L9.06051 4.1106C10.4273 2.74383 12.6434 2.74396 14.0103 4.1106Z" fill="currentColor" style={{
        fill: "currentColor",
        fillOpacity: 1
      }} /></g><defs><clipPath id={idPrefix + "clip0_315_17553"}><rect width={16} height={16} fill="white" style={{
          fill: "white",
          fillOpacity: 1
        }} /></clipPath></defs></SvgRoot>;
});
export default IconPaperclipWideTilt;
