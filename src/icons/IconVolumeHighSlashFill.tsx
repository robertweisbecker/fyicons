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
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M9 10.4139V12.1864C9 13.0219 8.03566 13.4893 7.37988 12.9716L4.25 10.4999H2.5C1.67158 10.4999 1 9.82831 1 8.99988V6.99988C1.00019 6.17165 1.67173 5.49994 2.5 5.49988H4.08594L9 10.4139ZM10.499 3.02429C11.4211 3.11683 12.3035 3.46407 13.0439 4.0321C13.9169 4.70199 14.5451 5.64212 14.8301 6.70496C15.1148 7.76773 15.04 8.89542 14.6191 9.91199C14.3124 10.6525 13.8331 11.3039 13.2275 11.8163L13.207 11.7928L12.5176 11.1034C13.0319 10.686 13.4394 10.1471 13.6953 9.52917C14.0319 8.71594 14.0911 7.81391 13.8633 6.96375C13.6353 6.11351 13.1329 5.36096 12.4346 4.82507C11.8691 4.3914 11.2003 4.11834 10.499 4.03015C10.225 3.99571 10 3.77503 10 3.4989C10.0002 3.22298 10.2245 2.99684 10.499 3.02429ZM10.4951 6.06433C10.7975 6.14162 11.0801 6.28915 11.3184 6.49792C11.683 6.81777 11.919 7.26021 11.9824 7.74109C12.0456 8.2219 11.9325 8.7099 11.6631 9.11316C11.5115 9.3399 11.314 9.52821 11.0889 9.67468L10.4502 9.03601C10.5098 8.92107 10.5971 8.81471 10.6904 8.72546C10.7429 8.67534 10.7902 8.61862 10.8311 8.5575C10.9657 8.35588 11.0228 8.11133 10.9912 7.87097C10.9594 7.63076 10.8413 7.40968 10.6592 7.24988C10.6038 7.20132 10.5433 7.15973 10.4795 7.12488C10.2372 6.99248 10 6.77796 10 6.50183C10.0002 6.22585 10.2277 5.99604 10.4951 6.06433ZM7.37988 3.0282C8.03558 2.5106 8.99978 2.97805 9 3.81335V7.58582L5.73828 4.3241L7.37988 3.0282Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /><path d="M2.5 2.5L13.5 13.5" stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeLinecap="round" /></svg>;
});
export default IconVolumeHighSlashFill;
