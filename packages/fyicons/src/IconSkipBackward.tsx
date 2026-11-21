import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSkipBackward = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSkipBackward(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="skip-backward"><path fill="currentColor" d="M4.999 3a1 1 0 0 1 1 1v2.8l5.175-3.505A1.17 1.17 0 0 1 13 4.264v7.473a1.17 1.17 0 0 1-1.826.969L5.999 9.2V12a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-1 9h1V4h-1zM12 4.264a.17.17 0 0 0-.266-.141L6.012 8l5.722 3.877a.17.17 0 0 0 .266-.14z" />{props.children}</SvgRoot>;
});
export default IconSkipBackward;
