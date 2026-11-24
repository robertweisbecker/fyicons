import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconQuoteBlock = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconQuoteBlock(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="quote-block"><path fill="currentColor" d="M12 2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5a.5.5 0 0 1 1 0V12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-1.5a.5.5 0 0 1 0-1zM1.098 3.136a1.5 1.5 0 0 1 2.897.777c-.182.678-.8 1.12-1.473 1.109q.042.096.095.19c.124.214.285.392.472.53.192.141.315.376.254.606-.069.255-.333.411-.574.304a3 3 0 0 1-1.671-3.516m4 0a1.5 1.5 0 0 1 2.897.777 1.5 1.5 0 0 1-1.473 1.11q.042.096.094.19c.124.213.286.391.473.529.192.141.315.376.254.606-.069.255-.333.411-.574.304a3 3 0 0 1-1.671-3.516" />{props.children}</SvgRoot>;
});
export default IconQuoteBlock;
