import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCampfire = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCampfire(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="campfire"><path stroke="currentColor" strokeLinejoin="round" d="M9.929 5.25 11.5 3.5l.823 2.47a3.44 3.44 0 0 1-2.768 4.493 3 3 0 0 0-.706-1.957L8 7.5l-.849 1.006a3 3 0 0 0-.707 1.96 3.426 3.426 0 0 1-2.756-4.509L4.536 3.5l1.535 1.75L8 1.5z" /><path stroke="currentColor" strokeLinecap="round" d="M12.5 12.5h-9m7 2-2.5-2m-2.5 2 2.5-2" />{props.children}</SvgRoot>;
});
export default IconCampfire;
