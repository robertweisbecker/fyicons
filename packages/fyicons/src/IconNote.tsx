import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconNote = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconNote(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="note"><path fill="currentColor" d="M11 1a2 2 0 0 1 2 2v7.879a2 2 0 0 1-.586 1.414l-2.121 2.121A2 2 0 0 1 8.879 15H5a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zM5 2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3v-2.5A1.5 1.5 0 0 1 9.5 10H12V3a1 1 0 0 0-1-1zm4.5 9a.5.5 0 0 0-.5.5v2.491a1 1 0 0 0 .586-.284l2.121-2.121a1 1 0 0 0 .285-.586zm-1-5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1zm2-2a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconNote;
