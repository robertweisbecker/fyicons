import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconMapMarker = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconMapMarker(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="map-marker"><path fill="currentColor" d="M8.001 2c2.79 0 5 2.298 5 5.068 0 1.904-1.23 3.819-2.364 5.196a20 20 0 0 1-2.11 2.192l-.15.13-.04.035-.01.009-.005.003L8 14.9l-.32-.266-.004-.004-.012-.009-.04-.035-.15-.13a20 20 0 0 1-2.111-2.192C4.23 10.887 3 8.972 3 7.068 3 4.298 5.21 2 8 2m0 1C5.782 3 4 4.83 4 7.068c0 1.528 1.02 3.204 2.136 4.56a19 19 0 0 0 1.508 1.622c.134.13.256.238.356.33.1-.092.222-.2.356-.33.412-.396.961-.958 1.508-1.622C10.981 10.272 12 8.596 12 7.068 12 4.83 10.218 3 8 3m0 2.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5" /></SvgRoot>;
});
export default IconMapMarker;
