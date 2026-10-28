import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconError = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconError(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M10.086 1a1.5 1.5 0 0 1 1.06.44l3.414 3.414a1.5 1.5 0 0 1 .44 1.06v4.172c0 .398-.158.78-.44 1.061l-3.414 3.414c-.28.281-.662.44-1.06.44H5.914a1.5 1.5 0 0 1-1.06-.44l-3.415-3.414A1.5 1.5 0 0 1 1 10.087V5.914c0-.398.158-.78.44-1.061L4.853 1.44A1.5 1.5 0 0 1 5.914 1zM5.914 2a.5.5 0 0 0-.353.147L2.146 5.561A.5.5 0 0 0 2 5.915v4.171c0 .133.053.26.146.354l3.415 3.414a.5.5 0 0 0 .353.147h4.172c.132 0 .26-.053.354-.147l3.414-3.414a.5.5 0 0 0 .146-.354V5.915a.5.5 0 0 0-.146-.354L10.44 2.147A.5.5 0 0 0 10.086 2zM8 10a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0-5.875a.64.64 0 0 1 .452.183.6.6 0 0 1 .173.442l-.006.188-.113 3.375L8.5 8.5a.504.504 0 0 1-.5.484.504.504 0 0 1-.5-.483l-.006-.188-.113-3.375-.006-.188a.6.6 0 0 1 .173-.442A.64.64 0 0 1 8 4.125" /></SvgRoot>;
});
export default IconError;
