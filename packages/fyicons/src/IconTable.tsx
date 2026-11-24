import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconTable = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconTable(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="table"><path fill="currentColor" d="M13 3a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-6 9h6a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H7zM3 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3V4z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M1.5 6.5h13m-13 3h13" />{props.children}</SvgRoot>;
});
export default IconTable;
