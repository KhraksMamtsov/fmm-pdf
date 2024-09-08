import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import puppeteer, { Browser } from 'puppeteer';

@Injectable()
export class PuppeteerService implements OnModuleInit, OnModuleDestroy {
  private _browser!: Browser; // Здесь может быть объект, соединение, файл и т.д.

  async onModuleInit() {
    this._browser = await puppeteer.launch({
      headless: true,
      args: [
        '--allow-file-access-from-files',
        '--allow-file-access',
        '--allow-cross-origin-auth-prompt',
        '--window-size=1920,1080',
      ],
      // defaultViewport: null,
      defaultViewport: {
        width: 1920,
        height: 1080,
      },
    });
  }

  async onModuleDestroy() {
    await this._browser.close();
  }

  get browser() {
    return this._browser;
  }
}
