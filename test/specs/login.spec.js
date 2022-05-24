const homeScreen = require("../screens/home.screen")
const loginScreen = require("../screens/login.screen")
const myStoreScreen = require("../screens/myStore.screen")

let urlLoja = 'http://lojaebac.ebaconline.art.br/'
let usuario = 'gerente'
let senha = 'GD*peToHNJ1#c$sgk08EaYJQ'

describe('Access Admin Panel', () => {
    it('should login with valid credentials', async () => {
        await homeScreen.goToLogin()
        await loginScreen.setStoreAddress(urlLoja)
        await loginScreen.clickContinueButton()
        await loginScreen.clickContinueStoreCredentialsButton()
        await loginScreen.login(usuario, senha)
        await loginScreen.clickTwoFactorButton()
        await loginScreen.twoFactorLogin(senha)

        expect(await myStoreScreen.storeLogoIsDisplayed()).toBeTruthy()
        expect(await myStoreScreen.getStoreName()).toEqual('EBAC - Shop') 
    });
})