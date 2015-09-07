package templatemethod;

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
