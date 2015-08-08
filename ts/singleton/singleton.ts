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

var singleton1 = Singleton.getSingleton();
singleton1.doSomething();

// 将抛出错误
new Singleton();