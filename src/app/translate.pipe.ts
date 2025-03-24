import { Pipe, PipeTransform, inject } from '@angular/core';
import { TranslationService } from './translation.service';

@Pipe({
  name: 'translate',
  standalone: true,
  pure: false // Make the pipe impure so it updates when translations change
})
export class TranslatePipe implements PipeTransform {
  private translationService = inject(TranslationService);
  
  transform(key: string): string {
    if (!key) return '';
    
    try {
      const result = this.translationService.translate(key);
      console.log(`Translating ${key} → ${result}`);
      return result;
    } catch (error) {
      console.error(`Error translating ${key}:`, error);
      return key;
    }
  }
}