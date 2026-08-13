import '@testing-library/jest-dom/vitest';
import React from 'react';
import { vi } from 'vitest';

const makeIcon = (name: string) => {
  const Component = (props: Record<string, unknown>) =>
    React.createElement('span', { 'data-testid': `icon-${name}`, ...props });
  Component.displayName = name;
  return Component;
};

vi.mock('lucide-react', () => ({
  __esModule: true,
  User: makeIcon('User'),
  FolderGit2: makeIcon('FolderGit2'),
  Sparkles: makeIcon('Sparkles'),
  Mail: makeIcon('Mail'),
  Github: makeIcon('Github'),
  Linkedin: makeIcon('Linkedin'),
  ExternalLink: makeIcon('ExternalLink'),
  ArrowRight: makeIcon('ArrowRight'),
  ArrowLeft: makeIcon('ArrowLeft'),
  Code2: makeIcon('Code2'),
  Database: makeIcon('Database'),
  Cpu: makeIcon('Cpu'),
  Wrench: makeIcon('Wrench'),
  ChevronDown: makeIcon('ChevronDown'),
  ChevronUp: makeIcon('ChevronUp'),
  CheckCircle2: makeIcon('CheckCircle2'),
  Check: makeIcon('Check'),
  Copy: makeIcon('Copy'),
  Send: makeIcon('Send'),
  Terminal: makeIcon('Terminal'),
  Layers: makeIcon('Layers'),
  Trophy: makeIcon('Trophy'),
  Construction: makeIcon('Construction'),
  Award: makeIcon('Award'),
  Menu: makeIcon('Menu'),
  X: makeIcon('X'),
  Globe: makeIcon('Globe'),
  Loader2: makeIcon('Loader2'),
}));
