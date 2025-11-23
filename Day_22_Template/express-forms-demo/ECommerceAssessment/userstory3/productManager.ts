// productManager.ts

// Interface Definition

interface IProduct {
  id: number;
  name: string;
  category: Category;
  price: number;
  stock: number;
}

// Enum for Category

enum Category {
  Electronics = "Electronics",
  Groceries = "Groceries",
  Clothing = "Clothing",
  Furniture = "Furniture",
}

// Product Class Implementation

class Product implements IProduct {
  constructor(
    public id: number,
    public name: string,
    public category: Category,
    public price: number,
    public stock: number
  ) {}

  updatePrice(newPrice: number) {
    console.log(`\n[LOG] Action: updatePrice | Arguments:`, [newPrice]);
    this.price = newPrice;
    console.log(`Price for "${this.name}" updated to $${this.price}`);
  }

  updateStock(newStock: number) {
    console.log(`\n[LOG] Action: updateStock | Arguments:`, [newStock]);
    this.stock = newStock;
    console.log(`Stock for "${this.name}" updated to ${this.stock} units`);
  }

  display(): string {
    return `ID: ${this.id} | ${this.name} | ${this.category} | $${this.price} | Stock: ${this.stock}`;
  }
}


// Storing Products

const productss: Product[] = [
  new Product(1, "Laptop", Category.Electronics, 1200, 10),
  new Product(2, "T-Shirt", Category.Clothing, 25, 50),
  new Product(3, "Sofa", Category.Furniture, 750, 5),
  new Product(4, "Apples", Category.Groceries, 2, 200),
];

// Iteration using for...of
console.log("\n Product Inventory ");
for (const product of productss) {
  console.log(product.display());
}

// Demonstrate Decorator in Action
console.log("\n Updating Product Details ");
productss[0].updatePrice(1100);
productss[2].updateStock(8);
