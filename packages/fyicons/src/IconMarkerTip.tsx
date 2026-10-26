import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconMarkerTip = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconMarkerTip(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><g fill="currentColor" clipPath={"url(#" + idPrefix + "clip0_137_4865)"}><path d="M8 1.034c.384 0 .742.219.928.595.398.807.914 2.115 1.04 3.665l.04-.028a3 3 0 0 0 .136-.116l.002-.003a.5.5 0 0 1 .822.175v.003l.003.006.008.024.034.088.115.325c.095.273.223.651.35 1.074.25.826.522 1.89.522 2.658v6a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-6c0-.767.272-1.832.521-2.658a26 26 0 0 1 .466-1.399l.034-.088.008-.024.002-.006.001-.002a.5.5 0 0 1 .821-.177l.003.004.025.022q.035.033.111.094l.038.028c.127-1.55.644-2.858 1.042-3.665.186-.376.544-.595.928-.595m2.06 5.4A4.17 4.17 0 0 1 8 7a4.17 4.17 0 0 1-2.259-.686 25 25 0 0 0-.262.817C5.228 7.963 5 8.898 5 9.501V15h6V9.5c0-.603-.228-1.538-.479-2.37a25 25 0 0 0-.263-.817q-.093.06-.197.12M7.996 2.036c-.002.002-.014.01-.027.036-.399.808-.912 2.137-.964 3.677.154.092.423.214.811.244Q7.906 6 8 6c.488 0 .816-.146.994-.252-.052-1.54-.564-2.869-.963-3.677-.013-.026-.025-.034-.027-.036z" /><path d="M8 1.904c.39.751.94 2.25.995 3.844A1.9 1.9 0 0 1 8 6a1.9 1.9 0 0 1-.995-.252C7.06 4.155 7.61 2.655 8 1.904" opacity={0.5} /></g><defs><clipPath id={idPrefix + "clip0_137_4865"}><path fill="white" d="M0 0h16v16H0z" /></clipPath></defs></SvgRoot>;
});
export default IconMarkerTip;
