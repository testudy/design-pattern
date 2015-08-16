package abstractfactory;

public abstract class AbstractProductA {
	public void shareMethod() {
		System.out.println("产品A的共性");
	}
	
	public abstract void doSomething();
}
