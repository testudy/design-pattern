# 模板方法模式

Tags： 设计模式 读书笔记 技术

---

## 模板方法模式定义

> Define the skeleton of an algorithm in an operation, deferring some steps to sbuclasses. Template Method lets subclasses redefine certain steps of an algorithm without changing the algorithm's structure.

抽象模板类的方法分为两类：
1. 基本方法
    > 基本方法也叫做基本操作，是由子类实现的方法，并且在模板方法中被调用。
    > 为了防止恶意的操作，一般模板方法都加上final关键字，不允许被覆写。

2. 模板方法
    > 可以有一个或多个，一般是一个具体方法，也就是一个框架，实现对基本方法的调用，完成固定的逻辑。
    > 抽象模板中的基本方法尽量设计为protected类型，符合迪米特法则。

模板方法模式就是按照一定的规则和顺序调用基本方法。

## 模板方法模式之利
1. 封装不变部分，扩展可变部分；
2. 提取公共部分代码，便于维护；
3. 行为由父类控制，子类实现。

## 模板方法模式之弊
子类对父类产生了影响，颠倒了一般抽象类和实现类的关系。

## 适用场合
1. 多个子类有公有的方法，并且逻辑基本相同时；
2. 重要、复杂的算法，可以把核心算法设计为模板方法，周边的相关细节功能则由各个子类实现；
3. 重构时，模板方法模式是一个经常使用的模式，把相同的代码抽取到父类中，用钩子方法约束其行为。


## 示例代码
```java
// java 实现
public abstract class AbstractClass {

	// 基本方法
	protected abstract void doSomething();

	// 基本方法
	protected abstract void doAnything();

	// 模板方法
	public void templateMethod() {
		doSomething();
		doAnything();
	}

}


public class ConcreteClass1 extends AbstractClass {

	@Override
	protected void doSomething() {
		// TODO Auto-generated method stub

	}

	@Override
	protected void doAnything() {
		// TODO Auto-generated method stub

	}

}

public class ConcreteClass2 extends AbstractClass {

	@Override
	protected void doSomething() {
		// TODO Auto-generated method stub

	}

	@Override
	protected void doAnything() {
		// TODO Auto-generated method stub

	}

}

public class Client {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		AbstractClass class1 = new ConcreteClass1();
		AbstractClass class2 = new ConcreteClass2();

		class1.templateMethod();
		class2.templateMethod();
	}

}

```


## 类图结构
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="350.0869140625" height="394"><defs/><g><g transform="translate(-10,-10) scale(1,1)"><rect fill="#ffffff" stroke="none" x="50.271728515625" y="20" width="269.54345703125" height="112"/></g><g transform="translate(-10,-10) scale(1,1)"><path fill="none" stroke="#000000" d="M 50.271728515625 20 L 319.815185546875 20 L 319.815185546875 132 L 50.271728515625 132 L 50.271728515625 20 Z Z" stroke-miterlimit="10"/></g><g transform="translate(-10,-10) scale(1,1)"><path fill="none" stroke="#000000" d="M 50.271728515625 45 L 319.815185546875 45" stroke-miterlimit="10"/></g><g transform="translate(-10,-10) scale(1,1)"><path fill="none" stroke="#000000" d="M 50.271728515625 55 L 319.815185546875 55" stroke-miterlimit="10"/></g><g transform="translate(-10,-10) scale(1,1)"><g><path fill="none" stroke="none"/><text fill="#000000" stroke="none" font-family="Arial" font-size="13px" font-style="italic" font-weight="bold" text-decoration="none" x="144.948486328125" y="39.5">AbstractClass</text></g></g><g transform="translate(-10,-10) scale(1,1)"><g><path fill="none" stroke="none"/><text fill="#000000" stroke="none" font-family="Arial" font-size="13px" font-style="italic" font-weight="normal" text-decoration="none" x="55.271728515625" y="72.5">#doAnything(): void</text></g></g><g transform="translate(-10,-10) scale(1,1)"><g><path fill="none" stroke="none"/><text fill="#000000" stroke="none" font-family="Arial" font-size="13px" font-style="italic" font-weight="normal" text-decoration="none" x="55.271728515625" y="87.5">#doSomething(): void</text></g></g><g transform="translate(-10,-10) scale(1,1)"><g><path fill="none" stroke="none"/><text fill="#000000" stroke="none" font-family="Arial" font-size="13px" font-style="normal" font-weight="normal" text-decoration="none" x="55.271728515625" y="102.5">+templateMethod(): void</text></g></g><g transform="translate(-10,-10) scale(1,1)"><rect fill="#ffffff" stroke="none" x="20" y="307" width="149.54345703125" height="87"/></g><g transform="translate(-10,-10) scale(1,1)"><path fill="none" stroke="#000000" d="M 20 307 L 169.54345703125 307 L 169.54345703125 394 L 20 394 L 20 307 Z Z" stroke-miterlimit="10"/></g><g transform="translate(-10,-10) scale(1,1)"><path fill="none" stroke="#000000" d="M 20 332 L 169.54345703125 332" stroke-miterlimit="10"/></g><g transform="translate(-10,-10) scale(1,1)"><path fill="none" stroke="#000000" d="M 20 342 L 169.54345703125 342" stroke-miterlimit="10"/></g><g transform="translate(-10,-10) scale(1,1)"><g><path fill="none" stroke="none"/><text fill="#000000" stroke="none" font-family="Arial" font-size="13px" font-style="normal" font-weight="bold" text-decoration="none" x="48.529052734375" y="326.5">ConcreteClass1</text></g></g><g transform="translate(-10,-10) scale(1,1)"><rect fill="#ffffff" stroke="none" x="200.54345703125" y="307" width="149.54345703125" height="87"/></g><g transform="translate(-10,-10) scale(1,1)"><path fill="none" stroke="#000000" d="M 200.54345703125 307 L 350.0869140625 307 L 350.0869140625 394 L 200.54345703125 394 L 200.54345703125 307 Z Z" stroke-miterlimit="10"/></g><g transform="translate(-10,-10) scale(1,1)"><path fill="none" stroke="#000000" d="M 200.54345703125 332 L 350.0869140625 332" stroke-miterlimit="10"/></g><g transform="translate(-10,-10) scale(1,1)"><path fill="none" stroke="#000000" d="M 200.54345703125 342 L 350.0869140625 342" stroke-miterlimit="10"/></g><g transform="translate(-10,-10) scale(1,1)"><g><path fill="none" stroke="none"/><text fill="#000000" stroke="none" font-family="Arial" font-size="13px" font-style="normal" font-weight="bold" text-decoration="none" x="229.072509765625" y="326.5">ConcreteClass2</text></g></g><g transform="translate(-10,-10) scale(1,1)"><path fill="none" stroke="#000000" d="M 109 306 L 166 133" stroke-miterlimit="10"/></g><g transform="translate(-10,-10) scale(1,1)"><path fill="#FFFFFF" stroke="none" d="M 167.63574529187989 154.9391052082826 L 166 133 L 151.6433565222405 149.66993665412397"/></g><g transform="translate(-10,-10) scale(1,1)"><path fill="none" stroke="#000000" d="M 167.63574529187989 154.9391052082826 L 166 133 L 151.6433565222405 149.66993665412397 L 167.63574529187989 154.9391052082826" stroke-miterlimit="10"/></g><g transform="translate(-10,-10) scale(1,1)"><path fill="none" stroke="#000000" d="M 261 306 L 204 133" stroke-miterlimit="10"/></g><g transform="translate(-10,-10) scale(1,1)"><path fill="#FFFFFF" stroke="none" d="M 218.3566434777595 149.66993665412397 L 204 133 L 202.36425470812011 154.9391052082826"/></g><g transform="translate(-10,-10) scale(1,1)"><path fill="none" stroke="#000000" d="M 218.3566434777595 149.66993665412397 L 204 133 L 202.36425470812011 154.9391052082826 L 218.3566434777595 149.66993665412397" stroke-miterlimit="10"/></g></g></svg>