import * as React from 'react';
import type { IconProps } from './types';
const IconAlignAllCenter = React.forwardRef<SVGSVGElement, IconProps>(function IconAlignAllCenter(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M7.72461 10.582C7.91869 10.4539 8.18265 10.4756 8.35352 10.6465L9.85352 12.1465C10.0488 12.3417 10.0488 12.6583 9.85352 12.8535C9.65825 13.0488 9.34175 13.0488 9.14648 12.8535L8.5 12.207V14.5C8.5 14.7761 8.27614 15 8 15C7.72386 15 7.5 14.7761 7.5 14.5V12.207L6.85352 12.8535C6.65825 13.0488 6.34175 13.0488 6.14648 12.8535C5.95122 12.6583 5.95122 12.3417 6.14648 12.1465L7.64648 10.6465L7.72461 10.582ZM3.14648 6.14648C3.34175 5.95122 3.65825 5.95122 3.85352 6.14648L5.35352 7.64648C5.54878 7.84175 5.54878 8.15825 5.35352 8.35352L3.85352 9.85352C3.65825 10.0488 3.34175 10.0488 3.14648 9.85352C2.95122 9.65825 2.95122 9.34175 3.14648 9.14648L3.79297 8.5H1.5C1.22386 8.5 1 8.27614 1 8C1 7.72386 1.22386 7.5 1.5 7.5H3.79297L3.14648 6.85352C2.95122 6.65825 2.95122 6.34175 3.14648 6.14648ZM12.1465 6.14648C12.3417 5.95122 12.6583 5.95122 12.8535 6.14648C13.0488 6.34175 13.0488 6.65825 12.8535 6.85352L12.207 7.5H14.5C14.7761 7.5 15 7.72386 15 8C15 8.27614 14.7761 8.5 14.5 8.5H12.207L12.8535 9.14648C13.0488 9.34175 13.0488 9.65825 12.8535 9.85352C12.6583 10.0488 12.3417 10.0488 12.1465 9.85352L10.6465 8.35352C10.4512 8.15825 10.4512 7.84175 10.6465 7.64648L12.1465 6.14648ZM8 7C8.55228 7 9 7.44772 9 8C9 8.55228 8.55228 9 8 9C7.44772 9 7 8.55228 7 8C7 7.44772 7.44772 7 8 7ZM8 1C8.27614 1 8.5 1.22386 8.5 1.5V3.79297L9.14648 3.14648C9.34175 2.95122 9.65825 2.95122 9.85352 3.14648C10.0488 3.34175 10.0488 3.65825 9.85352 3.85352L8.35352 5.35352C8.18265 5.52438 7.91869 5.54613 7.72461 5.41797L7.64648 5.35352L6.14648 3.85352C5.95122 3.65825 5.95122 3.34175 6.14648 3.14648C6.34175 2.95122 6.65825 2.95122 6.85352 3.14648L7.5 3.79297V1.5C7.5 1.22386 7.72386 1 8 1Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconAlignAllCenter;
