package singleton;


public class DesignPattern {

	public static void main(String[] args) {
		Singleton singleton = Singleton.getSingleton();
		
		singleton.doSomething();
	}

}
