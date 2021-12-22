package it.akademija.products;
 

public class Product {
	private static long idgen = 1;
	private long id;
	private long quantity;
	private double price;
	private String title;
	
	public Product() { }
	public Product(String title, long quantity, double price) {
		super();
		this.title = title;
		this.quantity = quantity;
		this.price = price;
		this.id = idgen++;;
	}
	
	
	public String getTitle() {
		return title;
	}
	
	 
	public void setProduct( String title, long quantity, double price) {
		this.quantity = quantity;
		this.price = price;
		this.title = title;
	}
	 
 
	public void setTitle(String title) {
		this.title = title;
	}
	public long getQuantity() {
		return quantity;
	}
 	public void setQuantity(long quantity) {
		this.quantity = quantity;
	}
	public double getPrice() {
		return price;
	}
 	public void setPrice(double price) {
		this.price = price;
	}
 	
 	public long getId() {
 		return this.id;
 	}
 	
 
}
