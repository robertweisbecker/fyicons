import * as React from 'react';
import type { IconProps } from './types';
const IconFlow = React.forwardRef<SVGSVGElement, IconProps>(function IconFlow(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M14 3.00049C14.5523 3.00049 15 3.4482 15 4.00049V6.00049C14.9997 6.55255 14.5521 7.00049 14 7.00049H11C10.4479 7.00049 10.0003 6.55255 10 6.00049V5.5542C9.24138 5.72242 8.7568 6.26697 8.43945 6.8501C8.20956 7.27245 7.87514 7.68961 7.45703 7.99951C7.87548 8.30953 8.20945 8.72827 8.43945 9.15088C8.7568 9.73378 9.24157 10.2776 10 10.4458V10.0005C10 9.4482 10.4477 9.00049 11 9.00049H14C14.5523 9.00049 15 9.4482 15 10.0005V12.0005C14.9997 12.5525 14.5521 13.0005 14 13.0005H11C10.4479 13.0005 10.0003 12.5525 10 12.0005V11.4624C8.73639 11.276 7.98021 10.3993 7.56055 9.62842C7.19568 8.95832 6.61394 8.50051 6.01758 8.50049H6V9.00049C5.99974 9.55255 5.55212 10.0005 5 10.0005H2C1.44788 10.0005 1.00026 9.55255 1 9.00049V7.00049C1 6.4482 1.44772 6.00049 2 6.00049H5C5.55228 6.00049 6 6.4482 6 7.00049V7.50049H6.01758C6.61385 7.50045 7.19571 7.0425 7.56055 6.37256C7.98016 5.60148 8.73613 4.72399 10 4.5376V4.00049C10 3.4482 10.4477 3.00049 11 3.00049H14ZM11 12.0005H14V10.0005H11V12.0005ZM2 9.00049H5V7.00049H2V9.00049ZM11 6.00049H14V4.00049H11V6.00049Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconFlow;
