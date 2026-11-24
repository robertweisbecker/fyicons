import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBookWideOpen = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBookWideOpen(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="book-wide-open"><path fill="currentColor" d="M7.999 3.621c.987-1.398 2.829-2.036 4.507-1.405 1.5.564 2.494 2 2.494 3.603v6.369a.718.718 0 0 1-1.244.487 2.975 2.975 0 0 0-4.423.061l-.957 1.093-.01.008-.028.028-.009.011-.014.009-.026.02q-.015.011-.031.02l-.025.015q-.01.007-.023.012l-.042.017-.025.008a.5.5 0 0 1-.1.02h-.022L8 14l-.021-.003-.029-.002q-.015 0-.028-.004l-.034-.005-.032-.008-.032-.011-.033-.015a.4.4 0 0 1-.106-.066l-.014-.01-.012-.012-.024-.025-.011-.01-.957-1.093a2.975 2.975 0 0 0-4.423-.061A.718.718 0 0 1 1 12.188v-6.37a3.85 3.85 0 0 1 2.494-3.602C5.172 1.585 7.012 2.224 8 3.621m-.5 1.163C6.922 3.348 5.292 2.61 3.846 3.153A2.85 2.85 0 0 0 2 5.819v5.727a3.98 3.98 0 0 1 5.42.532l.08.091zm4.654-1.631c-1.446-.545-3.075.195-3.654 1.631v7.385l.08-.09a3.977 3.977 0 0 1 5.42-.533V5.82a2.85 2.85 0 0 0-1.846-2.666" />{props.children}</SvgRoot>;
});
export default IconBookWideOpen;
