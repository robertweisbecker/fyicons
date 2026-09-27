import * as React from 'react';
import type { IconProps } from './types';
const IconGaugeLow = React.forwardRef<SVGSVGElement, IconProps>(function IconGaugeLow(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M8.00064 1C9.3849 1.00007 10.7383 1.41068 11.8893 2.17969C13.0403 2.94884 13.9377 4.04232 14.4674 5.32129C14.9972 6.60022 15.1359 8.00753 14.8659 9.36523C14.5958 10.723 13.9297 11.9713 12.9508 12.9502C12.7556 13.1454 12.4381 13.1453 12.2428 12.9502C12.0476 12.7549 12.0476 12.4374 12.2428 12.2422C13.0818 11.4032 13.6539 10.3346 13.8854 9.1709C14.1169 8.0071 13.9977 6.80039 13.5436 5.7041C13.0895 4.60783 12.3202 3.67002 11.3337 3.01074C10.3472 2.35173 9.18702 2.00006 8.00064 2C6.81424 2 5.65417 2.35176 4.66764 3.01074C3.68097 3.67001 2.91181 4.6078 2.45767 5.7041C2.00357 6.80044 1.88437 8.00703 2.11588 9.1709C2.34744 10.3346 2.91944 11.4032 3.75846 12.2422C3.9535 12.4374 3.9535 12.755 3.75846 12.9502C3.56325 13.1454 3.24572 13.1453 3.05045 12.9502C2.0715 11.9712 1.40551 10.7231 1.13541 9.36523C0.865401 8.00747 1.00408 6.60027 1.53385 5.32129C2.06367 4.04228 2.96088 2.94882 4.11197 2.17969C5.26302 1.41072 6.61636 1 8.00064 1ZM4.14713 6.14648C4.3424 5.95138 4.65895 5.95127 4.85416 6.14648L7.74185 9.03418C7.82436 9.01214 7.91119 9 8.00064 9C8.55273 9.00015 9.00053 9.4479 9.00064 10C9.00053 10.5521 8.55273 10.9999 8.00064 11C7.44843 11 7.00076 10.5522 7.00064 10C7.00066 9.91053 7.01276 9.82374 7.03482 9.74121L4.14713 6.85352C3.95187 6.65825 3.95187 6.34175 4.14713 6.14648Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconGaugeLow;
