import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private http = inject(HttpClient);
  private translations = new Map<string, any>();
  private currentLangSubject = new BehaviorSubject<string>('en');
  currentLang$ = this.currentLangSubject.asObservable();
  
  constructor() {
    // Initialize translations immediately
    this.initialize();
  }
  
  async initialize(defaultLang: string = 'en'): Promise<void> {
    console.log('Initializing translation service');
    try {
      // Load default language
      await this.loadTranslations(defaultLang);
      
      // Set initial language from browser or localStorage
      const savedLang = localStorage.getItem('language');
      const browserLang = navigator.language.split('-')[0];
      const initialLang = savedLang || (browserLang === 'fr' ? 'fr' : 'en');
      
      if (initialLang !== defaultLang) {
        await this.loadTranslations(initialLang);
      }
      
      this.setLanguage(initialLang);
    } catch (error) {
      console.error('Failed to initialize translations:', error);
    }
  }
  
  async setLanguage(lang: string): Promise<void> {
    if (!this.translations.has(lang)) {
      await this.loadTranslations(lang);
    }
    localStorage.setItem('language', lang);
    this.currentLangSubject.next(lang);
  }
  
  private async loadTranslations(lang: string): Promise<void> {
    if (!this.translations.has(lang)) {
      try {
        // Use firstValueFrom instead of toPromise
        const translations = await firstValueFrom(
          this.http.get<any>(`/assets/i18n/${lang}.json`)
        );
       // console.log(`Loaded translations for ${lang}:`, translations);
        this.translations.set(lang, translations || {});
      } catch (error) {
      //  console.error(`Failed to load translations for ${lang}:`, error);
        this.translations.set(lang, {}); // Set empty object to prevent further load attempts
      }
    }
  }
  
  translate(key: string): string {
    const currentLang = this.currentLangSubject.value;
    const translations = this.translations.get(currentLang);
    
    if (!translations) {
  //    console.warn(`No translations loaded for ${currentLang}`);
      return key;
    }
    
    // Handle nested keys like 'APP.TITLE'
    const parts = key.split('.');
    let value: any = translations;
    
    for (const part of parts) {
      if (value && typeof value === 'object' && part in value) {
        value = value[part];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
    }
    
    return typeof value === 'string' ? value : key;
  }
}