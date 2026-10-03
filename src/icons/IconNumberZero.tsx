import * as React from 'react';
import type { IconProps } from './types';
const IconNumberZero = React.forwardRef<SVGSVGElement, IconProps>(function IconNumberZero(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M11 2C12.6569 2 14 3.34315 14 5V11C14 12.6569 12.6569 14 11 14H5C3.34315 14 2 12.6569 2 11V5C2 3.34315 3.34315 2 5 2H11ZM5 3C3.89543 3 3 3.89543 3 5V11C3 12.1046 3.89543 13 5 13H11C12.1046 13 13 12.1046 13 11V5C13 3.89543 12.1046 3 11 3H5ZM8 4.875C8.43458 4.87503 8.8132 4.98686 9.12793 5.19824C9.43919 5.40747 9.66112 5.69568 9.81641 6.00586C10.1201 6.61289 10.2002 7.36204 10.2002 8C10.2002 8.63637 10.1228 9.38572 9.82031 9.99316C9.66552 10.3038 9.44407 10.5923 9.13184 10.8018C8.81625 11.0134 8.43641 11.125 8 11.125C7.56366 11.125 7.18372 11.0133 6.86816 10.8018C6.55605 10.5923 6.33542 10.3037 6.18066 9.99316C5.87808 9.38567 5.79982 8.63646 5.7998 8C5.79982 7.36191 5.88071 6.61296 6.18457 6.00586C6.33989 5.69563 6.56071 5.40748 6.87207 5.19824C7.18684 4.98678 7.56533 4.87503 8 4.875ZM8 5.875C7.74336 5.87503 7.56323 5.93862 7.42969 6.02832C7.29272 6.12039 7.17485 6.25994 7.07812 6.45312C6.87795 6.85308 6.79982 7.41694 6.7998 8C6.79982 8.58463 6.87618 9.14831 7.0752 9.54785C7.17123 9.74048 7.2889 9.87986 7.42578 9.97168C7.55938 10.0611 7.74055 10.125 8 10.125C8.25982 10.125 8.44154 10.0613 8.5752 9.97168C8.71203 9.87986 8.8288 9.74042 8.9248 9.54785C9.12381 9.14831 9.20018 8.58462 9.2002 8C9.20018 7.41699 9.12201 6.85307 8.92188 6.45312C8.82519 6.26006 8.7072 6.12037 8.57031 6.02832C8.43679 5.93866 8.25657 5.87503 8 5.875Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconNumberZero;
