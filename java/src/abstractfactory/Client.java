package abstractfactory;

public class Client {

	public static void main(String[] args) {
		AbstractCreator creator1 = new ConcreteCreator1();
		AbstractCreator creator2 = new ConcreteCreator2();
		
		AbstractProductA productA1 = creator1.createProductA();
		AbstractProductB productB1 = creator1.createProductB();
		
		AbstractProductA productA2 = creator2.createProductA();
		AbstractProductB productB2 = creator2.createProductB();
		
		productA1.doSomething();
		productB1.doSomething();
		
		productA2.doSomething();
		productB2.doSomething();
	}

}
