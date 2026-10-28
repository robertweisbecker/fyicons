import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconWalletCards = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconWalletCards(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="wallet-cards"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M1.5 8.5V7A1.5 1.5 0 0 1 3 5.5h10A1.5 1.5 0 0 1 14.5 7v1.5" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M1.5 7.5V4A1.5 1.5 0 0 1 3 2.5h10A1.5 1.5 0 0 1 14.5 4v3.5" /><path fill="currentColor" d="m6.27 8.5.494.07A.5.5 0 0 0 6.27 8zm3.46 0V8a.5.5 0 0 0-.494.57zm4.77 0h.5a.5.5 0 0 0-.5-.5zm0 3.5h.5zM3 13.5v.5zM1.5 12H1zm0-3.5V8a.5.5 0 0 0-.5.5zm4.77 0-.495-.07a2 2 0 0 0-.025.32h1q0-.081.014-.18zm-.02.25h-.5A2.25 2.25 0 0 0 8 11v-1c-.69 0-1.25-.56-1.25-1.25zM8 10.5v.5a2.25 2.25 0 0 0 2.25-2.25h-1C9.25 9.44 8.69 10 8 10zm1.75-1.75h.5q-.001-.174-.025-.32l-.495.07-.494.07q.014.099.014.18zm-.02-.25V9h4.77V8H9.73zm4.77 0H14V12h1V8.5zm0 3.5H14a1 1 0 0 1-1 1v1a2 2 0 0 0 2-2zM13 13.5V13H3v1h10zm-10 0V13a1 1 0 0 1-1-1H1a2 2 0 0 0 2 2zM1.5 12H2V8.5H1V12zm0-3.5V9h4.77V8H1.5z" /></SvgRoot>;
});
export default IconWalletCards;
