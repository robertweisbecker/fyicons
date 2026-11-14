import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSeekBack30 = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSeekBack30(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="seek-back-30"><path fill="currentColor" d="M8.002 1a7.001 7.001 0 0 1 4.95 11.95.501.501 0 0 1-.708-.707A6 6 0 0 0 8.002 2a6 6 0 0 0-3.984 1.516l.92.921A.33.33 0 0 1 4.704 5H2.331a.33.33 0 0 1-.33-.33V2.296a.33.33 0 0 1 .563-.232l.745.743A7 7 0 0 1 8.002 1M3 6.916c1.043 0 2.003.736 2.003 1.793 0 .528-.24.976-.61 1.292.37.316.61.764.61 1.293 0 1.056-.96 1.791-2.003 1.791-.705 0-1.376-.324-1.743-.865a.5.5 0 0 1 .826-.561c.158.232.499.426.917.426.634 0 1.003-.42 1.003-.792 0-.37-.37-.792-1.003-.792a.5.5 0 0 1-.1-.99L3 9.5l.115-.005c.563-.048.888-.44.888-.787 0-.371-.37-.793-1.003-.793-.418 0-.76.195-.917.427a.5.5 0 0 1-.826-.562c.367-.54 1.038-.865 1.743-.865m5 .033c1.376 0 2.375 1.288 2.375 3.062s-1 3.063-2.375 3.063-2.375-1.289-2.375-3.063 1-3.06 2.375-3.06m0 1.1c-.525 0-1.275.519-1.275 1.962s.75 1.963 1.275 1.963 1.275-.52 1.275-1.963S8.525 8.048 8 8.048" />{props.children}</SvgRoot>;
});
export default IconSeekBack30;
