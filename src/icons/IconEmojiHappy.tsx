import * as React from 'react';
import type { IconProps } from './types';
const IconEmojiHappy = React.forwardRef<SVGSVGElement, IconProps>(function IconEmojiHappy(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2ZM11.7217 9.03125C12.0753 8.88907 12.4689 9.15123 12.3828 9.52246C11.92 11.515 10.1343 12.9998 8.00098 13C5.86783 13 4.08234 11.5156 3.61914 9.52344C3.53288 9.15224 3.92565 8.8903 4.2793 9.03223C5.42951 9.49434 6.68561 9.75 8.00098 9.75C9.31646 9.74989 10.5716 9.49365 11.7217 9.03125ZM6 5C6.55228 5 7 5.67157 7 6.5C7 6.8003 6.93964 7.07917 6.83789 7.31348C6.80023 7.40017 6.68345 7.40179 6.62305 7.3291C6.45236 7.12345 6.2362 7 6 7C5.7637 7 5.54688 7.1234 5.37598 7.3291C5.31548 7.40166 5.19868 7.4002 5.16113 7.31348C5.05969 7.07915 5 6.80011 5 6.5C5 5.67157 5.44772 5 6 5ZM10 5C10.5523 5 11 5.67157 11 6.5C11 6.8003 10.9396 7.07917 10.8379 7.31348C10.8002 7.40017 10.6834 7.40179 10.623 7.3291C10.4524 7.12345 10.2362 7 10 7C9.7637 7 9.54688 7.1234 9.37598 7.3291C9.31549 7.40166 9.19868 7.4002 9.16113 7.31348C9.05969 7.07915 9 6.80011 9 6.5C9 5.67157 9.44771 5 10 5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconEmojiHappy;
