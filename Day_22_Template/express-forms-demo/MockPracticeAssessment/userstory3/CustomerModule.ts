// Customer Registration Module in TypeScript

// Enum for customer types
enum CustomerType {
    Individual = 'Individual',
    Business = 'Business'
}

// Interface for Customer
interface ICustomer {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    type: CustomerType;
    registeredEvents: number[];
}

// Tuple for coordinates (example: [latitude, longitude])
type Coordinates = [number, number];

// Decorator for logging (robust version)
function logaction(_target: any, propertyName: string, descriptor?: PropertyDescriptor) {
    if (!descriptor) {
        console.warn(`@logaction can only be applied to methods, not properties: ${propertyName}`);
        return;
    }

    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`Calling ${propertyName} with args:`, args);
        const result = originalMethod.apply(this, args);
        console.log(`Result of ${propertyName}:`, result);
        return result;
    };
    return descriptor;
}

// Class for Customer Manager
class CustomerManager {
    private customers: ICustomer[] = [];

    // Method to register a new customer
    @logaction
    registerCustomer(customerData: Omit<ICustomer, 'id'>): ICustomer {
        const newCustomer: ICustomer = {
            id: this.customers.length + 1,
            ...customerData
        };
        this.customers.push(newCustomer);
        return newCustomer;
    }

    // Method to get all customers
    getCustomers(): ICustomer[] {
        return this.customers;
    }

    // Method to find customer by ID
    findCustomerById(id: number): ICustomer | undefined {
        return this.customers.find(customer => customer.id === id);
    }

    // Iterator for customers
    *[Symbol.iterator]() {
        for (const customer of this.customers) {
            yield customer;
        }
    }
}

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
