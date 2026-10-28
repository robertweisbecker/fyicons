import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconWrenchSide = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconWrenchSide(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="wrench-side"><path fill="currentColor" d="M11.036.999c1.592 0 2.962.94 3.592 2.29a.5.5 0 0 1-.453.711h-2.028l-.767 1 .767 1h1.993a.5.5 0 0 1 .448.721 3.96 3.96 0 0 1-3.552 2.206h-.072a4 4 0 0 1-.992-.127L5.57 13.544v.001a2.203 2.203 0 1 1-3.114-3.115l4.7-4.366a4 4 0 0 1-.15-.913L7 4.963A3.965 3.965 0 0 1 10.964 1zm-.072 1A2.965 2.965 0 0 0 8 4.963l.013.28q.04.414.187.788a.5.5 0 0 1-.127.547l-4.938 4.585a1.204 1.204 0 0 0 1.61 1.79l.091-.09 4.617-4.97.053-.052a.5.5 0 0 1 .478-.08c.307.107.637.166.98.166h.072l.215-.008A2.95 2.95 0 0 0 13.186 7h-1.04a1 1 0 0 1-.792-.39l-.767-1a1 1 0 0 1 0-1.218l.767-1a1 1 0 0 1 .793-.39h1.107a2.95 2.95 0 0 0-1.998-.995L11.036 2z" /></SvgRoot>;
});
export default IconWrenchSide;
