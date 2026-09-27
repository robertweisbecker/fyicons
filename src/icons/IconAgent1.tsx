import * as React from 'react';
import type { IconProps } from './types';
const IconAgent1 = React.forwardRef<SVGSVGElement, IconProps>(function IconAgent1(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M8 1C8.82843 1 9.5 1.67157 9.5 2.5C9.5 3.15281 9.08218 3.70597 8.5 3.91211V4H10C11.6569 4 13 5.34315 13 7V7.08691C13.5823 7.29297 14 7.84707 14 8.5V10.25C14 10.5225 13.8531 10.7583 13.6357 10.8896C13.6007 11.4206 13.3887 11.9382 12.9258 12.332C12.0089 13.112 10.4258 14 8 14C5.58526 14 4.00562 13.1341 3.08691 12.3691C2.59457 11.959 2.37693 11.4089 2.35547 10.8486C2.14082 10.6979 2.00011 10.4491 2 10.167V8.5C2 7.84707 2.41766 7.29297 3 7.08691V7C3 5.34315 4.34315 4 6 4H7.5V3.91211C6.91782 3.70597 6.5 3.15281 6.5 2.5C6.5 1.67157 7.17157 1 8 1ZM6 5C4.89543 5 4 5.89543 4 7V8.34473C3.99996 8.79319 3.89979 9.23616 3.70605 9.64062L3.53223 10.0029C3.23108 10.6316 3.31581 11.2595 3.72656 11.6016C4.48772 12.2354 5.84636 13 8 13C10.1588 13 11.5183 12.217 12.2783 11.5703C12.6865 11.2229 12.7655 10.5933 12.459 9.9668L12.3057 9.65234C12.1048 9.24184 12 8.79001 12 8.33301V7C12 5.89543 11.1046 5 10 5H8.5V5.5C8.5 5.77614 8.27614 6 8 6C7.72386 6 7.5 5.77614 7.5 5.5V5H6ZM6.5 7C6.77614 7 7 7.22386 7 7.5V9.5C7 9.77614 6.77614 10 6.5 10C6.22386 10 6 9.77614 6 9.5V7.5C6 7.22386 6.22386 7 6.5 7ZM9.5 7C9.77614 7 10 7.22386 10 7.5V9.5C10 9.77614 9.77614 10 9.5 10C9.22386 10 9 9.77614 9 9.5V7.5C9 7.22386 9.22386 7 9.5 7ZM8 2C7.72386 2 7.5 2.22386 7.5 2.5C7.5 2.77614 7.72386 3 8 3C8.27614 3 8.5 2.77614 8.5 2.5C8.5 2.22386 8.27614 2 8 2Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconAgent1;
