import * as React from 'react';
import type { IconProps } from './types';
const IconPaperclipTilt = React.forwardRef<SVGSVGElement, IconProps>(function IconPaperclipTilt(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<g clipPath={`url(#${idPrefix}clip0_315_17553)`}><path d="M14.0103 4.1109C15.3771 5.47774 15.3771 7.69382 14.0103 9.06065L10.1212 12.9497C8.16855 14.9024 5.00272 14.9024 3.0501 12.9497C1.09748 10.9971 1.09748 7.83129 3.0501 5.87867L5.52498 3.4038C5.72024 3.20854 6.03682 3.20854 6.23208 3.4038C6.42734 3.59906 6.42734 3.91564 6.23208 4.1109L3.75721 6.58578C2.19511 8.14787 2.19511 10.6805 3.75721 12.2426C5.31931 13.8047 7.85196 13.8047 9.41406 12.2426L13.3031 8.35354C14.2795 7.37723 14.2795 5.79432 13.3031 4.81801C12.3268 3.8417 10.7439 3.8417 9.76762 4.81801L5.87853 8.7071C5.48801 9.09762 5.488 9.73079 5.87853 10.1213C6.26905 10.5118 6.90222 10.5118 7.29274 10.1213L11.1818 6.23222C11.3771 6.03696 11.6937 6.03696 11.8889 6.23222C12.0842 6.42749 12.0842 6.74407 11.8889 6.93933L7.99985 10.8284C7.2188 11.6095 5.95247 11.6095 5.17142 10.8284C4.39037 10.0474 4.39037 8.78104 5.17142 7.99999L9.06051 4.1109C10.4273 2.74407 12.6434 2.74407 14.0103 4.1109Z" fill="currentColor" style={{
        fill: "currentColor",
        fillOpacity: 1
      }} /></g><defs><clipPath id={idPrefix + "clip0_315_17553"}><rect width={16} height={16} fill="white" style={{
          fill: "white",
          fillOpacity: 1
        }} /></clipPath></defs></svg>;
});
export default IconPaperclipTilt;
