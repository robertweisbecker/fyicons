import type { UIIconName } from '@/components/UIIcon';

export type DocSection = { id: string; title: string };

type DocPage = {
  title: string;
  href: string;
  icon: UIIconName;
  separatorBefore?: boolean;
};

export const docsNavigation: { title: string; items: DocPage[] }[] = [
  {
    title: 'Documentation',
    items: [
      { title: 'About', href: '/docs/', icon: 'info' },
      {
        title: 'Getting started',
        href: '/docs/getting-started/',
        icon: 'book-open',
      },
      { title: 'Styling', href: '/docs/styling/', icon: 'palette' },
      { title: 'React', href: '/docs/react/', icon: 'atom-react' },
      { title: 'Changelog', href: '/docs/changelog/', icon: 'note' },
      {
        title: 'License',
        href: '/docs/license/',
        icon: 'file-text',
        separatorBefore: true,
      },
    ],
  },
];

export const docsPages = docsNavigation.flatMap(({ items }) => items);

export function mobileDocSections(
  headings: (DocSection & { level: number })[],
  active?: string,
) {
  const mobileHeadings = headings.filter(({ level }) => level === 2);
  const activeIndex = headings.findIndex(({ id }) => id === active);
  let current = mobileHeadings[0];
  for (let index = 0; index <= activeIndex; index++) {
    if (headings[index].level === 2) current = headings[index];
  }
  return { sections: mobileHeadings, current };
}
