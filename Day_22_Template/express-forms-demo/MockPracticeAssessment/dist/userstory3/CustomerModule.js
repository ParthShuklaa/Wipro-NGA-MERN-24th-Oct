"use strict";
// Customer Registration Module in TypeScript
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Enum for customer types
var CustomerType;
(function (CustomerType) {
    CustomerType["Individual"] = "Individual";
    CustomerType["Business"] = "Business";
})(CustomerType || (CustomerType = {}));
// Decorator for logging (robust version)
function logaction(_target, propertyName, descriptor) {
    if (!descriptor) {
        console.warn(`@logaction can only be applied to methods, not properties: ${propertyName}`);
        return;
    }
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Calling ${propertyName} with args:`, args);
        const result = originalMethod.apply(this, args);
        console.log(`Result of ${propertyName}:`, result);
        return result;
    };
    return descriptor;
}
// Class for Customer Manager
class CustomerManager {
    constructor() {
        this.customers = [];
    }
    // Method to register a new customer
    registerCustomer(customerData) {
        const newCustomer = Object.assign({ id: this.customers.length + 1 }, customerData);
        this.customers.push(newCustomer);
        return newCustomer;
    }
    // Method to get all customers
    getCustomers() {
        return this.customers;
    }
    // Method to find customer by ID
    findCustomerById(id) {
        return this.customers.find(customer => customer.id === id);
    }
    // Iterator for customers
    *[Symbol.iterator]() {
        for (const customer of this.customers) {
            yield customer;
        }
    }
}
__decorate([
    logaction,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], CustomerManager.prototype, "registerCustomer", null);
// Example usage
const manager = new CustomerManager();
// Register a customer
const newCustomer = manager.registerCustomer({
    firstName: 'vishwas',
    lastName: 'kumawat',
    email: 'vishu.ku@example.com',
    phone: '123-456-7890',
    type: CustomerType.Individual,
    registeredEvents: [1, 2]
});
console.log('New customer registered:', newCustomer);
// Get all customers
const allCustomers = manager.getCustomers();
console.log('All customers:', allCustomers);
// Use iterator
for (const customer of manager) {
    console.log('Customer:', customer.firstName, customer.lastName);
}
//# sourceMappingURL=CustomerModule.js.map