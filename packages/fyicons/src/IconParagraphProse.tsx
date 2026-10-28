import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconParagraphProse = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconParagraphProse(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="paragraph-prose"><path fill="currentColor" d="M6.5 12a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1zm2-3a.5.5 0 0 1 0 1h-6a.5.5 0 0 1 0-1zm5 0a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1zm-7-3a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1zm7 0a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zm-4-3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1zm4 0a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconParagraphProse;
