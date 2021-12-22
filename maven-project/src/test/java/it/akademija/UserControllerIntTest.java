package it.akademija;

import org.hamcrest.CoreMatchers;
import org.hamcrest.MatcherAssert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.test.context.junit4.SpringRunner;

import it.akademija.users.CreateUserCommand;
import it.akademija.users.User;

import java.util.List;

 
@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = 
SpringBootTest.WebEnvironment.RANDOM_PORT,
classes = {App.class})  
public class UserControllerIntTest {
	
	private static final String URI = "/api/users";
	@Autowired 
	private TestRestTemplate rest;
	
	@Test
	public void createsUserThenRetrievesUserListAndDeletesUser() {
		final String username = "testUsername";
		final CreateUserCommand createUser = new CreateUserCommand();
		createUser.setUsername(username);
		rest.postForLocation(URI, createUser);
		List<User> users = rest.getForEntity(URI,  List.class ).getBody();
		MatcherAssert.assertThat(users.size(), CoreMatchers.is(1));
		rest.delete(URI + "/" + username);
		users = rest.getForEntity(URI, List.class).getBody();
		MatcherAssert.assertThat(users.size(), CoreMatchers.is(0));
	}
	
}
