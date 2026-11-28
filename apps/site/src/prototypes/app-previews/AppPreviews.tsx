'use client';

import {
  IconAppsPlus,
  IconArrowClockwise,
  IconChatRound,
  IconCheck,
  IconChevronDown,
  IconChevronRightSm,
  IconCircleCheck,
  IconCode,
  IconComponent,
  IconCopy,
  IconDirectionColumn,
  IconDirectionRow,
  IconDownload,
  IconEllipsis,
  IconFileAudio,
  IconFileCode,
  IconFileImage,
  IconFileText,
  IconFolder,
  IconFolderFill,
  IconFrame,
  IconGitMerge,
  IconGitPullRequest,
  IconGrid,
  IconHeadphones,
  IconLayoutColumns,
  IconWidth,
  IconLayoutRows,
  IconLink,
  IconListBullet,
  IconMicrophone,
  IconPauseFill,
  IconPenTool,
  IconPointer,
  IconPlus,
  IconRepeat,
  IconRulersPointer,
  IconScribble,
  IconSearch,
  IconShuffle,
  IconSkipBackwardFill,
  IconSkipForwardFill,
  IconSquare,
  IconVolumeHigh,
  IconStarFill,
  IconTabs,
  IconTextTitle,
  IconThumbsDown,
  IconThumbsUpFill,
  IconTrash,
  IconUsersTwo,
  IconVectorPath,
  IconWaveform,
  IconX,
} from 'fyicons';
import { AlbumArtwork, tracks, trackTime } from '@/home/desktop/musicData';
import '@/vendor/stageshow/stage.css';
import { Window } from '@/vendor/stageshow/window';
import { Row } from '@/vendor/stageshow/parts/Row';
import './previews.css';
import { IssueBoard } from './IssueBoards';

function Design() {
  return (
    <Window
      title={
        <>
          <IconPenTool />
          Library / Components
        </>
      }
      toolbar={<IconTabs />}
      lights="grey"
      className="editor"
    >
      <aside className="layers">
        <strong>Layers</strong>
        <Row
          pad={6}
          lead={
            <span className="layer-icons">
              <IconChevronDown size={12} />
              <IconFrame />
            </span>
          }
          title="Library"
        />
        <div className="children">
          <Row
            pad={6}
            className="layer-leaf"
            lead={<IconTextTitle />}
            title="Library"
          />
          <Row
            pad={6}
            selected
            lead={
              <span className="layer-icons">
                <IconChevronDown size={12} />
                <IconComponent />
              </span>
            }
            title="Toolbar"
          />
          <div className="children leaves">
            <Row pad={6} lead={<IconVectorPath />} title="Icon" />
            <Row pad={6} lead={<IconTextTitle />} title="Search" />
            <Row pad={6} lead={<IconComponent />} title="Toggle" />
          </div>
          <Row
            pad={6}
            lead={
              <span className="layer-icons">
                <IconChevronRightSm size={12} />
                <IconLayoutRows />
              </span>
            }
            title="File list"
          />
        </div>
      </aside>
      <div className="artboard">
        <div className="canvas-frame">
          <strong>Library</strong>
          <div className="selected-toolbar">
            <span>
              <IconSearch />
              Search
            </span>
            <IconListBullet />
            <b>
              <IconGrid />
            </b>
            <i />
            <i />
            <i />
            <i />
          </div>
          <div className="canvas-folders">
            <span>
              <IconFolder />
              Audio
            </span>
            <span>
              <IconFolder />
              Artwork
            </span>
          </div>
        </div>
        <div className="tools">
          <div className="canvas-tools">
            <span className="active-tool">
              <IconPointer />
            </span>
            <span>
              <IconFrame />
            </span>
            <span className="wide-tool">
              <IconSquare />
            </span>
            <span>
              <IconPenTool />
            </span>
            <span className="wide-tool">
              <IconTextTitle />
            </span>
            <span className="wide-tool">
              <IconChatRound />
            </span>
            <span className="wide-tool">
              <IconAppsPlus />
            </span>
          </div>
          <div className="canvas-modes">
            <span>
              <IconScribble />
            </span>
            <span className="active-mode">
              <IconRulersPointer />
            </span>
            <span>
              <IconCode />
            </span>
          </div>
        </div>
      </div>
      <aside className="properties">
        <strong>Design</strong>
        <div className="property-title">
          <IconLayoutColumns />
          Auto layout
        </div>
        <p>Flow</p>
        <div className="flow">
          <b>
            <IconDirectionRow />
          </b>
          <IconDirectionColumn />
          <IconGrid />
        </div>
        <p>Spacing</p>
        <div className="measure">
          <IconWidth />8
        </div>
      </aside>
    </Window>
  );
}

function Drive() {
  return (
    <div className="drive-view">
      <div className="crumb">
        My Drive <IconChevronRightSm /> <strong>Recordings</strong>
      </div>
      <div className="drive-tools">
        <IconX />
        <span>1 selected</span>
        <IconUsersTwo />
        <IconDownload />
        <IconLink />
        <IconTrash />
        <IconEllipsis />
      </div>
      <div className="file-list">
        <Row pad={9} selected lead={<IconFolderFill />} title="Session files">
          <IconUsersTwo />
        </Row>
        <Row pad={9} lead={<IconFileAudio />} title="Soft Signal.wav">
          <IconStarFill />
        </Row>
        <Row pad={9} lead={<IconFileImage />} title="Sleeve.png" />
        <Row pad={9} lead={<IconFileText />} title="Session notes" />
      </div>
    </div>
  );
}

function Review() {
  return (
    <div className="review-view">
      <div className="repo">
        <IconGitPullRequest />
        <strong>Copy actions</strong>
        <span>#24</span>
      </div>
      <div className="review-status">
        <span>
          <IconGitMerge />
          Merged
        </span>
        <span>
          <IconCircleCheck />
          Checks passed
        </span>
      </div>
      <div className="changed-files">
        <div className="file-heading">
          <IconChevronRightSm />
          <IconFileCode />
          <code>actions.ts</code>
          <IconCheck className="viewed" />
        </div>
        <div className="file-heading">
          <IconChevronDown />
          <IconFileCode />
          <code>copy-button.tsx</code>
          <IconEllipsis />
        </div>
        <div className="diff-old">
          <code>− &lt;Copy /&gt;</code>
        </div>
        <div className="diff-new">
          <code>+ &lt;IconCopy /&gt;</code>
        </div>
        <div className="file-heading">
          <IconChevronRightSm />
          <IconFileCode />
          <code>toolbar.tsx</code>
          <IconEllipsis />
        </div>
      </div>
    </div>
  );
}

function Chat() {
  return (
    <div className="chat-view">
      <div className="chat-model">
        ChatGPT <IconChevronDown />
      </div>
      <div className="request">
        <div className="attachment">
          <IconFileText />
          Tracklist.csv
        </div>
        <div className="question">Name this playlist.</div>
      </div>
      <div className="reply">Window Seat.</div>
      <div className="feedback">
        <IconCopy />
        <b>
          <IconThumbsUpFill />
        </b>
        <IconThumbsDown />
        <IconVolumeHigh />
        <IconArrowClockwise />
        <IconEllipsis />
      </div>
      <div className="composer">
        <IconPlus size={18} />
        <span>Ask anything</span>
        <IconMicrophone />
        <b>
          <IconWaveform />
        </b>
      </div>
    </div>
  );
}

function Music() {
  const track = tracks[0];
  return (
    <div className="music-view">
      <div className="now">
        <IconHeadphones /> Now playing <IconEllipsis />
      </div>
      <div className="record">
        <AlbumArtwork className="cover" decorative data-crop="" />
        <div>
          <strong>{track.title}</strong>
          <span>{track.artist}</span>
        </div>
      </div>
      <div className="timeline">
        <i />
      </div>
      <div className="times">
        <span>1:24</span>
        <span>{trackTime(track.length)}</span>
      </div>
      <div className="transport">
        <IconShuffle />
        <IconSkipBackwardFill size={23} />
        <b>
          <IconPauseFill size={24} />
        </b>
        <IconSkipForwardFill size={23} />
        <IconRepeat />
      </div>
    </div>
  );
}

const scenes = [
  {
    id: 'design',
    name: 'Design editor',
    description:
      'A Library frame contains a Library text layer, a selected Toolbar component and a collapsed File list. Toolbar is expanded to show the Icon vector, Search text and Toggle component. The canvas shows the toolbar arranged in a row, with Move and Design mode active.',
    content: <Design />,
  },
  {
    id: 'drive',
    name: 'Google Drive',
    description:
      'A shared folder is selected beside a starred recording. The selection toolbar offers sharing, downloading, linking and deleting.',
    content: <Drive />,
  },
  {
    id: 'review',
    name: 'Codex / GitHub',
    description:
      'A merged pull request has passed checks. One reviewed file is collapsed and the next is open to its copy-icon diff.',
    content: <Review />,
  },
  {
    id: 'chat',
    name: 'ChatGPT',
    description:
      'A playlist naming request includes an attached tracklist. The answer is liked, with copy, read-aloud and retry actions beside it.',
    content: <Chat />,
  },
  {
    id: 'music',
    name: 'Spotify',
    description:
      'Soft Signal by The Quiet Hours is playing. The pause control sits between skip, shuffle and repeat.',
    content: <Music />,
  },
];

function Preview({ scene }: { scene: (typeof scenes)[number] }) {
  return (
    <figure id={scene.id}>
      <figcaption>{scene.name}</figcaption>
      <div
        role="img"
        aria-label={scene.description}
        className="preview-slot ss-fit"
      >
        <div
          className="ss-stage"
          data-still
          data-fidelity="realistic"
          data-theme={
            scene.id === 'music' || scene.id === 'review' ? 'dark' : 'light'
          }
        >
          {scene.content}
        </div>
      </div>
    </figure>
  );
}

export function AppPreviews() {
  return (
    <section className="app-previews">
      <h1>App previews</h1>
      <div className="preview-grid">
        {scenes.map((scene) => (
          <Preview key={scene.id} scene={scene} />
        ))}
        <IssueBoard variant="drag" />
        <IssueBoard variant="merge" />
      </div>
    </section>
  );
}
