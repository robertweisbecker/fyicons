import * as React from 'react';
import type { IconProps } from './types';
const IconWrench = React.forwardRef<SVGSVGElement, IconProps>(function IconWrench(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M6.28516 1.1358C6.44006 1.06221 6.62261 1.0725 6.76758 1.16412C6.91237 1.25578 7 1.4156 7 1.58698V4.00006C7.00009 4.55227 7.44777 5.00006 8 5.00006C8.55223 5.00006 8.99991 4.55227 9 4.00006V1.58698C9 1.4156 9.08763 1.25578 9.23242 1.16412C9.3774 1.0725 9.55994 1.0622 9.71484 1.1358C11.0647 1.77738 12 3.15394 12 4.75006C11.9999 6.27036 11.15 7.58832 9.90332 8.26471L10.1523 12.7256C10.2162 13.8837 9.35568 14.8697 8.22852 14.9883L8 15.0001C6.76299 15.0001 5.77956 13.9609 5.84766 12.7256L6.09473 8.26569C4.93253 7.63475 4.11678 6.44557 4.01172 5.05573L4 4.75006C4 3.15384 4.93523 1.77733 6.28516 1.1358ZM10 4.00006C9.99991 5.10456 9.10452 6.00006 8 6.00006C6.89549 6.00006 6.00009 5.10456 6 4.00006V2.51471C5.38614 3.06433 5 3.86224 5 4.75006L5.00879 4.97955C5.09465 6.11394 5.81108 7.07291 6.81055 7.50494C7.00277 7.58806 7.12279 7.78218 7.11133 7.99127L6.8457 12.7803C6.80917 13.4424 7.33673 14.0001 8 14.0001L8.12305 13.9932C8.72717 13.9293 9.18853 13.4008 9.1543 12.7803L8.8877 7.9903C8.87624 7.78123 8.99628 7.58709 9.18848 7.50397C10.1881 7.07169 10.9052 6.11333 10.9912 4.97955L11 4.75006C11 3.86234 10.6139 3.06437 10 2.51471V4.00006ZM8 12.0001C8.27614 12.0001 8.5 12.2239 8.5 12.5001C8.49993 12.7761 8.2761 13.0001 8 13.0001C7.7239 13.0001 7.50007 12.7761 7.5 12.5001C7.5 12.2239 7.72386 12.0001 8 12.0001Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconWrench;
