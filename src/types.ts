import { Linter } from 'eslint';

export type Configurator = (resolve: Resolver, register: Registrator) => Linter.Config[] | Linter.Config | undefined;

export type EditorConfigOptions = {
	charset?: 'latin1' | 'utf-8' | 'utf-8-bom' | 'utf-16be' | 'utf-16le' | 'unset';
	end_of_line?: 'lf' | 'crlf' | 'unset';
	indent_size?: number | 'tab' | 'unset';
	indent_style?: 'tab' | 'space' | 'unset';
	insert_final_newline?: 'true' | 'false' | 'unset';
	tab_width?: number | 'unset';
	trim_trailing_whitespace?: 'true' | 'false' | 'unset';
};

export type OptionFiles = {
	files?: string[];
};

export type OptionIgnores = {
	ignores?: string[];
};

export type OptionOverridesFiles = {
	overrides?: {
		files?: string[];
	};
};

export type OptionOverridesIgnores = {
	overrides?: {
		ignores?: string[];
	};
};

export type OptionOverridesRules<R> = {
	overrides?: {
		rules?: Partial<R>;
	};
};

export type OptionRules<R> = {
	rules?: Partial<R>;
};

export type Registrator = (name: string, value: unknown) => void;

export type Resolver = {
	(name: string, defaultValue: []): unknown[];
	<T>(name: string, defaultValue: T[]): T[];
	<T>(name: string, defaultValue: T): | T;
	<T>(name: string, defaultValue?: undefined): T | undefined;
};
