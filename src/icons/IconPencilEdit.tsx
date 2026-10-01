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
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M6.5 2.00045C6.77614 2.00045 7 2.2243 7 2.50045C6.99976 2.77639 6.776 3.00045 6.5 3.00045H5C3.89543 3.00045 3 3.89588 3 5.00045V11.0004C3.00024 12.1048 3.89558 13.0004 5 13.0004H11C12.1044 13.0004 12.9998 12.1048 13 11.0004V9.50045C13 9.2243 13.2239 9.00045 13.5 9.00045C13.7761 9.00045 14 9.2243 14 9.50045V11.0004C13.9998 12.6571 12.6567 14.0004 11 14.0004H5C3.34329 14.0004 2.00024 12.6571 2 11.0004V5.00045C2 3.34359 3.34315 2.00045 5 2.00045H6.5ZM11.1465 2.14693C11.894 1.39939 13.106 1.39939 13.8535 2.14693C14.6008 2.89449 14.601 4.10649 13.8535 4.85396L9.77051 8.93697C9.44137 9.26595 9.0401 9.51437 8.59863 9.66158L7.10645 10.1586C6.3251 10.4187 5.58197 9.67534 5.8418 8.894L6.33887 7.40181C6.48608 6.96036 6.73451 6.55907 7.06348 6.22994L11.1465 2.14693ZM13.1465 2.85396C12.7895 2.49694 12.2105 2.49694 11.8535 2.85396L7.77051 6.93697C7.55132 7.15633 7.38621 7.42405 7.28809 7.71822L6.79102 9.21041L8.28223 8.71236C8.57641 8.61424 8.84411 8.44914 9.06348 8.22994L13.1465 4.14693C13.5034 3.78999 13.5033 3.211 13.1465 2.85396Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconPencilEdit;
