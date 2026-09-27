import * as React from 'react';
import type { IconProps } from './types';
const IconArrowFlow = React.forwardRef<SVGSVGElement, IconProps>(function IconArrowFlow(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M11.1465 2.14673C11.3417 1.95147 11.6583 1.95147 11.8535 2.14673L14.3008 4.59399C14.3979 4.6676 14.4646 4.77476 14.4883 4.89673C14.4894 4.90193 14.4903 4.90713 14.4912 4.91235C14.4945 4.93295 14.4964 4.9536 14.4971 4.97485C14.498 4.99347 14.4982 5.0119 14.4971 5.03052C14.4967 5.03536 14.4976 5.04031 14.4971 5.04517C14.4968 5.04809 14.4945 5.05105 14.4941 5.05396C14.4823 5.16333 14.4374 5.2699 14.3535 5.35376L11.8535 7.85376C11.6583 8.049 11.3417 8.049 11.1465 7.85376C10.9512 7.6585 10.9512 7.34199 11.1465 7.14673L12.8877 5.40454C11.3147 5.33014 10.4004 5.55431 9.86523 5.96118C9.25303 6.42679 9.00004 7.24388 9 8.64478C8.99993 10.1935 8.45151 11.3254 7.54395 11.9856C6.79017 12.5338 5.84946 12.7113 4.91016 12.592C4.65775 13.4075 3.89842 14.0002 3 14.0002C1.89546 14.0002 1.00005 13.1048 1 12.0002C1 10.8957 1.89543 10.0002 3 10.0002C3.96363 10.0002 4.76743 10.6818 4.95703 11.5891C5.7217 11.7043 6.4287 11.5606 6.95605 11.177C7.54817 10.7462 7.99993 9.95068 8 8.64478C8.00003 7.19096 8.2474 5.9353 9.25977 5.16528C10.0281 4.58113 11.1496 4.34971 12.6885 4.39575L11.1465 2.85376C10.9512 2.6585 10.9512 2.34199 11.1465 2.14673ZM3 11.0002C2.44772 11.0002 2 11.448 2 12.0002C2.00005 12.5525 2.44775 13.0002 3 13.0002C3.55225 13.0002 3.99995 12.5525 4 12.0002C4 11.448 3.55228 11.0002 3 11.0002Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconArrowFlow;
