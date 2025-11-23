export function LogAction(
  target: any,
  propertyKey: string,
  descriptor: TypedPropertyDescriptor<any>
): TypedPropertyDescriptor<any> | void {
  const originalMethod = descriptor.value!;
  
  descriptor.value = function (...args: any[]) {
    const className = target.constructor?.name || target?.name || "Unknown";
    console.log(`[LOG] ${className}::${propertyKey} called with`, args);
    const result = originalMethod.apply(this, args);
    console.log(`[LOG] ${className}::${propertyKey} completed`);
    return result;
  };

  return descriptor;
}
