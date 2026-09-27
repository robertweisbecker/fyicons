import * as React from 'react';
import type { IconProps } from './types';
const IconHandBack1 = React.forwardRef<SVGSVGElement, IconProps>(function IconHandBack1(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M8.5 1C9.18579 1 9.77078 1.47466 9.94531 2.10938C10.1175 2.03958 10.3045 2 10.5 2C11.3208 2 12 2.67919 12 3.5V4.08887C12.1569 4.03232 12.325 4 12.5 4C13.3208 4 14 4.67919 14 5.5V10.5C14 12.1356 13.3608 13.2897 12.375 14.0186C11.412 14.7305 10.1698 15 9 15C7.91867 15 7.03168 14.8005 6.28418 14.4287C5.5364 14.0567 4.95639 13.5258 4.4707 12.9033C3.98887 12.2857 3.59371 11.5708 3.21875 10.8252C2.8339 10.0599 2.4861 9.29654 2.05762 8.48242C2.01994 8.4107 2 8.33102 2 8.25C2 7.56567 2.55799 7.10539 3.14551 6.97949C3.72926 6.85452 4.41346 7.01761 5 7.54785V3.5C5 2.67919 5.67919 2 6.5 2C6.69581 2 6.88327 2.03937 7.05566 2.10938C7.23028 1.47479 7.8143 1 8.5 1ZM8.5 2C8.23148 2 8 2.23148 8 2.5V7.5C8 7.77614 7.77614 8 7.5 8C7.22386 8 7 7.77614 7 7.5V3.5C7 3.23148 6.76852 3 6.5 3C6.23148 3 6 3.23148 6 3.5V8.75C6 8.95221 5.87821 9.13451 5.69141 9.21191C5.50457 9.2893 5.28948 9.24651 5.14648 9.10352L4.39648 8.35352C4.00498 7.96201 3.61094 7.90305 3.35449 7.95801C3.15186 8.00151 3.05974 8.09668 3.02246 8.17188C3.41861 8.9362 3.77693 9.70907 4.1123 10.376C4.47999 11.1071 4.8394 11.7504 5.25879 12.2881C5.67459 12.821 6.14435 13.2431 6.72949 13.5342C7.31483 13.8253 8.04447 14 9 14C10.0372 14 11.0451 13.7583 11.7803 13.2148C12.4926 12.6882 13 11.8423 13 10.5V5.5C13 5.23148 12.7685 5 12.5 5C12.2315 5 12 5.23148 12 5.5V7.5C12 7.77614 11.7761 8 11.5 8C11.2239 8 11 7.77614 11 7.5V3.5C11 3.23148 10.7685 3 10.5 3C10.2315 3 10 3.23148 10 3.5V7.5C10 7.77614 9.77614 8 9.5 8C9.22386 8 9 7.77614 9 7.5V2.5C9 2.23148 8.76852 2 8.5 2Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconHandBack1;
