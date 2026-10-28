import * as React from 'react';
import type { IconProps } from './types';

export function useIdPrefix() {
  return React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
}

const SvgRoot = /* @__PURE__ */ React.forwardRef<SVGSVGElement, IconProps & { idPrefix: string; iconName: string }>(function SvgRoot(
  { size = 16, color, title, idPrefix, iconName, className, children, ...svgProps }, ref,
) {
  const labeled = Boolean(svgProps['aria-label']?.trim());
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
      ref={ref}
      width={svgProps.width ?? size}
      height={svgProps.height ?? size}
      color={color}
      className={['fy-icon', 'fy-' + iconName, className].filter(Boolean).join(' ')}
      role={svgProps.role ?? (labeled ? 'img' : undefined)}
      aria-hidden={svgProps['aria-hidden'] ?? (labeled ? undefined : true)}
    >
      {title ? <title id={idPrefix + 'title'}>{title}</title> : null}
      {children}
    </svg>
  );
});
export default SvgRoot;
