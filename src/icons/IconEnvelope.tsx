import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconEnvelope = React.forwardRef<SVGSVGElement, IconProps>(function IconEnvelope(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M13 3C14.1046 3 15 3.89543 15 5V11C15 12.1046 14.1046 13 13 13H3C1.89543 13 1 12.1046 1 11V5C1 3.89543 1.89543 3 3 3H13ZM2.74121 11.9648C2.82386 11.987 2.91038 12 3 12H13C13.0893 12 13.1754 11.9868 13.2578 11.9648L10.1436 8.85059L9.28613 9.57227C8.54236 10.197 7.45764 10.197 6.71387 9.57227L5.85547 8.85059L2.74121 11.9648ZM2 11C2 11.0892 2.01227 11.1755 2.03418 11.2578L5.08691 8.20508L2 5.6123V11ZM10.9121 8.20508L13.9648 11.2578C13.9868 11.1754 14 11.0893 14 11V5.6123L10.9121 8.20508ZM3 4C2.65197 4 2.34513 4.17756 2.16602 4.44727L7.35645 8.80664C7.72834 9.11903 8.27166 9.11903 8.64355 8.80664L13.833 4.44727C13.6539 4.17781 13.3478 4 13 4H3Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconEnvelope;
