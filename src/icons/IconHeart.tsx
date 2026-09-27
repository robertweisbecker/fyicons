import * as React from 'react';
import type { IconProps } from './types';
const IconHeart = React.forwardRef<SVGSVGElement, IconProps>(function IconHeart(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M10.666 2.13379C13.0002 2.13379 14.8994 4.03233 14.8994 6.36719C14.8992 8.23308 13.7955 9.92993 12.4736 11.3438C11.1419 12.768 9.50563 13.9912 8.30078 14.8994C8.12294 15.0333 7.87728 15.034 7.69922 14.9004C6.49274 13.9941 4.85711 12.77 3.52539 11.3447C2.20353 9.92989 1.0998 8.23142 1.09961 6.36719C1.09961 4.03291 2.99873 2.13379 5.33301 2.13379C5.94648 2.13381 7.21439 2.39927 8 3.43555C8.78587 2.39962 10.053 2.13387 10.666 2.13379ZM10.666 3.13379C10.0963 3.1339 8.8747 3.45686 8.47363 4.65918C8.40527 4.86285 8.21393 5.00103 7.99902 5.00098C7.78413 5.00073 7.59346 4.86203 7.52539 4.6582C7.12492 3.4562 5.90348 3.13381 5.33301 3.13379C3.55102 3.13379 2.09961 4.58519 2.09961 6.36719C2.0998 7.84201 2.98395 9.30073 4.25586 10.6621C5.41594 11.9037 6.83297 12.9933 8 13.8721C9.16682 12.991 10.583 11.9019 11.7432 10.6611C13.0151 9.30082 13.8992 7.84356 13.8994 6.36719C13.8994 4.5847 12.448 3.13379 10.666 3.13379Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconHeart;
