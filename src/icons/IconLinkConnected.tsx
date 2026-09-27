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
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M5.47262 3.97485C6.77234 2.67512 8.87979 2.67534 10.1797 3.97485C11.4793 5.27469 11.4794 7.3821 10.1797 8.68188L8.85245 10.0091C8.5375 10.324 7.99899 10.101 7.99899 9.65556C7.99899 9.52297 8.05166 9.3958 8.14542 9.30205L9.47262 7.97484C10.3819 7.06559 10.3818 5.5912 9.47262 4.68188C8.56329 3.77289 7.08885 3.77268 6.17965 4.68188L2.67965 8.18188C1.77073 9.0911 1.77076 10.5656 2.67965 11.4748C3.14472 11.9398 3.75771 12.1664 4.36723 12.1555C4.68675 12.1498 4.99899 12.3787 4.99899 12.6983C4.99899 12.9247 4.83989 13.1236 4.61435 13.1431C3.6693 13.2249 2.69585 12.905 1.97262 12.1819C0.673206 10.8821 0.673171 8.77459 1.97262 7.47484L5.47262 3.97485ZM11.999 3.42261C11.999 3.12005 12.2621 2.88043 12.5538 2.96076C13.0913 3.10878 13.599 3.39432 14.0215 3.81664C15.3213 5.11647 15.3213 7.22384 14.0215 8.52367L10.5215 12.0237C9.22158 13.3231 7.1141 13.3234 5.81442 12.0237C4.51515 10.724 4.51517 8.61637 5.81442 7.31664L7.14553 5.98553C7.46047 5.67059 7.99899 5.89364 7.99899 6.33905C7.99899 6.47164 7.94632 6.59881 7.85256 6.69257L6.52145 8.02367C5.61273 8.93288 5.6127 10.4075 6.52145 11.3166C7.43061 12.2258 8.90507 12.2255 9.81442 11.3166L13.3144 7.81664C14.2237 6.90733 14.2237 5.43298 13.3144 4.52367C13.0564 4.26582 12.7529 4.08155 12.4298 3.97028C12.189 3.88737 11.999 3.67727 11.999 3.42261Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconLinkConnected;
