import * as React from 'react';
import type { IconProps } from './types';
const IconCopiedSm = React.forwardRef<SVGSVGElement, IconProps>(function IconCopiedSm(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<g clipPath={`url(#${idPrefix}clip0_610_12054)`}><path d="M6.15137 2.33411C6.41934 1.26292 7.5049 0.611584 8.57617 0.879028L13.666 2.15149C14.7372 2.41952 15.3886 3.50502 15.1211 4.57629L13.8486 9.66614C13.5806 10.7373 12.4951 11.3887 11.4238 11.1212L11.0195 11.0197L11.1211 11.424C11.3888 12.4954 10.7375 13.5809 9.66602 13.8488L4.57617 15.1212C3.5047 15.3889 2.41928 14.7376 2.15137 13.6661L0.878906 8.57629C0.611177 7.5048 1.26251 6.41939 2.33398 6.15149L5.3877 5.38782C5.38835 5.38502 5.38895 5.38183 5.38965 5.37903L6.15137 2.33411ZM8.87891 6.57629C8.74485 6.04065 8.20172 5.71484 7.66602 5.84875L2.57617 7.12122C2.04055 7.25528 1.71472 7.79841 1.84863 8.33411L3.12109 13.424C3.25517 13.9595 3.79831 14.2854 4.33398 14.1515L9.42383 12.879C9.95945 12.745 10.2852 12.2018 10.1514 11.6661L8.87891 6.57629ZM7.10449 7.51086C7.37439 7.5687 7.5469 7.83472 7.48926 8.10461L6.73926 11.6046C6.70584 11.7605 6.59959 11.8911 6.4541 11.9562C6.30856 12.0212 6.14039 12.0137 6.00195 11.9347L4.25195 10.9347C4.01228 10.7977 3.92864 10.4918 4.06543 10.2521C4.20239 10.0124 4.50832 9.92872 4.74805 10.0656L5.90332 10.7257L6.51074 7.89563C6.56858 7.62573 6.83459 7.45322 7.10449 7.51086ZM8.33398 1.84875C7.79851 1.71513 7.25524 2.04096 7.12109 2.57629L6.48633 5.11243L7.42383 4.87903C8.49533 4.6113 9.58075 5.26261 9.84863 6.33411L10.7451 9.92102L11.666 10.1515C12.2015 10.2851 12.7447 9.95924 12.8789 9.42395L14.1514 4.33411C14.2851 3.79863 13.9591 3.25541 13.4238 3.12122L8.33398 1.84875Z" fill="currentColor" style={{
        fill: "currentColor",
        fillOpacity: 1
      }} /></g><defs><clipPath id={idPrefix + "clip0_610_12054"}><rect width={16} height={16} fill="white" style={{
          fill: "white",
          fillOpacity: 1
        }} /></clipPath></defs></svg>;
});
export default IconCopiedSm;
