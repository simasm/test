package it.akademija.carts;

import java.util.List;
import java.util.Map;

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
 
@RequestMapping(value = "api/carts")
public class CartController {

	private final CartDao cartDao;
	
	@Autowired
	public CartController(CartDao cartDao) {
		this.cartDao = cartDao;
	}
	
 	@RequestMapping(method = RequestMethod.GET)
	public Map<String, List<Long>> getCarts() {
		return cartDao.getCarts();
	}
	
 	@RequestMapping(method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public void createCart(@RequestBody final CreateCartCommand cmd ) {
		System.out.println(cmd.getCart());
		 cartDao.addCart(cmd.getUsername(), cmd.getCart());
	}
	
	@RequestMapping(method = RequestMethod.GET, path = "/{username}")
	public List<Long> getUserCart(@PathVariable final String username) {
		System.out.println(username + " requested cart");
		return cartDao.getCart(username);
	}
}
