import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconCircleQuestion = React.forwardRef<SVGSVGElement, IconProps>(function IconCircleQuestion(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2ZM8 10.5C8.41421 10.5 8.75 10.8358 8.75 11.25C8.75 11.6642 8.41421 12 8 12C7.58579 12 7.25 11.6642 7.25 11.25C7.25 10.8358 7.58579 10.5 8 10.5ZM8 4C9.24264 4 10.25 5.00736 10.25 6.25C10.25 7.27309 9.56723 8.1354 8.63379 8.40918C8.58059 8.42484 8.53864 8.45342 8.51562 8.47852C8.50537 8.48976 8.50114 8.49734 8.5 8.5V9C8.5 9.27614 8.27614 9.5 8 9.5C7.72386 9.5 7.5 9.27614 7.5 9V8.5C7.5 7.92478 7.95913 7.56461 8.35254 7.44922C8.87162 7.29697 9.25 6.81724 9.25 6.25C9.25 5.55964 8.69036 5 8 5C7.30964 5 6.75 5.55964 6.75 6.25C6.75 6.52614 6.52614 6.75 6.25 6.75C5.97386 6.75 5.75 6.52614 5.75 6.25C5.75 5.00736 6.75736 4 8 4Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconCircleQuestion;
