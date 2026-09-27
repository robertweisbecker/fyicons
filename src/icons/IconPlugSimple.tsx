import * as React from 'react';
import type { IconProps } from './types';
const IconPlugSimple = React.forwardRef<SVGSVGElement, IconProps>(function IconPlugSimple(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<g clipPath={`url(#${idPrefix}clip0_297_4804)`}><path d="M14.3536 4.14689C14.5485 4.34207 14.5484 4.65879 14.3536 4.854L11.9567 7.25084L12.1452 7.43936C12.7311 8.02512 12.731 8.97486 12.1452 9.56068L10.3519 11.354C8.8956 12.8098 6.60548 12.9189 5.02237 11.6841L2.85271 13.8537C2.65757 14.0487 2.34155 14.0493 2.1463 13.8544C1.95104 13.6592 1.95046 13.3419 2.14561 13.1466L4.31527 10.977C3.08069 9.39361 3.18932 7.10218 4.64534 5.64604L6.43797 3.85342C7.02363 3.2681 7.97357 3.26818 8.55929 3.85342L8.74918 4.04331L11.146 1.64647C11.3412 1.45127 11.6579 1.45139 11.8531 1.64647C12.0484 1.84173 12.0484 2.15831 11.8531 2.35358L9.45629 4.75042L11.2496 6.54374L13.6465 4.14689C13.8417 3.95194 14.1584 3.95173 14.3536 4.14689ZM7.85218 4.56052C7.65699 4.36581 7.34021 4.36573 7.14507 4.56052L5.35245 6.35315C4.16719 7.53855 4.16731 9.4614 5.35245 10.6469C6.53779 11.832 8.45933 11.8318 9.64481 10.6469L11.4381 8.85357C11.6333 8.6583 11.6334 8.34171 11.4381 8.14646L7.85218 4.56052Z" fill="currentColor" style={{
        fill: "currentColor",
        fillOpacity: 1
      }} /></g><defs><clipPath id={idPrefix + "clip0_297_4804"}><rect width={16} height={16} fill="white" style={{
          fill: "white",
          fillOpacity: 1
        }} /></clipPath></defs></svg>;
});
export default IconPlugSimple;
