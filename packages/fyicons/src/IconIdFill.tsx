import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconIdFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconIdFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="id-fill"><path fill="currentColor" d="M12 2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM4.501 6a.5.5 0 0 0 0 1h.5v3h-.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-.5V7h.5a.5.5 0 0 0 0-1zm4.15.004h-.145l-.009.002h-.003a.5.5 0 0 0-.493.5v3.988a.5.5 0 0 0 .493.5h.042l.113.002.382.003c.3.002.673.002.945-.005C11.19 10.963 12 9.79 12.002 8.6c0-1.348-.728-2.564-2.027-2.594a38 38 0 0 0-1.325-.002M9.036 7c.299-.002.659-.002.914.004.516.012 1.051.512 1.051 1.594 0 .833-.547 1.382-1.052 1.395-.255.007-.614.007-.913.005L9 9.997V7.001z" /></SvgRoot>;
});
export default IconIdFill;
