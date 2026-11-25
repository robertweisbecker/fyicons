#!/usr/bin/env bash
# Download the comparison icon sets into .cache/ and write compare.json.
# Run from the repository root: bash explorations/landing-studies/fetch-compare.sh
set -euo pipefail
cd "$(dirname "$0")"
mkdir -p .cache
cd .cache
for pkg in lucide-static@1.80.0 @phosphor-icons/core@2.1.1 remixicon@4.9.1 \
  @fortawesome/fontawesome-free@7.3.1 @hugeicons/core-free-icons@4.4.0; do
  tgz=$(npm pack "$pkg" --silent | tail -1)
  dir="${tgz%.tgz}"
  mkdir -p "$dir" && tar -xzf "$tgz" -C "$dir"
done
cd ..
node compare.cjs
