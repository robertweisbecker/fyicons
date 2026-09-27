import * as React from 'react';
import type { IconProps } from './types';
const IconSticker = React.forwardRef<SVGSVGElement, IconProps>(function IconSticker(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M5.53402 1.449C6.90269 0.933888 8.39878 0.860658 9.81136 1.23904C9.84468 1.24797 9.8764 1.26032 9.90609 1.27517L9.91 1.27712C10.0013 1.30805 10.0846 1.36558 10.1473 1.44802L14.8983 7.69802C14.9013 7.70197 14.9032 7.70671 14.9061 7.71072C14.9152 7.72344 14.9226 7.73719 14.9305 7.75076C14.9395 7.76629 14.9487 7.78149 14.9559 7.79763C14.9609 7.80897 14.9644 7.82103 14.9686 7.83279C14.9755 7.85222 14.9827 7.87146 14.9871 7.89138C14.9894 7.90158 14.9904 7.91221 14.992 7.92263C14.9956 7.94567 14.9985 7.96878 14.9989 7.99197C14.999 7.99478 14.9998 7.99793 14.9998 8.00076C14.9998 9.46323 14.5412 10.8891 13.6893 12.0779C12.8374 13.2665 11.6346 14.1596 10.2498 14.6297C8.86504 15.0996 7.36702 15.1235 5.96761 14.699C4.5683 14.2744 3.33637 13.4226 2.44613 12.2625C1.55592 11.1023 1.05176 9.69178 1.00375 8.23025C0.955901 6.7687 1.36725 5.32805 2.17953 4.11208C2.99201 2.89611 4.16536 1.96424 5.53402 1.449ZM8.99203 2.08279C7.95182 1.90848 6.88001 2.01164 5.88656 2.38552C4.71345 2.82716 3.70699 3.62551 3.01058 4.66775C2.3145 5.70992 1.96177 6.94444 2.00277 8.19705C2.04386 9.44991 2.47697 10.6586 3.24008 11.6531C4.00308 12.6474 5.05834 13.378 6.25765 13.742C7.45717 14.1058 8.74155 14.0852 9.92855 13.6824C11.1154 13.2795 12.1466 12.5146 12.8768 11.4959C13.411 10.7504 13.763 9.89558 13.9139 8.99978H13.3192C10.6983 8.99949 8.63205 6.76829 8.83285 4.15505L8.99203 2.08279ZM9.82992 4.23123C9.67356 6.26383 11.2806 7.99949 13.3192 7.99978H13.8709L9.93734 2.82498L9.82992 4.23123Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconSticker;
