class MyStoreScreen {
    get #myStoreLogo(){
        return $('~My store')
    }

    get #myStoreName(){
        return $('id:toolbar_subtitle')
    }

    get #productsButton(){
        return $('id:products')
    }

    async storeLogoIsDisplayed (){
        await this.#myStoreLogo.waitForExist({ timeout: 20000 })
        return await this.#myStoreLogo.isDisplayed()
    }

    async getStoreName(){
        await this.#myStoreName.waitForExist({ timeout: 10000 })
        return await this.#myStoreName.getText()
    }

    async clickProductsButton(){
        await this.#productsButton.waitForExist({ timeout: 10000 })
        await this.#productsButton.click()
    }
}

module.exports = new MyStoreScreen()