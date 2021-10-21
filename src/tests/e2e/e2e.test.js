import puppeteer from "puppeteer";
import expect from 'expect-puppeteer'

describe("App.js", () => {
  let browser;
  let page;
  let timeout = 3000
  let url = 'http://localhost:3000'
  let params = {visible: true, timeout: timeout}

  beforeAll(async () => {
    jest.setTimeout(40000);
    browser = await puppeteer.launch({ 
      headless: false,
      slowMo: 40,
    });
    page = await browser.newPage();
  });

  const printError = async (error) => {
    await page.screenshot({ path: 'src/tests/e2e/error-lead.png' })
    throw error
  }

  const loadPage = async () => {
    await page.goto(url, {waitUntil: 'networkidle2'});
    await page.waitForSelector(".App-load", {visible: true, timeout: timeout}).catch(() => printError());
  }

  const addItem = async () => {
    await page.waitForSelector("#input-title", params).catch(printError);
    await page.type("#input-title", "teste");

    
    await page.waitForSelector("#input-content", params).catch(printError);
    await page.type("#input-content", "teste");

    await page.waitForSelector("#input-add", params).catch(printError);
    await expect(page).toClick("#input-add", { timeout: timeout });
  }

  it("web site is loaded", async () => {
    await loadPage();
  });

  it("Should add item", async () => {
    await loadPage();

    await addItem();
  });

  it("Should find item added", async () => {
    await loadPage();

    await addItem();

    await page.waitForSelector("#item-0", params).catch(printError);

    await page.waitForSelector("#content-item-0", params).catch(printError);
  });

  it("Should delete item added", async () => {
    await loadPage();

    await addItem();
    
    await page.waitForSelector("#item-0", params).catch(printError);

    await page.waitForSelector("#open-box-delete", params).catch(printError);
    await expect(page).toClick("#open-box-delete", { timeout: timeout });

    await page.waitForSelector("#delete-item", params).catch(printError);
    await expect(page).toClick("#delete-item", { timeout: timeout });
  });

  afterAll(() => browser.close());
});