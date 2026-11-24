import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconVolumeSpeaker = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconVolumeSpeaker(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="volume-speaker"><path fill="currentColor" d="M10.933 1.443c.81-.7 2.067-.124 2.067.946v11.223c0 1.07-1.258 1.645-2.067.946L6.814 11H3.5A1.5 1.5 0 0 1 2 9.5v-3A1.5 1.5 0 0 1 3.5 5h3.313zM12 2.389a.25.25 0 0 0-.413-.19l-4.26 3.68A.5.5 0 0 1 7 6H3.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5H7l.089.008a.5.5 0 0 1 .238.113l4.26 3.68a.25.25 0 0 0 .413-.19z" />{props.children}</SvgRoot>;
});
export default IconVolumeSpeaker;
