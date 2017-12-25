var webdriver = require('selenium-webdriver');
var By =  require('selenium-webdriver').By;
var Until = require('selenium-webdriver').until;

//System.setProperty("phantomjs.binary.path","")
var driver = new webdriver.Builder().forBrowser('chrome').build();

driver.manage().window().maximize();

driver.get('http://www.tokopedia.com/login.pl');




var id = driver.wait(webdriver.until.elementLocated(By.xpath("//input [@id='inputEmail' and @name='email']")), 30000);
driver.wait(webdriver.until.elementIsVisible(id), 5000).sendKeys(/*input your Email*/); //input your email ex : 'hello@gmail.com'

var pass = driver.wait(webdriver.until.elementLocated(By.xpath("//input [@id='inputPassword' and @name='password']")), 30000);
driver.wait(webdriver.until.elementIsVisible(pass), 5000).sendKeys(/*input your Password*/); //input your password ex : '123456'

driver.wait(webdriver.until.elementLocated(By.id('email_btn')), 20000).click();




var promise1 = driver.wait(webdriver.until.titleIs('Tokopedia'),1/0);

//Choose Product

var promise2 = promise1.then(driver.get(/*input your Product URL*/)); //input your product URL EX : 'https://www.tokopedia.com/casediology/supreme-dog-edition-case-untuk-iphone-6-plus-6s-plus'
driver.wait(webdriver.until.titleIs(/*input your Product title*/),1/0);//input your product title EX 'Jual Supreme Dog Edition Case Untuk Iphone 6 & 6s (4,7") - Casediology | Tokopedia | 1393271'




function check_title(){
var promise = driver.getTitle();

promise.then
   (function(title) {

   	console.log("Title is" + " " + title)
   })

};

setInterval(function() {

	check_title();
},1800000);



promise2.then(dink());


//Dink
function dink() {
setInterval (function() {
var button = driver.wait(webdriver.until.elementLocated(By.id('dink-it')), 1800000);	
var title = ''//input your product title EX 'Jual Supreme Dog Edition Case Untuk Iphone 6 & 6s (4,7") - Casediology | Tokopedia | 1393271'
	var promise3 = driver.getTitle().then(function() {

		if(title) {
	
	(button.click()).then(console.log("dink")).then((driver.navigate().to(driver.getCurrentUrl())));

	}
} )

		
},1800000) ;

};




 






