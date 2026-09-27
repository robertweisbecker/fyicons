import * as React from 'react';
import type { IconProps } from './types';
const IconChevronsUpDown = React.forwardRef<SVGSVGElement, IconProps>(function IconChevronsUpDown(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M10.6474 9.64678C10.8427 9.45152 11.1592 9.45152 11.3544 9.64678C11.5494 9.84207 11.5496 10.1586 11.3544 10.3538L8.35443 13.3538C8.15926 13.5489 7.84267 13.5488 7.6474 13.3538L4.6474 10.3538C4.45215 10.1586 4.45218 9.84205 4.6474 9.64678C4.84266 9.45152 5.15917 9.45152 5.35443 9.64678L8.00092 12.2933L10.6474 9.64678ZM7.6474 2.64678C7.84266 2.45152 8.15917 2.45152 8.35443 2.64678L11.3544 5.64678C11.5496 5.84205 11.5497 6.15857 11.3544 6.35381C11.1592 6.54879 10.8426 6.54892 10.6474 6.35381L8.00092 3.70733L5.35443 6.35381C5.15917 6.54879 4.84258 6.54892 4.6474 6.35381C4.45223 6.15864 4.4524 5.84207 4.6474 5.64678L7.6474 2.64678Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconChevronsUpDown;
