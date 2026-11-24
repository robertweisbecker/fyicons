import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCloudSimple = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCloudSimple(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="cloud-simple"><path fill="currentColor" d="M8 3a4 4 0 0 1 4 4 3 3 0 0 1 0 6H4.487l-.154-.004H4.32v-.001a3.5 3.5 0 0 1-.198-6.975A4 4 0 0 1 8 3m0 1a3 3 0 0 0-2.969 2.57.5.5 0 0 1-.495.43H4.5a2.5 2.5 0 0 0-.138 4.996l.15.004H12a2 2 0 0 0 0-4h-.5a.5.5 0 0 1-.5-.5V7a3 3 0 0 0-3-3" />{props.children}</SvgRoot>;
});
export default IconCloudSimple;
