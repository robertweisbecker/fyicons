import * as React from 'react';
import type { IconProps } from './types';
const IconFork1 = React.forwardRef<SVGSVGElement, IconProps>(function IconFork1(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M6 2.99994C6.27612 2.99994 6.49997 3.22382 6.5 3.49994C6.5 3.77608 6.27614 3.99994 6 3.99994H3.86133L3.94824 4.07416C6.51881 6.25914 7.99998 9.46314 8 12.8369V13.4999C8 13.7761 7.77614 13.9999 7.5 13.9999C7.22386 13.9999 7 13.7761 7 13.4999V12.8369C6.99998 9.75672 5.64752 6.83183 3.30078 4.83685L3 4.58099V6.49994C3 6.77608 2.77614 6.99994 2.5 6.99994C2.22386 6.99994 2 6.77608 2 6.49994V3.49994C2.00003 3.22382 2.22388 2.99994 2.5 2.99994H6ZM13.5 2.99994C13.7761 2.99994 14 3.22382 14 3.49994V6.49994C14 6.77608 13.7761 6.99994 13.5 6.99994C13.224 6.99975 13 6.77596 13 6.49994V4.6015L11.8174 5.63666C10.5701 6.72818 9.59901 8.09972 8.9834 9.63861L8.96387 9.68549C8.86129 9.94183 8.57082 10.0664 8.31445 9.96381C8.0583 9.86114 7.93367 9.57066 8.03613 9.31439L8.05469 9.26752C8.72899 7.58177 9.79282 6.07934 11.1592 4.88373L12.1699 3.99994H10C9.72402 3.99975 9.5 3.77596 9.5 3.49994C9.50003 3.22394 9.72404 3.00013 10 2.99994H13.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconFork1;
