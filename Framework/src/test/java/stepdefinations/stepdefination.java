package stepdefinations;

import java.io.FileReader;
import java.util.List;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import Homepage.landingpage;
import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class stepdefination {
	WebDriver driver;
	landingpage object;
    Properties data;  
    
	@Given("^User on login page$")
	public void user_on_login_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    System.out.println("login");
	}

	@When("^enter valid creds$")
	public void enter_valid_creds() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("valid");
	}

	@Then("^navigated to dashboard$")
	public void navigated_to_dashboard() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("dash");
	}
	@When("^enter valid creds as \"([^\"]*)\" and \"([^\"]*)\"$")
	public void enter_valid_creds_as_and(String username, String password) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println(username);
		System.out.println(password);
	}
	@When("^enter following details$")
	public void enter_following_details(DataTable usersdata) throws Throwable {
	    List<List<String>> userdata= usersdata.raw();
	    System.out.println(userdata.get(0).get(0));
	    System.out.println(userdata.get(0).get(1));
	    System.out.println(userdata.get(0).get(2));
	    System.out.println(userdata.get(0).get(3));
	}
	@Then("^userprofile displayed$")
	public void userprofile_displayed() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    System.out.println("user prof");
	}
	@When("^enter valid creds as (.+) and password (.+)$")
	public void enter_valid_creds_as_password(String user, String pass) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println(user);
		System.out.println(pass);
	}

@Given("^Navigate to flipkart$")
public void navigate_to_flipkart() throws Throwable {
	data=new Properties();
	FileReader reader=new FileReader("src\\test\\java\\testData\\data.properties");  
	data.load(reader); 
    String URL=data.getProperty("URL");  
	WebDriverManager.chromedriver().setup();
    driver = new ChromeDriver();
    driver.manage().window().maximize();
    driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
    driver.get(URL);
    //String login_popup=data.getProperty("login_popup"); 
    //driver.findElement(By.xpath(login_popup)).click();
    object=new landingpage(driver);
    object.closeloginpopup();
}

@When("^search for (.+)$")
public void search_for_honor_n(String prod) throws Throwable {
	System.out.println("Searching for "+prod);
	//String searchbox=data.getProperty("searchbox");
    //driver.findElement(By.xpath(searchbox)).sendKeys(prod+ Keys.ENTER);
	object.searchproduct(prod+ Keys.ENTER);
}

@When("^hit enter$")
public void hit_enter() throws Throwable {
    System.out.println("Searching Now");
}

@Then("^goes to prod details$")
public void goes_to_prod_details() throws Throwable {
	//String searched_item=data.getProperty("searched_item");
    //System.out.println(driver.findElement(By.xpath(searched_item)).getText());
	
	object.get_searched_item();
    Thread.sleep(2000);
    driver.quit();
}

}
