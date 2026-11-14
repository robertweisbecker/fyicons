import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBluetooth = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBluetooth(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="bluetooth"><path fill="currentColor" d="M7 2.5c0-.465.428-.68.8-.4l4 3c.311.233.295.617-.035.823L8.832 7.757c-.187.117-.411.175-.633.236.222.065.444.13.633.249q1.467.916 2.933 1.834c.33.206.346.59.035.824l-4 3c-.372.279-.8.065-.8-.4V9.333c0-.21.056-.42.114-.628a2 2 0 0 1-.416.385q-.621.39-1.243.777l-1.69 1.056a.5.5 0 1 1-.53-.847l1.69-1.057 1.243-.777c.2-.125.44-.184.676-.25-.235-.062-.48-.111-.676-.235L4.926 6.98l-1.69-1.057a.501.501 0 0 1 .152-.91.5.5 0 0 1 .377.063l1.69 1.056q.621.39 1.243.777c.162.101.293.254.422.407C7.06 7.1 7 6.883 7 6.666zm.89 6.224c.056.203.11.406.11.609v3.166l2.616-1.962L8.302 9.09a2 2 0 0 1-.412-.366M8 6.667c0 .209-.057.418-.115.627a2 2 0 0 1 .417-.385l2.314-1.447L8 3.5z" />{props.children}</SvgRoot>;
});
export default IconBluetooth;
