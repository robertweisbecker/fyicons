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
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M11.1465 2.14673C11.3417 1.95147 11.6583 1.95147 11.8535 2.14673L14.3535 4.64673C14.5487 4.842 14.5488 5.15852 14.3535 5.35376L11.8535 7.85376C11.6583 8.04895 11.3417 8.04895 11.1465 7.85376C10.9512 7.65852 10.9513 7.342 11.1465 7.14673L12.8643 5.42798C11.9939 5.25249 11.362 5.27322 10.9004 5.39673C10.4042 5.52953 10.074 5.78846 9.83301 6.11157C9.58384 6.44565 9.42118 6.86183 9.2959 7.31372C9.23378 7.53785 9.18309 7.76263 9.13379 7.9856C9.0856 8.20355 9.0372 8.42831 8.9834 8.62915C8.76558 9.44205 8.35628 10.2672 7.78125 10.8987C7.30123 11.4258 6.68424 11.8365 5.95508 11.9602C5.73892 13.1209 4.72337 14.0002 3.5 14.0002C2.11933 14.0002 1.00007 12.8809 1 11.5002C1 10.1195 2.11929 9.00024 3.5 9.00024C4.68892 9.00024 5.68204 9.8305 5.93555 10.9426C6.33788 10.8373 6.7111 10.5892 7.04199 10.2258C7.4914 9.73235 7.83251 9.0574 8.0166 8.37036C8.06323 8.19632 8.10656 7.9989 8.15723 7.76978C8.20675 7.54583 8.26216 7.29818 8.33203 7.04614C8.47098 6.54497 8.6745 5.9923 9.03125 5.51392C9.39624 5.02456 9.91261 4.62624 10.6426 4.43091C11.205 4.2805 11.8736 4.25709 12.6719 4.37915L11.1465 2.85376C10.9512 2.65852 10.9513 2.342 11.1465 2.14673ZM3.5 10.0002C2.67157 10.0002 2 10.6718 2 11.5002C2.00007 12.3286 2.67161 13.0002 3.5 13.0002C4.32839 13.0002 4.99993 12.3286 5 11.5002C5 10.6718 4.32843 10.0002 3.5 10.0002Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconArrowFlow;
