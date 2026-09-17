import os
from pathlib import Path
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]
BASE_URL = os.environ.get('SFM_BASE_URL', 'http://127.0.0.1:4173').rstrip('/')
PAGES = ['launch.html', 'index.html', 'ceo.html', 'scenarios.html', 'worker.html', 'training.html', 'report.html', 'audit.html', 'notifications.html']

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    for width, height in [(1440, 900), (768, 1024), (390, 844)]:
        page = browser.new_page(viewport={'width': width, 'height': height})
        errors = []
        page.on('pageerror', lambda error: errors.append(str(error)))
        for name in PAGES:
            page.goto(f'{BASE_URL}/{name}', wait_until='networkidle')
            assert page.locator('body').is_visible(), name
            assert page.locator('h1').count() >= 1, name
            assert page.evaluate('document.documentElement.scrollWidth <= document.documentElement.clientWidth'), f'{name} overflows at {width}px'
        page.close()

    page = browser.new_page(viewport={'width': 390, 'height': 844})
    page.goto(f'{BASE_URL}/worker.html', wait_until='networkidle')
    page.evaluate("localStorage.removeItem('sfm-demo-state-v1')")
    page.reload(wait_until='networkidle')
    page.locator('#clock').click()
    assert 'Fichar salida' in page.locator('#clock').inner_text()
    for checkbox in page.locator('#checks input').all():
        checkbox.check()
    assert page.locator('#complete').is_enabled()
    page.locator('#complete').click()
    state = page.evaluate("JSON.parse(localStorage.getItem('sfm-demo-state-v1'))")
    assert any(event['actor'] == 'JAN-007' and 'checklist' in event['action'].lower() for event in state['audit'])
    assert not errors
    browser.close()
print('BROWSER T12 TEST OK · 9 vistas · desktop/tablet/mobile · flujo worker')
