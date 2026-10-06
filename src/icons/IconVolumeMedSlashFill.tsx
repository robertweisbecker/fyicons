import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconVolumeMedSlashFill = React.forwardRef<SVGSVGElement, IconProps>(function IconVolumeMedSlashFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M9 10.4138V12.1873C8.99966 13.0225 8.03554 13.4891 7.37988 12.9714L4.25 10.5007H2.5C1.67166 10.5007 1.00013 9.82906 1 9.00073V7.00073C1.00007 6.17241 1.67166 5.50079 2.5 5.50073H4.08691L9 10.4138ZM10.4951 6.06421C10.7975 6.14149 11.0802 6.28908 11.3184 6.4978C11.683 6.8176 11.919 7.26013 11.9824 7.74097C12.0457 8.22179 11.9324 8.70974 11.6631 9.11304C11.5115 9.33982 11.314 9.52811 11.0889 9.67456L10.4502 9.03589C10.5098 8.92095 10.5971 8.81457 10.6904 8.72534C10.7429 8.67523 10.7902 8.61851 10.8311 8.55737C10.9656 8.35573 11.0229 8.11122 10.9912 7.87085C10.9594 7.63069 10.8413 7.40951 10.6592 7.24976C10.6038 7.20122 10.5432 7.1596 10.4795 7.12476C10.2372 6.99236 10 6.77783 10 6.50171C10.0003 6.22581 10.2277 5.99594 10.4951 6.06421ZM7.37988 3.02905C8.03562 2.51145 8.9999 2.97881 9 3.81421V7.58569L5.73828 4.32397L7.37988 3.02905Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /><path d="M2.5 2.5L13.5 13.5" stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeLinecap="round" /></SvgRoot>;
});
export default IconVolumeMedSlashFill;
