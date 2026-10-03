import * as React from 'react';
import type { IconProps } from './types';
const IconChatRoundCode = React.forwardRef<SVGSVGElement, IconProps>(function IconChatRoundCode(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M8 1C11.8659 1.00011 15 4.13406 15 8C15 11.8659 11.8659 14.9999 8 15C7.0216 15 6.08951 14.7981 5.24316 14.4346C5.01342 14.3359 4.70398 14.3592 4.4082 14.5098C3.69846 14.8711 2.83942 15 1.91309 15C1.4441 14.9996 1.13587 14.6765 1.03711 14.3281C0.942063 13.9927 1.01998 13.5872 1.31934 13.3057L1.41992 13.1963C1.5225 13.0701 1.62947 12.8943 1.72852 12.6797C1.85765 12.3998 1.95841 12.0855 2.01465 11.7949C2.02723 11.7299 2.01435 11.6309 1.94141 11.5049C1.3437 10.4741 1 9.27656 1 8C1 4.13401 4.13401 1.00001 8 1ZM8 2C4.6863 2.00001 2 4.6863 2 8C2 9.09503 2.29363 10.1199 2.80566 11.0029C2.95701 11.2639 3.06937 11.61 2.99707 11.9844C2.92552 12.3542 2.79951 12.7458 2.63672 13.0986C2.48429 13.429 2.28372 13.755 2.04004 13.9971C2.83036 13.9855 3.46821 13.8656 3.9541 13.6182C4.4373 13.3721 5.06427 13.2693 5.6377 13.5156C6.36226 13.8269 7.16032 14 8 14L8.30859 13.9922C11.4788 13.8315 14 11.2101 14 8C14 4.78987 11.4788 2.16852 8.30859 2.00781L8 2ZM6.14746 6.14648C6.34274 5.95141 6.65929 5.95128 6.85449 6.14648C7.04944 6.3417 7.04948 6.65832 6.85449 6.85352L5.70801 8L6.85449 9.14648C7.04944 9.3417 7.04948 9.65832 6.85449 9.85352C6.65931 10.0487 6.34274 10.0485 6.14746 9.85352L4.64746 8.35352C4.4522 8.15825 4.4522 7.84175 4.64746 7.64648L6.14746 6.14648ZM9.14746 6.14648C9.34274 5.95141 9.65929 5.95128 9.85449 6.14648L11.3545 7.64648C11.5494 7.8417 11.5495 8.15832 11.3545 8.35352L9.85449 9.85352C9.65931 10.0487 9.34274 10.0485 9.14746 9.85352C8.9522 9.65825 8.9522 9.34175 9.14746 9.14648L10.2939 8L9.14746 6.85352C8.9522 6.65825 8.9522 6.34175 9.14746 6.14648Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconChatRoundCode;
