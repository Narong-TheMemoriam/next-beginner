export default function TypescriptPage() {
    interface Product {
        quality: number;
        price: number;
    }

    const greeting = (product: Product): string => {
        return `Hello, ${product.quality}! You are ${product.price} years`;
    };
    const amount = (product: Product): string => {
        return `You have ordered ${product.quality} items at a price of ${product.price} dollars. Therefore, your total amount is ${product.quality * product.price} dollars.`;
    };

  return (
    <div>
        <h1>Typescript Page</h1>
        <p>Amount: {amount({ quality: 5, price: 14 })}</p>  
    </div>
  );
}