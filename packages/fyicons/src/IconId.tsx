import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconId = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconId(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="id"><path fill="currentColor" d="M12 2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM4 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm2.5 3a.5.5 0 0 1 0 1H6v3h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H5V7h-.5a.5.5 0 0 1 0-1zm3.474.006c1.3.03 2.028 1.245 2.027 2.594 0 1.189-.81 2.363-2.026 2.394-.272.007-.645.007-.945.005-.15 0-.285-.002-.382-.003l-.113-.002h-.042a.5.5 0 0 1-.493-.5V6.506a.5.5 0 0 1 .493-.5h.003l.009-.001h.03l.114-.001L9.03 6c.3-.002.672-.001.944.005M9 9.998l.036.001c.3.002.658.002.913-.005.505-.013 1.051-.561 1.052-1.395 0-1.083-.535-1.582-1.05-1.594A37 37 0 0 0 9.035 7H9z" /></SvgRoot>;
});
export default IconId;
