import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCodeBlock = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCodeBlock(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="code-block"><path fill="currentColor" d="M12 2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.5a.5.5 0 1 1 1 0V12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-1.5a.5.5 0 0 1 0-1zm-6.395-.99a.5.5 0 0 1 .392.588l-1 5a.5.5 0 0 1-.98-.195l1-5a.5.5 0 0 1 .588-.393M2.154 2.147a.5.5 0 0 1 .707.707L1.714 4l1.147 1.147a.5.5 0 0 1-.707.707l-1.5-1.5a.5.5 0 0 1 0-.707zm5 0a.5.5 0 0 1 .707 0l1.5 1.5a.5.5 0 0 1 0 .707l-1.5 1.5a.5.5 0 0 1-.707-.707L8.3 4 7.154 2.854a.5.5 0 0 1 0-.707" /></SvgRoot>;
});
export default IconCodeBlock;
