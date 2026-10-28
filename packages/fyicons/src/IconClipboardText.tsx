import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconClipboardText = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconClipboardText(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="clipboard-text"><path fill="currentColor" d="M8.99 1A1.01 1.01 0 0 1 10 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h1c.005-.553.455-1 1.01-1zM5 3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-.346c.224.372.346.8.346 1.241V4.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-.259c0-.44.122-.869.346-1.241zm4.5 7a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1zm0-3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1zM7.006 2.001l-.003.002L7 2.006v.004c0 .38-.142.746-.398 1.026l-.233.254a1.4 1.4 0 0 0-.348.71H9.98a1.4 1.4 0 0 0-.348-.71l-.233-.254A1.52 1.52 0 0 1 9 2.01l-.001-.004-.002-.003L8.994 2H7.01z" /></SvgRoot>;
});
export default IconClipboardText;
