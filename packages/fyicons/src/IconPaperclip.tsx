import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPaperclip = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPaperclip(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="paperclip"><path fill="currentColor" d="M8.5 1.06a2.44 2.44 0 0 1 2.44 2.44v8a3.44 3.44 0 0 1-6.88 0v-3a.44.44 0 0 1 .88 0v3a2.56 2.56 0 1 0 5.12 0v-8a1.56 1.56 0 1 0-3.12 0v8a.56.56 0 1 0 1.12 0v-6a.44.44 0 0 1 .88 0v6a1.44 1.44 0 0 1-2.88 0v-8A2.44 2.44 0 0 1 8.5 1.06" />{props.children}</SvgRoot>;
});
export default IconPaperclip;
