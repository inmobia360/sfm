from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 1440, "height": 900})
    page.goto('http://127.0.0.1:4173/index.html')
    page.wait_for_load_state('networkidle')
    assert 'SFM Operations Intelligence' in page.title()
    assert page.locator('.ribbon').count() == 1
    assert page.locator('nav button').count() == 8
    assert page.locator('text=Empleados operativos').count() == 1
    page.locator('nav button[data-v="jan"]').click()
    assert 'JANITORIAL' in page.locator('#title').inner_text()
    page.locator('button[data-toast]').first.click()
    assert page.locator('#toast.show').count() == 1
    browser.close()
