import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFont = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFont(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M14.5 7a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0v-.444c0-.075-.103-.106-.148-.045-.457.607-1.117.989-1.853.989-1.38 0-2.5-1.344-2.5-3 0-1.657 1.12-3 2.5-3 .736 0 1.396.382 1.853.989.045.06.147.03.147-.046V7.5a.5.5 0 0 1 .5-.5M4.348 3.347a.752.752 0 0 1 1.302 0l.052.116 3.266 8.856a.5.5 0 0 1-.938.346l-.993-2.693H2.96l-.992 2.693a.5.5 0 1 1-.937-.346l3.265-8.856zm7.817 4.744c-.92 0-1.667.855-1.667 1.909s.747 1.909 1.667 1.909 1.667-.855 1.667-1.91c0-1.053-.747-1.908-1.667-1.908m-8.837.881h3.34L5 4.443z" /></SvgRoot>;
});
export default IconFont;
