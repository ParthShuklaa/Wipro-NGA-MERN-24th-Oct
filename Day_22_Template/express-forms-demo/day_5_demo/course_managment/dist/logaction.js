export function LogAction(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        const className = target.constructor?.name || target?.name || "Unknown";
        console.log(`[LOG] ${className}::${propertyKey} called with`, args);
        const result = originalMethod.apply(this, args);
        console.log(`[LOG] ${className}::${propertyKey} completed`);
        return result;
    };
    return descriptor;
}
