import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArchiveFull = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArchiveFull(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="archive-full"><path fill="currentColor" d="M10.001 7h-4a2 2 0 1 0 4 0" /><path stroke="currentColor" d="M5 13.5h6a2.5 2.5 0 0 0 2.5-2.5V6.5a1 1 0 0 0-1-1H3a.5.5 0 0 0-.5.5v5A2.5 2.5 0 0 0 5 13.5Z" /><path stroke="currentColor" d="m9.5 3 .41-.95a1 1 0 0 1 1.277-.536l1.71.656a1 1 0 0 1 .575 1.292l-.812 2.114" /><path stroke="currentColor" d="m10.847 5.5-.619-2.203a1.09 1.09 0 0 0-1.347-.756L4.297 3.829c-.581.164-.92.767-.756 1.347l.09.324" />{props.children}</SvgRoot>;
});
export default IconArchiveFull;
