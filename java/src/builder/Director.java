package builder;

public class Director {
	private AbstractBuilder builderA = new ConcreteBuilderA();
	private AbstractBuilder builderB = new ConcreteBuilderB();

	public AbstractProduct getProductA() {
		builderA.setPart();
		return builderA.buildProduct();
	}

	public AbstractProduct getProductB() {
		builderB.setPart();
		return builderB.buildProduct();
	}
}
