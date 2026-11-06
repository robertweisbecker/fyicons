import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconEmojiAddSimple = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconEmojiAddSimple(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="emoji-add-simple"><path fill="currentColor" d="M4.424 1.981a7 7 0 0 1 4.08-.962.5.5 0 1 1-.073.997 6 6 0 0 0-5.893 3.5 6.002 6.002 0 0 0 4.425 8.394 6.003 6.003 0 0 0 7.017-6.388.501.501 0 0 1 .997-.08 7 7 0 0 1-4.031 6.908 7.002 7.002 0 0 1-9.319-9.247A7 7 0 0 1 4.424 1.98m6.171 7.52a.501.501 0 0 1 .866.5 4 4 0 0 1-6.927 0 .5.5 0 0 1 .866-.5 3 3 0 0 0 4.098 1.098A3 3 0 0 0 10.595 9.5m-4.72-3.75c.483 0 .874.504.875 1.125C6.75 7.496 6.358 8 5.875 8S5 7.496 5 6.875c0-.62.392-1.125.875-1.125m4.25 0c.483 0 .874.504.874 1.125S10.609 8 10.125 8c-.482 0-.874-.504-.874-1.125 0-.62.392-1.125.874-1.125" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M13.5.5v4m2-2.005h-4" /></SvgRoot>;
});
export default IconEmojiAddSimple;
