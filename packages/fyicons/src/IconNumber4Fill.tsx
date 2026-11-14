import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconNumber4Fill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconNumber4Fill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="number4-fill"><path fill="currentColor" d="M11.5 2A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2zM9.88 5.693c0-.658-.772-.978-1.238-.57l-.09.092L5.705 8.65a.75.75 0 0 0 .578 1.229H8.88v.62a.5.5 0 0 0 1 0v-.62h.62a.5.5 0 0 0 0-1h-.62zm-1 3.187H6.813L8.88 6.386z" />{props.children}</SvgRoot>;
});
export default IconNumber4Fill;
