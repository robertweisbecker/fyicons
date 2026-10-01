import * as React from 'react';
import type { IconProps } from './types';
const IconLinkConnected = React.forwardRef<SVGSVGElement, IconProps>(function IconLinkConnected(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M5.47271 3.97438C6.77241 2.67469 8.87988 2.67494 10.1797 3.97438C11.4796 5.2742 11.4796 7.38158 10.1797 8.68141L8.85254 10.0086C8.53759 10.3236 7.99907 10.1005 7.99907 9.65509C7.99907 9.5225 8.05175 9.39534 8.1455 9.30158L9.47271 7.97438C10.382 7.06507 10.382 5.59071 9.47271 4.68141C8.56337 3.7725 7.08892 3.77225 6.17974 4.68141L2.67974 8.18141C1.7706 9.09059 1.77083 10.5651 2.67974 11.4744C3.14484 11.9395 3.75777 12.1661 4.3673 12.1551C4.68682 12.1493 4.99907 12.3782 4.99907 12.6978C4.99907 12.9242 4.84 13.1231 4.61446 13.1426C3.66936 13.2245 2.69599 12.9047 1.97271 12.1814C0.673277 10.8816 0.673043 8.77408 1.97271 7.47438L5.47271 3.97438ZM10.9991 3.29942C10.9991 3.07272 11.1585 2.87359 11.3844 2.85436C12.3281 2.774 13.2993 3.09501 14.0215 3.81715C15.3213 5.11698 15.3214 7.22436 14.0215 8.52418L10.5215 12.0242C9.22166 13.3233 7.11411 13.3238 5.8145 12.0242C4.51506 10.7246 4.5154 8.61698 5.8145 7.31715L7.14561 5.98604C7.46056 5.67109 7.99907 5.89415 7.99907 6.33956C7.99907 6.47215 7.9464 6.59932 7.85264 6.69307L6.52153 8.02418C5.61296 8.93349 5.61261 10.4081 6.52153 11.3172C7.43062 12.2262 8.90515 12.2258 9.8145 11.3172L13.3145 7.81715C14.2238 6.90785 14.2238 5.43349 13.3145 4.52418C12.8502 4.05994 12.2388 3.83275 11.6304 3.84265C11.311 3.84785 10.9991 3.61888 10.9991 3.29942Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconLinkConnected;
