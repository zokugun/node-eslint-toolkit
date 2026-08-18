import { buildTypeGen } from '@zokugun/eslint-typegen-plus';
import { builtinRules } from 'eslint/use-at-your-own-risk';

await buildTypeGen({
	name: '',
	fileName: 'commons.d.ts',
	typeName: 'CommonsRuleOptions',
	plugin: { rules: Object.fromEntries(builtinRules.entries()) },
	overwrite: true,
});
