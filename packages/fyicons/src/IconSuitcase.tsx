import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSuitcase = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSuitcase(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="suitcase"><path fill="currentColor" d="M9.5 2A1.5 1.5 0 0 1 11 3.5V4h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v-.5A1.5 1.5 0 0 1 6.5 2zM4 5a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1V5zm7 8h1a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-1zm-5 0h4V5H6zm.5-10a.5.5 0 0 0-.5.5V4h4v-.5a.5.5 0 0 0-.5-.5z" />{props.children}</SvgRoot>;
});
export default IconSuitcase;
