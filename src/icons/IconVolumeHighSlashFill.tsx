import * as React from 'react';
import type { IconProps } from './types';
const IconVolumeHighSlashFill = React.forwardRef<SVGSVGElement, IconProps>(function IconVolumeHighSlashFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M9 10.4141V12.1865C9 13.022 8.03566 13.4894 7.37988 12.9717L4.25 10.5H2.5C1.67158 10.5 1 9.82843 1 9V7C1.00019 6.17178 1.67173 5.50006 2.5 5.5H4.08594L9 10.4141ZM10.499 3.02441C11.4211 3.11696 12.3035 3.46419 13.0439 4.03223C13.9169 4.70212 14.5451 5.64224 14.8301 6.70508C15.1148 7.76785 15.04 8.89554 14.6191 9.91211C14.3124 10.6527 13.8331 11.304 13.2275 11.8164L13.207 11.793L12.5176 11.1035C13.0319 10.6861 13.4394 10.1472 13.6953 9.5293C14.0319 8.71606 14.0911 7.81403 13.8633 6.96387C13.6353 6.11363 13.1329 5.36108 12.4346 4.8252C11.8691 4.39152 11.2003 4.11847 10.499 4.03027C10.225 3.99583 10 3.77516 10 3.49902C10.0002 3.2231 10.2245 2.99696 10.499 3.02441ZM10.4951 6.06445C10.7975 6.14174 11.0801 6.28927 11.3184 6.49805C11.683 6.81789 11.919 7.26033 11.9824 7.74121C12.0456 8.22203 11.9325 8.71002 11.6631 9.11328C11.5115 9.34003 11.314 9.52834 11.0889 9.6748L10.4502 9.03613C10.5098 8.92119 10.5971 8.81483 10.6904 8.72559C10.7429 8.67547 10.7902 8.61874 10.8311 8.55762C10.9657 8.35601 11.0228 8.11146 10.9912 7.87109C10.9594 7.63088 10.8413 7.4098 10.6592 7.25C10.6038 7.20145 10.5433 7.15986 10.4795 7.125C10.2372 6.9926 10 6.77808 10 6.50195C10.0002 6.22598 10.2277 5.99616 10.4951 6.06445ZM7.37988 3.02832C8.03558 2.51072 8.99978 2.97817 9 3.81348V7.58594L5.73828 4.32422L7.37988 3.02832Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /><path d="M2.5 2.5L13.5 13.5" stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeLinecap="round" /></svg>;
});
export default IconVolumeHighSlashFill;
