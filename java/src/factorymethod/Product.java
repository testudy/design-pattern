package factorymethod;

public abstract class Product {
	// 产品类的公用方法
	public void method1() {
		System.out.println("product method 1");
	}
	
	public abstract void method2();
}
