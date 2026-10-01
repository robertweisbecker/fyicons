import * as React from 'react';
import type { IconProps } from './types';
const IconWorkflowDecision = React.forwardRef<SVGSVGElement, IconProps>(function IconWorkflowDecision(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M7.52637 1.02118C7.82087 0.781097 8.25572 0.798586 8.53027 1.07294L10.9268 3.46942C11.2196 3.76225 11.2194 4.23706 10.9268 4.52997L8.53027 6.92645C8.52065 6.93607 8.51 6.94481 8.5 6.95379V6.97919C8.5 7.53147 8.94772 7.97919 9.5 7.97919H10C11.1044 7.97919 11.9998 8.87482 12 9.97919V9.99969H13C13.5522 9.99969 13.9998 10.4476 14 10.9997V13.9997C14 14.552 13.5523 14.9997 13 14.9997H10C9.44772 14.9997 9 14.552 9 13.9997V10.9997C9.00018 10.4476 9.44783 9.99969 10 9.99969H11V9.97919C10.9998 9.4271 10.5521 8.97919 10 8.97919H9.5C8.9016 8.97919 8.36652 8.71501 8 8.29852C7.63348 8.71501 7.0984 8.97919 6.5 8.97919H6C5.44786 8.97919 5.00024 9.4271 5 9.97919V9.99969H6C6.55217 9.99969 6.99982 10.4476 7 10.9997V13.9997C7 14.552 6.55228 14.9997 6 14.9997H3C2.44772 14.9997 2 14.552 2 13.9997V10.9997C2.00018 10.4476 2.44783 9.99969 3 9.99969H4V9.97919C4.00024 8.87482 4.89558 7.97919 6 7.97919H6.5C7.05228 7.97919 7.5 7.53147 7.5 6.97919V6.95379C7.49 6.94481 7.47935 6.93607 7.46973 6.92645L5.07324 4.52997C4.78056 4.23706 4.78043 3.76225 5.07324 3.46942L7.46973 1.07294L7.52637 1.02118ZM3 13.9997H6V10.9997H3V13.9997ZM10 13.9997H13V10.9997H10V13.9997ZM5.95703 3.99969L7.96094 6.0036C7.97388 6.0026 7.9868 5.99969 8 5.99969C8.01287 5.99969 8.02546 6.00264 8.03809 6.0036L10.043 3.99969L8 1.95672L5.95703 3.99969Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconWorkflowDecision;
