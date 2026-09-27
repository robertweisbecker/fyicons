import * as React from 'react';
import type { IconProps } from './types';
const IconChatQuestion = React.forwardRef<SVGSVGElement, IconProps>(function IconChatQuestion(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M10.5 2C12.433 2 14 3.567 14 5.5V9.5C14 11.433 12.433 13 10.5 13H9.66699L8.5752 13.8184C8.0104 14.242 7.36654 14.5484 6.68164 14.7197L6.27246 14.8223C5.6078 14.9884 5.02065 14.355 5.2373 13.7051L5.30176 13.5127C5.36062 13.3361 5.33895 13.1462 5.24902 12.9893C3.43323 12.8605 2 11.3486 2 9.5V5.5C2 3.567 3.567 2 5.5 2H10.5ZM5.5 3C4.11929 3 3 4.11929 3 5.5V9.5C3 10.8807 4.11929 12 5.5 12H5.70703L5.85352 12.1465C6.28527 12.5782 6.44044 13.2125 6.26074 13.7939L6.43848 13.75C6.99425 13.6111 7.51729 13.3623 7.97559 13.0186L9.2002 12.0996L9.26855 12.0566C9.33963 12.0195 9.41903 12 9.5 12H10.5C11.8807 12 13 10.8807 13 9.5V5.5C13 4.11929 11.8807 3 10.5 3H5.5ZM7.99512 8.87012C8.3403 8.87012 8.62012 9.14994 8.62012 9.49512C8.62005 9.84024 8.34025 10.1201 7.99512 10.1201C7.64998 10.1201 7.37018 9.84024 7.37012 9.49512C7.37012 9.14994 7.64994 8.87012 7.99512 8.87012ZM8.01465 4.88672C8.79692 4.91218 9.4259 5.52753 9.44434 6.32031C9.45617 6.83433 9.2101 7.22875 8.88672 7.47168C8.74701 7.57665 8.6275 7.67792 8.54492 7.78027C8.46364 7.88107 8.44434 7.95041 8.44434 7.99707C8.44423 8.24232 8.24524 8.44127 8 8.44141C7.75476 8.44127 7.55577 8.24232 7.55566 7.99707C7.55566 7.67563 7.69863 7.41473 7.85352 7.22266C8.00716 7.03221 8.19795 6.87688 8.35254 6.76074C8.47594 6.66805 8.56008 6.53346 8.55566 6.34082C8.54843 6.0297 8.30672 5.78478 7.98535 5.77441C7.86594 5.77068 7.73992 5.81411 7.62793 5.89453C7.51221 5.97772 7.44265 6.07846 7.41895 6.14551C7.33699 6.37661 7.08281 6.49775 6.85156 6.41602C6.62055 6.33405 6.49943 6.07981 6.58105 5.84863C6.67509 5.58285 6.87215 5.34236 7.10938 5.17188C7.35033 4.99891 7.66553 4.87552 8.01465 4.88672Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconChatQuestion;
