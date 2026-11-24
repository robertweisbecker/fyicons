import { readFileSync } from 'node:fs';
import path from 'node:path';
import { CodeBlock } from '@/components/CodeBlock';

export default function LicenseText() {
  const license = readFileSync(
    path.join(process.cwd(), '../../LICENSE'),
    'utf8',
  );

  return (
    <CodeBlock>
      <code>{license}</code>
    </CodeBlock>
  );
}
