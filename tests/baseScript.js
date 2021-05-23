require("chromedriver")// npm i chromedriver- драйвер для браулзера
const {Builder, Key, By, until} = require('selenium-webdriver')// npm  i selenium-webdriver
const assert = require("assert")
describe("Checkout Google", ()=> {
    before(async function(){
        driver = await new Builder().forBrowser('chrome').build()  //говорим что хотим запустить браузер хром  
    })
    it("Поиск в Гугл", async()=>{
        await driver.get('https://google.com')
        await driver.findElement(By.xpath("//input[@name='q']")).click()// click кликнуть по элементу By - поиск элемента 
        await driver.findElement(By.xpath("//input[@name='q']")).sendKeys('Beeline', Key.RETURN)//найти элемент в дом дереве принимает в себя локатор .sendKeys() отправить некое значение в этот элемент Key.RETURN это значит нажмем кнопку интер
        await driver.wait(until.elementLocated(By.id("rcnt")), 30000)// это строичка говорит ждать пока все загрузится 1 параметр какий элемент 2 сколько время ждать
        let title = await driver.getTitle()// взять титул html страницы
       assert(title,"BeeLine - Поиск в Google") // проверка 1 параметра с 2 параметром ?????
        await driver.quit()// закрый браулзер    
    })
    after(()=>{
        driver.quit()// закрыть браулзер  
    })
})



