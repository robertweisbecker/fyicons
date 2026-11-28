import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPictureInPicture = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPictureInPicture(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="picture-in-picture"><rect width={13} height={9} x={1.5} y={3.5} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" rx={1.5} /><path fill="currentColor" d="M13 10.5v-3a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />{props.children}</SvgRoot>;
});
export default IconPictureInPicture;
