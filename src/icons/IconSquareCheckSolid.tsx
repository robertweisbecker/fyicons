import * as React from 'react';
import type { IconProps } from './types';
const IconSquareCheckSolid = React.forwardRef<SVGSVGElement, IconProps>(function IconSquareCheckSolid(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M11.5 2C12.8807 2 14 3.11929 14 4.5V11.5C14 12.8807 12.8807 14 11.5 14H4.5C3.11929 14 2 12.8807 2 11.5V4.5C2 3.11929 3.11929 2 4.5 2H11.5ZM10.7568 5.07129C10.5201 4.92945 10.2133 5.00647 10.0713 5.24316L7.40039 9.69336L5.85352 8.14648C5.65825 7.95122 5.34175 7.95122 5.14648 8.14648C4.95122 8.34175 4.95122 8.65825 5.14648 8.85352L7.14648 10.8535C7.25536 10.9624 7.40871 11.0149 7.56152 10.9961C7.71416 10.9772 7.84957 10.8887 7.92871 10.7568L10.9287 5.75684C11.0705 5.52008 10.9935 5.21331 10.7568 5.07129Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconSquareCheckSolid;
