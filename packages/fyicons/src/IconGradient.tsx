import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconGradient = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconGradient(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M11 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zM5 2a1 1 0 0 0-1 1v8h1v1H4v1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v-1h1v-1h-1v1h-1v-1h1v-1h1V3a1 1 0 0 0-1-1zm6 12a1 1 0 0 0 1-1h-1zm-5-1H5v-1h1zm2 0H7v-1h1zm2 0H9v-1h1zm-3-1H6v-1h1zm2 0H8v-1h1zm-3-1H5v-1h1zm2 0H7v-1h1zm2 0H9v-1h1zM4.875 9.875h-.75v-.75h.75zm2 0h-.75v-.75h.75zm2 0h-.75v-.75h.75zm2 0h-.75v-.75h.75zm-5-1h-.75v-.75h.75zm2 0h-.75v-.75h.75zm2 0h-.75v-.75h.75zm2 0h-.75v-.75h.75zm-7-1h-.75v-.75h.75zm2 0h-.75v-.75h.75zm2 0h-.75v-.75h.75zm2 0h-.75v-.75h.75zM5.75 6.75h-.5v-.5h.5zm2 0h-.5v-.5h.5zm2 0h-.5v-.5h.5zm2 0h-.5v-.5h.5zm-7-1h-.5v-.5h.5zm2 0h-.5v-.5h.5zm2 0h-.5v-.5h.5zm2 0h-.5v-.5h.5zm-5-1h-.5v-.5h.5zm2 0h-.5v-.5h.5zm2 0h-.5v-.5h.5zm2 0h-.5v-.5h.5z" /></SvgRoot>;
});
export default IconGradient;
