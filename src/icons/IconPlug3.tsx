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
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M12.5 3C12.7761 3 13 3.22386 13 3.5V4H14.5C14.7761 4 15 4.22386 15 4.5C15 4.77614 14.7761 5 14.5 5H13V7H14.5C14.7761 7 15 7.22386 15 7.5C15 7.77614 14.7761 8 14.5 8H13V8.5L12.9902 8.60059C12.9437 8.82855 12.7417 9 12.5 9H10.3301L10.0986 8.98633C9.56482 8.9243 9.0744 8.64917 8.74316 8.21777L8.15039 7.44531C8.07952 7.35302 7.97917 7.28984 7.86816 7.26367L7.75391 7.25H6.5C6.22386 7.25 6 7.02614 6 6.75V6.48828H5.99902C5.85934 6.48207 5.66416 6.4747 5.44238 6.46973C4.99276 6.45966 4.45331 6.46025 4.0459 6.49805C3.73392 6.52701 3.3561 6.59135 2.98535 6.66602C2.41337 6.78122 2.0001 7.30234 2 7.92383C2 8.58881 2.48079 9.15629 3.13672 9.26562L6.22461 9.78027C7.24883 9.95098 7.99997 10.8376 8 11.876C7.99991 13.049 7.049 13.9999 5.87598 14H1.5C1.22388 14 1.00003 13.7761 1 13.5C1.00003 13.2239 1.22388 13 1.5 13H5.87598C6.49671 12.9999 6.99991 12.4967 7 11.876C6.99997 11.3265 6.60258 10.8569 6.06055 10.7666L2.97266 10.252C1.83453 10.0623 1 9.07766 1 7.92383C1.0001 6.86472 1.71252 5.90219 2.78809 5.68555C3.1727 5.60809 3.59058 5.53568 3.9541 5.50195C4.42141 5.45862 5.00738 5.45951 5.46387 5.46973C5.67248 5.4744 5.85879 5.48125 6 5.4873V5.25C6 4.97386 6.22386 4.75 6.5 4.75H7.77051L7.87793 4.73828C7.98282 4.7151 8.07825 4.65822 8.14941 4.5752L8.90137 3.69824C9.23374 3.31053 9.69985 3.0667 10.2021 3.01172L10.4199 3H12.5ZM10.4199 4C10.128 4 9.85014 4.12796 9.66016 4.34961L8.90918 5.22656C8.62431 5.55886 8.20818 5.74986 7.77051 5.75H7V6.25H7.75391C8.16173 6.2501 8.54943 6.4159 8.83008 6.70508L8.94336 6.83691L9.53613 7.60938C9.7254 7.85582 10.0193 8 10.3301 8H12V4H10.4199Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconPlug3;
