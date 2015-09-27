# 代理模式

Flags: 设计模式 读书笔记 技术

---

代理（proxy）是一个对象，可以用来控制对另一个对象的访问。它与所代理的*本体（real subject）*对象实现了同样的接口，并且会把任何方法调用传递给本体。

## 代理模式的定义

> Provide a surrogate or placeholder for another object to control access to it.
> 为其它对象提供一种代理以控制对这个对象的访问。

代理模式也叫委托模式，许多其他的模式，如状态模式、策略模式、访问者模式本质上都是在更特殊的场合下采用了委托模式。代理模式中主要3个角色的定义如下：

### Subject抽象主题角色

抽象主题类可以是抽象类也可以是接口，是一个最普通的业务类型定义，无特殊要求；

### RealSubject具体主题角色

也叫做被委托角色、被代理角色，是业务逻辑的具体执行者；

### Proxy代理主体角色

也叫做委托类、代理类。负责对真实角色的应用。把所有抽象主题类定义的方法限制限制委托给真实主题角色实现，并在真实主题角色处理前后做预处理和善后处理工作。

## 代理的结构

代理模式最基本的形式是对访问进行控制，代理对象并不会在本体对象的基础上添加方法或修改方法（如装饰者），也不会简化本体对象的接口（如门面元素）。它所实现的接口与本体完全相同，所有对他进行的方法调用都会传递给本体。代理对象所做的不外乎*节制*对本体的访问。

## 代理的类型

1. 虚拟代理
 虚拟代理（virtual proxy）是最有用的类型之一，用于控制对那种创建开销很大的本体的访问，把本体的实例化推迟到有方法被调用的时候，还会提供关于实例化状态的反馈，也可以在本体被加载之前扮演其替身的角色。

2. 远程代理
 远程代理（remote proxy）用于访问另一个环境中的对象。在Java中意味着访问另一个虚拟机中的对象，或者是地球另一端的某台计算机中的对象。远程对象一般都长期存在，任何时候都可以从其他环境中进行访问。
 远程代理的一种更有用的用途是控制对其他语言中的本体的访问。这种本体可能是一个Web服务资源，可也能是一个PHP对象。

3. 保护代理
 保护代理通常用来根据客户的身份控制对特定方法的访问。

## 代理模式与装饰者模式的比较

代理在很多方面都像装饰者。装饰者和虚拟代理都要对其他对象进行包装，都要实现与被包装对象相同的接口，而且都要把方法调用传递给被包装对象。

两者的区别主要在于：装饰者会对被包装对象的功能进行修改或者扩充，而代理只不过是控制对它的访问。除了有时会添加一些控制代码之外，代理并不会对传递给本体的方法调用进行修改。而装饰者就是为修改方法而生的。

另一个区别表现在被包装对象的创建方式上。在装饰者模式中，被包装对象的实例化过程是完全独立的。这个对象创建出来之后，你可以为它裹上一个或更多个装饰者。而在代理模式中，被包装对象的实例化是代理的实例化过程的一部分。在某些类型的代理中，这种实例化受到严格控制，他必须在代理内部进行。此外，代理不会像装饰者那样互相包装，他们一次只使用一个。

## 代理模式的适用场合

关于代理什么时候用，最清楚的说明可以在虚拟代理的定义中找到：虚拟代理是一个对象，用于控制对一个创建开销昂贵的资源的访问。虚拟代理是一种优化模式。如果有些类或对象需要使用大量内存保存其数据，而你不需要在实例化完成之后立即访问这些数据，或者其构造函数需要进行大量计算，那就应该使用虚拟代理将设置开销的产生推迟到真正需要使用数据的时候。

## 代理模式之利

不同类型的代理有不同的好处。

虚拟代理是一种优化模式，只有当资源的创建或保有开销较大，需要用代理控制创建时机或方式时，才可派上用场。你可以用它代替本体，而不用操心实例化开销的问题。

借助远程代理，可以把远程资源当做本地对象使用，其益处显而易见，减少了为访问远程资源而编写粘合性代码的数量，并且为此提供了单一的接口。还把与远程资源相关的所有数据统一保存在一个地方，包括资源的URL、数据格式、命令和响应的结构。如果需要访问多个Web服务，可以先创建一个抽象的通用远程代理类，然后针对每一种要访问的Web服务派生出一个子类。如果远程资源提供的API发生了变化，需要修改的代码只有一处。

## 代理模式之弊

代理刻意掩盖了大量复杂行为。

## 代码示例

```java
// java实现

public interface Subject {
	public void request();
}

public class RealSubject implements Subject {

	@Override
	public void request() {
		System.out.println("具体类方法调用");
	}

}

public class Proxy implements Subject {

	private Subject subject = null;

	public Proxy(Object subject) {
		this.subject = (Subject) subject;
	}

	@Override
	public void request() {
		this.before();
		this.subject.request();
		this.after();
	}

	private void before() {
		System.out.println("代理预处理");
	}

	private void after() {
		System.out.println("代理善后处理");
	}
}

public class Client {

	public static void main(String[] args) {

		Subject subject = new Proxy(new RealSubject());

		subject.request();
	}

}
```

## 类图结构
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="383.41357421875" height="285"><defs/><g><g transform="translate(-94,-54) scale(1,1)"><rect fill="#ffffff" stroke="none" x="244" y="64" width="83.41357421875" height="57"/></g><g transform="translate(-94,-54) scale(1,1)"><path fill="none" stroke="#000000" d="M 244 64 L 327.41357421875 64 L 327.41357421875 121 L 244 121 L 244 64 Z Z" stroke-miterlimit="10"/></g><g transform="translate(-94,-54) scale(1,1)"><path fill="none" stroke="#000000" d="M 244 89 L 327.41357421875 89" stroke-miterlimit="10"/></g><g transform="translate(-94,-54) scale(1,1)"><path fill="none" stroke="#000000" d="M 244 99 L 327.41357421875 99" stroke-miterlimit="10"/></g><g transform="translate(-94,-54) scale(1,1)"><g><path fill="none" stroke="none"/><text fill="#000000" stroke="none" font-family="Arial" font-size="13px" font-style="italic" font-weight="bold" text-decoration="none" x="264.0263671875" y="83.5">Subject</text></g></g><g transform="translate(-94,-54) scale(1,1)"><g><path fill="none" stroke="none"/><text fill="#000000" stroke="none" font-family="Arial" font-size="13px" font-style="normal" font-weight="normal" text-decoration="none" x="249" y="116.5">+Request()</text></g></g><g transform="translate(-94,-54) scale(1,1)"><rect fill="#ffffff" stroke="none" x="104" y="272" width="83.41357421875" height="57"/></g><g transform="translate(-94,-54) scale(1,1)"><path fill="none" stroke="#000000" d="M 104 272 L 187.41357421875 272 L 187.41357421875 329 L 104 329 L 104 272 Z Z" stroke-miterlimit="10"/></g><g transform="translate(-94,-54) scale(1,1)"><path fill="none" stroke="#000000" d="M 104 297 L 187.41357421875 297" stroke-miterlimit="10"/></g><g transform="translate(-94,-54) scale(1,1)"><path fill="none" stroke="#000000" d="M 104 307 L 187.41357421875 307" stroke-miterlimit="10"/></g><g transform="translate(-94,-54) scale(1,1)"><g><path fill="none" stroke="none"/><text fill="#000000" stroke="none" font-family="Arial" font-size="13px" font-style="normal" font-weight="bold" text-decoration="none" x="110.658203125" y="291.5">RealSubject</text></g></g><g transform="translate(-94,-54) scale(1,1)"><rect fill="#ffffff" stroke="none" x="384" y="272" width="83.41357421875" height="57"/></g><g transform="translate(-94,-54) scale(1,1)"><path fill="none" stroke="#000000" d="M 384 272 L 467.41357421875 272 L 467.41357421875 329 L 384 329 L 384 272 Z Z" stroke-miterlimit="10"/></g><g transform="translate(-94,-54) scale(1,1)"><path fill="none" stroke="#000000" d="M 384 297 L 467.41357421875 297" stroke-miterlimit="10"/></g><g transform="translate(-94,-54) scale(1,1)"><path fill="none" stroke="#000000" d="M 384 307 L 467.41357421875 307" stroke-miterlimit="10"/></g><g transform="translate(-94,-54) scale(1,1)"><g><path fill="none" stroke="none"/><text fill="#000000" stroke="none" font-family="Arial" font-size="13px" font-style="normal" font-weight="bold" text-decoration="none" x="409.091796875" y="291.5">Proxy</text></g></g><g transform="translate(-94,-54) scale(1,1)"><path fill="none" stroke="#000000" d="M 144 272 L 144 232 L 288 232 L 288 121" stroke-miterlimit="10"/></g><g transform="translate(-94,-54) scale(1,1)"><path fill="#FFFFFF" stroke="none" d="M 296.419035512032 141.3253497152483 L 288 121 L 279.580964487968 141.3253497152483"/></g><g transform="translate(-94,-54) scale(1,1)"><path fill="none" stroke="#000000" d="M 296.419035512032 141.3253497152483 L 288 121 L 279.580964487968 141.3253497152483 L 296.419035512032 141.3253497152483" stroke-miterlimit="10"/></g><g transform="translate(-94,-54) scale(1,1)"><path fill="none" stroke="#000000" d="M 424 272 L 424 232 L 288 232 L 288 121" stroke-miterlimit="10"/></g><g transform="translate(-94,-54) scale(1,1)"><path fill="#FFFFFF" stroke="none" d="M 296.419035512032 141.3253497152483 L 288 121 L 279.580964487968 141.3253497152483"/></g><g transform="translate(-94,-54) scale(1,1)"><path fill="none" stroke="#000000" d="M 296.419035512032 141.3253497152483 L 288 121 L 279.580964487968 141.3253497152483 L 296.419035512032 141.3253497152483" stroke-miterlimit="10"/></g><g transform="translate(-94,-54) scale(1,1)"><path fill="none" stroke="#000000" d="M 383 300 L 188 300" stroke-miterlimit="10"/></g><g transform="translate(-94,-54) scale(1,1)"><path fill="none" stroke="#000000" d="M 198.16267485762415 295.790482243984 L 188 300 L 198.16267485762415 304.209517756016" stroke-miterlimit="10"/></g></g></svg>