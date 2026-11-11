import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPageAdd = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPageAdd(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="page-add"><g fill="currentColor" clipPath={"url(#" + idPrefix + "clip0_1546_2398)"}><path d="M11 1a2 2 0 0 1 2 2v6.5h-1V3a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h6.5v1H5a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zM8.5 7a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1zm2-3a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1z" /><path d="M12.5 9a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m0 1.5a.5.5 0 0 0-.5.5v.995h-1a.5.5 0 0 0 0 1h1V14a.5.5 0 0 0 1 0v-1.005h1a.5.5 0 0 0 0-1h-1V11a.5.5 0 0 0-.5-.5" /></g><defs><clipPath id={idPrefix + "clip0_1546_2398"}><path fill="white" d="M0 0h16v16H0z" /></clipPath></defs></SvgRoot>;
});
export default IconPageAdd;
