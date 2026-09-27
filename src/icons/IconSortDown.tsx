import * as React from 'react';
import type { IconProps } from './types';
const IconSortDown = React.forwardRef<SVGSVGElement, IconProps>(function IconSortDown(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M3.49558 3C3.77165 3.00008 3.99558 3.22391 3.99558 3.5V11H5.38816C5.61085 11 5.72237 11.2693 5.56492 11.4268L3.66843 13.3232C3.57081 13.4208 3.41254 13.4208 3.31492 13.3232L1.41843 11.4268C1.26098 11.2693 1.3725 11 1.59519 11H2.99558V3.5C2.99558 3.22386 3.21944 3 3.49558 3ZM9.50046 9C9.77645 9.00019 10.0005 9.22397 10.0005 9.5C10.0005 9.77603 9.77645 9.99981 9.50046 10H6.50046C6.22432 10 6.00046 9.77614 6.00046 9.5C6.00046 9.22386 6.22432 9 6.50046 9H9.50046ZM11.5005 6C11.7764 6.00019 12.0005 6.22397 12.0005 6.5C12.0005 6.77603 11.7764 6.99981 11.5005 7H6.50046C6.22432 7 6.00046 6.77614 6.00046 6.5C6.00046 6.22386 6.22432 6 6.50046 6H11.5005ZM14.5005 3C14.7764 3.00019 15.0005 3.22397 15.0005 3.5C15.0005 3.77603 14.7764 3.99981 14.5005 4H6.50046C6.22432 4 6.00046 3.77614 6.00046 3.5C6.00046 3.22386 6.22432 3 6.50046 3H14.5005Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconSortDown;
