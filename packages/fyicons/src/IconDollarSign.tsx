import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconDollarSign = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconDollarSign(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="dollar-sign"><path fill="currentColor" d="M7.5 1a.5.5 0 0 1 .5.5v1.286a5.07 5.07 0 0 1 2.782 1.277.501.501 0 0 1-.672.742c-.905-.82-2.062-1.14-3.043-1.036-.988.104-1.707.614-1.927 1.364-.083.283-.07.515 0 .712.072.201.217.402.451.594.48.394 1.272.702 2.274.876 1.155.201 2.077.48 2.718.933.682.482 1.02 1.144 1.037 1.991.03 1.538-1.327 2.969-3.62 3.009V14.5a.5.5 0 0 1-1 0v-1.331c-1.032-.19-1.74-.692-2.206-1.21a3.9 3.9 0 0 1-.73-1.187l-.031-.091-.01-.029-.001-.008-.002-.004v-.002a.5.5 0 0 1 .96-.276v-.002l.004.01q.004.016.017.052.027.073.092.21c.088.179.23.42.445.659.421.468 1.14.959 2.362.959 1.941 0 2.737-1.128 2.72-1.991-.01-.543-.203-.904-.615-1.196-.452-.32-1.188-.567-2.311-.762-1.08-.188-2.067-.54-2.737-1.09-.34-.278-.612-.62-.758-1.03a2.1 2.1 0 0 1-.019-1.328c.369-1.258 1.53-1.947 2.782-2.079q.02 0 .037-.003V1.5a.5.5 0 0 1 .5-.5" />{props.children}</SvgRoot>;
});
export default IconDollarSign;
