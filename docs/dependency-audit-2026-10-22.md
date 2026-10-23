# Dependency audit: October 22, 2026

## Results

| Scope                                                     | Result                                         |
| --------------------------------------------------------- | ---------------------------------------------- |
| Workspace production dependencies: `npm audit --omit=dev` | No reported vulnerabilities.                   |
| All workspace dependencies: `npm audit`                   | Seven high-severity entries from one advisory. |

The affected package is `braces@3.0.3`. The dependency chain is `shadcn` → `fast-glob` → `micromatch` → `braces`. The same chain passes through `@shadcn/registry` and `ts-morph` → `@ts-morph/common`. npm reports these dependent packages as affected too.

[GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm) describes a denial of service from deeply nested brace patterns. The advisory lists no patched version. At this audit, npm lists `braces@3.0.3`, `fast-glob@3.3.3`, and `shadcn@4.22.1` as their latest releases. These are the installed versions.

## Effect on FYIcons

The affected chain is a development dependency. The icon package has no runtime dependencies and has React as a peer dependency. Website code does not import the affected parser or expose a glob-pattern input.

The registry builder imports shadcn schemas. A traced registry validation passed for all 1,130 items and made no calls to the brace parser.

The release verification script runs the shadcn CLI against two generated local registry items in temporary consumer projects. It writes the project configuration itself. Icon names, filenames, and component names have character restrictions that exclude braces.

A traced install of those two items passed. The parser received five calls, with a maximum pattern length of 85 characters and one brace level. The installed components passed TypeScript compilation, shared-import checks, and an exact license comparison. This trace covers the current verification workflow, not arbitrary shadcn commands or external project configurations.

## Fix decision

No dependency versions changed. The current application and package expose no identified path to the reported failure. The development advisory remains unresolved upstream; the full audit still reports seven entries.

npm suggests a downgrade to `shadcn@1.0.0`. That package declares no CLI binary and cannot replace the CLI used by release verification. No downgrade, local dependency patch, or audit suppression was applied.

Repeat the assessment when a patched version is available or when the workflow accepts external glob patterns or project configurations. Use the current lockfile and advisory data; these results describe the date above.
