import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHandGrabbing = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHandGrabbing(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8.653 3.008a1.5 1.5 0 0 1 1.293 1.1 1.497 1.497 0 0 1 2.002.996A1.5 1.5 0 0 1 14 6.5v4A4.5 4.5 0 0 1 9.5 15H7.534a3.92 3.92 0 0 1-3.357-1.9L3.11 11.325l-.003-.006c-.314-.538-.438-1.193-.406-1.816.033-.623.225-1.26.596-1.756.37-.493.9-.796 1.307-.974.143-.062.279-.111.395-.15V5.5a1.5 1.5 0 0 1 2.053-1.394A1.5 1.5 0 0 1 8.499 3zM8.499 4a.5.5 0 0 0-.5.495L8 4.5v3a.5.5 0 0 1-1 0v-2a.5.5 0 0 0-1 0v2.566q0 .246-.06.484l-.204.821a.5.5 0 0 1-.971-.242l.205-.821A1 1 0 0 0 5 8.066v-.375c-.336.147-.683.362-.902.655-.229.306-.373.74-.398 1.209-.024.465.072.916.267 1.254l1.067 1.776A2.92 2.92 0 0 0 7.534 14H9.5a3.5 3.5 0 0 0 3.5-3.5v-4a.5.5 0 0 0-1-.031v-.001V7.5a.5.5 0 1 1-1 0V6.25l.003-.03V5.5a.5.5 0 0 0-1 0v1.09L10 6.588V7.5a.5.5 0 1 1-1 0v-3a.5.5 0 0 0-.4-.49z" /></SvgRoot>;
});
export default IconHandGrabbing;
