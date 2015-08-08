package singleton;

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
