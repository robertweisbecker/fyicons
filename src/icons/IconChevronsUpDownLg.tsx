import * as React from 'react';
import type { IconProps } from './types';
const IconChevronsUpDownLg = React.forwardRef<SVGSVGElement, IconProps>(function IconChevronsUpDownLg(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M11.6455 9.64627C11.8408 9.45126 12.1574 9.4511 12.3525 9.64627C12.5477 9.84145 12.5476 10.158 12.3525 10.3533L8.35254 14.3533C8.25883 14.447 8.13154 14.4997 7.99902 14.4998C7.86644 14.4998 7.73926 14.447 7.64551 14.3533L3.64648 10.3533C3.45125 10.158 3.45122 9.84151 3.64648 9.64627C3.84177 9.45128 4.15835 9.45112 4.35352 9.64627L8 13.2918L11.6455 9.64627ZM7.64746 1.64627C7.84272 1.45128 8.15931 1.45116 8.35449 1.64627L12.3545 5.64627C12.5497 5.84147 12.5496 6.15802 12.3545 6.3533C12.1592 6.54856 11.8427 6.54856 11.6475 6.3533L8.00098 2.70682L4.35449 6.3533C4.15927 6.54852 3.84273 6.54845 3.64746 6.3533C3.45226 6.15803 3.45222 5.84151 3.64746 5.64627L7.64746 1.64627Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconChevronsUpDownLg;
