import * as React from 'react';
import type { IconProps } from './types';
const IconChecklistDone = React.forwardRef<SVGSVGElement, IconProps>(function IconChecklistDone(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M5.05355 9.27639C5.17703 9.02967 5.47755 8.92953 5.72445 9.05275C5.97127 9.17616 6.07127 9.47671 5.94808 9.72365L3.95101 13.7237C3.87925 13.8673 3.74232 13.9673 3.58382 13.9932C3.42523 14.019 3.26391 13.9671 3.15023 13.8535L1.64925 12.3535C1.4542 12.1583 1.45411 11.8417 1.64925 11.6465C1.84446 11.4515 2.16106 11.4515 2.35628 11.6465L3.36507 12.6553L5.05355 9.27639ZM14.5008 11C14.7769 11 15.0008 11.2239 15.0008 11.5C15.0008 11.7762 14.777 12 14.5008 12H8.50081C8.22467 12 8.00081 11.7762 8.00081 11.5C8.00085 11.2239 8.22469 11 8.50081 11H14.5008ZM5.0555 2.27639C5.17902 2.02967 5.4795 1.92946 5.7264 2.05275C5.97321 2.17616 6.07319 2.47672 5.95003 2.72365L3.95296 6.72365C3.88122 6.86731 3.74422 6.96725 3.58578 6.99318C3.42718 7.01898 3.26586 6.96708 3.15218 6.85354L1.65121 5.35354C1.45609 5.15829 1.45604 4.84174 1.65121 4.6465C1.84644 4.45153 2.16304 4.45144 2.35824 4.6465L3.36703 5.65529L5.0555 2.27639ZM14.4998 4.00002C14.7759 4.00002 14.9998 4.22393 14.9998 4.50002C14.9998 4.77616 14.776 5.00002 14.4998 5.00002H8.49984C8.2237 5.00002 7.99984 4.77616 7.99984 4.50002C7.9999 4.22393 8.22374 4.00002 8.49984 4.00002H14.4998Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconChecklistDone;
