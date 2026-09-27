import * as React from 'react';
import type { IconProps } from './types';
const IconLightningBolt2 = React.forwardRef<SVGSVGElement, IconProps>(function IconLightningBolt2(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M10 1C10.158 1.00004 10.307 1.07448 10.4014 1.20117C10.4957 1.32796 10.5239 1.4922 10.4785 1.64355L9.17188 6H12.5C12.6776 6.00004 12.842 6.09475 12.9316 6.24805C13.0211 6.40129 13.0225 6.59045 12.9355 6.74512L8.43555 14.7451C8.33223 14.9287 8.12475 15.028 7.91699 14.9932C7.7094 14.9582 7.54562 14.7969 7.50781 14.5898L6.58203 9.5H3.5C3.3559 9.5 3.21896 9.43751 3.12402 9.3291C3.02911 9.22066 2.98486 9.07644 3.00391 8.93359L4.00391 1.43359L4.02539 1.34375C4.09167 1.14202 4.28086 1 4.5 1H10ZM4.07129 8.5H7C7.24147 8.50006 7.44883 8.67263 7.49219 8.91016L8.24414 13.0459L11.6455 7H8.5C8.34202 7 8.19299 6.92552 8.09863 6.79883C8.00429 6.67202 7.97607 6.50783 8.02148 6.35645L9.32812 2H4.93848L4.07129 8.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconLightningBolt2;
