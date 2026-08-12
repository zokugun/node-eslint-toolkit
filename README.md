[@zokugun/eslint-toolkit](https://github.com/zokugun/node-eslint-toolkit)
=========================================================================

[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![NPM Version](https://img.shields.io/npm/v/@zokugun/eslint-toolkit.svg?colorB=green)](https://www.npmjs.com/package/@zokugun/eslint-toolkit)
[![Donation](https://img.shields.io/badge/donate-ko--fi-green)](https://ko-fi.com/daiyam)
[![Donation](https://img.shields.io/badge/donate-liberapay-green)](https://liberapay.com/daiyam/donate)
[![Donation](https://img.shields.io/badge/donate-paypal-green)](https://paypal.me/daiyam99)

> This toolkit ships a configurator pattern for building ESLint setups with EditorConfig and override support. It comes with some pre-configured common rules.

Features
--------

- **Configurator Pattern**: A functional approach to build ESLint configurations programmatically with resolution and registration helpers.
- **Ignore Patterns**: Exclude files from linting using the `ignores` configuration array.
- **File Matching**: Specify which files each configuration applies to through the `files` option.
- **Override Support**: Configure different rules for specific file patterns using the override system.
- **EditorConfig Type**: A type for `.editorconfig` compatibility.

Installation
------------

```bash
npm add @zokugun/eslint-toolkit
```

Quick Start
-----------

```typescript
import type {Configurator, OptionFiles, OptionIgnores, OptionOverrideFiles, OptionOverrideIgnores, OptionRules} from '@zokugun/eslint-toolkit'

import plugin from "eslint-plugin-regexp";

import { RuleOptions } from './typegens/regexp.js';
import { rules } from './rules/regexp.js';

type Options = OptionRules<RuleOptions> & OptionFiles & OptionIgnores & OptionOverrideFiles & OptionOverrideIgnores;

function regexp(options: Options = {}): Configurator {
	return (resolve) => {
		const sources = resolve<string[]>('javascript.sources') ?? []

		const files = options.overrides?.files ?? [
			...sources,
			...(options.files ?? [])
		]

		const ignores = options.overrides?.ignores ?? options.ignores ?? []

		return {
			name: 'regexp',
			files,
			ignores,
			plugins: {
				regexp: plugin,
			},
			rules: {
				...rules,
				...options.rules,
			}
		};
	};
}
```

API reference
-------------

```typescript
type Configurator = (resolve: <T>(name: string) => T | undefined, register: (name: string, value: unknown) => void) => Linter.Config[] | Linter.Config | undefined;
type EditorConfigOptions = {
    charset?: 'latin1' | 'utf-8' | 'utf-8-bom' | 'utf-16be' | 'utf-16le' | 'unset';
    end_of_line?: 'lf' | 'crlf' | 'unset';
    indent_size?: number | 'tab' | 'unset';
    indent_style?: 'tab' | 'space' | 'unset';
    insert_final_newline?: 'true' | 'false' | 'unset';
    tab_width?: number | 'unset';
    trim_trailing_whitespace?: 'true' | 'false' | 'unset';
};
type OptionFiles = {
    files?: string[];
};
type OptionIgnores = {
    ignores?: string[];
};
type OptionOverridesFiles = {
    overrides?: {
        files?: string[];
    };
};
type OptionOverridesIgnores = {
    overrides?: {
        ignores?: string[];
    };
};
type OptionOverridesRules<R> = {
    overrides?: {
        rules?: Partial<R>;
    };
};
type OptionRules<R> = {
    rules?: Partial<R>;
};
interface CommonsRuleOptions {
    'accessor-pairs'?: Linter.RuleEntry<AccessorPairs>
    ...
}
const CommonsRules: Partial<CommonsRuleOptions>
```

Contributions
-------------

Contributions are most welcome. Please:
- Open issues and feature requests under the repository discussions.
- Follow the [`CONTRIBUTING.md`](./CONTRIBUTING.md).

Donations
---------

Support this project by becoming a financial contributor.

<table>
    <tr>
        <td><img src="https://raw.githubusercontent.com/daiyam/assets/master/icons/256/funding_kofi.png" alt="Ko-fi" width="80px" height="80px"></td>
        <td><a href="https://ko-fi.com/daiyam" target="_blank">ko-fi.com/daiyam</a></td>
    </tr>
    <tr>
        <td><img src="https://raw.githubusercontent.com/daiyam/assets/master/icons/256/funding_liberapay.png" alt="Liberapay" width="80px" height="80px"></td>
        <td><a href="https://liberapay.com/daiyam/donate" target="_blank">liberapay.com/daiyam/donate</a></td>
    </tr>
    <tr>
        <td><img src="https://raw.githubusercontent.com/daiyam/assets/master/icons/256/funding_paypal.png" alt="PayPal" width="80px" height="80px"></td>
        <td><a href="https://paypal.me/daiyam99" target="_blank">paypal.me/daiyam99</a></td>
    </tr>
</table>

License
-------

Copyright &copy; 2026-present Baptiste Augrain

Licensed under the [MIT license](https://opensource.org/licenses/MIT).
