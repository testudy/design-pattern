# 单体模式

Tags: 读书笔记 技术 设计模式

---

单体，Singleton。

> 传统定义
> Ensure a class has only one instance, and provide a global point of access to it. 
> (确保某一个类只有一个实例，而且自行实例化并向整个系统提供这个实例）。

> 单体是一个只能被实例化一次并且可以通过一个众所周知的访问点访问的类。

> 广义定义
> 单体是一个用来划分命名空间并将一批相关方法和属性组织在一起的对象，如果它可以被实例化，那么它只能被实例化一次。

## 单体模式之利

单体模式的主要好处在于它对代码的组织作用。把相关方法和属性组织在一个不会被多次实例化的单体中，可以使代码的调试和维护更轻松。

## 单体模式之弊

由于单体模式提供的是一种单点访问，所以它有可能导致模块间的强耦合。

## 代码实现

只写出了饿汉式的代码示例，懒汉式的代码示例在java中容易实现（注意`synchronized`高并发时的线程安全）；TypeScript暂时无法写出优雅的懒汉式示例。

``` java
// java 版实现
public class Singleton {
	private final static Singleton singleton = new Singleton();
	
	private Singleton() {
		
	}
	
	public static Singleton getSingleton() {
		return singleton;
	}
	
	public void doSomething() {
		System.out.println("do something");
	}
}
```

``` typescript
// typescript 版实现
/**
 * typescript不支持对constructor使用private修饰符，暂时无法生成如下代码
 * var Singleton = (function () {
 *     function Singleton() {
 *     }
 *     Singleton.prototype.doSomething = function () {
 *         console.log('do something');
 *     };
 *     Singleton.getSingleton = function () {
 *         return Singleton.singleton;
 *     };
 *     Singleton.singleton = new Singleton();
 *     return {
 *         getSingleton: Singleton.getSingleton
 *     };
 * })();
 * 参考：http://www.codebelt.com/typescript/typescript-singleton-pattern/
 */
class Singleton {
    private static singleton: Singleton = new Singleton();

    constructor() {
        if (Singleton.singleton) {
            throw new Error('这是个单例，请使用Singleton.getSingleton方法');
        }
    }

    public static getSingleton(): Singleton {
        return Singleton.singleton;
    }

    public doSomething() {
        console.log('do something');
    }
}
```

## 类图结构
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="258.7490234375" height="110"><defs/><g><g transform="translate(-6,-5) scale(1,1)"><rect fill="#ffffff" stroke="none" x="16" y="35" width="188.21337890625" height="70"/></g><g transform="translate(-6,-5) scale(1,1)"><path fill="none" stroke="#000000" d="M 16 35 L 204.21337890625 35 L 204.21337890625 105 L 16 105 L 16 35 Z Z" stroke-miterlimit="10"/></g><g transform="translate(-6,-5) scale(1,1)"><path fill="none" stroke="#000000" d="M 16 60 L 204.21337890625 60" stroke-miterlimit="10"/></g><g transform="translate(-6,-5) scale(1,1)"><path fill="none" stroke="#000000" d="M 16 70 L 204.21337890625 70" stroke-miterlimit="10"/></g><g transform="translate(-6,-5) scale(1,1)"><g><path fill="none" stroke="none"/><text fill="#000000" stroke="none" font-family="Arial" font-size="13px" font-style="normal" font-weight="bold" text-decoration="none" x="83.002197265625" y="54.5">Singleton</text></g></g><g transform="translate(-6,-5) scale(1,1)"><g><path fill="none" stroke="none"/><text fill="#000000" stroke="none" font-family="Arial" font-size="13px" font-style="normal" font-weight="normal" text-decoration="none" x="21" y="87.5">+Instance(): Singleton</text><path fill="none" stroke="#000000" d="M 21 87.5 L 147.826171875 87.5" stroke-miterlimit="10"/></g></g><g transform="translate(-6,-5) scale(1,1)"><path fill="none" stroke="#000000" d="M 110 35 L 110 15 L 234 15 L 234 70 L 204 70" stroke-miterlimit="10"/></g><g transform="translate(-6,-5) scale(1,1)"><path fill="none" stroke="#000000" d="M 214.16267485762415 65.79048224398402 L 204 70 L 214.16267485762415 74.20951775601598" stroke-miterlimit="10"/></g><g transform="translate(-6,-5) scale(1,1)"><g><path fill="none" stroke="none"/><text fill="#000000" stroke="none" font-family="Arial" font-size="13px" font-style="normal" font-weight="normal" text-decoration="none" x="203" y="91">-instance</text></g></g><g transform="translate(-6,-5) scale(1,1)"><g><path fill="none" stroke="none"/><text fill="#000000" stroke="none" font-family="Arial" font-size="13px" font-style="normal" font-weight="normal" text-decoration="none" x="222" y="64">1</text></g></g></g></svg>

