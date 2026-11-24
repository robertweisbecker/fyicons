import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFastBackward = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFastBackward(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="fast-backward"><path fill="currentColor" d="M7.093 3.045a.967.967 0 0 1 1.406.862v2.916l4.955-3.673.123-.077a.967.967 0 0 1 1.419.853v8.149a.967.967 0 0 1-1.542.776L8.499 9.177v2.917a.967.967 0 0 1-1.529.786L1.243 8.787a.967.967 0 0 1 0-1.573L6.97 3.121zM1.863 8 7.5 12.03V3.97zM8.59 8l5.406 4.007V3.993z" />{props.children}</SvgRoot>;
});
export default IconFastBackward;
