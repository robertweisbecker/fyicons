import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconTags = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconTags(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M11.5 3A1.5 1.5 0 0 1 13 4.5V5h.5A1.5 1.5 0 0 1 15 6.5v5a1.5 1.5 0 0 1-1.5 1.5H5.914a1.5 1.5 0 0 1-1.06-.44l-1.708-1.707a.5.5 0 0 1-.086-.122 1.5 1.5 0 0 1-.206-.17L1.439 9.145A1.5 1.5 0 0 1 1 8.086V5.914c0-.398.158-.78.44-1.06l1.414-1.415c.28-.28.662-.439 1.06-.439zM13 9.5a1.5 1.5 0 0 1-1.5 1.5H4.707l.854.854a.5.5 0 0 0 .353.146H13.5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5H13zM3.914 4a.5.5 0 0 0-.353.146L2.146 5.561A.5.5 0 0 0 2 5.914v2.172a.5.5 0 0 0 .146.353l1.415 1.415a.5.5 0 0 0 .353.146H11.5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5zM5 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2" /></SvgRoot>;
});
export default IconTags;
