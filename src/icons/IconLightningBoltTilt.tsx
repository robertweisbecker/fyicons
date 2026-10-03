import * as React from 'react';
import type { IconProps } from './types';
const IconLightningBoltTilt = React.forwardRef<SVGSVGElement, IconProps>(function IconLightningBoltTilt(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M9.64844 1.00781C10.3011 1.08917 10.7342 1.75943 10.5098 2.40137L9.25 6H11.9551C12.7868 6.00036 13.2556 6.95753 12.7451 7.61426L7.32715 14.5791L7.24512 14.6729C7.04139 14.8806 6.76117 14.9998 6.4668 15L6.33203 14.9922C5.71685 14.9176 5.28533 14.3372 5.39062 13.7266L5.4209 13.5957L6.5 10H4.04492L3.89258 9.98926C3.15763 9.88143 2.77601 9.00143 3.25488 8.38574L8.68359 1.40625C8.88318 1.14993 9.19074 1 9.51562 1L9.64844 1.00781ZM9.51562 2C9.49924 2 9.48279 2.00764 9.47266 2.02051L4.04492 9H7.84375L7.45801 10.2871L6.37891 13.8828C6.36145 13.9412 6.40584 14 6.4668 14C6.49453 13.9997 6.52102 13.9867 6.53809 13.9648L11.9551 7H7.84082L8.30566 5.66992L9.56543 2.07129C9.57 2.05817 9.57 2.05026 9.56934 2.0459C9.56832 2.03973 9.56472 2.03115 9.55859 2.02246C9.55249 2.0139 9.54549 2.00794 9.54004 2.00488C9.53623 2.00285 9.52909 2.00012 9.51562 2Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconLightningBoltTilt;
