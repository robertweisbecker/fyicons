import * as React from 'react';
import type { IconProps } from './types';
const IconEyeClosedSimple = React.forwardRef<SVGSVGElement, IconProps>(function IconEyeClosedSimple(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M2.5 7C2.77614 7 3 7.22386 3 7.5C3 7.75814 3.11539 8.17378 3.38086 8.68262C3.63994 9.17918 4.01911 9.7202 4.48926 10.2197C5.44057 11.2305 6.69286 12 8 12C9.33242 12 10.5872 11.3307 11.5215 10.3965C12.467 9.45098 13 8.32062 13 7.5C13 7.22386 13.2239 7 13.5 7H15C15.2761 7 15.5 7.22386 15.5 7.5C15.5 7.77614 15.2761 8 15 8H13.958C13.793 9.05291 13.1368 10.1952 12.2285 11.1035C12.1592 11.1728 12.0875 11.2405 12.0146 11.3076L13.3535 12.6465C13.5488 12.8417 13.5488 13.1583 13.3535 13.3535C13.1583 13.5488 12.8417 13.5488 12.6465 13.3535L11.2275 11.9346C10.4336 12.4806 9.50506 12.8728 8.5 12.9727V14.5C8.5 14.7761 8.27614 15 8 15C7.72386 15 7.5 14.7761 7.5 14.5V12.9688C6.51803 12.8575 5.61449 12.4311 4.8418 11.8643L3.35352 13.3535C3.15825 13.5488 2.84175 13.5488 2.64648 13.3535C2.45122 13.1583 2.45122 12.8417 2.64648 12.6465L4.07324 11.2188C3.96537 11.1157 3.86068 11.0115 3.76074 10.9053C3.23093 10.3423 2.79756 9.72703 2.49414 9.14551C2.29278 8.75956 2.13881 8.36632 2.05957 8H1.5C1.22386 8 1 7.77614 1 7.5C1 7.22386 1.22386 7 1.5 7H2.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconEyeClosedSimple;
