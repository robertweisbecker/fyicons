import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconSquareCheck = React.forwardRef<SVGSVGElement, IconProps>(function IconSquareCheck(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M11 2C12.6569 2 14 3.34315 14 5V11C14 12.6569 12.6569 14 11 14H5C3.34315 14 2 12.6569 2 11V5C2 3.34315 3.34315 2 5 2H11ZM5 3C3.89543 3 3 3.89543 3 5V11C3 12.1046 3.89543 13 5 13H11C12.1046 13 13 12.1046 13 11V5C13 3.89543 12.1046 3 11 3H5ZM10.0713 5.24316C10.2133 5.00647 10.5201 4.92945 10.7568 5.07129C10.9935 5.21331 11.0705 5.52008 10.9287 5.75684L7.92871 10.7568C7.84957 10.8887 7.71416 10.9772 7.56152 10.9961C7.40871 11.0149 7.25536 10.9624 7.14648 10.8535L5.14648 8.85352C4.95122 8.65825 4.95122 8.34175 5.14648 8.14648C5.34175 7.95122 5.65825 7.95122 5.85352 8.14648L7.40039 9.69336L10.0713 5.24316Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconSquareCheck;
