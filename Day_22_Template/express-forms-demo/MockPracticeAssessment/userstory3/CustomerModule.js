// Customer Registration Module in TypeScript
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
        console.warn("@logaction can only be applied to methods, not properties: ".concat(propertyName));
        return;
    }
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("Calling ".concat(propertyName, " with args:"), args);
        var result = originalMethod.apply(this, args);
        console.log("Result of ".concat(propertyName, ":"), result);
        return result;
    };
    return descriptor;
}
// Class for Customer Manager
var CustomerManager = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _registerCustomer_decorators;
    return _a = /** @class */ (function () {
            function CustomerManager() {
                this.customers = (__runInitializers(this, _instanceExtraInitializers), []);
            }
            // Method to register a new customer
            CustomerManager.prototype.registerCustomer = function (customerData) {
                var newCustomer = __assign({ id: this.customers.length + 1 }, customerData);
                this.customers.push(newCustomer);
                return newCustomer;
            };
            // Method to get all customers
            CustomerManager.prototype.getCustomers = function () {
                return this.customers;
            };
            // Method to find customer by ID
            CustomerManager.prototype.findCustomerById = function (id) {
                return this.customers.find(function (customer) { return customer.id === id; });
            };
            // Iterator for customers
            CustomerManager.prototype[(_registerCustomer_decorators = [logaction], Symbol.iterator)] = function () {
                var _i, _b, customer;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _i = 0, _b = this.customers;
                            _c.label = 1;
                        case 1:
                            if (!(_i < _b.length)) return [3 /*break*/, 4];
                            customer = _b[_i];
                            return [4 /*yield*/, customer];
                        case 2:
                            _c.sent();
                            _c.label = 3;
                        case 3:
                            _i++;
                            return [3 /*break*/, 1];
                        case 4: return [2 /*return*/];
                    }
                });
            };
            return CustomerManager;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            __esDecorate(_a, null, _registerCustomer_decorators, { kind: "method", name: "registerCustomer", static: false, private: false, access: { has: function (obj) { return "registerCustomer" in obj; }, get: function (obj) { return obj.registerCustomer; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
// Example usage
var manager = new CustomerManager();
// Register a customer
var newCustomer = manager.registerCustomer({
    firstName: 'vishwas',
    lastName: 'kumawat',
    email: 'vishu.ku@example.com',
    phone: '123-456-7890',
    type: CustomerType.Individual,
    registeredEvents: [1, 2]
});
console.log('New customer registered:', newCustomer);
// Get all customers
var allCustomers = manager.getCustomers();
console.log('All customers:', allCustomers);
// Use iterator
for (var _i = 0, manager_1 = manager; _i < manager_1.length; _i++) {
    var customer = manager_1[_i];
    console.log('Customer:', customer.firstName, customer.lastName);
}
