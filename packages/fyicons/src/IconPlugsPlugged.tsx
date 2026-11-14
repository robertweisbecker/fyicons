import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPlugsPlugged = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPlugsPlugged(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="plugs-plugged"><path fill="currentColor" d="m15.209 1.501-2.57 2.568c.18.415.147.904-.115 1.298l-.286.43a.8.8 0 0 0-.112.646 3.12 3.12 0 0 1-.82 2.96l-.6.597a1 1 0 0 1-.448.258 1 1 0 0 1-.258.45l-.598.598a3.12 3.12 0 0 1-2.962.82.8.8 0 0 0-.645.111l-.43.287a1.36 1.36 0 0 1-1.295.116L1.5 15.21l-.708-.708 2.57-2.57a1.36 1.36 0 0 1 .113-1.298l.287-.43a.8.8 0 0 0 .112-.645 3.12 3.12 0 0 1 .82-2.961l.6-.597a1 1 0 0 1 .447-.259A1 1 0 0 1 6 5.294l.597-.599a3.12 3.12 0 0 1 2.962-.819.8.8 0 0 0 .645-.112l.43-.285a1.36 1.36 0 0 1 1.297-.117l2.57-2.568zM5.402 7.305a2.12 2.12 0 0 0-.558 2.012 1.8 1.8 0 0 1-.25 1.442l-.286.43a.363.363 0 0 0 .502.502l.43-.286a1.8 1.8 0 0 1 1.443-.25 2.12 2.12 0 0 0 2.012-.556L9.292 10 6 6.708zm6.245-2.95a.36.36 0 0 0-.457-.045l-.43.286a1.8 1.8 0 0 1-1.443.25 2.12 2.12 0 0 0-2.012.556l-.597.6L10 9.292l.598-.597a2.12 2.12 0 0 0 .558-2.011 1.8 1.8 0 0 1 .25-1.443l.286-.43a.36.36 0 0 0-.045-.456" />{props.children}</SvgRoot>;
});
export default IconPlugsPlugged;
