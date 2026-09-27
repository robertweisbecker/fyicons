import * as React from 'react';
import type { IconProps } from './types';
const IconTagDefault = React.forwardRef<SVGSVGElement, IconProps>(function IconTagDefault(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M12.5 1.99982C13.3284 1.99982 13.9999 2.67148 14 3.49982V8.29279C14 8.55795 13.8945 8.81231 13.707 8.99982L8.76758 13.9393C7.79131 14.9153 6.20866 14.9153 5.23242 13.9393L2.06055 10.7674C1.08473 9.79114 1.08464 8.20844 2.06055 7.23224L7 2.29279C7.18743 2.10535 7.44197 1.99993 7.70703 1.99982H12.5ZM2.76758 7.93927C2.18219 8.52494 2.18228 9.47463 2.76758 10.0604L5.93945 13.2322C6.52516 13.8178 7.4748 13.8177 8.06055 13.2322L13 8.29279V3.49982C12.9999 3.22376 12.7761 2.99982 12.5 2.99982H7.70703L2.76758 7.93927ZM10.0088 4.74982C10.6989 4.75 11.2586 5.30972 11.2588 5.99982C11.2588 6.69006 10.699 7.24963 10.0088 7.24982C9.31843 7.24982 8.75879 6.69017 8.75879 5.99982C8.75895 5.3096 9.31853 4.74982 10.0088 4.74982Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconTagDefault;
