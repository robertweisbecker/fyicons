import * as React from 'react';
import type { IconProps } from './types';
const IconPencilEdit = React.forwardRef<SVGSVGElement, IconProps>(function IconPencilEdit(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M6.5 2.00035C6.77614 2.00035 7 2.22421 7 2.50035C6.99976 2.7763 6.776 3.00035 6.5 3.00035H5C3.89543 3.00035 3 3.89579 3 5.00035V11.0004C3.00024 12.1047 3.89558 13.0004 5 13.0004H11C12.1044 13.0004 12.9998 12.1047 13 11.0004V9.50035C13 9.22421 13.2239 9.00035 13.5 9.00035C13.7761 9.00035 14 9.22421 14 9.50035V11.0004C13.9998 12.657 12.6567 14.0004 11 14.0004H5C3.34329 14.0004 2.00024 12.657 2 11.0004V5.00035C2 3.3435 3.34315 2.00035 5 2.00035H6.5ZM11.1465 2.14684C11.894 1.39929 13.106 1.3993 13.8535 2.14684C14.6008 2.8944 14.601 4.1064 13.8535 4.85387L9.77051 8.93688C9.44137 9.26586 9.0401 9.51427 8.59863 9.66149L7.10645 10.1586C6.3251 10.4186 5.58197 9.67525 5.8418 8.89391L6.33887 7.40172C6.48608 6.96027 6.73451 6.55898 7.06348 6.22985L11.1465 2.14684ZM13.1465 2.85387C12.7895 2.49685 12.2105 2.49685 11.8535 2.85387L7.77051 6.93688C7.55132 7.15624 7.38621 7.42395 7.28809 7.71813L6.79102 9.21032L8.28223 8.71227C8.57641 8.61415 8.84411 8.44905 9.06348 8.22985L13.1465 4.14684C13.5034 3.7899 13.5033 3.21091 13.1465 2.85387Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconPencilEdit;
