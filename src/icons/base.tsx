import * as React from 'react';
import type { IconProps } from './types';

const SvgRoot = React.forwardRef<SVGSVGElement, IconProps & { idPrefix: string }>(function SvgRoot(
  { size = 16, color, title, idPrefix, children, ...svgProps }, ref,
) {
  const labeled = title || svgProps['aria-label'] || svgProps['aria-labelledby'];
  return (
    <svg
      {...svgProps}
      ref={ref}
      width={svgProps.width ?? size}
      height={svgProps.height ?? size}
      color={color}
      aria-labelledby={svgProps['aria-labelledby'] ?? (title ? idPrefix + 'title' : undefined)}
      aria-label={svgProps['aria-label'] ?? title}
      role={svgProps.role ?? (labeled ? 'img' : undefined)}
      aria-hidden={svgProps['aria-hidden'] ?? (labeled ? undefined : true)}
    >
      {title ? <title id={idPrefix + 'title'}>{title}</title> : null}
      {children}
    </svg>
  );
});
export default SvgRoot;
