import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFish = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFish(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="fish"><path fill="currentColor" fillRule="evenodd" d="M5.25 7.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0" clipRule="evenodd" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M13.5 8.5c1.5-1.5 1-4 1-4s-2 .25-3 2c-.47-.862-1.46-1.808-2-2m4 4 1 2c-2 0-3-1-3-1s-.667 1.36-2 2" /><path fill="currentColor" d="M6.985 11.379a.5.5 0 0 0-.97.242L6.5 11.5zm2.1 1.974-.338-.368zM6.5 11.5l-.485.121c.226.905.855 1.576 1.48 1.958.313.192.648.325.963.374.293.045.681.03.966-.232l-.339-.368-.338-.368c.047-.044.04.006-.137-.02a1.7 1.7 0 0 1-.594-.239c-.455-.278-.882-.752-1.03-1.347zm2.585 1.853.339.368c.217-.2.34-.467.416-.701.077-.241.119-.496.141-.718a6 6 0 0 0 .021-.812v-.021H10v-.001l-.499.032-.499.032v.009a3 3 0 0 1 .005.185c0 .125-.004.295-.022.476-.018.182-.05.362-.098.512-.05.157-.105.238-.141.27z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M5.5 4.492C6.5 3 8 2.5 9 2.5l.105.157c.363.541.504 1.2.395 1.843m-4 0c-2.5.438-4 2.875-4 3.5s1.5 3.25 5 3.5" />{props.children}</SvgRoot>;
});
export default IconFish;
