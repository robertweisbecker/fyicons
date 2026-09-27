import * as React from 'react';
import type { IconProps } from './types';
const IconEmojiDiagonal = React.forwardRef<SVGSVGElement, IconProps>(function IconEmojiDiagonal(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2ZM11.3418 9.02539C11.6038 8.93807 11.8873 9.07983 11.9746 9.3418C12.0619 9.60377 11.9202 9.88729 11.6582 9.97461L5.6582 11.9746C5.39623 12.0619 5.11271 11.9202 5.02539 11.6582C4.93807 11.3962 5.07983 11.1127 5.3418 11.0254L11.3418 9.02539ZM5.875 6C6.35818 6 6.74989 6.44783 6.75 7C6.75 7.55228 6.35825 8 5.875 8C5.39175 8 5 7.55228 5 7C5.00011 6.44783 5.39182 6 5.875 6ZM10.125 6C10.6082 6 10.9999 6.44783 11 7C11 7.55228 10.6082 8 10.125 8C9.64175 8 9.25 7.55228 9.25 7C9.25011 6.44783 9.64182 6 10.125 6Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconEmojiDiagonal;
