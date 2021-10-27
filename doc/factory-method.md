# 工厂方法模式

Tags: 设计模式 技术 读书笔记

---

## 简单工厂

把成员对象（实例）的创建转交给一个外部对象（简单工厂对象）。
如果负责创建实例的方法的逻辑不会发生变化，那么一般来说用单体或静态类方法创建这些实例是合乎情理的。

## 工厂方法模式

> Define an interface for creating an object, but let subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses.

> 定义一个用于创建对象的接口，让子类决定实例化哪一个类。工厂方法使一个类的实例化延迟到其子类。

> 工厂是一个将其成员对象的实例化推迟到子类中进行的类。（延迟的意思：原来在父类中写的实例化代码，现在写在子类中）

简单工厂和工厂模式之间的区别：简单工厂通常另外使用一个类或者对象封装实例化操作，而真正的工厂模式则需要实现一个抽象的工厂方法并把实例化工作推迟到子类中进行。

## 适用场合

创建新对象最简单的方法是使用`new`关键字和具体类。只有在某些场合下，创建和维护对象工厂所带来的额外复杂性才是物有所值。

1. **动态实现**，与一系列实现了同一接口、可以被同等对待的类打交道；
2. **节省设置开销**，设置代码只存在于一个地方；
3. 用许多小型对象组成一个大对象。

## 工厂模式之利

*弱化对象间的耦合，防止代码的重复*

工厂模式的主要好处在于消除对象间的耦合。通过使用工厂方法而不是`new`关键字及具体类，可以把所有实例化代码集中在一个位置。

## 工厂模式之弊

工厂模式不是万金油，切勿滥用。如果根本不可能换用另外一个类，或者不需要在运行期间在一系列可换的类中进行选择，那就不应该使用工厂模式。

## 代码示例

``` java
// java 版实现
public abstract class Product {
	// 产品类的公用方法
	public void method1() {
		System.out.println("product method 1");
	}
	
	public abstract void method2();
}

public class ConcreteProduct extends Product {

	@Override
	public void method2() {
		System.out.println("product method 2");
	}

}

public abstract class Creator {
	/*
	 * 创建一个产品对象，其输入参数类型可以自行设置
	 * 通常为String，Enum，Class等，当然也可以留空
	 */
	public abstract <T extends Product> T createProduct(Class<T> c);
}

public class ConcreteCreator extends Creator {

	@SuppressWarnings("unchecked")
	@Override
	public <T extends Product> T createProduct(Class<T> c) {
		Product product = null;
		
		try {
			product = (Product)Class.forName(c.getName()).newInstance();
		} catch (Exception ex) {
			// 异常处理
		}
		
		return (T)product;
	}

}
```

``` typescript
// typescript 版实现
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
```

## 类图结构
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="345.76708984375" height="217.5"><defs/><g><g transform="translate(-10,-10) scale(1,1)"><rect fill="#ffffff" stroke="none" x="20" y="20" width="118.814453125" height="57"/></g><g transform="translate(-10,-10) scale(1,1)"><path fill="none" stroke="#000000" d="M 20 20 L 138.814453125 20 L 138.814453125 77 L 20 77 L 20 20 Z Z" stroke-miterlimit="10"/></g><g transform="translate(-10,-10) scale(1,1)"><path fill="none" stroke="#000000" d="M 20 45 L 138.814453125 45" stroke-miterlimit="10"/></g><g transform="translate(-10,-10) scale(1,1)"><path fill="none" stroke="#000000" d="M 20 55 L 138.814453125 55" stroke-miterlimit="10"/></g><g transform="translate(-10,-10) scale(1,1)"><g><path fill="none" stroke="none"/><text fill="#000000" stroke="none" font-family="Arial" font-size="13px" font-style="italic" font-weight="bold" text-decoration="none" x="57.733154296875" y="39.5">Creator</text></g></g><g transform="translate(-10,-10) scale(1,1)"><g><path fill="none" stroke="none"/><text fill="#000000" stroke="none" font-family="Arial" font-size="13px" font-style="italic" font-weight="normal" text-decoration="none" x="25" y="72.5">+FactoryMethod()</text></g></g><g transform="translate(-10,-10) scale(1,1)"><rect fill="#ffffff" stroke="none" x="226.95263671875" y="20" width="118.814453125" height="57"/></g><g transform="translate(-10,-10) scale(1,1)"><path fill="none" stroke="#000000" d="M 226.95263671875 20 L 345.76708984375 20 L 345.76708984375 77 L 226.95263671875 77 L 226.95263671875 20 Z Z" stroke-miterlimit="10"/></g><g transform="translate(-10,-10) scale(1,1)"><path fill="none" stroke="#000000" d="M 226.95263671875 45 L 345.76708984375 45" stroke-miterlimit="10"/></g><g transform="translate(-10,-10) scale(1,1)"><path fill="none" stroke="#000000" d="M 226.95263671875 55 L 345.76708984375 55" stroke-miterlimit="10"/></g><g transform="translate(-10,-10) scale(1,1)"><g><path fill="none" stroke="none"/><text fill="#000000" stroke="none" font-family="Arial" font-size="13px" font-style="italic" font-weight="bold" text-decoration="none" x="263.958984375" y="39.5">Product</text></g></g><g transform="translate(-10,-10) scale(1,1)"><rect fill="#ffffff" stroke="none" x="20" y="173.5" width="111.58447265625" height="44"/></g><g transform="translate(-10,-10) scale(1,1)"><path fill="none" stroke="#000000" d="M 20 173.5 L 131.58447265625 173.5 L 131.58447265625 217.5 L 20 217.5 L 20 173.5 Z Z" stroke-miterlimit="10"/></g><g transform="translate(-10,-10) scale(1,1)"><path fill="none" stroke="#000000" d="M 20 198.5 L 131.58447265625 198.5" stroke-miterlimit="10"/></g><g transform="translate(-10,-10) scale(1,1)"><path fill="none" stroke="#000000" d="M 20 208.5 L 131.58447265625 208.5" stroke-miterlimit="10"/></g><g transform="translate(-10,-10) scale(1,1)"><g><path fill="none" stroke="none"/><text fill="#000000" stroke="none" font-family="Arial" font-size="13px" font-style="normal" font-weight="bold" text-decoration="none" x="27.74365234375" y="193">ConcreteCreator</text></g></g><g transform="translate(-10,-10) scale(1,1)"><path fill="none" stroke="#000000" d="M 76 173 Q 76 168 78 78" stroke-miterlimit="10"/></g><g transform="translate(-10,-10) scale(1,1)"><path fill="#FFFFFF" stroke="none" d="M 85.96539455257874 98.50737646852345 L 78 78 L 69.13147953771644 98.13328946819317"/></g><g transform="translate(-10,-10) scale(1,1)"><path fill="none" stroke="#000000" d="M 85.96539455257874 98.50737646852345 L 78 78 L 69.13147953771644 98.13328946819317 L 85.96539455257874 98.50737646852345" stroke-miterlimit="10"/></g><g transform="translate(-10,-10) scale(1,1)"><rect fill="#ffffff" stroke="none" x="226.95263671875" y="173.5" width="114.4599609375" height="44"/></g><g transform="translate(-10,-10) scale(1,1)"><path fill="none" stroke="#000000" d="M 226.95263671875 173.5 L 341.41259765625 173.5 L 341.41259765625 217.5 L 226.95263671875 217.5 L 226.95263671875 173.5 Z Z" stroke-miterlimit="10"/></g><g transform="translate(-10,-10) scale(1,1)"><path fill="none" stroke="#000000" d="M 226.95263671875 198.5 L 341.41259765625 198.5" stroke-miterlimit="10"/></g><g transform="translate(-10,-10) scale(1,1)"><path fill="none" stroke="#000000" d="M 226.95263671875 208.5 L 341.41259765625 208.5" stroke-miterlimit="10"/></g><g transform="translate(-10,-10) scale(1,1)"><g><path fill="none" stroke="none"/><text fill="#000000" stroke="none" font-family="Arial" font-size="13px" font-style="normal" font-weight="bold" text-decoration="none" x="235.4072265625" y="193">ConcreteProduct</text></g></g><g transform="translate(-10,-10) scale(1,1)"><path fill="none" stroke="#000000" d="M 284 173 Q 285 80 285 78" stroke-miterlimit="10"/></g><g transform="translate(-10,-10) scale(1,1)"><path fill="#FFFFFF" stroke="none" d="M 293.419035512032 98.32534971524831 L 285 78 L 276.580964487968 98.32534971524831"/></g><g transform="translate(-10,-10) scale(1,1)"><path fill="none" stroke="#000000" d="M 293.419035512032 98.32534971524831 L 285 78 L 276.580964487968 98.32534971524831 L 293.419035512032 98.32534971524831" stroke-miterlimit="10"/></g><g transform="translate(-10,-10) scale(1,1)"><path fill="none" stroke="#000000" d="M 133 195 L 226 195" stroke-miterlimit="10" stroke-dasharray="3"/></g><g transform="translate(-10,-10) scale(1,1)"><path fill="none" stroke="#000000" d="M 215.83732514237585 199.209517756016 L 226 195 L 215.83732514237585 190.790482243984" stroke-miterlimit="10"/></g></g></svg>

