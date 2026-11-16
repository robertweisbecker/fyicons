import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSkipBackward = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSkipBackward(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="skip-backward"><path fill="currentColor" d="M4.999 3a1 1 0 0 1 1 1v2.857l5.559-3.148.122-.059a.967.967 0 0 1 1.32.9v6.9a.967.967 0 0 1-1.442.84L5.999 9.142V12a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-1 9h1V4h-1zm2.014-4L12 11.393V4.606z" /></SvgRoot>;
});
export default IconSkipBackward;
