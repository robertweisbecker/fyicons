import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFolderDashed = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFolderDashed(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M1.707 12c.228 0 .424.15.55.338.27.399.725.662 1.243.662a.5.5 0 0 1 0 1 2.5 2.5 0 0 1-2.236-1.38c-.152-.304.104-.62.443-.62M7.5 13a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm3 0a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1zm4-2a.5.5 0 0 1 .5.5 2.5 2.5 0 0 1-2.5 2.5.5.5 0 0 1 0-1 1.5 1.5 0 0 0 1.5-1.5.5.5 0 0 1 .5-.5m-13-2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5m13-1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5m-13-2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5m11-2A2.5 2.5 0 0 1 15 6.5a.5.5 0 0 1-1 0A1.5 1.5 0 0 0 12.5 5a.5.5 0 0 1 0-1m-9-2a.5.5 0 0 1 0 1A1.5 1.5 0 0 0 2 4.5a.5.5 0 0 1-1 0A2.5 2.5 0 0 1 3.5 2m7 2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zM5 2.62c0-.315.281-.562.575-.45.321.125.616.314.864.562l.415.414a.5.5 0 0 1-.708.708l-.414-.415a1.5 1.5 0 0 0-.342-.255C5.175 3.067 5 2.864 5 2.62" /></SvgRoot>;
});
export default IconFolderDashed;
