/*
 * 抽象类的实现参考下面
 * 参考：http://patrickdesjardins.com/blog/typescript-abstract-classes
 */
class Product {
    public method1(): void {
        console.log('product method 1');
    }

    public method2(): void {
        throw new Error('这是一个抽象方法，必须实现它');
    }
}

class ConcreteProduct extends Product {
    public method2(): void {
        console.log('product method 2');
    }
}

class Creator {
    public createProduct(name): Product {
        throw new Error('这是一个抽象方法，必须实现它');
    }
}

class ConcreteCreator extends Creator {
    public createProduct(name): Product {
        if (name === 'concrete product') {
            return new ConcreteProduct();
        }
    }
}

function main() {
    var creator: Creator = new ConcreteCreator();
    var product: Product = creator.createProduct('concrete product');
    product.method1();
    product.method2();
}

main();