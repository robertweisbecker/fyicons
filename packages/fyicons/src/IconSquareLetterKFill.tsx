import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSquareLetterKFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSquareLetterKFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="square-letter-k-fill"><path fill="currentColor" d="M11.5 2A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2zm-5 3a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0V9.195l.804-.865 1.792 2.464a.5.5 0 1 0 .808-.588L8.496 7.583l1.62-1.743a.5.5 0 1 0-.732-.68L7 7.727V5.5a.5.5 0 0 0-.5-.5" />{props.children}</SvgRoot>;
});
export default IconSquareLetterKFill;
