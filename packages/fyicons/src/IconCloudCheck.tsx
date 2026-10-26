import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCloudCheck = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCloudCheck(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M6.5 3c.866 0 1.656.317 2.266.836.03.026.073.036.111.026q.418-.11.873-.112a3.5 3.5 0 0 1 3.5 3.5c0 .289-.038.569-.104.836A2.5 2.5 0 0 1 12.5 13H4a3 3 0 0 1-.937-5.85A3.5 3.5 0 0 1 3 6.5 3.5 3.5 0 0 1 6.5 3m0 1a2.5 2.5 0 0 0-2.349 3.35.5.5 0 0 1-.406.666A2 2 0 0 0 4 12h8.5a1.5 1.5 0 0 0 0-3h-.025a.5.5 0 0 1-.454-.71 2.5 2.5 0 0 0-2.892-3.46 1.13 1.13 0 0 1-1.01-.232A2.48 2.48 0 0 0 6.5 4m2.574 2.989a.5.5 0 0 1 .852.523l-2 3.25a.5.5 0 0 1-.81.059l-1.25-1.5a.5.5 0 0 1 .768-.64l.804.965z" /></SvgRoot>;
});
export default IconCloudCheck;
