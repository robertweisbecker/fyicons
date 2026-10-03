import * as React from 'react';
import type { IconProps } from './types';
const IconVerifiedFill = React.forwardRef<SVGSVGElement, IconProps>(function IconVerifiedFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M6.93934 1.98963C7.52513 1.40385 8.47465 1.40385 9.06043 1.98963L9.85145 2.78065C9.9921 2.92126 10.1828 3.00037 10.3817 3.00037H11.4999C12.3283 3.00044 12.9999 3.67199 12.9999 4.50037V5.61756C12.9999 5.81639 13.079 6.00724 13.2196 6.14784L14.0106 6.93885C14.5963 7.52465 14.5964 8.47517 14.0106 9.06092L13.2196 9.85096C13.0789 9.99158 12.9999 10.1823 12.9999 10.3812V11.5004C12.9996 12.3285 12.3281 13.0003 11.4999 13.0004H10.3807C10.1818 13.0004 9.99113 13.0794 9.85047 13.2201L9.06043 14.0101C8.47469 14.5959 7.52514 14.5958 6.93934 14.0101L6.1493 13.2201C6.0087 13.0795 5.81786 13.0004 5.61903 13.0004H4.49989C3.67166 13.0004 3.00021 12.3285 2.99989 11.5004V10.3812C2.99983 10.1824 2.92079 9.99156 2.78016 9.85096L1.98914 9.06092C1.40336 8.47514 1.40336 7.52464 1.98914 6.93885L2.78016 6.14784C2.92076 6.00724 2.99983 5.81639 2.99989 5.61756V4.4994C3.00015 3.6712 3.67162 3.00037 4.49989 3.00037H5.61805C5.81688 3.00031 6.00773 2.92125 6.14832 2.78065L6.93934 1.98963ZM10.2431 5.56287C10.0017 5.42878 9.69652 5.51588 9.56239 5.75721L7.662 9.17811L6.3534 7.86952C6.15814 7.67425 5.84163 7.67425 5.64637 7.86952C5.45156 8.06481 5.45126 8.38143 5.64637 8.57655L7.42371 10.3539C7.53453 10.4646 7.69146 10.5171 7.84657 10.4955C8.00171 10.4738 8.13847 10.3804 8.21473 10.2435L10.4374 6.24354C10.5714 6.00224 10.4842 5.69706 10.2431 5.56287Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconVerifiedFill;
