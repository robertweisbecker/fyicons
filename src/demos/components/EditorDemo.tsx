import { EditorContent, useEditor, useEditorState } from '@tiptap/react';
import Document from '@tiptap/extension-document';
import Text from '@tiptap/extension-text';
import Paragraph from '@tiptap/extension-paragraph';
import Bold from '@tiptap/extension-bold';
import Italic from '@tiptap/extension-italic';
import Underline from '@tiptap/extension-underline';
import Strike from '@tiptap/extension-strike';
import Blockquote from '@tiptap/extension-blockquote';
import BulletList from '@tiptap/extension-bullet-list';
import ListItem from '@tiptap/extension-list-item';
import TextAlign from '@tiptap/extension-text-align';
import { UndoRedo } from '@tiptap/extensions/undo-redo';
import { Icon } from '@/components/Icon';
import { ToggleGroup } from '@/components/ui/toggle-group';
import {
  CopyButton,
  DemoIconButton,
  DemoToggle,
  ControlDivider,
} from './DemoControls';

const marks = [
  ['bold', 'text-bold', 'Bold'],
  ['italic', 'italic', 'Italic'],
  ['underline', 'text-underline', 'Underline'],
  ['strike', 'text-strikethrough', 'Strikethrough'],
] as const;
const extensions = [
  Document,
  Text,
  Paragraph,
  Bold,
  Italic,
  Underline,
  Strike,
  Blockquote,
  BulletList,
  ListItem,
  TextAlign.configure({ types: ['paragraph'] }),
  UndoRedo,
];
const initialDocument =
  '<p>Good interfaces give the details room to breathe. Clear labels, considered spacing, and familiar symbols make the next step feel natural.</p><p>A useful icon does more than decorate a button. It helps you understand what will happen next.</p>';
export function EditorDemo() {
  const editor = useEditor({
    // Mount EditorContent before waiting for its first transaction snapshot.
    immediatelyRender: false,
    extensions,
    content: initialDocument,
    shouldRerenderOnTransaction: false,
    editorProps: {
      attributes: {
        role: 'textbox',
        'aria-label': 'Rich text document',
        'aria-multiline': 'true',
        spellcheck: 'false',
        class:
          'min-h-40 text-base leading-7 outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current/20 [&_p+p]:mt-5 [&_blockquote]:border-l-2 [&_blockquote]:border-current/25 [&_blockquote]:pl-4 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:pl-1 [&_li_p]:mt-0',
      },
    },
  });
  const selectedState = useEditorState({
    editor,
    selector: ({ editor: e }) =>
      e?.schema
        ? {
            marks: marks
              .filter(([name]) => e.isActive(name))
              .map(([name]) => name),
            block: e.isActive('bulletList')
              ? 'list'
              : e.isActive('blockquote')
                ? 'quote'
                : 'paragraph',
            align:
              ['left', 'center', 'right'].find((value) =>
                e.isActive({ textAlign: value }),
              ) ?? 'left',
            words: e.getText().trim().split(/\s+/).filter(Boolean).length,
            canUndo: e.can().undo(),
            canRedo: e.can().redo(),
          }
        : null,
  });
  const state = selectedState ?? {
    marks: [] as string[],
    block: 'paragraph',
    align: 'left',
    words: initialDocument
      .replace(/<[^>]+>/g, ' ')
      .trim()
      .split(/\s+/).length,
    canUndo: false,
    canRedo: false,
  };
  if (!editor) return <div className="min-h-64" aria-busy="true" />;
  return (
    <div className="flex flex-1 flex-col gap-4">
      <div
        role="toolbar"
        aria-label="Editor toolbar"
        className="flex flex-wrap items-center gap-1 rounded-xl border border-line bg-surface p-1.5 shadow-xs"
      >
        <ToggleGroup
          multiple
          value={state.marks}
          onValueChange={(next) => {
            const changed = marks.find(
              ([name]) => next.includes(name) !== state.marks.includes(name),
            );
            if (changed) editor.chain().focus().toggleMark(changed[0]).run();
          }}
          aria-label="Text formatting"
        >
          {marks.map(([value, icon, label]) => (
            <DemoToggle key={value} value={value} label={label} icon={icon} />
          ))}
        </ToggleGroup>
        <ControlDivider />
        <ToggleGroup
          value={[state.block]}
          onValueChange={(next) => {
            const value = next[0];
            if (value === 'quote')
              editor.chain().focus().clearNodes().setBlockquote().run();
            else if (value === 'list')
              editor.chain().focus().clearNodes().toggleBulletList().run();
            else if (value === 'paragraph')
              editor.chain().focus().clearNodes().setParagraph().run();
          }}
          aria-label="Paragraph style"
        >
          {[
            ['paragraph', 'pilcrow', 'Paragraph'],
            ['quote', 'quote-alt', 'Quote'],
            ['list', 'list-bullet', 'Bulleted list'],
          ].map(([value, icon, label]) => (
            <DemoToggle
              key={value}
              value={value}
              label={label}
              icon={icon}
              activeIcon={value === 'quote' ? 'quote-alt-fill' : undefined}
            />
          ))}
        </ToggleGroup>
        <ControlDivider />
        <ToggleGroup
          value={[state.align]}
          onValueChange={(values) => {
            if (values[0]) editor.chain().focus().setTextAlign(values[0]).run();
          }}
          aria-label="Paragraph alignment"
        >
          {[
            ['left', 'text-align-start'],
            ['center', 'text-align-center'],
            ['right', 'text-align-end'],
          ].map(([value, icon]) => (
            <DemoToggle
              key={value}
              value={value}
              label={'Align ' + value}
              icon={icon}
            />
          ))}
        </ToggleGroup>
        <CopyButton
          label="Copy document"
          className="ml-auto"
          getText={() => editor.getText()}
        />
      </div>
      <div className="flex flex-1 flex-col rounded-xl bg-surface px-5 py-5 sm:px-7">
        <div className="mb-5 flex items-center gap-2 text-xs text-muted">
          <Icon name="notebook-open" />
          Studio notes<span className="ml-auto">Draft</span>
        </div>
        <h3 className="mb-4 font-serif text-3xl leading-tight">
          A little room to think.
        </h3>
        <EditorContent editor={editor} />
      </div>
      <div className="flex items-center gap-1 text-muted">
        <DemoIconButton
          label="Undo text edit"
          icon="arrow-undo-arc"
          disabled={!state.canUndo}
          onClick={() => editor.chain().focus().undo().run()}
        />
        <DemoIconButton
          label="Redo text edit"
          icon="arrow-redo-arc"
          disabled={!state.canRedo}
          onClick={() => editor.chain().focus().redo().run()}
        />
        <span className="ml-auto text-xs tabular-nums">
          {state.words} words
        </span>
        <ControlDivider />
        <Icon name="eye-open" />
        <span className="text-xs">Only you</span>
      </div>
    </div>
  );
}
