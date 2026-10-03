import * as React from 'react';
import type { IconProps } from './types';
const IconPointerSm = React.forwardRef<SVGSVGElement, IconProps>(function IconPointerSm(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M8.02983 11.8532C7.4519 13.1054 5.63191 12.9796 5.23178 11.6599L3.23338 5.05699C2.88633 3.9104 3.95675 2.83985 5.10334 3.18702L11.7055 5.18612C13.0258 5.58604 13.1517 7.40642 11.8989 7.98416L9.5856 9.05034C9.36958 9.15004 9.19565 9.32388 9.09601 9.53993L8.02983 11.8532ZM6.18886 11.3698C6.32234 11.8096 6.92912 11.8513 7.12177 11.4341L8.18796 9.12078C8.38722 8.68869 8.73443 8.34169 9.16644 8.14229L11.4804 7.07542C11.8977 6.88268 11.8555 6.27647 11.4155 6.1432L4.81332 4.1441C4.43117 4.02854 4.07406 4.3855 4.18977 4.76765L6.18886 11.3698Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconPointerSm;
