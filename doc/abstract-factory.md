# 抽象工厂模式

Tags: 设计模式 读书 笔记

---

## 抽象工厂模式

> Provide an interface for creating families of related or dependent objects without specifying their concrete classes.
> 为创建一组相关或相依赖的对象提供一个接口，而且无需指定他们的具体类。

## 适用场合

抽象工厂模式是工厂方法模式的升级版本，在有多个业务品种、业务分类时，通过抽象工厂模式产生需要的对象是一种非常好的解决方式。
一个对象族（或是一组没有任何关系的对象）都有相同的约束，则可以使用抽象工厂模式。比如，在涉及到不同的操作系统的时候，可以考虑使用抽象工厂模式，通过工厂模式屏蔽掉操作系统对应用的影响。不同操作系统上的软件功能、应用逻辑、UI都应该非常相似，唯一不同的是调用不同的工厂方法，由不同的产品类去处理与操作系统交互的信息。

## 抽象工厂模式之利

 1. 封装性，只要知道工厂类是谁，就能创建出一个需要的对象，不用关心对象是如何创建的；
 2. 产品族内的约束为非公开状态。

## 抽象工厂模式之弊

 1. 抽象工厂模式最大的缺点是产品族（纵向）扩展非常困难，产品等级（横向）扩展方便。

## 代码示例

```java
// java 实现
public abstract class AbstractProductA {
	public void shareMethod() {
		System.out.println("产品A的共性");
	}

	public abstract void doSomething();
}

public class ConcreteProductA1 extends AbstractProductA {

	@Override
	public void doSomething() {
		System.out.println("产品A1方法");
	}
}

public class ConcreteProductA2 extends AbstractProductA {

	@Override
	public void doSomething() {
		System.out.println("产品A2方法");
	}
}

public abstract class AbstractProductB {
	public void shareMethod() {
		System.out.println("产品B的共性");
	}

	public abstract void doSomething();
}

public class ConcreteProductB1 extends AbstractProductB {

	@Override
	public void doSomething() {
		System.out.println("产品B1方法");
	}
}

public class ConcreteProductB2 extends AbstractProductB {

	@Override
	public void doSomething() {
		System.out.println("产品B2方法");
	}
}

public abstract class AbstractCreator {
	public abstract AbstractProductA createProductA();

	public abstract AbstractProductB createProductB();
}

public class ConcreteCreator1 extends AbstractCreator {

	@Override
	public AbstractProductA createProductA() {
		return new ConcreteProductA1();
	}

	@Override
	public AbstractProductB createProductB() {
		return new ConcreteProductB1();
	}
}

public class ConcreteCreator2 extends AbstractCreator {

	@Override
	public AbstractProductA createProductA() {
		return new ConcreteProductA2();
	}

	@Override
	public AbstractProductB createProductB() {
		return new ConcreteProductB2();
	}
}

public class Client {

	public static void main(String[] args) {
		AbstractCreator creator1 = new ConcreteCreator1();
		AbstractCreator creator2 = new ConcreteCreator2();

		AbstractProductA productA1 = creator1.createProductA();
		AbstractProductB productB1 = creator1.createProductB();

		AbstractProductA productA2 = creator2.createProductA();
		AbstractProductB productB2 = creator2.createProductB();

		productA1.doSomething();
		productB1.doSomething();

		productA2.doSomething();
		productB2.doSomething();
	}

}

```

``` typescript
// typescript
class AbstractProductA {
    public shareMethod(): void {
        console.log('产品A的共性');
    }

    public doSomething(): void {
        throw new Error('这是一个抽象方法，必须实现它');
    }
}

class ConcreteProductA1 extends AbstractProductA {
    public doSomething(): void {
        console.log('产品A1方法');
    }
}

class ConcreteProductA2 extends AbstractProductA {
    public doSomething(): void {
        console.log('产品A2方法');
    }
}

class AbstractProductB {
    public shareMethod(): void {
        console.log('产品B的共性');
    }

    public doSomething(): void {
        throw new Error('这是一个抽象方法，必须实现它');
    }
}

class ConcreteProductB1 extends AbstractProductB {
    public doSomething(): void {
        console.log('产品B1方法');
    }
}

class ConcreteProductB2 extends AbstractProductB {
    public doSomething(): void {
        console.log('产品B2方法');
    }
}

class AbstractCreator {
    public createProductA(): AbstractProductA {
        throw new Error('这是一个抽象方法，必须实现它');
    }

    public createProductB(): AbstractProductB {
        throw new Error('这是一个抽象方法，必须实现它');
    }
}

class ConcreteCreator1 extends AbstractCreator {
    public createProductA(): AbstractProductA {
        return new ConcreteProductA1();
    }

    public createProductB(): AbstractProductB {
        return new ConcreteProductB1();
    }
}

class ConcreteCreator2 extends AbstractCreator {
    public createProductA(): AbstractProductA {
        return new ConcreteProductA2();
    }

    public createProductB(): AbstractProductB {
        return new ConcreteProductB2();
    }
}

class Client {
    public static main(): void {
        var creator1: AbstractCreator = new ConcreteCreator1();
        var creator2: AbstractCreator = new ConcreteCreator2();
        var productA1: AbstractProductA = creator1.createProductA();
        var productB1: AbstractProductB = creator1.createProductB();
        var productA2: AbstractProductA = creator2.createProductA();
        var productB2: AbstractProductB = creator2.createProductB();

        productA1.doSomething();
        productB1.doSomething();
        productA2.doSomething();
        productB2.doSomething();
    }
}

Client.main();
```

## 类图结构
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="422.4599609375" height="365"><defs/><g><g transform="translate(-94,-54) scale(1,1)"><rect fill="#ffffff" stroke="none" x="248" y="64" width="114.4599609375" height="57"/></g><g transform="translate(-94,-54) scale(1,1)"><path fill="none" stroke="#000000" d="M 248 64 L 362.4599609375 64 L 362.4599609375 121 L 248 121 L 248 64 Z Z" stroke-miterlimit="10"/></g><g transform="translate(-94,-54) scale(1,1)"><path fill="none" stroke="#000000" d="M 248 89 L 362.4599609375 89" stroke-miterlimit="10"/></g><g transform="translate(-94,-54) scale(1,1)"><path fill="none" stroke="#000000" d="M 248 99 L 362.4599609375 99" stroke-miterlimit="10"/></g><g transform="translate(-94,-54) scale(1,1)"><g><path fill="none" stroke="none"/><text fill="#000000" stroke="none" font-family="Arial" font-size="13px" font-style="normal" font-weight="bold" text-decoration="none" x="288.61181640625" y="83.5">Client</text></g></g><g transform="translate(-94,-54) scale(1,1)"><rect fill="#ffffff" stroke="none" x="104" y="208" width="114.4599609375" height="57"/></g><g transform="translate(-94,-54) scale(1,1)"><path fill="none" stroke="#000000" d="M 104 208 L 218.4599609375 208 L 218.4599609375 265 L 104 265 L 104 208 Z Z" stroke-miterlimit="10"/></g><g transform="translate(-94,-54) scale(1,1)"><path fill="none" stroke="#000000" d="M 104 233 L 218.4599609375 233" stroke-miterlimit="10"/></g><g transform="translate(-94,-54) scale(1,1)"><path fill="none" stroke="#000000" d="M 104 243 L 218.4599609375 243" stroke-miterlimit="10"/></g><g transform="translate(-94,-54) scale(1,1)"><g><path fill="none" stroke="none"/><text fill="#000000" stroke="none" font-family="Arial" font-size="13px" font-style="italic" font-weight="bold" text-decoration="none" x="115.71728515625" y="227.5">AbstractFactory</text></g></g><g transform="translate(-94,-54) scale(1,1)"><g><path fill="none" stroke="none"/><text fill="#000000" stroke="none" font-family="Arial" font-size="13px" font-style="italic" font-weight="normal" text-decoration="none" x="109" y="260.5">+CreateProduct()</text></g></g><g transform="translate(-94,-54) scale(1,1)"><rect fill="#ffffff" stroke="none" x="392" y="208" width="114.4599609375" height="57"/></g><g transform="translate(-94,-54) scale(1,1)"><path fill="none" stroke="#000000" d="M 392 208 L 506.4599609375 208 L 506.4599609375 265 L 392 265 L 392 208 Z Z" stroke-miterlimit="10"/></g><g transform="translate(-94,-54) scale(1,1)"><path fill="none" stroke="#000000" d="M 392 233 L 506.4599609375 233" stroke-miterlimit="10"/></g><g transform="translate(-94,-54) scale(1,1)"><path fill="none" stroke="#000000" d="M 392 243 L 506.4599609375 243" stroke-miterlimit="10"/></g><g transform="translate(-94,-54) scale(1,1)"><g><path fill="none" stroke="none"/><text fill="#000000" stroke="none" font-family="Arial" font-size="13px" font-style="italic" font-weight="bold" text-decoration="none" x="402.9873046875" y="227.5">AbstractProduct</text></g></g><g transform="translate(-94,-54) scale(1,1)"><rect fill="#ffffff" stroke="none" x="104" y="352" width="114.4599609375" height="57"/></g><g transform="translate(-94,-54) scale(1,1)"><path fill="none" stroke="#000000" d="M 104 352 L 218.4599609375 352 L 218.4599609375 409 L 104 409 L 104 352 Z Z" stroke-miterlimit="10"/></g><g transform="translate(-94,-54) scale(1,1)"><path fill="none" stroke="#000000" d="M 104 377 L 218.4599609375 377" stroke-miterlimit="10"/></g><g transform="translate(-94,-54) scale(1,1)"><path fill="none" stroke="#000000" d="M 104 387 L 218.4599609375 387" stroke-miterlimit="10"/></g><g transform="translate(-94,-54) scale(1,1)"><g><path fill="none" stroke="none"/><text fill="#000000" stroke="none" font-family="Arial" font-size="13px" font-style="normal" font-weight="bold" text-decoration="none" x="113.1845703125" y="371.5">ConcreteFactory</text></g></g><g transform="translate(-94,-54) scale(1,1)"><rect fill="#ffffff" stroke="none" x="392" y="352" width="114.4599609375" height="57"/></g><g transform="translate(-94,-54) scale(1,1)"><path fill="none" stroke="#000000" d="M 392 352 L 506.4599609375 352 L 506.4599609375 409 L 392 409 L 392 352 Z Z" stroke-miterlimit="10"/></g><g transform="translate(-94,-54) scale(1,1)"><path fill="none" stroke="#000000" d="M 392 377 L 506.4599609375 377" stroke-miterlimit="10"/></g><g transform="translate(-94,-54) scale(1,1)"><path fill="none" stroke="#000000" d="M 392 387 L 506.4599609375 387" stroke-miterlimit="10"/></g><g transform="translate(-94,-54) scale(1,1)"><g><path fill="none" stroke="none"/><text fill="#000000" stroke="none" font-family="Arial" font-size="13px" font-style="normal" font-weight="bold" text-decoration="none" x="400.45458984375" y="371.5">ConcreteProduct</text></g></g><g transform="translate(-94,-54) scale(1,1)"><path fill="none" stroke="#000000" d="M 248 80 L 160 80 L 160 208" stroke-miterlimit="10"/></g><g transform="translate(-94,-54) scale(1,1)"><path fill="none" stroke="#000000" d="M 155.790482243984 197.83732514237585 L 160 208 L 164.209517756016 197.83732514237585" stroke-miterlimit="10"/></g><g transform="translate(-94,-54) scale(1,1)"><path fill="none" stroke="#000000" d="M 362 80 L 448 80 L 448 208" stroke-miterlimit="10"/></g><g transform="translate(-94,-54) scale(1,1)"><path fill="none" stroke="#000000" d="M 443.790482243984 197.83732514237585 L 448 208 L 452.209517756016 197.83732514237585" stroke-miterlimit="10"/></g><g transform="translate(-94,-54) scale(1,1)"><path fill="none" stroke="#000000" d="M 218 368 L 392 368" stroke-miterlimit="10" stroke-dasharray="3"/></g><g transform="translate(-94,-54) scale(1,1)"><path fill="none" stroke="#000000" d="M 381.83732514237585 372.209517756016 L 392 368 L 381.83732514237585 363.790482243984" stroke-miterlimit="10"/></g><g transform="translate(-94,-54) scale(1,1)"><path fill="none" stroke="#000000" d="M 161 351 L 161 266" stroke-miterlimit="10"/></g><g transform="translate(-94,-54) scale(1,1)"><path fill="#FFFFFF" stroke="none" d="M 169.41903551203197 286.3253497152483 L 161 266 L 152.58096448796803 286.3253497152483"/></g><g transform="translate(-94,-54) scale(1,1)"><path fill="none" stroke="#000000" d="M 169.41903551203197 286.3253497152483 L 161 266 L 152.58096448796803 286.3253497152483 L 169.41903551203197 286.3253497152483" stroke-miterlimit="10"/></g><g transform="translate(-94,-54) scale(1,1)"><path fill="none" stroke="#000000" d="M 449 351 L 449 266" stroke-miterlimit="10"/></g><g transform="translate(-94,-54) scale(1,1)"><path fill="#FFFFFF" stroke="none" d="M 457.419035512032 286.3253497152483 L 449 266 L 440.580964487968 286.3253497152483"/></g><g transform="translate(-94,-54) scale(1,1)"><path fill="none" stroke="#000000" d="M 457.419035512032 286.3253497152483 L 449 266 L 440.580964487968 286.3253497152483 L 457.419035512032 286.3253497152483" stroke-miterlimit="10"/></g></g></svg>