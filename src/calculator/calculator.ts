import { ElementHandle, expect } from "@playwright/test";

export async function openCalculator(page:any) {
 await page.goto(process.env.BASEURL);
 await page.click('"Open the calculator"');
}

export async function calculateSavingsHome(page:any,age:string,salary:string,salaryFrequency: string, balance:string,contribution: string,fundType:string,TimetobuyHome:string) {
    await page.type('#text-QUESTION_AGE', age)
    await page.click('//span[text()="Next Question"]')
    await page.click('//span[text()="First Home"]')
    await page.click('[aria-labelledby="dropdown-QUESTION_WHEN_TO_BUY_HOME"]')
    await page.click("'"+TimetobuyHome+"'");
    await fillIncomeAndKiwiSaverBalance(page,salaryFrequency,salary,balance,contribution,fundType);
}

export async function fillIncomeAndKiwiSaverBalance(page:any,salaryFrequency:string,salary:string,balance:string,contribution: string,fundType:string) {
    await page.click('[aria-labelledby="dropdown-QUESTION_EMPLOYMENT_STATUS"]')
    await page.click('"Employed"');
    if(salaryFrequency != "per year") {
        await page.click('[aria-labelledby="dropdown-QUESTION_INCOME"]')
        await page.click("'"+salaryFrequency+"'");
    }
    await page.type('#text-QUESTION_INCOME', salary)
    await page.click(':nth-match(:text("Next Question"), 2)')
    await page.type('#text-QUESTION_KIWISAVER_BALANCE', balance);
    await page.click(':nth-match(:text("Next Question"), 3)')
    await page.click('[aria-labelledby="dropdown-QUESTION_CONTRIBUTION_PERCENTAGE"]') 
    await page.click("'"+contribution+"'");
    await page.click('[aria-labelledby=dropdown-QUESTION_CURRENT_FUND]')
    await page.click("'"+fundType+"'");
}
export async function calculateSavingsRetirement(page:any,age:string,salary:string,salaryFrequency: string, balance:string,contribution: string,fundType:string) {
    await page.type('#text-QUESTION_AGE', age)
    await page.click('//span[text()="Next Question"]')
    await page.click('//span[text()="Retirement"]')
    await fillIncomeAndKiwiSaverBalance(page,salaryFrequency,salary,balance,contribution,fundType);
}

export async function validateProjection(page:any,contribution:string) {

    await page.waitForSelector('//p[contains(text(),"Your contributions")]/../../../div[2]');
    const parentElem = await page.$('//p[contains(text(),"Your contributions")]/../../../div[2]');
    const contributionElems:[ElementHandle] = await parentElem.$$('button');
    let  element:ElementHandle = contributionElems[0]
    for( let elem  of contributionElems) {
        if((await elem.innerText()) == contribution)
            element = elem
    }
    const className = await element.getAttribute("class")
    const y = await element.innerText()
    expect(className).toContain("kcYnVK")

}