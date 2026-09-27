import * as React from 'react';
import type { IconProps } from './types';
const IconVolumeSlashFill = React.forwardRef<SVGSVGElement, IconProps>(function IconVolumeSlashFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M2.14638 2.14681C2.34164 1.95155 2.65815 1.95155 2.85341 2.14681L13.8534 13.1468C14.0484 13.3421 14.0486 13.6587 13.8534 13.8538C13.6582 14.0489 13.3416 14.0488 13.1464 13.8538L2.14638 2.85384C1.95116 2.65863 1.95125 2.34209 2.14638 2.14681ZM9.99989 12.1214V12.266C9.99942 12.9227 9.21474 13.2617 8.73622 12.8119L5.74989 10.0013H3.99989C3.44765 10.0013 2.99996 9.55354 2.99989 9.00131V7.00131C2.99997 6.48771 3.38717 6.06383 3.88563 6.00716L9.99989 12.1214ZM8.73622 3.19076C9.21477 2.7408 9.99952 3.07982 9.99989 3.73666V7.87923L6.97157 4.85091L8.73622 3.19076Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconVolumeSlashFill;
