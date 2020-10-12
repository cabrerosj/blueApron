var blueApron

var mealOptions = require('../testAssets/blueApronAssets/mealOptions')

var mealCheckout = require('../testAssets/blueApronAssets/mealCheckout')

var socialMedia = require('../testAssets/blueApronAssets/socialMedia')

var topMenu = require('../testAssets/')

module.exports = {
    beforeEach: browser => {
        blueApron = browser.page.blueApronObj()
        blueApron
            .navigate()
    },
    afterEach: browser => {
        blueApron.end()
    },

    // 'Choose Your Menu': browser => {
    //     mealOptions.forEach(test => {
    //         blueApron.mealOptions(test)
    //     })
    // },
    // 'Meal Checkout': browser => {
    //     mealOptions.forEach(test => {
    //         blueApron.mealCheckout(test)
    //     })
    // },
    // 'Wine Visibility': browser => {
    //     blueApron.wineVisible()
    // },
    // 'Wine Links': browser => {
    //     blueApron.wineOrderNow()
    // },
    'Social Media': browser => {
        socialMedia.forEach(test => {
            blueApron.socialMedia(test)
        })
        // This test goes through all of the tabs in the top menu and verifies that they navigate to the correct page
    'Top Menu Navigation': browser => {
        topMenu.forEach(test=> {
            blueApron.topMenu(test)
        })
    
    },
    'On Menu Navigation': browser => {
        onMenu.forEach(test => {
            blueApron.onMenuNav(test)
        })
    }
    'Meal Selection': browser => {
    meals.forEach(test => {
        blueApron.recipeSelection(test)
    })
},
'FAQ Nav': browser => { 
    FAQNav.forEach(test=> {
        blueApron.FAQNavigation(test)
    })
}
'FAQ Search Functionality': browser => {
    FAQSearch.forEach(test => {
        blueApron.FAQSearchTest(test)
    })
    }
    }













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    














    














    














    














    














    










    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    














    














    














    














    














    










    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    














    














    














    














    














    










    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    














    














    














    














    














    










    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    














    














    














    














    














    










    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    














    














    














    














    














    










    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    














    














    














    














    














    











    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    













    














    














    














    














    














    













    
    
}