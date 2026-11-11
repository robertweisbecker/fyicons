import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBookRepository = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBookRepository(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="book-repository"><path fill="currentColor" d="M8 15.397a.25.25 0 0 1-.427.176L6 14l-1.573 1.573A.25.25 0 0 1 4 15.396V12.25a.25.25 0 0 1 .25-.25H8zM13.5 13a.5.5 0 0 1 0 1H9v-1zM12 2a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H4a1 1 0 0 0-1 1v1.73c-.597-.347-1-.99-1-1.73V4a2 2 0 0 1 2-2zM4 3a1 1 0 0 0-1 1v6.27A2 2 0 0 1 4 10h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z" /><path stroke="currentColor" strokeLinejoin="round" d="M13 13.5a1.5 1.5 0 0 1-1.5-1.5v-1.5" /><path stroke="currentColor" strokeLinecap="round" d="M5.5 10.5v-8" /></SvgRoot>;
});
export default IconBookRepository;
