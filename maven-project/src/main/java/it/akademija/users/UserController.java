package it.akademija.users;

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
@RequestMapping(value="api/users")
public class UserController {

	private final UserDao userDao;
	
	@Autowired
	public UserController(UserDao userDao) {
		this.userDao = userDao;
	}
	
 	@RequestMapping(method = RequestMethod.GET)
	public List<User> getUsers() {
	 
		return userDao.getUsers();
	
	}
	
 	@RequestMapping(method = RequestMethod.POST) 
	@ResponseStatus(HttpStatus.CREATED)
	public void createUser(@RequestBody final CreateUserCommand cmd) {
		int size = userDao.getUsers().size();
 		userDao.createUser(new User(cmd.getUsername() 
	 
									));
 		if(size < userDao.getUsers().size())
 			System.out.println("created " + cmd.getUsername());
	}
	
 	@RequestMapping(method = RequestMethod.DELETE, path = "/{username}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	 public void deleteUser(@PathVariable final String username) {
		
		 System.out.println("Deleted: " + username +
				 " " +  userDao.deleteUser(username));
	 }
}
