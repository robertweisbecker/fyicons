import * as React from 'react';
import type { IconProps } from './types';
const IconItalic = React.forwardRef<SVGSVGElement, IconProps>(function IconItalic(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M12.5 2C12.7761 2 13 2.22386 13 2.5C13 2.77614 12.7761 3 12.5 3H10.3496L6.71387 13H9.5C9.77614 13 10 13.2239 10 13.5C10 13.7761 9.77614 14 9.5 14H3.5C3.22386 14 3 13.7761 3 13.5C3 13.2239 3.22386 13 3.5 13H5.65039L9.28613 3H6.5C6.22386 3 6 2.77614 6 2.5C6 2.22386 6.22386 2 6.5 2H12.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconItalic;
