import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconScales = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconScales(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="scales"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8 5.5v6.75" /><path fill="currentColor" d="M10.32 8.125c-.162 0-.277.151-.215.302.23.559.885 1.698 2.395 1.698s2.165-1.14 2.395-1.698c.062-.15-.053-.302-.215-.302z" /><rect width={0.75} height={0.75} x={11.125} y={7} fill="currentColor" rx={0.375} /><rect width={0.75} height={0.75} x={12.125} y={6.25} fill="currentColor" rx={0.375} /><rect width={0.75} height={0.75} x={13.125} y={7} fill="currentColor" rx={0.375} /><rect width={2} height={2} x={7} y={3.5} stroke="currentColor" rx={1} /><path fill="currentColor" d="M1.32 8.125c-.162 0-.277.151-.215.302.23.559.885 1.698 2.395 1.698s2.165-1.14 2.395-1.698c.062-.15-.053-.302-.215-.302z" /><rect width={0.75} height={0.75} x={2.125} y={7} fill="currentColor" rx={0.375} /><rect width={0.75} height={0.75} x={4.125} y={7} fill="currentColor" rx={0.375} /><rect width={0.75} height={0.75} x={3.125} y={6.25} fill="currentColor" rx={0.375} /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5a1.524 1.524 0 0 1-1.98.945L9 4.5m-6.5 0a1.524 1.524 0 0 0 1.98.945L7 4.5m1.5 8h-1" />{props.children}</SvgRoot>;
});
export default IconScales;
