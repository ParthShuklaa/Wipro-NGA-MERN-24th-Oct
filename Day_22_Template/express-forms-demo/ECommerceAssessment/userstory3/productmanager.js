// productManager.ts
// Enum for Category
var Category;
(function (Category) {
    Category["Electronics"] = "Electronics";
    Category["Groceries"] = "Groceries";
    Category["Clothing"] = "Clothing";
    Category["Furniture"] = "Furniture";
})(Category || (Category = {}));
// Product Class Implementation
var Product = /** @class */ (function () {
    function Product(id, name, category, price, stock) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
        this.stock = stock;
    }
    Product.prototype.updatePrice = function (newPrice) {
        console.log("\n[LOG] Action: updatePrice | Arguments:", [newPrice]);
        this.price = newPrice;
        console.log("Price for \"".concat(this.name, "\" updated to $").concat(this.price));
    };
    Product.prototype.updateStock = function (newStock) {
        console.log("\n[LOG] Action: updateStock | Arguments:", [newStock]);
        this.stock = newStock;
        console.log("Stock for \"".concat(this.name, "\" updated to ").concat(this.stock, " units"));
    };
    Product.prototype.display = function () {
        return "ID: ".concat(this.id, " | ").concat(this.name, " | ").concat(this.category, " | $").concat(this.price, " | Stock: ").concat(this.stock);
    };
    return Product;
}());
// Storing Products
var productss = [
    new Product(1, "Laptop", Category.Electronics, 1200, 10),
    new Product(2, "T-Shirt", Category.Clothing, 25, 50),
    new Product(3, "Sofa", Category.Furniture, 750, 5),
    new Product(4, "Apples", Category.Groceries, 2, 200),
];
// Iteration using for...of
console.log("\n Product Inventory ");
for (var _i = 0, productss_1 = productss; _i < productss_1.length; _i++) {
    var product = productss_1[_i];
    console.log(product.display());
}
// Demonstrate Decorator in Action
console.log("\n Updating Product Details ");
productss[0].updatePrice(1100);
productss[2].updateStock(8);
