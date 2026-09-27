import * as React from 'react';
import type { IconProps } from './types';
const IconTrash = React.forwardRef<SVGSVGElement, IconProps>(function IconTrash(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M8.99902 1C10.1036 1 10.999 1.89543 10.999 3V4H13.5C13.7761 4 14 4.22386 14 4.5C14 4.77614 13.7761 5 13.5 5H12.9463C12.9462 5.0329 12.9448 5.06613 12.9414 5.09961L12.1777 12.748C12.05 14.0262 10.9739 15 9.68945 15H6.30957C5.02539 14.9999 3.95019 14.0268 3.82227 12.749L3.05664 5.09961C3.05329 5.06613 3.05181 5.0329 3.05176 5H2.5C2.22386 5 2 4.77614 2 4.5C2 4.22386 2.22386 4 2.5 4H4.99902V3C4.99902 1.89543 5.89445 1 6.99902 1H8.99902ZM4.81738 12.6494C4.89414 13.4161 5.53911 13.9999 6.30957 14H9.68945C10.46 14 11.1059 13.4161 11.1826 12.6494L11.9463 5H4.05176L4.81738 12.6494ZM6.46387 7.06445C6.70459 7.04448 6.91549 7.22313 6.93555 7.46387L7.18555 10.4639C7.20552 10.7046 7.02687 10.9155 6.78613 10.9355C6.54541 10.9555 6.33451 10.7769 6.31445 10.5361L6.06445 7.53613C6.04448 7.29541 6.22313 7.08451 6.46387 7.06445ZM9.53516 7.06445C9.77595 7.08444 9.95455 7.29534 9.93457 7.53613L9.68555 10.5361C9.66556 10.7769 9.45466 10.9555 9.21387 10.9355C8.97308 10.9156 8.79448 10.7047 8.81445 10.4639L9.06348 7.46387C9.08346 7.22308 9.29437 7.04448 9.53516 7.06445ZM6.99902 2C6.44674 2 5.99902 2.44772 5.99902 3V4H9.99902V3C9.99902 2.44772 9.55131 2 8.99902 2H6.99902Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconTrash;
