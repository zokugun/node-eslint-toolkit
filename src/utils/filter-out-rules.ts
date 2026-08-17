export function filterOutRules<T>(rules: Partial<T> | undefined, excludedKeys: string[]): Partial<T> {
	if (!rules) {
		return {};
	}

	const result: Partial<T> = {};

	for (const [key, value] of Object.entries(rules)) {
		if (excludedKeys.includes(key)) {
			continue;
		}

		result[key] = value;
	}

	return result;
}
