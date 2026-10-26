import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHeading3 = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHeading3(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M12.998 9a1.755 1.755 0 0 1 1.752 1.754 1.72 1.72 0 0 1-.456 1.144c.416.297.706.754.706 1.352 0 1.057-.903 1.88-2 1.88l-.164-.006c-.8-.056-1.318-.516-1.736-1.074a.5.5 0 0 1 .8-.6c.358.477.656.68 1.1.68.608 0 1-.437 1-.88 0-.38-.355-.75-.982-.75h-.268a.5.5 0 0 1 0-1h.258c.36-.008.74-.358.742-.754a.756.756 0 0 0-.748-.746c-.366.002-.67.138-.91.363a.5.5 0 1 1-.685-.726A2.3 2.3 0 0 1 12.998 9M5.5 2a.5.5 0 0 1 0 1H5v3h5V3h-.5a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1H11v5.5a.5.5 0 0 1-1 0V7H5v4h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H4V3h-.5a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconHeading3;
