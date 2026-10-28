import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconMapMarkerRound = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconMapMarkerRound(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="map-marker-round"><path fill="currentColor" d="M8 1a6 6 0 0 1 6 6c0 2.212-1.506 4.213-2.896 5.604a19 19 0 0 1-2.767 2.273l-.049.032-.014.009-.003.003h-.002L8 15.094l-.269-.171-.002-.001-.003-.003-.014-.009-.049-.032-.183-.123a19 19 0 0 1-2.584-2.15C3.506 11.213 2 9.212 2 7a6 6 0 0 1 6-6m0 1a5 5 0 0 0-5 5c0 1.788 1.244 3.537 2.604 4.897a18 18 0 0 0 2.396 2 18 18 0 0 0 2.396-2C11.756 10.537 13 8.787 13 7a5 5 0 0 0-5-5m0 2.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4m0 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2" /></SvgRoot>;
});
export default IconMapMarkerRound;
