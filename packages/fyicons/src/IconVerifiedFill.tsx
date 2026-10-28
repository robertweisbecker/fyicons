import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconVerifiedFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconVerifiedFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="verified-fill"><path fill="currentColor" d="M6.586 1.637a2 2 0 0 1 2.829 0l.57.57c.188.187.442.293.707.293h.807a2 2 0 0 1 2 2v.807a1 1 0 0 0 .293.707l.572.572c.78.781.781 2.048 0 2.83l-.572.571a1 1 0 0 0-.293.707v.806a2 2 0 0 1-2 2h-.806a1 1 0 0 0-.707.293l-.571.571a2 2 0 0 1-2.83 0l-.57-.57a1 1 0 0 0-.708-.294H4.5a2 2 0 0 1-2-2v-.809a1 1 0 0 0-.293-.707l-.57-.569a2 2 0 0 1 0-2.829l.57-.57A1 1 0 0 0 2.5 5.31V4.5a2 2 0 0 1 2-2h.81c.264 0 .519-.106.706-.293zm3.923 3.936a.5.5 0 0 0-.686.166L7.404 9.697l-1.55-1.55a.5.5 0 0 0-.708.707l2 2a.502.502 0 0 0 .78-.093l2.75-4.5a.5.5 0 0 0-.167-.688" /></SvgRoot>;
});
export default IconVerifiedFill;
