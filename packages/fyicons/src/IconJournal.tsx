import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconJournal = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconJournal(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="journal"><path fill="currentColor" d="M11 2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2h-.5a.5.5 0 0 1 0-1H3v-1h-.5a.5.5 0 0 1 0-1H3V8h-.5a.5.5 0 0 1 0-1H3V6h-.5a.5.5 0 0 1 0-1H3V4a2 2 0 0 1 2-2zM5 3a1 1 0 0 0-1 1v1h.5a.5.5 0 0 1 0 1H4v1h.5a.5.5 0 0 1 0 1H4v1h.5a.5.5 0 0 1 0 1H4v1h.5a.5.5 0 0 1 0 1H4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9.5 2.5v11" /></SvgRoot>;
});
export default IconJournal;
