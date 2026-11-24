import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconDollarSign = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconDollarSign(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="dollar-sign"><path fill="currentColor" d="M7.5 1a.5.5 0 0 1 .5.5v1.286a5.07 5.07 0 0 1 2.782 1.277.501.501 0 0 1-.672.742A4.1 4.1 0 0 0 8 3.794V7.34c1.092.199 1.967.472 2.584.908.681.482 1.02 1.144 1.037 1.991.03 1.538-1.328 2.969-3.621 3.009V14.5a.5.5 0 0 1-1 0v-1.331c-1.032-.19-1.74-.692-2.206-1.21a3.9 3.9 0 0 1-.73-1.187l-.031-.091-.01-.029-.001-.008-.002-.004v-.002a.5.5 0 0 1 .961-.276v-.002l.003.01.017.052q.027.073.092.21c.088.179.23.42.446.659.304.34.766.689 1.46.857V8.15c-.802-.204-1.519-.51-2.041-.94-.34-.278-.613-.62-.76-1.03a2.1 2.1 0 0 1-.018-1.328c.369-1.258 1.53-1.947 2.782-2.079q.019 0 .038-.003V1.5a.5.5 0 0 1 .5-.5M8 12.246c1.869-.038 2.637-1.139 2.62-1.987-.01-.543-.203-.904-.615-1.196-.41-.29-1.053-.519-2.005-.705zM7 3.777c-.953.12-1.645.623-1.86 1.356-.083.283-.07.515 0 .712.072.201.217.402.451.594.331.272.813.5 1.409.675z" />{props.children}</SvgRoot>;
});
export default IconDollarSign;
