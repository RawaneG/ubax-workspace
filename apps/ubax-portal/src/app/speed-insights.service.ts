import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { injectSpeedInsights } from '@vercel/speed-insights';

/**
 * Service to inject Vercel Speed Insights tracking script.
 * This service automatically initializes Speed Insights when running in the browser.
 */
@Injectable({
  providedIn: 'root',
})
export class SpeedInsightsService {
  private platformId = inject(PLATFORM_ID);

  constructor() {
    // Only initialize in browser environment (not during SSR)
    if (isPlatformBrowser(this.platformId)) {
      this.initSpeedInsights();
    }
  }

  private initSpeedInsights(): void {
    injectSpeedInsights({
      framework: 'angular',
    });
  }
}
