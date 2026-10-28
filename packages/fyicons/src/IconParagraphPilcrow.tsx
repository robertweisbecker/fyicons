import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconParagraphPilcrow = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconParagraphPilcrow(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="paragraph-pilcrow"><path fill="currentColor" d="M12.5 12a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zm0-3a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zm-5-7a.5.5 0 0 1 0 1H7v3.5a.5.5 0 0 1-1 0V3h-.999v3.5a.5.5 0 0 1-1 0V5h-.5a1.5 1.5 0 1 1 0-3zm5 4a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1zm0-3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconParagraphPilcrow;
