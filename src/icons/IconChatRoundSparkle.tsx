import * as React from 'react';
import type { IconProps } from './types';
const IconChatRoundSparkle = React.forwardRef<SVGSVGElement, IconProps>(function IconChatRoundSparkle(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M8 1C11.8658 1.00026 15 4.13415 15 8C15 11.8659 11.8658 14.9997 8 15C7.02169 15 6.08945 14.7981 5.24316 14.4346C5.01348 14.3359 4.70392 14.3593 4.4082 14.5098C3.69853 14.8711 2.83932 15 1.91309 15C1.44412 14.9996 1.1359 14.6765 1.03711 14.3281C0.942061 13.9927 1.01998 13.5872 1.31934 13.3057L1.41992 13.1963C1.52247 13.0701 1.6295 12.8943 1.72852 12.6797C1.85762 12.3998 1.95842 12.0855 2.01465 11.7949C2.02721 11.7299 2.01427 11.6308 1.94141 11.5049C1.3437 10.4741 1 9.27657 1 8C1 4.13401 4.13401 1 8 1ZM8 2C4.68629 2 2 4.68629 2 8C2 9.09503 2.29363 10.1199 2.80566 11.0029C2.95697 11.2639 3.06934 11.6101 2.99707 11.9844C2.92553 12.3541 2.79948 12.7458 2.63672 13.0986C2.48431 13.4289 2.28365 13.7551 2.04004 13.9971C2.83024 13.9854 3.46827 13.8655 3.9541 13.6182C4.43728 13.3722 5.06435 13.2693 5.6377 13.5156C6.3622 13.8269 7.16041 14 8 14L8.30859 13.9922C11.4787 13.8313 14 11.21 14 8C14 4.78996 11.4787 2.16866 8.30859 2.00781L8 2ZM7.98926 4.75C8.20368 4.75 8.39421 4.88673 8.46289 5.08984L8.91992 6.44238C9.01977 6.73768 9.25158 6.96949 9.54688 7.06934L10.8994 7.52637C11.1025 7.59505 11.2393 7.78558 11.2393 8C11.2393 8.21442 11.1025 8.40495 10.8994 8.47363L9.54688 8.93066C9.25158 9.03051 9.01977 9.26232 8.91992 9.55762L8.46289 10.9102C8.39421 11.1133 8.20368 11.25 7.98926 11.25C7.77483 11.25 7.58431 11.1133 7.51562 10.9102L7.05859 9.55762C6.95874 9.26232 6.72694 9.03051 6.43164 8.93066L5.0791 8.47363C4.87599 8.40495 4.73926 8.21442 4.73926 8C4.73926 7.78558 4.87599 7.59505 5.0791 7.52637L6.43164 7.06934C6.72694 6.96949 6.95874 6.73768 7.05859 6.44238L7.51562 5.08984L7.54688 5.0166C7.63233 4.8545 7.80173 4.75 7.98926 4.75Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconChatRoundSparkle;
