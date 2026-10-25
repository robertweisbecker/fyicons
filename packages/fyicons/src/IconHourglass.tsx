import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHourglass = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHourglass(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="hourglass"><path d="M4.49991 1.5L4.50012 4.46464C4.50017 5.12758 4.76352 5.76335 5.23227 6.23214L6.14651 7.14647C6.37285 7.37283 6.5 7.67983 6.5 7.99994C6.5 8.32012 6.37279 8.62718 6.14636 8.85355L5.23206 9.76763C4.76303 10.2365 4.49955 10.8726 4.49961 11.5359L4.49991 14.5" stroke="currentColor" /><path d="M9.39667 5C9.61902 5.00034 9.73051 5.26934 9.57343 5.42676L8.37519 6.625V10.0254L9.93476 12.209C10.1711 12.5399 9.93422 13 9.52753 13H6.47089C6.06424 12.9999 5.82729 12.5399 6.06366 12.209L7.62519 10.0234V6.625L6.42694 5.42676C6.26945 5.26927 6.38098 5 6.6037 5H9.39667Z" fill="currentColor" /><path d="M12.5 1.5H3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M12.5 14.5H3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M11.5 1.5V4.46447C11.5 5.12751 11.2366 5.76339 10.7678 6.23223L9.85353 7.14647C9.62717 7.37283 9.5 7.67985 9.5 7.99997C9.5 8.32013 9.62719 8.62718 9.8536 8.85355L10.7679 9.76767C11.2368 10.2366 11.5003 10.8726 11.5002 11.5357L11.5 14.5" stroke="currentColor" /></SvgRoot>;
});
export default IconHourglass;
