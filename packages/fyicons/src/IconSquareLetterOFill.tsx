import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSquareLetterOFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSquareLetterOFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="square-letter-o-fill"><path fill="currentColor" d="M11.5 2A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2zM8 4.875c-.974 0-1.712.42-2.193 1.037-.47.603-.682 1.373-.682 2.088s.212 1.485.682 2.088c.481.618 1.219 1.037 2.193 1.037s1.712-.42 2.193-1.037c.47-.603.682-1.373.682-2.088s-.212-1.485-.682-2.088C9.712 5.294 8.974 4.875 8 4.875m0 1c.655 0 1.106.27 1.404.652.31.398.471.94.471 1.473 0 .532-.16 1.075-.47 1.473-.3.383-.75.652-1.405.652s-1.106-.27-1.404-.652c-.31-.398-.471-.94-.471-1.473 0-.532.16-1.075.47-1.473.3-.383.75-.652 1.405-.652" />{props.children}</SvgRoot>;
});
export default IconSquareLetterOFill;
