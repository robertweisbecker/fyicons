import defaultChangelog from '@changesets/cli/changelog';

export default {
  ...defaultChangelog,
  getReleaseLine(changeset, ...args) {
    const line = defaultChangelog.getReleaseLine(changeset, ...args);
    // Keep a leading Markdown block inside the changeset's list item.
    return line.replace(
      /^(- [a-f0-9]{7}:) (?=#{1,6}(?:\s|$)|[-*+]\s|\d+[.)]\s|>\s|`{3}|~{3})/i,
      '$1\n\n  ',
    );
  },
};
