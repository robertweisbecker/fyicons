import * as React from 'react';
import type { IconProps } from './types';
const IconLayers = React.forwardRef<SVGSVGElement, IconProps>(function IconLayers(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M6.9375 2.25171C7.60112 1.8962 8.39884 1.8963 9.0625 2.25171L14.002 4.89819C14.8815 5.36944 14.8815 6.63007 14.002 7.10132L11.9111 8.22046L13.2471 8.91577C14.1282 9.37482 14.1482 10.6302 13.2812 11.116L9.09863 13.4578C8.41593 13.8401 7.58225 13.8397 6.89941 13.4578L2.7168 11.116C1.8493 10.6301 1.86883 9.37449 2.75098 8.91577L4.08691 8.22046L1.99805 7.10132C1.11877 6.62997 1.11862 5.36941 1.99805 4.89819L6.9375 2.25171ZM3.21191 9.80347C3.03601 9.89528 3.0322 10.1456 3.20508 10.2429L7.38867 12.5857C7.76778 12.7974 8.2304 12.7978 8.60938 12.5857L12.793 10.2429C12.9653 10.1457 12.9611 9.89561 12.7861 9.80347L10.8438 8.79272L9.18066 9.68433C8.44322 10.0794 7.55678 10.0794 6.81934 9.68433L5.1543 8.79175L3.21191 9.80347ZM8.58984 3.13354C8.22127 2.93629 7.77869 2.9362 7.41016 3.13354L2.46973 5.77905C2.29422 5.87332 2.29437 6.12606 2.46973 6.22046L7.29199 8.80347C7.73423 9.0402 8.26577 9.04018 8.70801 8.80347L13.5303 6.22046C13.7059 6.12616 13.7059 5.87335 13.5303 5.77905L8.58984 3.13354Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconLayers;
