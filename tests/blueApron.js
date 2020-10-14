var blueApron

var giftCard = require('../testAssets/blueApronAssets/giftCard')

var mealOptions = require('../testAssets/blueApronAssets/mealOptions')

var mealCheckout = require('../testAssets/blueApronAssets/mealCheckout')

var socialMedia = require('../testAssets/blueApronAssets/socialMedia')

var onMenu = require('../testAssets/blueApronAssets/onMenu')

var topMenu = require('../testAssets/blueApronAssets/apronTopMenu')

var meals = require('../testAssets/blueApronAssets/meals')

var FAQNav = require('../testAssets/blueApronAssets/FAQNav')

var FAQSearch = require('../testAssets/blueApronAssets/FAQSearch')

module.exports = {
    beforeEach: browser => {
        blueApron = browser.page.blueApronObj()
        blueApron
            .navigate()
    },
    afterEach: browser => {
        blueApron.end()
    },

    'Choose Your Menu': browser => {
        mealOptions.forEach(test => {
            blueApron.mealOptions(test)
        })
    },
    'Meal Checkout': browser => {
        mealCheckout.forEach(test => {
            blueApron.mealCheckout(test)
        })
    },
    'Wine Visibility': browser => {
        blueApron.wineVisible()
    },
    'Wine Links': browser => {
        blueApron.wineOrderNow()
    },
    'Social Media': browser => {
        socialMedia.forEach(test => {
            blueApron.socialMedia(test)
        })
    },
    // This test goes through all of the tabs in the top menu and verifies that they navigate to the correct page
    'Top Menu Navigation': browser => {
        topMenu.forEach(test => {
            blueApron.topMenu(test)
        })

    },
    'On Menu Navigation': browser => {
        onMenu.forEach(test => {
            blueApron.onMenuNav(test)
        })
    },
    'Meal Selection': browser => {
        meals.forEach(test => {
            blueApron.recipeSelection(test)
        })
    },
    'FAQ Nav': browser => {
        FAQNav.forEach(test => {
            blueApron.FAQNavigation(test)
        })
    },
    'FAQ Search Functionality': browser => {
        FAQSearch.forEach(test => {
            blueApron.FAQSearchTest(test)
        })
    },
    'navigating bottom menu': browser => {
        blueApron.bottomFooter()
    },

    'Gift card test': browser => {
        giftCard.forEach(meals => {
            blueApron.mealCards(meals)
        })
    },
    'Market test': browser => {
        blueApron
            .click('@market')
            .verify.containsText('@fallWineHeader', 'Fall Wine Bundles')
            .verify.containsText('@essentialWines', 'Essential Wines')
            .verify.containsText('@kitchenTools', 'Kitchen Tools')
            .verify.containsText('@pantry', 'Pantry')
            .verify.containsText('@wineCases', 'Wines by the Case')
    },
    'wineTest': async (browser) => {
        blueApron
            .click('@market')
        browser
            .pause(500)
        const wineArray = (await browser.elements('xpath', '//div[contains(@id,"wine")][contains(@class,"Prod")]/div[@class="prod-row row"]/div/div[2]/span')).value
        console.log(wineArray.length)
        for (let i = 1; i < wineArray.length; i++) {
            browser
                .useXpath()
            const price = (await browser.getText(`(//div[contains(@id,"wine")][contains(@class,"Prod")]/div[@class="prod-row row"]/div/div[2]/span)[${i}]`)).value.slice(1)
            if (price < 50) {
                console.log('Yay cheap wine!')
            }
            else {
                console.log('This one empty, Yeet!')
            }
        }
    }

}