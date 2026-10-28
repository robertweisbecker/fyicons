import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCursor = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCursor(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="cursor"><path fill="currentColor" d="M1.695 3.603c-.406-1.182.726-2.315 1.908-1.907l9.462 3.263c1.4.483 1.328 2.486-.102 2.868l-1.92.51 2.31 2.309c.7.7.744 1.81.131 2.561l-.132.146a1.914 1.914 0 0 1-2.706 0l-2.31-2.309-.51 1.92c-.37 1.385-2.261 1.496-2.818.23l-.05-.127zm1.581-.962a.5.5 0 0 0-.635.636l3.262 9.464.036.082c.207.379.801.33.92-.117l.735-2.757a.5.5 0 0 1 .837-.225l2.922 2.922a.914.914 0 0 0 1.293 0l.062-.07a.915.915 0 0 0-.062-1.223L9.724 8.43a.5.5 0 0 1 .224-.837l2.757-.734a.5.5 0 0 0 .034-.955z" /></SvgRoot>;
});
export default IconCursor;
