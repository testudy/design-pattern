package templatemethod;

public class Client {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		AbstractClass class1 = new ConcreteClass1();
		AbstractClass class2 = new ConcreteClass2();
		
		class1.templateMethod();
		class2.templateMethod();
	}

}
