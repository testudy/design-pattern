package builder;

public class ConcreteBuilderA extends AbstractBuilder {

	private ConcreteProductA product = new ConcreteProductA();

	@Override
	public void setPart() {
		// TODO Auto-generated method stub

	}

	@Override
	public ConcreteProductA buildProduct() {
		// TODO Auto-generated method stub
		return product;
	}

}
