import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconMarkerTip = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconMarkerTip(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="marker-tip"><path fill="currentColor" d="M8 1.034c.384 0 .742.219.928.595.398.807.914 2.115 1.04 3.665l.04-.028a3 3 0 0 0 .136-.117l.002-.002a.5.5 0 0 1 .822.175v.003l.003.006.008.024.034.088.115.325c.095.272.223.651.35 1.074.25.825.522 1.89.522 2.658V15H4V9.5c0-.767.272-1.833.521-2.658a26 26 0 0 1 .466-1.399l.034-.088.008-.024.002-.006.001-.002a.5.5 0 0 1 .821-.177l.003.003.025.023q.035.033.111.094l.038.028c.127-1.55.644-2.858 1.042-3.665.186-.376.544-.595.928-.595m2.06 5.4A4.17 4.17 0 0 1 8 7a4.17 4.17 0 0 1-2.259-.686 25 25 0 0 0-.262.817C5.228 7.963 5 8.898 5 9.5V14h6V9.5c0-.603-.228-1.538-.479-2.37a25 25 0 0 0-.263-.817q-.093.06-.197.12" /></SvgRoot>;
});
export default IconMarkerTip;
