import * as React from 'react';
import type { IconProps } from './types';
const IconPlug3 = React.forwardRef<SVGSVGElement, IconProps>(function IconPlug3(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M12.5 3C12.7761 3 13 3.22386 13 3.5V4H14.5C14.7761 4 15 4.22386 15 4.5C15 4.77614 14.7761 5 14.5 5H13V7H14.5C14.7761 7 15 7.22386 15 7.5C15 7.77614 14.7761 8 14.5 8H13V8.5L12.9902 8.60059C12.9437 8.82855 12.7417 9 12.5 9H10.3301L10.0986 8.98633C9.56482 8.9243 9.0744 8.64917 8.74316 8.21777L8.15039 7.44531C8.07952 7.35302 7.97917 7.28984 7.86816 7.26367L7.75391 7.25H6.5C6.22386 7.25 6 7.02614 6 6.75V6.5H5.71582C5.34448 6.49999 4.97662 6.42893 4.63184 6.29102L3.63477 5.89258C2.85185 5.57941 2 6.1558 2 6.99902C2.00002 7.60233 2.4508 8.11071 3.0498 8.18262L6.02539 8.53906C7.28166 8.68982 8.1631 9.85197 7.9707 11.1025C7.80253 12.1942 6.86334 13 5.75879 13H5.5C5.22386 13 5 12.7761 5 12.5C5 12.2239 5.22386 12 5.5 12H5.75879C6.36987 12 6.88942 11.5541 6.98242 10.9502C7.08886 10.2584 6.60124 9.61563 5.90625 9.53223L2.93066 9.1748C1.8291 9.04255 1.00002 8.10851 1 6.99902C1 5.44836 2.5661 4.38802 4.00586 4.96387L5.00293 5.3623C5.22959 5.45297 5.4717 5.49999 5.71582 5.5H6V5.25C6 4.97386 6.22386 4.75 6.5 4.75H7.77051L7.87793 4.73828C7.98282 4.7151 8.07825 4.65822 8.14941 4.5752L8.90137 3.69824C9.23374 3.31053 9.69985 3.0667 10.2021 3.01172L10.4199 3H12.5ZM10.4199 4C10.128 4 9.85014 4.12796 9.66016 4.34961L8.90918 5.22656C8.62431 5.55886 8.20818 5.74986 7.77051 5.75H7V6.25H7.75391C8.16173 6.2501 8.54943 6.4159 8.83008 6.70508L8.94336 6.83691L9.53613 7.60938C9.7254 7.85582 10.0193 8 10.3301 8H12V4H10.4199Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconPlug3;
