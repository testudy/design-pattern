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