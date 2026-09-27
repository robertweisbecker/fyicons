import * as React from 'react';
import type { IconProps } from './types';
const IconMicrophone = React.forwardRef<SVGSVGElement, IconProps>(function IconMicrophone(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M12.5 7C12.7761 7 13 7.22386 13 7.5C13 10.0936 11.0251 12.2251 8.49707 12.4746C8.49749 12.4831 8.5 12.4914 8.5 12.5V14.5C8.5 14.7761 8.27614 15 8 15C7.72386 15 7.5 14.7761 7.5 14.5V12.5C7.5 12.4915 7.50153 12.483 7.50195 12.4746C4.9744 12.2246 3 10.0933 3 7.5C3 7.22386 3.22386 7 3.5 7C3.77614 7 4 7.22386 4 7.5C4 9.70914 5.79086 11.5 8 11.5C10.2091 11.5 12 9.70914 12 7.5C12 7.22386 12.2239 7 12.5 7ZM8 1C9.38071 1 10.5 2.11929 10.5 3.5V7.5C10.5 8.88071 9.38071 10 8 10C6.61929 10 5.5 8.88071 5.5 7.5V3.5C5.5 2.11929 6.61929 1 8 1ZM8 2C7.17157 2 6.5 2.67157 6.5 3.5V7.5C6.5 8.32843 7.17157 9 8 9C8.82843 9 9.5 8.32843 9.5 7.5V3.5C9.5 2.67157 8.82843 2 8 2Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconMicrophone;
