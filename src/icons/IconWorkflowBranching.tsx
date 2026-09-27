import * as React from 'react';
import type { IconProps } from './types';
const IconWorkflowBranching = React.forwardRef<SVGSVGElement, IconProps>(function IconWorkflowBranching(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M3.5 1C4.88071 1 6 2.11929 6 3.5C6 4.70943 5.14105 5.71753 4 5.94922V10.5C4 10.7311 4.05413 10.949 4.14746 11.1445L8.03418 7.25781C8.01227 7.17551 8 7.0892 8 7V4C8 3.44772 8.44772 3 9 3H12C12.5523 3 13 3.44772 13 4V7C13 7.55228 12.5523 8 12 8H9C8.91038 8 8.82386 7.98695 8.74121 7.96484L4.85449 11.8516C5.05028 11.9452 5.26847 12 5.5 12H9.41699L10.6426 9.95703C11.031 9.31003 11.969 9.31003 12.3574 9.95703L14.4746 13.4854C14.8745 14.1518 14.3943 14.9998 13.6172 15H9.38281C8.60568 14.9998 8.12552 14.1518 8.52539 13.4854L8.81641 13H5.5C4.11929 13 3 11.8807 3 10.5V5.94922C1.85895 5.71753 1 4.70943 1 3.5C1 2.11929 2.11929 1 3.5 1ZM9.38281 14H13.6172L11.5 10.4717L9.38281 14ZM9 7H12V4H9V7ZM3.5 2C2.67157 2 2 2.67157 2 3.5C2 4.32843 2.67157 5 3.5 5C4.32843 5 5 4.32843 5 3.5C5 2.67157 4.32843 2 3.5 2Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconWorkflowBranching;
