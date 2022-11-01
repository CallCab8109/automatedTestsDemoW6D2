//import By

const {By} = require('selenium-webdriver')

//the function
const addMovie = async (driver) => {
    //first select input field
    await driver.findElement(By.xpath('//input')).sendKeys('Megamind')

    //select the add button
    await driver.findElement(By.xpath('//button')).click()

    //find the li element because we want to check if the movie is added there
    const movie = await driver.findElement(By.xpath('//li'))

    const displayed = movie.isDisplayed()

    //expect this to be true
    expect(displayed).toBeTruthy()
}

module.exports = {
    addMovie
}