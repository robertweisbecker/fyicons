import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconEnvelopeSimpleOpen = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconEnvelopeSimpleOpen(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="envelope-simple-open"><path fill="currentColor" d="M6.763 1.53a1.75 1.75 0 0 1 2.474 0l4.03 4.03A2.5 2.5 0 0 1 14 7.329V12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7.328a2.5 2.5 0 0 1 .732-1.767zm1.767.707a.75.75 0 0 0-1.06 0l-4.03 4.03C3.157 6.55 3 6.932 3 7.329V12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V7.328a1.5 1.5 0 0 0-.44-1.06z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.75 8.805 7.762a1.5 1.5 0 0 0-1.61 0L2.5 10.75" />{props.children}</SvgRoot>;
});
export default IconEnvelopeSimpleOpen;
