import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconTextBlockquote = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconTextBlockquote(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M4 14H3V8h1zm9.5-1a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1zm0-4a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1zm0-4a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1zM7.935 2.076a1.5 1.5 0 0 0-1.837 1.061 3 3 0 0 0 1.67 3.515c.241.108.507-.048.576-.303.061-.23-.062-.466-.254-.607a1.73 1.73 0 0 1-.568-.719 1.5 1.5 0 0 0 .413-2.947m-4 0a1.5 1.5 0 0 0-1.837 1.061 3 3 0 0 0 1.67 3.515c.241.107.507-.048.576-.303.061-.23-.062-.466-.254-.607a1.73 1.73 0 0 1-.567-.72 1.498 1.498 0 0 0 .412-2.946" /></SvgRoot>;
});
export default IconTextBlockquote;
