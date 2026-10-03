import * as React from 'react';
import type { IconProps } from './types';
const IconFontFamilyAlt = React.forwardRef<SVGSVGElement, IconProps>(function IconFontFamilyAlt(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M11.8818 6.15112C13.4623 5.74813 14.9997 6.94294 15 8.57397V12.4998C14.9999 12.7757 14.776 12.9997 14.5 12.9998C14.2239 12.9998 14.0001 12.7758 14 12.4998V12.2703C13.4126 12.7378 12.6798 12.9997 11.916 12.9998H11.877C10.5983 12.9997 9.65963 11.7979 9.96973 10.5574L9.98047 10.5144C10.2032 9.62438 11.0034 8.99988 11.9209 8.99976H12.7002C13.1377 8.99974 13.5732 8.94904 14 8.85425V8.57397C13.9997 7.59549 13.0771 6.87916 12.1289 7.12085L11.9551 7.16479C11.5571 7.26634 11.2174 7.52722 11.0166 7.8855L10.9365 8.03003C10.8015 8.27072 10.4967 8.35623 10.2559 8.22144C10.015 8.08653 9.92871 7.78166 10.0635 7.54077L10.1445 7.39722C10.4792 6.79992 11.0446 6.3653 11.708 6.19604L11.8818 6.15112ZM4.2959 3.46362C4.52196 2.85066 5.34904 2.81224 5.65039 3.34839L5.7041 3.46362L8.96875 12.3269C9.06417 12.5859 8.93172 12.8729 8.67285 12.9685C8.41378 13.064 8.12676 12.9316 8.03125 12.6726L7.04395 9.99487C7.02937 9.99616 7.0149 9.99975 7 9.99976H3C2.98483 9.99976 2.96991 9.9962 2.95508 9.99487L1.96875 12.6726C1.87325 12.9316 1.5862 13.0639 1.32715 12.9685C1.06812 12.873 0.935803 12.586 1.03125 12.3269L4.2959 3.46362ZM14 9.87671C13.5718 9.95768 13.1365 9.99974 12.7002 9.99976H11.9209C11.4622 9.99988 11.0625 10.3126 10.9512 10.7576L10.9404 10.7996C10.7881 11.4089 11.2488 11.9997 11.877 11.9998H11.916C12.6127 11.9997 13.2737 11.6902 13.7197 11.155C13.9006 10.9378 14 10.6633 14 10.3806V9.87671ZM3.32227 8.99976H6.67773L5 4.44507L3.32227 8.99976Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconFontFamilyAlt;
