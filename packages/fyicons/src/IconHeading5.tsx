import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHeading5 = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHeading5(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M14.5 9a.5.5 0 0 1 0 1h-2.303l-.12 1.074A5.6 5.6 0 0 1 13 11l.148.005a2.13 2.13 0 0 1 1.965 2.342 2.125 2.125 0 0 1-4.174.293.5.5 0 0 1 .97-.242 1.127 1.127 0 0 0 1.978.42 1.126 1.126 0 0 0-.73-1.807L13 12a4.2 4.2 0 0 0-1.004.11 2 2 0 0 0-.272.087h-.001l-.019.007-.07.026q-.022.006-.045.01l-.052.007h-.043q-.024.002-.05 0l-.009-.002-.013-.003a.5.5 0 0 1-.313-.18q-.018-.025-.034-.052l-.02-.033-.002-.003-.012-.03q-.013-.03-.022-.06-.007-.023-.01-.048a.5.5 0 0 1-.006-.133v-.009l.25-2.25.02-.091A.5.5 0 0 1 11.75 9zm-9-7a.5.5 0 0 1 0 1H5v3h5V3h-.5a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1H11v5.5a.5.5 0 0 1-1 0V7H5v4h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H4V3h-.5a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconHeading5;
