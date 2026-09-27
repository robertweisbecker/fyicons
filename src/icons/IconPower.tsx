import * as React from 'react';
import type { IconProps } from './types';
const IconPower = React.forwardRef<SVGSVGElement, IconProps>(function IconPower(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M11.9609 2.66699C12.145 2.46144 12.4612 2.44306 12.667 2.62695C14.83 4.5618 15.5745 7.63169 14.5391 10.3428C13.5034 13.0537 10.902 14.8445 8 14.8447C5.09795 14.8446 2.4966 13.0538 1.46094 10.3428C0.42541 7.63153 1.17076 4.56183 3.33398 2.62695C3.53982 2.4435 3.85614 2.46139 4.04004 2.66699C4.22345 2.87274 4.20536 3.18911 4 3.37305C2.14612 5.03147 1.50809 7.66161 2.39551 9.98535C3.28318 12.3091 5.5125 13.8446 8 13.8447C10.4875 13.8445 12.7179 12.3091 13.6055 9.98535C14.4927 7.66169 13.8538 5.03139 12 3.37305C11.7942 3.189 11.777 2.87282 11.9609 2.66699ZM8 1C8.27614 1 8.5 1.22386 8.5 1.5V7.5C8.5 7.77614 8.27614 8 8 8C7.72386 8 7.5 7.77614 7.5 7.5V1.5C7.5 1.22386 7.72386 1 8 1Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconPower;
