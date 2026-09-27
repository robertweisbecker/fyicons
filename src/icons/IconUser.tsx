import * as React from 'react';
import type { IconProps } from './types';
const IconUser = React.forwardRef<SVGSVGElement, IconProps>(function IconUser(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M8 9C9.57669 9 11.0975 9.56926 12.2256 10.5947C12.9255 11.231 13.4397 12.012 13.7295 12.8662C13.9266 13.4473 13.7621 14.0022 13.4102 14.3926C13.067 14.7732 12.5486 15 12 15H4C3.45146 15 2.93301 14.7732 2.58984 14.3926C2.23799 14.0022 2.07348 13.4473 2.27051 12.8662C2.56026 12.012 3.07456 11.231 3.77441 10.5947C4.90245 9.56924 6.42333 9.00004 8 9ZM8 10C6.65952 10 5.38203 10.4843 4.44727 11.334C3.86854 11.8601 3.45128 12.4991 3.21777 13.1875C3.1489 13.3907 3.19779 13.5726 3.33301 13.7227C3.47712 13.8825 3.72024 14 4 14H12C12.2798 14 12.5228 13.8825 12.667 13.7227C12.8023 13.5726 12.8511 13.3907 12.7822 13.1875C12.5487 12.4991 12.1315 11.8601 11.5527 11.334C10.6179 10.4843 9.34049 10 8 10ZM8 1C9.933 1 11.5 2.567 11.5 4.5C11.5 6.433 9.933 8 8 8C6.06708 7.99991 4.5 6.43294 4.5 4.5C4.5 2.56706 6.06708 1.00009 8 1ZM8 2C6.61936 2.00009 5.5 3.11934 5.5 4.5C5.5 5.88066 6.61936 6.99991 8 7C9.38071 7 10.5 5.88071 10.5 4.5C10.5 3.11929 9.38071 2 8 2Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconUser;
