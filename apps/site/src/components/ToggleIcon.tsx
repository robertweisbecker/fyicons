import type { ComponentType } from 'react';
import type { IconProps } from '@/components/icon-lookup';
import { UIIcon } from '@/components/UIIcon';

/**
 * Binds an icon pair to one icon set. The pair follows the state of the parent
 * Base UI toggle, including uncontrolled and group toggles.
 */
export function createToggleIcon<Name extends string>(
  Icon: ComponentType<IconProps<Name>>,
) {
  return function ToggleIcon({
    icon,
    activeIcon,
  }: {
    icon: Name;
    activeIcon: Name;
  }) {
    return (
      <>
        <Icon name={icon} className="group-data-pressed/toggle:hidden" />
        <Icon
          name={activeIcon}
          className="hidden group-data-pressed/toggle:block"
        />
      </>
    );
  };
}

export const ToggleIcon = createToggleIcon(UIIcon);
