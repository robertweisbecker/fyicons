import * as React from 'react';
import type { IconProps } from './types';
const IconBlocks = React.forwardRef<SVGSVGElement, IconProps>(function IconBlocks(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M8.19238 1.42208C8.68579 1.10818 9.31665 1.10881 9.80859 1.42501L12.3115 3.03439C12.7406 3.31041 13 3.78587 13 4.2961V10.9514C12.9999 11.4641 12.7382 11.9417 12.3057 12.217L7.86621 15.0412C7.32916 15.3829 6.63435 15.3485 6.13379 14.9553L3.57324 12.9436C3.21139 12.6592 3.00006 12.2241 3 11.7639V5.54903C3.00004 5.03632 3.26183 4.55875 3.69434 4.28341L8.19238 1.42208ZM7.5 11.5354V14.0891L11.7686 11.3733C11.9127 11.2815 11.9999 11.1222 12 10.9514V8.87618L7.5 11.5354ZM4 11.7639C4.00006 11.9172 4.07082 12.0627 4.19141 12.1574L6.5 13.9709V11.508L4 9.72189V11.7639ZM7.5 7.53536V10.3733L12 7.71407V4.87618L7.5 7.53536ZM4 8.49142L6.5 10.2775V7.52267L4 5.91525V8.49142ZM9.26758 2.26681C9.10358 2.16138 8.893 2.16116 8.72852 2.26583L4.42773 5.00118L7.01074 6.66232L11.75 3.86153L9.26758 2.26681Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconBlocks;
