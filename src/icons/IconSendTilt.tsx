import * as React from 'react';
import type { IconProps } from './types';
const IconSendTilt = React.forwardRef<SVGSVGElement, IconProps>(function IconSendTilt(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M12.3501 3.00024C13.9046 3.00024 14.8656 4.69649 14.0659 6.02954L9.14402 14.2317C8.46221 15.3675 6.75024 15.1269 6.40867 13.8469L5.09324 8.91333C5.0685 8.8206 5.01775 8.7367 4.94676 8.67212L1.57762 5.6106C0.563369 4.6884 1.21664 3.00056 2.58738 3.00024H12.3501ZM2.58738 4.00024C2.1307 4.00056 1.91262 4.56299 2.25047 4.87036L5.5825 7.89966L9.27683 6.05298C9.52382 5.92948 9.82424 6.02962 9.94773 6.27661C10.0711 6.52357 9.97103 6.82405 9.7241 6.94751L6.08738 8.76489L7.37449 13.5891C7.48836 14.0156 8.05924 14.0954 8.2866 13.717L13.2075 5.51489C13.6074 4.84837 13.1273 4.00024 12.3501 4.00024H2.58738Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconSendTilt;
