import * as React from 'react';
import type { IconProps } from './types';
const IconNumberEight = React.forwardRef<SVGSVGElement, IconProps>(function IconNumberEight(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M11 2C12.6569 2 14 3.34315 14 5V11C14 12.6569 12.6569 14 11 14H5C3.34315 14 2 12.6569 2 11V5C2 3.34315 3.34315 2 5 2H11ZM5 3C3.89543 3 3 3.89543 3 5V11C3 12.1046 3.89543 13 5 13H11C12.1046 13 13 12.1046 13 11V5C13 3.89543 12.1046 3 11 3H5ZM8.00293 4.94043C8.42041 4.94075 8.85416 5.07944 9.19043 5.37695C9.53553 5.6824 9.74905 6.13007 9.75293 6.67871C9.7564 7.18532 9.57965 7.60648 9.28516 7.91211C9.71114 8.25856 9.99997 8.78848 10 9.45703C10 10.5719 9.02354 11.207 8.01758 11.207C7.03148 11.207 6 10.6005 6 9.45703C6.00003 8.81973 6.2307 8.30327 6.62598 7.95117C6.6494 7.93031 6.674 7.91105 6.69824 7.8916C6.41668 7.58768 6.24955 7.1733 6.25293 6.67871C6.2568 6.12959 6.47012 5.68155 6.81543 5.37598C7.15191 5.07845 7.58558 4.94021 8.00293 4.94043ZM8 8.45703C7.70987 8.45704 7.46072 8.5471 7.29102 8.69824C7.13078 8.84109 7.00003 9.07447 7 9.45703C7 9.83862 7.34772 10.207 8.01758 10.207C8.66734 10.207 9 9.84203 9 9.45703C8.99994 8.8396 8.53423 8.45704 8 8.45703ZM8.00293 5.94043C7.79851 5.94029 7.60989 6.00894 7.47852 6.125C7.35626 6.23322 7.25495 6.40644 7.25293 6.68555C7.25104 6.96939 7.35171 7.14504 7.47363 7.25391C7.60492 7.3709 7.79506 7.44053 8.00195 7.44043C8.20918 7.4402 8.40037 7.36965 8.53223 7.25195C8.65459 7.14256 8.75482 6.9675 8.75293 6.68555C8.75091 6.40767 8.64998 6.23456 8.52734 6.12598C8.39571 6.00959 8.20727 5.94068 8.00293 5.94043Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconNumberEight;
