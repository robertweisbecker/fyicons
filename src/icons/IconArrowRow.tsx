import * as React from 'react';
import type { IconProps } from './types';
const IconArrowRow = React.forwardRef<SVGSVGElement, IconProps>(function IconArrowRow(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M10.1465 8.14648C10.3417 7.95122 10.6583 7.95122 10.8535 8.14648L12.8535 10.1465C12.8833 10.1763 12.9081 10.2105 12.9297 10.2471C12.9399 10.2644 12.95 10.2816 12.958 10.2998C12.9621 10.3092 12.9642 10.3194 12.9678 10.3291C12.9741 10.3465 12.98 10.3639 12.9844 10.3818C12.9876 10.395 12.9901 10.4083 12.9922 10.4219C12.9954 10.4423 12.9973 10.4627 12.998 10.4834C12.9982 10.4889 13 10.4944 13 10.5C13 10.5043 12.9982 10.5085 12.998 10.5127C12.9975 10.5357 12.9949 10.5583 12.9912 10.5811C12.9898 10.5896 12.9891 10.5981 12.9873 10.6064C12.9745 10.6656 12.9524 10.7232 12.918 10.7754L12.8535 10.8535L10.8535 12.8535C10.6583 13.0488 10.3417 13.0488 10.1465 12.8535C9.95122 12.6583 9.95122 12.3417 10.1465 12.1465L11.293 11H3.5C3.22386 11 3 10.7761 3 10.5C3 10.2239 3.22386 10 3.5 10H11.293L10.1465 8.85352C9.95122 8.65825 9.95122 8.34175 10.1465 8.14648ZM6 2C6.55228 2 7 2.44772 7 3V6C7 6.55228 6.55228 7 6 7H3C2.44772 7 2 6.55228 2 6V3C2 2.44772 2.44772 2 3 2H6ZM13 2C13.5523 2 14 2.44772 14 3V6C14 6.55228 13.5523 7 13 7H10C9.44772 7 9 6.55228 9 6V3C9 2.44772 9.44772 2 10 2H13ZM3 6H6V3H3V6ZM10 6H13V3H10V6Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconArrowRow;
