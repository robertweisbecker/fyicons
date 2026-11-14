import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconUserKey = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconUserKey(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="user-key"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M5.125 7.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4m-2.5 5c-.552 0-1.016-.462-.816-.977.165-.427.439-.82.805-1.144C3.246 9.816 4.104 9.5 5 9.5c.895 0 1.754.316 2.386.879.366.325.64.717.805 1.144.2.515-.264.977-.816.977z" /><path fill="currentColor" d="M12 3a2.998 2.998 0 0 1 1 5.825V9l1 1-1 1v1l-1 1-1-.857V8.825A2.998 2.998 0 0 1 12 3m0 1.25a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5" />{props.children}</SvgRoot>;
});
export default IconUserKey;
