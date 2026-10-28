import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconMarkdown = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconMarkdown(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="markdown"><path fill="currentColor" d="M13.25 3c.966 0 1.75.784 1.75 1.75v6.5A1.75 1.75 0 0 1 13.25 13H2.75A1.75 1.75 0 0 1 1 11.25v-6.5A1.75 1.75 0 0 1 2.75 3zM2.75 4a.75.75 0 0 0-.75.75v6.5c0 .415.336.75.75.75h10.5a.75.75 0 0 0 .75-.75v-6.5a.75.75 0 0 0-.75-.75zm8.499 1.5a.5.5 0 0 1 .5.5v2.5h1.097a.25.25 0 0 1 .167.435L11.164 10.6a.25.25 0 0 1-.334 0L8.981 8.935a.25.25 0 0 1 .167-.435h1.1V6a.5.5 0 0 1 .5-.5zm-4.134.18A.5.5 0 0 1 8 6v4a.5.5 0 1 1-1 0V7.383L5.885 8.727a.5.5 0 0 1-.77 0L4 7.383V10a.5.5 0 1 1-1 0V6a.5.5 0 0 1 .885-.32L5.5 7.625z" /></SvgRoot>;
});
export default IconMarkdown;
