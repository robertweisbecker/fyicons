import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconNumbersTilt = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconNumbersTilt(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="numbers-tilt"><path fill="currentColor" d="M12 6.915c1.043 0 2.003.736 2.003 1.793 0 .528-.24.976-.61 1.292.37.316.61.765.61 1.293 0 1.056-.96 1.792-2.003 1.792-.706 0-1.376-.325-1.743-.866a.5.5 0 1 1 .826-.561c.158.232.499.427.917.427.634 0 1.003-.421 1.003-.792S12.633 10.5 12 10.5a.5.5 0 0 1-.1-.99l.1-.01.115-.005c.563-.048.888-.44.888-.787 0-.371-.37-.793-1.003-.793-.418 0-.76.195-.917.428a.5.5 0 0 1-.826-.563c.367-.54 1.038-.865 1.743-.865M7.405 5A1.85 1.85 0 0 1 9.09 7.613c-.319.7-1.002 1.081-1.602 1.268-.307.095-.616.251-.844.496A1.4 1.4 0 0 0 6.31 10h2.44a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5c0-.787.263-1.38.661-1.806.387-.415.874-.642 1.28-.768.477-.149.838-.4.987-.726A.85.85 0 0 0 7.405 6H7.34c-.478 0-.915.27-1.129.698l-.013.025a.5.5 0 0 1-.894-.447l.012-.025A2.26 2.26 0 0 1 7.34 5zM3.223 3.085A.5.5 0 0 1 4 3.5v5a.5.5 0 0 1-1 0V4.434l-.723.483a.5.5 0 0 1-.554-.832z" /></SvgRoot>;
});
export default IconNumbersTilt;
