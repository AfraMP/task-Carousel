import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {

  isRtl = signal('ltr');
}
