import * as React from 'react';
import type { IconProps } from './types';
const IconArrowShuffle = React.forwardRef<SVGSVGElement, IconProps>(function IconArrowShuffle(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M7.14648 9.14648C7.34175 8.95122 7.65825 8.95122 7.85352 9.14648L8.0957 9.38867C9.12715 10.4201 10.5267 11 11.9854 11H12V9.60352C12 9.3808 12.2693 9.26928 12.4268 9.42676L14.3232 11.3232C14.4208 11.4209 14.4209 11.5791 14.3232 11.6768L12.4268 13.5732C12.2693 13.7307 12 13.6192 12 13.3965V12H11.9854C10.2614 12 8.60766 11.3147 7.38867 10.0957L7.14648 9.85352C6.95123 9.65826 6.95123 9.34175 7.14648 9.14648ZM12 2.60352C12 2.38081 12.2693 2.26929 12.4268 2.42676L14.3232 4.32324C14.4208 4.42087 14.4209 4.57913 14.3232 4.67676L12.4268 6.57324C12.2693 6.73068 12 6.61916 12 6.39648V5H11.7998C10.4861 5 9.23773 5.57388 8.38281 6.57129L5.18164 10.3066C4.26052 11.3813 2.91538 12 1.5 12C1.22386 12 1.00001 11.7761 1 11.5C1 11.2239 1.22386 11 1.5 11C2.62339 11 3.69074 10.5092 4.42188 9.65625L7.62402 5.9209C8.66893 4.70184 10.1942 4 11.7998 4H12V2.60352ZM1.5 4C2.91312 4 4.26832 4.56137 5.26758 5.56055L5.85352 6.14648C6.04877 6.34175 6.04878 6.65826 5.85352 6.85352C5.65826 7.04877 5.34174 7.04877 5.14648 6.85352L4.56055 6.26758C3.74882 5.45593 2.6479 5 1.5 5C1.22386 5 1.00001 4.77614 1 4.5C1 4.22386 1.22386 4 1.5 4Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconArrowShuffle;
