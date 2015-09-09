package builder;

public class ConcreteBuilderB extends AbstractBuilder {

	private AbstractProduct product = new ConcreteProductB();

	@Override
	public void setPart() {
		// TODO Auto-generated method stub

	}

	@Override
	public AbstractProduct buildProduct() {
		// TODO Auto-generated method stub
		return product;
	}

}
