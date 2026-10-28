import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArchiveOpen = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArchiveOpen(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="archive-open"><path fill="currentColor" d="M12.099 1.034a1.5 1.5 0 0 1 1.737 1.216l.174.985a1.5 1.5 0 0 1-1.217 1.738l-.186.032A1.5 1.5 0 0 1 14 6.5V11a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6.565a1.5 1.5 0 0 1-.793-1.072l-.174-.986A1.5 1.5 0 0 1 2.25 2.77zM3 6.699V11a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6.5a.5.5 0 0 0-.5-.5H6.966zM8.75 7.75a.75.75 0 0 1 .75.75V9a.25.25 0 0 1-.25.25h-2.5A.25.25 0 0 1 6.5 9v-.5a.75.75 0 0 1 .75-.75zm3.521-5.732L2.425 3.754a.5.5 0 0 0-.405.58l.172.985a.5.5 0 0 0 .58.405l9.848-1.736a.5.5 0 0 0 .405-.58l-.173-.984a.5.5 0 0 0-.58-.406" /></SvgRoot>;
});
export default IconArchiveOpen;
