export type Glyph = { id: number; char: string };
type Draft = { text: string; glyphs: Glyph[]; nextId: number };
export type Edit =
  string | ((current: string) => string) | { text: string; caret: number };

export function createDraft(text: string): Draft {
  const glyphs = Array.from(text, (char, id) => ({ char, id }));
  return { text, glyphs, nextId: glyphs.length };
}

export function editDraft(draft: Draft, edit: Edit): Draft {
  const text =
    typeof edit === 'object'
      ? edit.text
      : typeof edit === 'function'
        ? edit(draft.text)
        : edit;
  if (text === draft.text) return draft;

  const chars = Array.from(text);
  const before = draft.glyphs;
  let oldEnd = before.length;
  let newEnd = chars.length;
  // A textarea edit leaves the text after the caret intact, even for repeated letters.
  const caret =
    typeof edit === 'object'
      ? Array.from(text.slice(0, edit.caret)).length
      : chars.length;
  while (
    newEnd > caret &&
    oldEnd > 0 &&
    before[oldEnd - 1].char === chars[newEnd - 1]
  ) {
    oldEnd--;
    newEnd--;
  }
  let start = 0;
  while (
    start < oldEnd &&
    start < newEnd &&
    before[start].char === chars[start]
  )
    start++;

  let nextId = draft.nextId;
  const inserted = chars
    .slice(start, newEnd)
    .map((char) => ({ char, id: nextId++ }));
  return {
    text,
    nextId,
    glyphs: [...before.slice(0, start), ...inserted, ...before.slice(oldEnd)],
  };
}
