import { Icon } from '@/components/Icon';

/** Uses the parent Base UI toggle's state, including uncontrolled/group toggles. */
export function ToggleIcon({
  icon,
  activeIcon,
}: {
  icon: string;
  activeIcon: string;
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
}
