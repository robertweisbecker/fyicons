import { forwardRef, memo, type ComponentType } from 'react';
import { cn } from '../lib/utils';
import type { IconProps as GeneratedIconProps } from 'fyicons';

export type IconProps = GeneratedIconProps & {
  name: string;
};

/** Small, feature-local lookup composed from direct icon imports. */
export function createIconLookup(
  entries: Record<
    string,
    { Component: ComponentType<GeneratedIconProps>; id: string }
  >,
) {
  return memo(
    forwardRef<SVGSVGElement, IconProps>(function Icon(
      { name, className = '', title, size, style, ...props },
      ref,
    ) {
      const item = entries[name];
      if (!item) throw new Error('Unknown static FYIcon: ' + name);
      const Component = item.Component;

      return (
        <Component
          {...props}
          ref={ref}
          size={size}
          width={props.width ?? size ?? 16}
          height={props.height ?? size ?? 16}
          viewBox={props.viewBox ?? '0 0 16 16'}
          fill={props.fill ?? 'none'}
          aria-hidden={
            props['aria-hidden'] ??
            (title || props['aria-label'] || props['aria-labelledby']
              ? undefined
              : true)
          }
          aria-label={props['aria-label'] ?? title}
          role={
            title || props['aria-label'] ? (props.role ?? 'img') : props.role
          }
          focusable={props.focusable ?? false}
          data-source-id={item.id}
          className={cn(
            'icon block shrink-0',
            size == null ? 'size-4' : '',
            className,
          )}
          style={
            size == null
              ? style
              : {
                  width: props.width ?? size,
                  height: props.height ?? size,
                  ...style,
                }
          }
          title={title}
        />
      );
    }),
  );
}
