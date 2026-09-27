import * as React from 'react';
import type { IconProps } from './types';
const IconRedoSmall = React.forwardRef<SVGSVGElement, IconProps>(function IconRedoSmall(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M9.41019 4.34194C9.24744 4.20631 9.00028 4.32159 9.00003 4.53335V6.00014H7.00003C5.34318 6.00014 4.00003 7.34329 4.00003 9.00014C4.00016 10.6569 5.34326 12.0001 7.00003 12.0001H7.50003C7.77604 12.0001 7.9999 11.7761 8.00003 11.5001C8.00003 11.224 7.77612 11.0002 7.50003 11.0001H7.00003C5.89554 11.0001 5.00016 10.1046 5.00003 9.00014C5.00003 7.89557 5.89546 7.00014 7.00003 7.00014H9.00003V8.46596C9.00003 8.67792 9.24736 8.79404 9.41019 8.65835L11.7696 6.69155C11.8892 6.59156 11.8894 6.40764 11.7696 6.30776L9.41019 4.34194Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconRedoSmall;
