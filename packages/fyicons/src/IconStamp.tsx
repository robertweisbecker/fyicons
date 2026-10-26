import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconStamp = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconStamp(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8 1a2.25 2.25 0 0 1 1.77 3.637c-.186.238-.27.418-.27.57V6.5c0 .236-.056.458-.153.656.433.182.798.514 1.015.95L10.81 9h.691a2.5 2.5 0 0 1 2.5 2.5v1.002a.51.51 0 0 1-.498.498H13v1a1 1 0 0 1-.898.995L12 15H4a1 1 0 0 1-.995-.898L3 14v-1h-.502A.51.51 0 0 1 2 12.502V11.5A2.5 2.5 0 0 1 4.5 9h.691l.447-.895.067-.124a2 2 0 0 1 .947-.825A1.5 1.5 0 0 1 6.5 6.5V5.206c0-.15-.084-.332-.27-.57A2.25 2.25 0 0 1 8 1M4 14h8v-1H4zm3.427-6a1 1 0 0 0-.823.432l-.072.12L5.99 9.64a.65.65 0 0 1-.576.361H4.5A1.5 1.5 0 0 0 3 11.5v.5h10v-.5a1.5 1.5 0 0 0-1.5-1.5h-.914a.65.65 0 0 1-.576-.361l-.542-1.086a1 1 0 0 0-.754-.543L8.574 8zM8 2a1.25 1.25 0 0 0-.984 2.019c.216.276.484.684.484 1.187V6.5a.5.5 0 0 0 1 0V5.206c0-.503.268-.911.484-1.187A1.25 1.25 0 0 0 8 2" /></SvgRoot>;
});
export default IconStamp;
