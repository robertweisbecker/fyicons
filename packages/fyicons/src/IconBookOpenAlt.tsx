import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBookOpenAlt = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBookOpenAlt(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M13.033 1.982a.985.985 0 0 1 .967.989v8.22c0 .537-.421.965-.938 1.003-2.036.152-3.218.588-3.874.956a3 3 0 0 0-.637.464 1 1 0 0 0-.105.117.496.496 0 0 1-.88.024l-.002.001.002.002.001.003.003.004-.013-.02a1 1 0 0 0-.108-.12 3 3 0 0 0-.637-.465c-.656-.368-1.838-.804-3.874-.956A1.01 1.01 0 0 1 2 11.2V2.98c0-.525.416-.981.967-.989 1.915-.025 3.261.462 4.14.976.386.226.678.457.887.646.21-.19.506-.425.9-.656.878-.514 2.224-1.001 4.14-.975M3 11.199l.001.002a.02.02 0 0 0 .012.006c2.147.16 3.478.627 4.289 1.082q.105.06.198.12V4.665a.5.5 0 0 1 .016-.119q-.05-.057-.133-.139a4.3 4.3 0 0 0-.781-.578C5.88 3.408 4.719 2.972 3 2.991zm10-8.217c-1.72-.02-2.88.416-3.602.838-.363.213-.62.425-.78.579a3 3 0 0 0-.137.14q.018.06.019.127V12.4q.094-.06.198-.12c.81-.455 2.142-.922 4.29-1.082l.011-.005.001-.002z" /></SvgRoot>;
});
export default IconBookOpenAlt;
