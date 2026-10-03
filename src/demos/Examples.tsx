import { DemoCard } from './components/DemoCard';
import {
  FileExplorerDemo,
  SidebarDemo,
  BreadcrumbsDemo,
} from './components/NavigationDemos';
import {
  ComposerDemo,
  EditorDemo,
  SearchDemo,
} from './components/CreationDemos';
import {
  StateDemo,
  PlaybackDemo,
  AppearanceDemo,
  SettingsDemo,
} from './components/ControlDemos';
import {
  AlertsDemo,
  BadgesDemo,
  TasksDemo,
  SharingDemo,
} from './components/FeedbackDemos';

export default function Examples({
  notify,
}: {
  notify: (message: string) => void;
}) {
  return (
    <>
      <div className="py-8">
        <h1 className="text-3xl font-semibold tracking-tight">Examples</h1>
      </div>
      <div className="grid grid-cols-1 items-stretch gap-4 pb-10 md:grid-cols-2 xl:grid-cols-12">
        <DemoCard title="Stateful icons" tone="lilac" className="xl:col-span-4">
          <StateDemo />
        </DemoCard>
        <DemoCard title="Chat input" tone="neutral" className="xl:col-span-8">
          <ComposerDemo />
        </DemoCard>
        <DemoCard title="File explorer" tone="dark" className="xl:col-span-4">
          <FileExplorerDemo />
        </DemoCard>
        <DemoCard
          title="Rich text editor"
          tone="warm"
          className="xl:col-span-8"
        >
          <EditorDemo notify={notify} />
        </DemoCard>
        <DemoCard title="Sidebar" tone="mint" className="xl:col-span-4">
          <SidebarDemo />
        </DemoCard>
        <DemoCard title="Playback" tone="blue" className="xl:col-span-4">
          <PlaybackDemo />
        </DemoCard>
        <DemoCard title="Appearance" tone="lilac" className="xl:col-span-4">
          <AppearanceDemo />
        </DemoCard>
        <DemoCard title="Breadcrumbs" className="md:col-span-2 xl:col-span-8">
          <BreadcrumbsDemo />
        </DemoCard>
        <DemoCard title="Badges" tone="mint" className="xl:col-span-4">
          <BadgesDemo />
        </DemoCard>
        <DemoCard title="Command search" tone="dark" className="xl:col-span-4">
          <SearchDemo />
        </DemoCard>
        <DemoCard title="Alerts" tone="blue" className="xl:col-span-4">
          <AlertsDemo />
        </DemoCard>
        <DemoCard title="Settings" className="xl:col-span-4">
          <SettingsDemo />
        </DemoCard>
        <DemoCard title="Checklist" tone="warm" className="xl:col-span-6">
          <TasksDemo />
        </DemoCard>
        <DemoCard title="Sharing" tone="lilac" className="xl:col-span-6">
          <SharingDemo />
        </DemoCard>
      </div>
    </>
  );
}
