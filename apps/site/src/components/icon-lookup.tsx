import { forwardRef, memo, type ComponentType } from 'react';
import { cn } from '@/lib/utils';
import type { IconProps as GeneratedIconProps } from 'fyicons';

export type IconProps<Name extends string = string> = GeneratedIconProps & {
  name: Name;
};

type ResolvedIcon = {
  Component: ComponentType<GeneratedIconProps>;
  /** Catalog ID, exposed as `data-source-id` on the rendered SVG. */
  sourceId?: string;
};

/**
 * Name-based icon component with the site's size, class, and accessibility
 * defaults. `resolve` maps a name to its React icon and throws on an unknown
 * name. Keep this module independent of the catalog.
 */
export function createIconRenderer<Name extends string = string>(
  resolve: (name: Name) => ResolvedIcon,
) {
  return memo(
    forwardRef<SVGSVGElement, IconProps<Name>>(function Icon(
      { name, className = '', title, size, style, ...props },
      ref,
    ) {
      const { Component, sourceId } = resolve(name);

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
          data-source-id={sourceId}
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

/**
 * Feature-local lookup of explicitly imported React icon components. The
 * `name` prop accepts only the keys of `entries`.
 */
export function createIconLookup<Name extends string>(
  entries: Record<Name, ComponentType<GeneratedIconProps>>,
) {
  return createIconRenderer<Name>((name) => {
    const Component = entries[name];
    if (!Component) throw new Error('Unknown static FYIcon: ' + name);
    return { Component };
  });
}
