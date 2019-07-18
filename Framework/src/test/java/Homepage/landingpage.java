package Homepage;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class landingpage {
	WebDriver driver;
	By login_popup=By.xpath("//button[@class='_2AkmmA _29YdH8']");
	By searchbox=By.xpath("//input[@placeholder='Search for products, brands and more']");
	By searched_item=By.xpath("//span[@class='_2yAnYN']/span");
	public landingpage(WebDriver driver) {
		this.driver=driver;
	}
	public void closeloginpopup() {
		driver.findElement(login_popup).click();
	}
	public void searchproduct(String prod) {
		driver.findElement(searchbox).sendKeys(prod);
	}
	public void get_searched_item() {
		String searchedtext=driver.findElement(searched_item).getText();
		System.out.println(searchedtext);
	}
}
