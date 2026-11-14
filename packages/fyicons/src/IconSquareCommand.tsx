import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSquareCommand = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSquareCommand(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="square-command"><path fill="currentColor" d="M11.5 2A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2zm-7 1A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3z" /><path fill="currentColor" d="M10.5 4a1.5 1.5 0 0 1 0 3H10v2h.5A1.5 1.5 0 1 1 9 10.5V10H7v.5A1.5 1.5 0 1 1 5.5 9H6V7h-.5A1.5 1.5 0 1 1 7 5.5V6h2v-.5A1.5 1.5 0 0 1 10.5 4m-5 6a.5.5 0 1 0 .5.5V10zm4.5.5a.5.5 0 1 0 .5-.5H10zM7 9h2V7H7zM5.5 5a.5.5 0 0 0 0 1H6v-.5a.5.5 0 0 0-.5-.5m5 0a.5.5 0 0 0-.5.5V6h.5a.5.5 0 0 0 0-1" />{props.children}</SvgRoot>;
});
export default IconSquareCommand;
