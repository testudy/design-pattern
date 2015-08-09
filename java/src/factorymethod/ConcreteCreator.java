package factorymethod;

public class ConcreteCreator extends Creator {

	@SuppressWarnings("unchecked")
	@Override
	public <T extends Product> T createProduct(Class<T> c) {
		Product product = null;
		
		try {
			product = (Product)Class.forName(c.getName()).newInstance();
		} catch (Exception ex) {
			// “Ï≥£¥¶¿Ì
		}
		
		return (T)product;
	}

}
