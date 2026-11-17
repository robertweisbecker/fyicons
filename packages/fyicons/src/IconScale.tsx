import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconScale = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconScale(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="scale"><path fill="currentColor" d="M9.5 6q.05 0 .097.009.09.019.165.066l.014.007q.042.028.078.064l.063.079q.044.07.064.148c.01.04.02.083.02.127v3a.5.5 0 0 1-1 0V7.707l-3 3V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2.293l3-3H6.5a.5.5 0 0 1 0-1zm0 7a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1zm4-2a.5.5 0 0 1 .5.5 2.5 2.5 0 0 1-2.5 2.5.5.5 0 1 1 0-1 1.5 1.5 0 0 0 1.5-1.5.5.5 0 0 1 .5-.5M3 13h2v-2H3zm10.5-7a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5m-11 0a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-.999C2 6.225 2.224 6 2.5 6m.881-3.736c.304-.152.62.103.62.443 0 .228-.15.424-.34.55-.398.27-.66.725-.66 1.243A.5.5 0 0 1 2 4.5a2.5 2.5 0 0 1 1.38-2.236m8.62.443c0-.34.315-.595.619-.443A2.5 2.5 0 0 1 14 4.5a.5.5 0 0 1-1 0c0-.518-.262-.973-.662-1.242-.188-.127-.337-.323-.337-.551M7 2a.5.5 0 0 1 0 1H5.5a.5.5 0 0 1 0-1zm3.5 0a.5.5 0 0 1 0 1H9a.5.5 0 0 1 0-1z" />{props.children}</SvgRoot>;
});
export default IconScale;
