package proxy;

public class Client {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Subject subject = new Proxy(new RealSubject());
		
		subject.request();
	}

}
