package builder;

public abstract class AbstractBuilder {

	// 设置产品的不同部分，以获得不同产品
	public abstract void setPart();

	// 建设产品
	public abstract AbstractProduct buildProduct();

}
