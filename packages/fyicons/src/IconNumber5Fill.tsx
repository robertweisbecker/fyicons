import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconNumber5Fill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconNumber5Fill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="number5-fill"><path fill="currentColor" d="M11.5 2A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2zM6.833 5a.5.5 0 0 0-.474.342l-.021.09-.333 2.402.642.547 1.095-.339a1.126 1.126 0 0 1 .667 2.151l-.088.028a1.2 1.2 0 0 1-1.258-.353l-.188-.213a.5.5 0 1 0-.75.66l.188.214a2.2 2.2 0 0 0 2.305.647l.089-.028a2.126 2.126 0 0 0-1.26-4.061l-.344.105L7.269 6H9.5a.5.5 0 0 0 0-1z" />{props.children}</SvgRoot>;
});
export default IconNumber5Fill;
