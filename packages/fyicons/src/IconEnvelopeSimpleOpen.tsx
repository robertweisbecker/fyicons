import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconEnvelopeSimpleOpen = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconEnvelopeSimpleOpen(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M6.417 2.649a2.5 2.5 0 0 1 3.166 0l3.5 2.863c.58.475.917 1.186.917 1.936V12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7.448c0-.75.337-1.461.917-1.936zm2.533.773a1.5 1.5 0 0 0-1.9 0l-3.5 2.865c-.348.284-.55.711-.55 1.16v4.554a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V7.448a1.5 1.5 0 0 0-.55-1.161z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M13.5 9.5 8.683 7.749a2 2 0 0 0-1.366 0L2.5 9.5" /></SvgRoot>;
});
export default IconEnvelopeSimpleOpen;
