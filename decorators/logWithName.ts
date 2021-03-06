export function logWithName(name: string) {
	return function decorator(t: any, n: string, descriptor: PropertyDescriptor) {
		const original = descriptor.value;
		if (typeof original === 'function') {
			descriptor.value = function(...args: any[]) {
				console.log(`Arguments for ${name}: ${args}`);
				try {
					const result = original.apply(this, args);
					console.log(`Result from ${name}: ${result}`);
					return result;
				} catch (e) {
					console.log(`Error from ${name}: ${e}`);
					throw e;
				}
			};
		}
		return descriptor;
	};
}
