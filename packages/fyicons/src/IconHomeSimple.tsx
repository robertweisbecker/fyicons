import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHomeSimple = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHomeSimple(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M6.894 1.966a1.5 1.5 0 0 1 2.21 0l4.5 4.91A1.5 1.5 0 0 1 14 7.888V12.5a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1-.5-.5V9H7v4.5a.5.5 0 0 1-.5.5h-3A1.5 1.5 0 0 1 2 12.5V7.89c0-.375.14-.737.395-1.014zm1.474.676a.5.5 0 0 0-.738 0l-4.5 4.91a.5.5 0 0 0-.131.337V12.5l.01.1a.5.5 0 0 0 .49.4h2.5V9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4h2.5a.5.5 0 0 0 .49-.4l.01-.1V7.89a.5.5 0 0 0-.13-.338z" /></SvgRoot>;
});
export default IconHomeSimple;
