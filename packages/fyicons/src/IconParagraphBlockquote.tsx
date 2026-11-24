import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconParagraphBlockquote = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconParagraphBlockquote(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="paragraph-blockquote"><path fill="currentColor" d="M4 14H3V8h1zm9.5-1a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1zm0-4a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1zm0-4a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zM7.935 2.076a1.5 1.5 0 0 0-1.837 1.06A3 3 0 0 0 7.77 6.653c.241.107.506-.049.574-.303.062-.23-.062-.466-.254-.607a1.73 1.73 0 0 1-.566-.719 1.5 1.5 0 0 0 .412-2.947m-4 0a1.5 1.5 0 0 0-1.837 1.06A3 3 0 0 0 3.77 6.653c.241.107.506-.049.574-.303.062-.23-.062-.465-.254-.607a1.73 1.73 0 0 1-.566-.72 1.499 1.499 0 0 0 .412-2.946" />{props.children}</SvgRoot>;
});
export default IconParagraphBlockquote;
