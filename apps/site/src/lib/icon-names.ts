/**
 * `IconArrowUp` becomes `ArrowUp`. This module stays independent of the
 * catalog so that the search dialog can name an icon before the catalog loads.
 */
export function getIconDisplayName(icon: { componentName: string }) {
  return icon.componentName.slice('Icon'.length);
}
