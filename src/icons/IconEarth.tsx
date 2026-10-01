import * as React from 'react';
import type { IconProps } from './types';
const IconEarth = React.forwardRef<SVGSVGElement, IconProps>(function IconEarth(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM8.12402 2.95508L8.04785 4.21289C8.02939 4.5181 7.65859 4.6586 7.44238 4.44238C7.16047 4.16068 6.77313 4.01017 6.375 4.02832L5.84863 4.05273C5.17757 4.08347 4.70296 4.72142 4.86621 5.37305C4.9641 5.76343 5.27408 6.06517 5.66699 6.15234L6.16602 6.2627C6.25975 6.28348 6.35191 6.31192 6.44141 6.34668L6.76172 6.4707C7.57287 6.7859 8.08675 7.58945 8.0332 8.45801L8.0166 8.73926C8.00587 8.91244 7.97187 9.08344 7.91699 9.24805L7.15723 11.5273C7.06318 11.8095 6.79933 12 6.50195 12C6.20263 12 5.93718 11.8072 5.84473 11.5225L5.16211 9.41895C5.08109 9.16944 4.84824 9.00012 4.58594 9C4.25154 8.99999 3.98062 8.72889 3.98047 8.39453V6.74316C3.98048 6.2905 3.73618 5.87256 3.3418 5.65039C3.07891 5.50237 2.89312 5.27687 2.79199 5.02148C2.28888 5.8993 2 6.9157 2 8C2 11.3137 4.68629 14 8 14C9.69686 14 11.227 13.2935 12.3184 12.1611L12.7832 10.0059C12.9106 9.41411 12.6215 8.81075 12.0801 8.54004L11.8867 8.44336C11.3433 8.17144 11 7.61548 11 7.00781V6.16113C11.0001 5.75593 11.2294 5.38531 11.5918 5.2041C11.8527 5.07373 12.156 5.05518 12.4307 5.15332L13.4639 5.52246C13.2102 4.96403 12.8747 4.4512 12.4707 4H11C10.4479 3.99999 10.0002 3.55214 10 3L9.99902 2.3418C9.41066 2.13393 8.78037 2.01624 8.12402 2.00293V2.95508Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconEarth;
