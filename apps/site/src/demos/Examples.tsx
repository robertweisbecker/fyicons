import { DemoCard } from './components/DemoCard';
import { HomepageExamples } from './HomepageExamples';
import { SidebarDemo } from './components/NavigationDemos';
import { ComposerDemo } from './components/CreationDemos';
import { DesignDemo } from './components/DesignDemo';
import {
  ResizableWorkspaceDemo,
  ResizableStackDemo,
} from './components/ResizableDemos';
import {
  AlertsDemo,
  BadgesDemo,
  SharingDemo,
} from './components/FeedbackDemos';

export default function Examples() {
  return (
    <>
      <div className="mx-auto max-w-360 pb-10">
        <div className="py-8 sm:py-10">
          <h1 className="text-3xl font-semibold tracking-tight">Examples</h1>
        </div>
        <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2 xl:grid-cols-12 xl:gap-5">
          <DemoCard title="Chat input" className="md:col-span-2 xl:col-span-12">
            <ComposerDemo />
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
          <DemoCard title="Badges and status" className="xl:col-span-4">
            <BadgesDemo />
          </DemoCard>
          <DemoCard title="Alerts" className="xl:col-span-4">
            <AlertsDemo />
          </DemoCard>
          <DemoCard title="Sharing" className="xl:col-span-4">
            <SharingDemo />
          </DemoCard>
        </div>
        <HomepageExamples />
      </div>
    </>
  );
}
