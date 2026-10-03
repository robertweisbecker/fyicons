import * as React from 'react';
import type { IconProps } from './types';
const IconLocationPinRound = React.forwardRef<SVGSVGElement, IconProps>(function IconLocationPinRound(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M8 1C11.3137 1 14 3.68629 14 7C14 9.46002 12.4997 11.3974 11.0859 12.6826C10.3721 13.3315 9.66046 13.833 9.12793 14.1719C8.86134 14.3415 8.63813 14.4715 8.48047 14.5596C8.40168 14.6036 8.33852 14.6372 8.29492 14.6602C8.27331 14.6716 8.2561 14.6804 8.24414 14.6865C8.23823 14.6896 8.23288 14.6926 8.22949 14.6943C8.22806 14.6951 8.2265 14.6958 8.22559 14.6963L8.22461 14.6973H8.22363L8 14.8086L7.77637 14.6973L7.77051 14.6943C7.76708 14.6926 7.76174 14.6895 7.75586 14.6865C7.74388 14.6804 7.72666 14.6715 7.70508 14.6602C7.66146 14.6372 7.59829 14.6036 7.51953 14.5596C7.36184 14.4715 7.13863 14.3415 6.87207 14.1719C6.33952 13.833 5.62786 13.3315 4.91406 12.6826C3.50032 11.3974 2 9.45993 2 7C2 3.68638 4.68641 1.00014 8 1ZM8 2C5.2387 2.00014 3 4.23866 3 7C3 9.03976 4.24989 10.7277 5.58594 11.9424C6.24685 12.5432 6.9106 13.0108 7.40918 13.3281C7.65338 13.4835 7.85729 13.6018 8 13.6816C8.14268 13.6018 8.34659 13.4835 8.59082 13.3281C9.08938 13.0109 9.75311 12.5432 10.4141 11.9424C11.7502 10.7277 13 9.03984 13 7C13 4.23858 10.7614 2 8 2ZM8 4.75C9.10457 4.75 10 5.64543 10 6.75C10 7.85457 9.10457 8.75 8 8.75C6.89543 8.75 6 7.85457 6 6.75C6 5.64543 6.89543 4.75 8 4.75Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconLocationPinRound;
