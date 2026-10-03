import * as React from 'react';
import type { IconProps } from './types';
const IconCash = React.forwardRef<SVGSVGElement, IconProps>(function IconCash(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M13.5 3C14.3284 3 15 3.67157 15 4.5V9.5C15 10.3284 14.3284 11 13.5 11H2.5C1.67157 11 1 10.3284 1 9.5V4.5C1 3.67157 1.67157 3 2.5 3H13.5ZM4 4.5C4 5.32843 3.32843 6 2.5 6H2V8H2.5C3.32843 8 4 8.67157 4 9.5V10H12V9.5C12 8.67157 12.6716 8 13.5 8H14V6H13.5C12.6716 6 12 5.32843 12 4.5V4H4V4.5ZM13.5 9C13.2239 9 13 9.22386 13 9.5V10H13.5C13.7761 10 14 9.77614 14 9.5V9H13.5ZM2 9.5C2 9.77614 2.22386 10 2.5 10H3V9.5C3 9.22386 2.77614 9 2.5 9H2V9.5ZM8 5C9.10457 5 10 5.89543 10 7C10 8.10457 9.10457 9 8 9C6.89543 9 6 8.10457 6 7C6 5.89543 6.89543 5 8 5ZM8 6C7.44772 6 7 6.44772 7 7C7 7.55228 7.44772 8 8 8C8.55228 8 9 7.55228 9 7C9 6.44772 8.55228 6 8 6ZM2.5 4C2.22386 4 2 4.22386 2 4.5V5H2.5C2.77614 5 3 4.77614 3 4.5V4H2.5ZM13 4.5C13 4.77614 13.2239 5 13.5 5H14V4.5C14 4.22386 13.7761 4 13.5 4H13V4.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /><path d="M5.40872 10.1593L4.9385 9.98929L4.59852 10.9297L5.06874 11.0997L5.23873 10.6295L5.40872 10.1593ZM12.2729 10.6786C12.3713 10.4206 12.242 10.1316 11.984 10.0332C11.726 9.93469 11.4371 10.064 11.3386 10.322L11.8057 10.5003L12.2729 10.6786ZM10.0422 12.366L9.87223 12.8363L10.0422 12.366ZM11.3165 11.7822L10.8493 11.6039L11.3165 11.7822ZM10.0422 12.366L10.2122 11.8958L5.40872 10.1593L5.23873 10.6295L5.06874 11.0997L9.87223 12.8363L10.0422 12.366ZM11.8057 10.5003L11.3386 10.322L10.8493 11.6039L11.3165 11.7822L11.7836 11.9605L12.2729 10.6786L11.8057 10.5003ZM10.0422 12.366L9.87223 12.8363C10.6416 13.1144 11.4919 12.7248 11.7836 11.9605L11.3165 11.7822L10.8493 11.6039C10.7521 11.8587 10.4687 11.9885 10.2122 11.8958L10.0422 12.366Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconCash;
