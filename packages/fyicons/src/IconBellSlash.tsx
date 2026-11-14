import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBellSlash = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBellSlash(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="bell-slash"><path fill="currentColor" d="M8.005 1a1 1 0 0 1 1 1v.1A5 5 0 0 1 13 7v1.842c0 .062.02.123.057.173l.438.601c.645.885.15 2.089-.837 2.337l1.193 1.194a.5.5 0 1 1-.707.707L11.293 12h-.802a2.5 2.5 0 0 1-4.974 0H3.718c-1.227 0-1.935-1.393-1.212-2.384l.438-.602a.3.3 0 0 0 .057-.172V7c0-.943.26-1.824.714-2.577l-1.57-1.57a.5.5 0 1 1 .708-.706L4.32 3.615A5 5 0 0 1 7.005 2.1V2a1 1 0 0 1 1-1m-1.48 11a1.499 1.499 0 0 0 2.955 0zm1.476-9c-1.18 0-2.24.51-2.973 1.322L11.706 11h.578a.5.5 0 0 0 .403-.795l-.438-.601a1.3 1.3 0 0 1-.248-.762V7a4 4 0 0 0-4-4m-3.55 2.158A4 4 0 0 0 4 7v1.842c0 .274-.087.54-.248.762l-.44.601a.5.5 0 0 0 .405.795h6.574z" /></SvgRoot>;
});
export default IconBellSlash;
