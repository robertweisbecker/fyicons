import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPalette = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPalette(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="palette"><path fill="currentColor" d="M7.999 1a7 7 0 0 1 7 7c0 1.24-1.073 2-2.09 2h-2.284a1.625 1.625 0 0 0-1.396 2.456c.278.46.317 1.018.171 1.479C9.25 14.413 8.8 15 8 15A7 7 0 0 1 8 1m0 1a6 6 0 0 0 0 12c.458 0 .61-.636.374-1.028A2.625 2.625 0 0 1 10.625 9h2.284C13.49 9 14 8.58 14 8a6 6 0 0 0-6-6M5 9.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m0-3a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m2-2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m3 0a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5" />{props.children}</SvgRoot>;
});
export default IconPalette;
