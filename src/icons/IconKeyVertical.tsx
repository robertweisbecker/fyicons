import * as React from 'react';
import type { IconProps } from './types';
const IconKeyVertical = React.forwardRef<SVGSVGElement, IconProps>(function IconKeyVertical(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M8 1C10.2091 1 12 2.79086 12 5C12 6.43669 11.2412 7.69339 10.1055 8.39844L10.8535 9.14648C11.0488 9.34175 11.0488 9.65825 10.8535 9.85352L9.20703 11.5L9.85352 12.1465C10.022 12.315 10.0482 12.579 9.91602 12.7773L8.41602 15.0273C8.27614 15.2372 8.00191 15.31 7.77637 15.1973L6.27637 14.4473C6.10698 14.3626 6 14.1894 6 14V8.46289C4.80565 7.77168 4 6.48097 4 5C4 2.79086 5.79086 1 8 1ZM8 2C6.34315 2 5 3.34315 5 5C5 6.19595 5.70013 7.22986 6.71484 7.71191C6.88895 7.79482 7 7.97022 7 8.16309V13.6904L7.82812 14.1045L8.85645 12.5635L8.14648 11.8535C7.95122 11.6583 7.95122 11.3417 8.14648 11.1465L9.79297 9.5L9.14648 8.85352C9.05272 8.75975 9 8.63261 9 8.5V8.16309C9 7.97022 9.11105 7.79482 9.28516 7.71191C10.2999 7.22986 11 6.19595 11 5C11 3.34315 9.65685 2 8 2ZM8 3.25C8.41421 3.25 8.75 3.58579 8.75 4C8.75 4.41421 8.41421 4.75 8 4.75C7.58579 4.75 7.25 4.41421 7.25 4C7.25 3.58579 7.58579 3.25 8 3.25Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconKeyVertical;
