import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconNote = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconNote(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="note"><path fill="currentColor" d="M11 1a2 2 0 0 1 2 2v6.879a2 2 0 0 1-.586 1.414l-3.121 3.121A2 2 0 0 1 7.879 15H5a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zM5 2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h2.879q.06 0 .121-.009V11.5A1.5 1.5 0 0 1 9.5 10h2a.5.5 0 0 0 .5-.5V3a1 1 0 0 0-1-1zm4.5 9a.5.5 0 0 0-.5.5v1.793L11.293 11zm-.4-3.8a.5.5 0 0 1 .8.6l-.2.266a1.52 1.52 0 0 1-1.993.397.52.52 0 0 0-.72.193l-.051.09a.5.5 0 1 1-.872-.491l.05-.089a1.52 1.52 0 0 1 2.103-.563.52.52 0 0 0 .682-.136zM10.5 4a.5.5 0 0 1 0 1h-.448a1.85 1.85 0 0 0-.822.194l-.976.489a1.32 1.32 0 0 1-1.526-.248.32.32 0 0 0-.456 0l-.418.419a.5.5 0 1 1-.708-.708l.42-.418a1.32 1.32 0 0 1 1.869 0 .32.32 0 0 0 .372.06l.976-.488c.394-.197.828-.3 1.269-.3z" /></SvgRoot>;
});
export default IconNote;
