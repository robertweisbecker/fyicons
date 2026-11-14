import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconEarbuds = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconEarbuds(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="earbuds"><path fill="currentColor" d="m5 5.5 2.004.004v6.5a1 1 0 0 1-2 0z" /><path fill="currentColor" d="M6.689 3.879a1.884 1.884 0 0 0-2.612-.523L2.283 4.552A2.477 2.477 0 1 0 5.68 8.04l.867-1.228c.298-.423.458-.928.457-1.445v-.446c0-.37-.11-.733-.315-1.042M2.334 5.956c.406-.263 1.039-.006 1.415.572.375.58.352 1.262-.053 1.525s-1.04.007-1.415-.571c-.376-.58-.352-1.263.053-1.526M11 5.5a1 1 0 1 0-2 0V12a1 1 0 1 0 2 0z" /><path fill="currentColor" d="M9.315 3.875a1.884 1.884 0 0 1 2.613-.524l1.794 1.197a2.477 2.477 0 1 1-3.398 3.488l-.867-1.229A2.5 2.5 0 0 1 9 5.363v-.446c0-.37.11-.734.315-1.042m4.35 2.078c-.406-.263-1.04-.007-1.415.571-.376.58-.352 1.262.053 1.526.405.263 1.039.006 1.415-.573s.351-1.26-.054-1.524" />{props.children}</SvgRoot>;
});
export default IconEarbuds;
