import { UIIcon } from '@/components/UIIcon';

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
      <UIIcon name={icon} className="group-data-pressed/toggle:hidden" />
      <UIIcon
        name={activeIcon}
        className="hidden group-data-pressed/toggle:block"
      />
    </>
  );
}
