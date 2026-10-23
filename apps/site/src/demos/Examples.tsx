import { Tooltip } from '@base-ui/react/tooltip';
import { DemoCard } from './components/DemoCard';
import { HomepageExamples } from './HomepageExamples';
import {
  FileExplorerDemo,
  SidebarDemo,
  BreadcrumbsDemo,
} from './components/NavigationDemos';
import { ComposerDemo, SearchDemo } from './components/CreationDemos';
import { EditorDemo } from './components/EditorDemo';
import { DesignDemo } from './components/DesignDemo';
import {
  ResizableWorkspaceDemo,
  ResizableStackDemo,
} from './components/ResizableDemos';
import { StateDemo, SettingsDemo } from './components/ControlDemos';
import {
  AlertsDemo,
  BadgesDemo,
  TasksDemo,
  SharingDemo,
} from './components/FeedbackDemos';

export default function Examples() {
  return (
    <Tooltip.Provider delay={350}>
      <div className="mx-auto max-w-360 pb-10">
        <div className="py-8 sm:py-10">
          <h1 className="text-3xl font-semibold tracking-tight">Examples</h1>
        </div>
        <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2 xl:grid-cols-12 xl:gap-5">
          <DemoCard title="Stateful icons" className="xl:col-span-4">
            <StateDemo />
          </DemoCard>
          <DemoCard title="Chat input" className="xl:col-span-8">
            <ComposerDemo />
          </DemoCard>
          <DemoCard title="File explorer" className="xl:col-span-4">
            <FileExplorerDemo />
          </DemoCard>
          <DemoCard title="Rich text editor" className="xl:col-span-8">
            <EditorDemo />
          </DemoCard>
          <DemoCard title="Resizable workspace" className="xl:col-span-8">
            <ResizableWorkspaceDemo />
          </DemoCard>
          <DemoCard title="Resizable stack" className="xl:col-span-4">
            <ResizableStackDemo />
          </DemoCard>
          <DemoCard
            title="Design tools"
            className="md:col-span-2 xl:col-span-8"
          >
            <DesignDemo />
          </DemoCard>
          <DemoCard title="Sidebar" className="xl:col-span-4">
            <SidebarDemo />
          </DemoCard>
          <DemoCard title="Command search" className="xl:col-span-6">
            <SearchDemo />
          </DemoCard>
          <DemoCard title="Settings" className="xl:col-span-6">
            <SettingsDemo />
          </DemoCard>
          <DemoCard title="Breadcrumbs" className="md:col-span-2 xl:col-span-6">
            <BreadcrumbsDemo />
          </DemoCard>
          <DemoCard title="Badges and status" className="xl:col-span-6">
            <BadgesDemo />
          </DemoCard>
          <DemoCard title="Alerts" className="xl:col-span-4">
            <AlertsDemo />
          </DemoCard>
          <DemoCard title="Checklist" className="xl:col-span-4">
            <TasksDemo />
          </DemoCard>
          <DemoCard title="Sharing" className="xl:col-span-4">
            <SharingDemo />
          </DemoCard>
        </div>
        <HomepageExamples />
      </div>
    </Tooltip.Provider>
  );
}
