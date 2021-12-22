package it.akademija.products;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "api/products")
public class ProductController {

	private final ProductDao productDao;
	
	@Autowired
	public ProductController(ProductDao productDao) {
		this.productDao = productDao;
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping(method = RequestMethod.GET)
	public List<Product> getProducts() {
		return productDao.getProducts();
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping(method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public void createProduct(@RequestBody final CreateProductCommand cmd ) {
		productDao.addProduct(new Product(
				cmd.getTitle(),
				cmd.getQuantity(),
				cmd.getPrice()));
		System.out.println("created "+ cmd.getTitle());
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping(method = RequestMethod.DELETE, path = "/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	 public void deleteUser(@PathVariable final long id) {
		
		 System.out.println("Deleted: " + id + 
				 " " +  productDao.deleteProduct(id));
	 }
}
