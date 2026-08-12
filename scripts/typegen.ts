import {builtinRules} from 'eslint/use-at-your-own-risk';
import { buildTypeGen } from '@zokugun/eslint-typegen-plus'

await buildTypeGen('', { rules: Object.fromEntries(builtinRules.entries()) }, 'commons.d.ts', { overwrite: true });
