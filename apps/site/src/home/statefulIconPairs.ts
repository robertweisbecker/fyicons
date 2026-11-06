// [Default icon, alternate icon], grouped by action. Edit here to curate each row.
export const statefulIconGroups = [
  {
    label: 'Expand',
    pairs: [
      ['chevrons-expand', 'chevrons-collapse'],
      ['arrows-expand', 'arrows-collapse'],
      ['arrows-maximize', 'arrows-minimize'],
      ['list-expand', 'list-collapse'],
      ['row-expand', 'row-collapse'],
    ],
  },
  {
    label: 'Open',
    pairs: [
      ['book-open', 'book-reading'],
      ['door', 'door-open'],
      ['notebook', 'notebook-open'],
      ['journal', 'journal-open'],
      ['envelope-simple', 'envelope-simple-open'],
      ['eye-closed', 'eye'],
      ['folder', 'folder-open'],
      ['archive', 'archive-open'],
    ],
  },
  {
    label: 'Menus',
    pairs: [
      ['panel-left-closed', 'panel-left'],
      ['panel-right-closed', 'panel-right-open'],
      ['header-collapsed', 'header-expanded'],
      ['footer-collapsed', 'footer-expanded'],
    ],
  },
  {
    label: 'Activate',
    pairs: [
      ['lightbulb-simple', 'lightbulb-simple-on'],
      ['brightness-low', 'brightness-high'],
      ['flashlight-off-fill', 'flashlight-on-fill'],
      ['lock-open', 'lock-fill'],
      ['switch-off', 'switch-on'],
    ],
  },
  {
    label: 'Deactivate',
    pairs: [
      ['bell', 'bell-slash'],
      ['cloud', 'cloud-slash'],
      ['link', 'link-slash'],
      ['volume-high', 'volume-slash'],
      ['wifi', 'wifi-error'],
    ],
  },
] as const;
