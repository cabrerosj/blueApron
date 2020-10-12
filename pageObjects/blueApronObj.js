var blueCommands = {
    mealOptions: function (data) {
        this
            .click('@pricingMenu')
            .pause(2000)
            .verify.elementPresent('@twoSSTitle')
            .verify.elementPresent('@fourSSTitle')
            .verify.elementPresent('@twoSVTitle')
            .verify.elementPresent('@twoSSDesc')
            .verify.elementPresent('@fourSSDesc')
            .verify.elementPresent('@twoSVDesc')

        //Meals depending on customer choices
        //2-Serving Signature Choices
        if (data.serving === 2 && data.type === 'signature' && data.recipes === 2) {
            this
                .click('@twoSS2')
                //Checks the prices for serving, shipping, and weekly total
                .verify.containsText('@twoServingPrice', '9.99')
                .verify.containsText('@twoServingShipping', '7.99')
                .verify.containsText('@twoServingWeeklyTotal', '47.95')
        }
        else if (data.serving === 2 && data.type === 'signature' && data.recipes === 3) {
            this
                .click('@twoSS3')
                //Checks the prices for serving, shipping, and weekly total
                .verify.containsText('@fourServingPrice', '9.99')
                .verify.containsText('@fourServingShipping', 'FREE')
                .verify.containsText('@fourServingWeeklyTotal', '59.94')
        }
        else if (data.serving === 2 && data.type === 'signature' && data.recipes === 4) {
            this
                .click('@twoSS4')
                //Checks the prices for serving, shipping, and weekly total
                .verify.containsText('@fourServingPrice', '9.99')
                .verify.containsText('@fourServingShipping', 'FREE')
                .verify.containsText('@fourServingWeeklyTotal', '79.92')
        }

        //4-Serving Signature Choices
        else if (data.serving === 4 && data.type === 'signature' && data.recipes === 2) {
            this
                .click('@fourSS2')
                //Checks the prices for serving, shipping, and weekly total
                .verify.containsText('@fourServingPrice', '8.99')
                .verify.containsText('@fourServingShipping', 'FREE')
                .verify.containsText('@fourServingWeeklyTotal', '71.92')
        }
        else if (data.serving === 4 && data.type === 'signature' && data.recipes === 3) {
            this
                .click('@fourSS3')
                //Checks the prices for serving, shipping, and weekly total
                .verify.containsText('@fourServingPrice', '7.99')
                .verify.containsText('@fourServingShipping', 'FREE')
                .verify.containsText('@fourServingWeeklyTotal', '95.88')
        }
        else if (data.serving === 4 && data.type === 'signature' && data.recipes === 4) {
            this
                .click('@fourSS4')
                //Checks the prices for serving, shipping, and weekly total
                .verify.containsText('@fourServingPrice', '7.49')
                .verify.containsText('@fourServingShipping', 'FREE')
                .verify.containsText('@fourServingWeeklyTotal', '119.84')
        }
        else if (data.serving === 2 && data.type === 'vegetarian' && data.recipes === 2) {
            this
                .click('@twoSV2')
                //Checks the prices for serving, shipping, and weekly total
                .verify.containsText('@twoVegServingPrice', '9.99')
                .verify.containsText('@twoVegServingShipping', '7.99')
                .verify.containsText('@twoVegServingWeeklyTotal', '47.95')
        }
        else if (data.serving === 2 && data.type === 'vegetarian' && data.recipes === 3) {
            this
                .click('@twoSV3')
                //Checks the prices for serving, shipping, and weekly total
                .verify.containsText('@twoVegServingPrice', '9.99')
                .verify.containsText('@twoVegServingShipping', 'FREE')
                .verify.containsText('@twoVegServingWeeklyTotal', '59.94')
        }
        return this
    },
    mealCheckout: function (data) {
        this
            .click('@pricingMenu')
            .pause(2000)
            .verify.elementPresent('@twoSSTitle')
            .verify.elementPresent('@fourSSTitle')
            .verify.elementPresent('@twoSVTitle')
            .verify.elementPresent('@twoSSDesc')
            .verify.elementPresent('@fourSSDesc')
            .verify.elementPresent('@twoSVDesc')

        //Meals depending on customer choices
        //2-Serving Signature Choices
        if (data.serving === 2 && data.type === 'signature' && data.recipes === 2) {
            this
                .click('@twoSS2')
                //Checks the prices for serving, shipping, and weekly total
                .verify.containsText('@twoServingPrice', '9.99')
                .verify.containsText('@twoServingShipping', '7.99')
                .verify.containsText('@twoServingWeeklyTotal', '47.95')
                //Clicks the Select button
                .click('@twoSSSelect')
        }
        else if (data.serving === 2 && data.type === 'signature' && data.recipes === 3) {
            this
                .click('@twoSS3')
                //Checks the prices for serving, shipping, and weekly total
                .verify.containsText('@fourServingPrice', '9.99')
                .verify.containsText('@fourServingShipping', 'FREE')
                .verify.containsText('@fourServingWeeklyTotal', '59.94')
                //Clicks the Select button
                .click('@twoSSSelect')
        }
        else if (data.serving === 2 && data.type === 'signature' && data.recipes === 4) {
            this
                .click('@twoSS4')
                //Checks the prices for serving, shipping, and weekly total
                .verify.containsText('@fourServingPrice', '9.99')
                .verify.containsText('@fourServingShipping', 'FREE')
                .verify.containsText('@fourServingWeeklyTotal', '79.92')
                //Clicks the Select button
                .click('@twoSSSelect')
        }

        //4-Serving Signature Choices
        else if (data.serving === 4 && data.type === 'signature' && data.recipes === 2) {
            this
                .click('@fourSS2')
                //Checks the prices for serving, shipping, and weekly total
                .verify.containsText('@fourServingPrice', '8.99')
                .verify.containsText('@fourServingShipping', 'FREE')
                .verify.containsText('@fourServingWeeklyTotal', '71.92')
                //Clicks the Select button
                .click('@fourSSSelect')
        }
        else if (data.serving === 4 && data.type === 'signature' && data.recipes === 3) {
            this
                .click('@fourSS3')
                //Checks the prices for serving, shipping, and weekly total
                .verify.containsText('@fourServingPrice', '7.99')
                .verify.containsText('@fourServingShipping', 'FREE')
                .verify.containsText('@fourServingWeeklyTotal', '95.88')
                //Clicks the Select button
                .click('@fourSSSelect')
        }
        else if (data.serving === 4 && data.type === 'signature' && data.recipes === 4) {
            this
                .click('@fourSS4')
                //Checks the prices for serving, shipping, and weekly total
                .verify.containsText('@fourServingPrice', '7.49')
                .verify.containsText('@fourServingShipping', 'FREE')
                .verify.containsText('@fourServingWeeklyTotal', '119.84')
                //Clicks the Select button
                .click('@fourSSSelect')
        }
        else if (data.serving === 2 && data.type === 'vegetarian' && data.recipes === 2) {
            this
                .click('@twoSV2')
                //Checks the prices for serving, shipping, and weekly total
                .verify.containsText('@twoVegServingPrice', '9.99')
                .verify.containsText('@twoVegServingShipping', '7.99')
                .verify.containsText('@twoVegServingWeeklyTotal', '47.95')
                //Clicks the Select button
                .click('twoSVSelect')
        }
        else if (data.serving === 2 && data.type === 'vegetarian' && data.recipes === 3) {
            this
                .click('@twoSV3')
                //Checks the prices for serving, shipping, and weekly total
                .verify.containsText('@twoVegServingPrice', '9.99')
                .verify.containsText('@twoVegServingShipping', 'FREE')
                .verify.containsText('@twoVegServingWeeklyTotal', '59.94')
                //Clicks the Select button
                .click('twoSVSelect')
        }
        this
            //Verifies Sign-Up page is shown
            .verify.urlEquals('https://www.blueapron.com/users/sign_up')
            .pause(1000)
            .click('@login')

            //Verifies Sign-In page is shown and fills is username and password
            .verify.urlEquals('https://www.blueapron.com/users/sign_in')
            .setValue('@emailInput', 'devmountainqr4@testing.com')
            .setValue('@passwordInput', ['devmountainqr4', this.api.Keys.ENTER])

            //Verifies Customer and Payment info page is shown and fills in required fills
            .verify.urlEquals('https://www.blueapron.com/users/sign_up#checkout')
            .setValue('@firstName', 'AJ')
            .setValue('@lastName', 'Larson')
            .setValue('@address1', '1 Infinite Loop')
            .setValue('@city', 'Cupertino')
            .setValue('@phone', '8088088088')
            .setValue('#state', ['CA', this.api.Keys.ENTER])
            .pause(1000)
            .setValue('@zip', '95014')
            .pause(1000)
            .click('@continueToBilling')
            .pause(1000)
            .verify.visible('@billingTitle')
        return this

    },
    wineVisible: function () {
        this
            .click('@pricingMenu')
            .pause(1000)
            .click('@wineMenu')
            .verify.urlEquals('https://www.blueapron.com/wine')
            .verify.visible('@howItWorks')
            .verify.visible('@personalizedDelivery')
            .verify.visible('@vineyard2Doorstep')
            .verify.visible('@discoverFav')
            .verify.visible('@perfectPairing')
            .verify.visible('@blueApronWine')
            .verify.visible('@raiseGlass')
        return this
    },
    wineOrderNow: function () {
        this
            .click('@pricingMenu')
            .pause(1000)
            .click('@wineMenu')
            .pause(1000)
            .click('@orderNow1')
            .pause(1000)
            .verify.visible('@pairWindow')
            .click('@pairWindowClose')
            .pause(1000)
            .moveToElement('@orderNow1', 5, 5)
            .click('@orderNow2')
            .pause(1000)
            .verify.visible('@pairWindow')
            .click('@pairWindowClose')
            .pause(1000)
            .moveToElement('@tryBlueApronWine', 5, 5)
            .click('@tryBlueApronWine')
            .pause(1000)
            .verify.visible('@pairWindow')
            .click('@pairWindowClose')
        return this
    },
    socialMedia: function (data) {
        this
            .moveToElement('@socialMedia', 5, 5)
            .assert.attributeContains(`@${data.media}`, 'href', data.link)
        return this
    },

    topMenu: function (data) {
        this
            .click(data.nav)
            .waitForElementPresent('body')
            .verify.urlContains(data.page)

    },
    onMenuNav: function (data) {
        this
            .click('@onTheMenu')
            .waitForElementPresent('@menuSubtitle')
            .click(data.nav)
            .waitForElementVisible('@menuSubtitle')
            .verify.containsText('@menuSubtitle', data.text)
            .verify.elementPresent('@mealTitle')
            .verify.elementPresent('@mealDuration')
            .verify.elementPresent('@mealImage')

    },
    recipeSelection: function (data) {
        var self = this
        this
            .click('@onTheMenu')
            .waitForElementPresent('body')
            .getText(data, result => {
                let mealTitle = result.value
                console.log(mealTitle)
                self
                    .click(data)
                    .verify.containsText('@mealHeader', mealTitle)
                    .verify.elementPresent('@recipeIngredients')
                    .verify.elementPresent('@recipeInstructions')
                    .verify.elementPresent('@recipeCard')
                    .verify.elementPresent('@cookAlong')
                    .api.back()
            })

        return this
    },
    FAQNavigation: function (data) {
        this
            .click('@FAQ')
            .waitForElementPresent('body')
            .click(data.category)
            .waitForElementVisible('@FAQHeader')
            .verify.containsText('@FAQHeader', data.header)
            .click('@home')
        return this
    },
    FAQSearchTest: function (data) {
        this
            .waitForElementPresent('body')
            .click('@FAQ')
            .waitForElementPresent('body')
            .setValue('@FAQSearch', [data, this.api.Keys.ENTER])
        this
            .waitForElementPresent('@FAQResults')
            .verify.containsText('@FAQResults', data)
            .click('@home')
    }
}








module.exports = {
    url: 'https://www.blueapron.com/',
    commands: [blueCommands],
    elements: {
        pricingMenu: {
            selector: '(//*[text()="Pricing"])[2]',
            locateStrategy: 'xpath'
        },

        //PRICING PAGE
        //2-Serving Signature
        twoSSTitle: {
            selector: '(//*[@class="pom-PlanCard__serves"])[1]',
            locateStrategy: 'xpath'
        },
        twoSSType: {
            selector: '//*[text()="Signature"]',
            locateStrategy: 'xpath'
        },
        twoSSDesc: {
            selector: '(//*[@class="pom-PlanCard__desc"])[1]',
            locateStrategy: 'xpath'
        },
        twoSS2: {
            selector: '(//button)[2]',
            locateStrategy: 'xpath'
        },
        twoSS3: {
            selector: '(//button)[3]',
            locateStrategy: 'xpath'
        },
        twoSS4: {
            selector: '(//button)[4]',
            locateStrategy: 'xpath'
        },
        twoServingPrice: {
            selector: '(//*[@class="pom-PlanCard__price pom-PlanCard__price-serving"])[1]',
            locateStrategy: 'xpath'
        },
        twoServingShipping: {
            selector: '(//*[@class="pom-PlanCard__price pom-PlanCard__price--shipping"])[1]',
            locateStrategy: 'xpath'
        },
        twoServingWeeklyTotal: {
            selector: '(//*[@class="pom-PlanCard__price pom-PlanCard__price--total "])[1]',
            locateStrategy: 'xpath'
        },
        twoSSSelect: {
            selector: '(//*[@type="button"])[5]',
            locateStrategy: 'xpath'
        },


        //4-Serving Signature
        fourSSTitle: {
            selector: '(//*[@class="pom-PlanCard__serves"])[2]',
            locateStrategy: 'xpath'
        },
        fourSSType: {
            selector: '//*[text()="Signature for 4"]',
            locateStrategy: 'xpath'
        },
        fourSSDesc: {
            selector: '(//*[@class="pom-PlanCard__desc"])[2]',
            locateStrategy: 'xpath'
        },
        fourSS2: {
            selector: '(//button)[6]',
            locateStrategy: 'xpath'
        },
        fourSS3: {
            selector: '(//button)[7]',
            locateStrategy: 'xpath'
        },
        fourSS4: {
            selector: '(//button)[8]',
            locateStrategy: 'xpath'
        },
        fourServingPrice: {
            selector: '(//*[@class="pom-PlanCard__price pom-PlanCard__price-serving"])[2]',
            locateStrategy: 'xpath'
        },
        fourServingShipping: {
            selector: '(//*[@class="pom-PlanCard__price pom-PlanCard__price--shipping"])[2]',
            locateStrategy: 'xpath'
        },
        fourServingWeeklyTotal: {
            selector: '(//*[@class="pom-PlanCard__price pom-PlanCard__price--total "])[2]',
            locateStrategy: 'xpath'
        },
        fourSSSelect: {
            selector: '(//*[@type="button"])[9]',
            locateStrategy: 'xpath'
        },

        //2-Serving Vegetarian
        twoSVTitle: {
            selector: '(//*[@class="pom-PlanCard__serves"])[3]',
            locateStrategy: 'xpath'
        },
        twoSVType: {
            selector: '//*[text()="Vegetarian"]',
            locateStrategy: 'xpath'
        },
        twoSVDesc: {
            selector: '(//*[@class="pom-PlanCard__desc"])[3]',
            locateStrategy: 'xpath'
        },
        twoSV2: {
            selector: '(//button)[10]',
            locateStrategy: 'xpath'
        },
        twoSV3: {
            selector: '(//button)[11]',
            locateStrategy: 'xpath'
        },
        twoSVSelect: {
            selector: '(//*[@type="button"])[12]',
            locateStrategy: 'xpath'
        },
        twoVegServingPrice: {
            selector: '(//*[@class="pom-PlanCard__price pom-PlanCard__price-serving"])[3]',
            locateStrategy: 'xpath'
        },
        twoVegServingShipping: {
            selector: '(//*[@class="pom-PlanCard__price pom-PlanCard__price--shipping"])[3]',
            locateStrategy: 'xpath'
        },
        twoVegServingWeeklyTotal: {
            selector: '(//*[@class="pom-PlanCard__price pom-PlanCard__price--total "])[3]',
            locateStrategy: 'xpath'
        },

        //Sign-Up/Sign-In Page
        login: {
            selector: '(//*[@href="/users/sign_in"])[3]',
            locateStrategy: 'xpath'
        },
        emailInput: '#user-email',
        passwordInput: '#user-password',

        //Sign-Up Customer Info
        firstName: '#first_name',
        lastName: '#last_name',
        address1: '#address_line1',
        zip: '#zip',
        city: '#city',
        phone: '#phone',
        continueToBilling: '.pom-Button--mouseover',

        billingTitle: {
            selector: '//*[text()="BILLING"]',
            locateStrategy: 'xpath'
        },

        //WINE
        wineMenu: {
            selector: '(//*[@href="/wine"])[1]',
            locateStrategy: 'xpath'
        },
        howItWorks: {
            selector: '//*[text()="How It Works"]',
            locateStrategy: 'xpath'
        },
        personalizedDelivery: {
            selector: '//*[text()="Inside Your Personalized Delivery"]',
            locateStrategy: 'xpath'
        },
        vineyard2Doorstep: {
            selector: '//*[text()="From Our Vineyard to Your Doorstep"]',
            locateStrategy: 'xpath'
        },
        discoverFav: {
            selector: '//*[text()="Discover Your Favorites"]',
            locateStrategy: 'xpath'
        },
        perfectPairing: '.col-lg-6.col-sm-10.col-xs-11.col-center',
        blueApronWine: {
            selector: '//*[text()="#BlueApronWine"]',
            locateStrategy: 'xpath'
        },
        raiseGlass: '.title-heading.mb-20',

        orderNow1: {
            selector: '(//*[@class="btn btn--wine"])[1]',
            locateStrategy: 'xpath'
        },
        orderNow2: {
            selector: '(//*[@class="btn btn--wine js-wineBtn"])[1]',
            locateStrategy: 'xpath'
        },
        tryBlueApronWine: {
            selector: '(//*[@class="btn btn--wine js-wineBtn"])[2]',
            locateStrategy: 'xpath'
        },
        pairWindow: {
            selector: '(//*[@class="col-xs-12 col-sm-7 col-md-6"])[1]',
            locateStrategy: 'xpath'
        },
        pairWindowClose: {
            selector: '(//*[@class="signup-close-btn signup-wine-close-btn"])[1]',
            locateStrategy: 'xpath'
        },

        //SOCIAL MEDIA
        socialMedia: {
            selector: '(//*[@class="span3 col-md-3 desktop-only"])[1]',
            locateStrategy: 'xpath'
        },

        facebook: {
            selector: '(//*[@class="fb"])[1]',
            locateStrategy: 'xpath'
        },
        twitter: {
            selector: '(//*[@class="tw"])[1]',
            locateStrategy: 'xpath'
        },
        instagram: {
            selector: '(//*[@class="ig"])[1]',
            locateStrategy: 'xpath'
        },
        pinterest: {
            selector: '(//*[@class="pin"])[1]',
            locateStrategy: 'xpath'
        },
        // top menu navigation
        onTheMenu: {
            selector: '(//a[@data-tracking-name="On The Menu"])[2]',
            locateStrategy: 'xpath'
        },
        pricingTop: {
            selector: '(//a[@data-tracking-name="Pricing"])[2]',
            locateStrategy: 'xpath'
        },
        wineTop: {
            selector: '(//a[@data-tracking-name="Wine"])[2]',
            locateStrategy: 'xpath'
        },
        giftsTop: {
            selector: '(//a[@data-tracking-name="Gifts"])[2]',
            locateStrategy: 'xpath'
        },
        marketTop: {
            selector: '(//a[@data-tracking-name="Shop"])[2]',
            locateStrategy: 'xpath'

        },
        home: '.logo',
        // On The Menu
        vegetarian: {
            selector: '//button/span[contains(text(),"Vegetarian")]',
            locateStrategy: 'xpath'
        },

        signature: {
            selector: '(//button/span[contains(text(),"Signature")])[1]',
            locateStrategy: 'xpath'
        },
        signature4: {
            selector: '(//button/span[contains(text(),"Signature")])[2]',
            locateStrategy: 'xpath'
        },
        menuSubtitle: '.SampleRecipes-styles-module__headerSubtitle___1dzuY',
        mealTitle: {
            selector: '(//div[@class="pom-Product__Title"])[1]',
            locateStrategy: 'xpath'
        },
        mealTitle2: {
            selector: '(//div[@class="pom-Product__Title"])[2]',
            locateStrategy: 'xpath'
        },
        mealTitle3: {
            selector: '(//div[@class="pom-Product__Title"])[3]',
            locateStrategy: 'xpath'
        },
        mealTitle4: {
            selector: '(//div[@class="pom-Product__Title"])[4]',
            locateStrategy: 'xpath'
        },
        mealTitle5: {
            selector: '(//div[@class="pom-Product__Title"])[5]',
            locateStrategy: 'xpath'
        },
        mealTitle6: {
            selector: '(//div[@class="pom-Product__Title"])[6]',
            locateStrategy: 'xpath'
        },
        mealDuration: {
            selector: '(//div[@class="pom-CookDuration"])[2]',
            locateStrategy: 'xpath'
        },
        mealImage: {
            selector: '(//img[@class="pom-Product__image"])[2]',
            locateStrategy: 'xpath'
        },
        mealHeader: '.ba-recipe-title',
        recipeIngredients: '.recipe-ingredients',
        recipeInstructions: '.recipe-instructions',
        recipeCard: {
            selector: '(//a/strong[contains(text(),"CLICK FOR RECIPE CARD")])[1]',
            locateStrategy: 'xpath'
        },
        cookAlong: '.header-cook-along-btn',

        // FAQ Page
        aboutBlueApron: {
            selector: '(//h4[@class="blocks-item-title"])[1]',
            locateStrategy: 'xpath'
        },
        recipeSelection: {
            selector: '(//h4[@class="blocks-item-title"])[2]',
            locateStrategy: 'xpath'
        },
        mealDeliveries: {
            selector: '(//h4[@class="blocks-item-title"])[3]',
            locateStrategy: 'xpath'
        },
        accountInfo: {
            selector: '(//h4[@class="blocks-item-title"])[4]',
            locateStrategy: 'xpath'
        },
        giftsAndCredits: {
            selector: '(//h4[@class="blocks-item-title"])[5]',
            locateStrategy: 'xpath'
        },
        wineProgram: {
            selector: '(//h4[@class="blocks-item-title"])[6]',
            locateStrategy: 'xpath'
        },
        marketFAQ: {
            selector: '(//h4[@class="blocks-item-title"])[7]',
            locateStrategy: 'xpath'
        },
        ingredientStandards: {
            selector: '(//h4[@class="blocks-item-title"])[8]',
            locateStrategy: 'xpath'
        },
        getInTouch: {
            selector: '(//h4[@class="blocks-item-title"])[9]',
            locateStrategy: 'xpath'
        },
        FAQHeader: '.page-header',
        FAQ: {
            selector: '(//li/a[@data-tracking-name="Help Center & FAQ"])[2]',
            locateStrategy: 'xpath'
        },
        FAQSearch: '#query',
        FAQResults: '.search-results-column',


        menu: {
            selector: '(//a[@data-tracking-name="On The Menu"])[3]',
            locateStrategy: 'xpath'
        },
        pricing: {
            selector: '(//a[@data-tracking-name="Pricing"])[3]',
            locateStrategy: 'xpath'
        },
        vision: {
            selector: '//a[@href="/pages/vision"]',
            locateStrategy: 'xpath'
        },
        wine: {
            selector: '(//a[@data-tracking-name="Wine"])[3]',
            locateStrategy: 'xpath'
        },
        market: {
            selector: '(//a[@data-tracking-name="Shop"])[3]',
            locateStrategy: 'xpath'
        },
        gifts: {
            selector: '(//a[@data-tracking-name="Gifts"])[3]',
            locateStrategy: 'xpath'
        },
        blog: {
            selector: '//a[@data-tracking-name="Blog"]',
            locateStrategy: 'xpath'
        },
        cookbook: {
            selector: '//a[@data-tracking-name="Cookbook"]',
            locateStrategy: 'xpath'
        },
        suppliers: {
            selector: '//a[@href="/pages/meet-our-recent-partners"]',
            locateStrategy: 'xpath'
        },
        affiliates: {
            selector: '//a[@data-tracking-name="Affiliates"]',
            locateStrategy: 'xpath'
        },
        supply: {
            selector: '//a[@href="/pages/supply-chain-disclosure"]',
            locateStrategy: 'xpath'
        },
        safety: {
            selector: '//a[@href="http://blog.blueapron.com/foodsafety/"]',
            locateStrategy: 'xpath'
        },
        careers: {
            selector: '//a[@href="/pages/our-team"]',
            locateStrategy: 'xpath'
        },
        press: 'a[data-tracking-name="Press"]',
        team: 'a[data-tracking-name="Our Team"]',
        investor: {
            selector: '//a[@href="https://investors.blueapron.com"]',
            locateStrategy: 'xpath'
        },
        help: {
            selector: '//a[@href="https://support.blueapron.com"]',
            locateStrategy: 'xpath'
        },
        home: {
            selector: '//a[@class="elementor-button-link elementor-button elementor-size-sm"][1]',
            locateStrategy: 'xpath'
        },
        home2: {
            selector: '//a[@title="Blue Apron Holdings, Inc."]',
            locateStrategy: 'xpath'
        },
        home3: {
            selector: '//a[@href="https://blueapron.com"][1]',
            locateStrategy: 'xpath'
        }
    }



}



}
