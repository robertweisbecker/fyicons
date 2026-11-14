import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBookWideOpen = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBookWideOpen(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="book-wide-open"><path fill="currentColor" d="M7.999 3.62c.987-1.397 2.829-2.036 4.507-1.404 1.5.564 2.494 2 2.494 3.602v6.37a.718.718 0 0 1-1.244.487 2.975 2.975 0 0 0-4.423.061l-.957 1.093-.009.008-.03.029-.008.01-.014.008-.023.02-.055.033q-.015.01-.033.018l-.035.014-.024.007a.4.4 0 0 1-.097.02l-.03.002L8 14l-.02-.002-.029-.002-.028-.004-.067-.015-.03-.01-.031-.012-.031-.016-.022-.013-.035-.023-.022-.018-.014-.01-.01-.011-.027-.026-.01-.01-.957-1.092a2.975 2.975 0 0 0-4.423-.061A.718.718 0 0 1 1 12.187V5.818a3.85 3.85 0 0 1 2.494-3.602C5.172 1.585 7.012 2.224 8 3.62m-.5 1.165c-.579-1.437-2.208-2.176-3.654-1.632A2.85 2.85 0 0 0 2 5.818v5.728a3.98 3.98 0 0 1 5.42.532l.08.09zm4.654-1.632c-1.446-.544-3.075.195-3.654 1.632v7.385l.08-.091a3.98 3.98 0 0 1 5.42-.532V5.818a2.85 2.85 0 0 0-1.846-2.666" />{props.children}</SvgRoot>;
});
export default IconBookWideOpen;
