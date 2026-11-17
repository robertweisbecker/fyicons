import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSearchSparkle = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSearchSparkle(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="search-sparkle"><path fill="currentColor" d="M6.5 1a5.5 5.5 0 0 1 4.53 8.616l.427.427 3.251 3.25a1 1 0 0 1-1.414 1.415L9.616 11.03A5.5 5.5 0 1 1 6.5 1m0 1a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9" /><path fill="currentColor" fillOpacity={0.9} d="m5.7 5.7.315-1.26c.126-.505.844-.505.97 0L7.3 5.7l1.26.315c.505.126.505.844 0 .97L7.3 7.3l-.315 1.26c-.126.505-.844.505-.97 0L5.7 7.3l-1.26-.315c-.505-.126-.505-.844 0-.97z" /></SvgRoot>;
});
export default IconSearchSparkle;
