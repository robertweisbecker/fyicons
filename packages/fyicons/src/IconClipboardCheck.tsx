import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconClipboardCheck = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconClipboardCheck(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="clipboard-check"><path fill="currentColor" d="M8.5 1c.653 0 1.206.418 1.412 1H11a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h1.087A1.5 1.5 0 0 1 7.5 1zM5 3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-.308c.196.31.308.674.308 1.058V4.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-.442c0-.384.112-.748.308-1.058zm4.696 4.243a.5.5 0 0 1 .858.514l-2.4 4a.5.5 0 0 1-.796.083l-1.85-2a.5.5 0 0 1 .734-.68l1.397 1.51zM7.5 2a.5.5 0 0 0-.5.5v.513l-.338.116A.98.98 0 0 0 6.005 4h3.99a.98.98 0 0 0-.657-.871L9 3.013V2.5a.5.5 0 0 0-.5-.5z" />{props.children}</SvgRoot>;
});
export default IconClipboardCheck;
