import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFilmClapper = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFilmClapper(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="film-clapper"><path fill="currentColor" d="M9 6V2h2v4zM5 7.5v-4h2v4z" /><path stroke="currentColor" strokeLinecap="round" d="M2.5 8.5h11v4a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1z" /><path stroke="currentColor" d="m2.158 4.992 9.43-3.432a1 1 0 0 1 1.281.598l.57 1.568a1 1 0 0 1-.597 1.282L3.412 8.44a1 1 0 0 1-1.281-.598l-.57-1.568a1 1 0 0 1 .597-1.282Z" />{props.children}</SvgRoot>;
});
export default IconFilmClapper;
