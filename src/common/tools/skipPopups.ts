async function skipPopups(
    browser: WebdriverIO.Browser, 
    userID: string = 'e8bafd26-54cb-11ee-9701-e2c1a9365852',
): Promise<void> {
    await browser.execute(ID => {
        localStorage.setItem(`ispring::learn::coursesPage::welcomePopup::${ID}`, '1')
        localStorage.setItem(`ispring::learn::homePage::welcomePopup::${ID}`, '1')
    }, userID)

    await browser.setCookies( { 
        name: 'is_cookie_policy_accepted',
        value: 'accepted',
     })  
}

export {
    skipPopups,
}