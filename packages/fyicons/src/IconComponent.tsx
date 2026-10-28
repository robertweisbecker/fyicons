import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconComponent = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconComponent(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="component"><path fill="currentColor" d="M7.655 9.146a.5.5 0 0 1 .707 0l2.514 2.513a.5.5 0 0 1 0 .707l-2.514 2.513-.078.064a.5.5 0 0 1-.55 0l-.079-.064-2.513-2.513a.5.5 0 0 1 0-.707zm-1.452 2.866 1.806 1.806 1.805-1.806-1.805-1.806zm5.451-6.869a.5.5 0 0 1 .705 0l2.516 2.504a.5.5 0 0 1 0 .708l-2.515 2.518a.5.5 0 0 1-.629.064l-.078-.064-2.51-2.52a.5.5 0 0 1 0-.706zm-7.998-.01a.5.5 0 0 1 .707 0l2.514 2.513a.5.5 0 0 1 0 .707l-2.514 2.514-.078.063a.5.5 0 0 1-.55 0l-.079-.063-2.513-2.514a.5.5 0 0 1 0-.707zm6.548 2.868 1.803 1.81 1.807-1.809-1.807-1.8zm-8-.002L4.01 9.805 5.815 8 4.01 6.194zm5.442-6.848a.5.5 0 0 1 .707 0l2.514 2.512a.5.5 0 0 1 0 .708L8.353 6.884l-.078.064a.5.5 0 0 1-.55 0l-.079-.064-2.512-2.513a.5.5 0 0 1 0-.708zM6.194 4.017 8 5.823l1.805-1.806L8 2.211z" /></SvgRoot>;
});
export default IconComponent;
