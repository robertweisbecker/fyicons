import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconMusicNote = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconMusicNote(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="music-note"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M13.5 9.5V2.593a1 1 0 0 0-1.287-.958l-6 1.795a1 1 0 0 0-.713.958V11.5" /><path stroke="currentColor" strokeLinecap="round" d="m13.5 4.25-8 2.25" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M5.5 10.5h-2a2 2 0 1 0 2 2zm8-2h-2a2 2 0 1 0 2 2z" />{props.children}</SvgRoot>;
});
export default IconMusicNote;
