import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconMarker = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconMarker(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="marker"><path fill="currentColor" d="M12.248.89a2.621 2.621 0 0 1 2.106 4.463l-6.44 6.44A4.1 4.1 0 0 1 5.75 12.93l-.026.017-1.988.994c-1.074.537-2.215-.603-1.677-1.678l.994-1.987.016-.027a4.1 4.1 0 0 1 1.138-2.163L8.793 3.5l-.44-.44a.5.5 0 0 0-.707 0L5.854 4.853a.5.5 0 1 1-.708-.707L6.94 2.353a1.5 1.5 0 0 1 2.122 0l.438.439 1.146-1.146a2.7 2.7 0 0 1 .868-.575 2.6 2.6 0 0 1 .735-.18M2.953 12.71a.25.25 0 0 0 .336.336l1.208-.604a1 1 0 0 0-.94-.94zm1.961-3.917a3.12 3.12 0 0 0-.885 1.78 2 2 0 0 1 1.397 1.396c.67-.092 1.297-.4 1.781-.883L10.892 7.4l-.243-.484A3.5 3.5 0 0 0 9.084 5.35l-.485-.243zM12.5 1.879a1.63 1.63 0 0 0-1.146.474l-2.01 2.009.187.094a4.5 4.5 0 0 1 2.013 2.012l.093.187 2.01-2.009q.119-.119.207-.254A1.624 1.624 0 0 0 12.5 1.88" />{props.children}</SvgRoot>;
});
export default IconMarker;
