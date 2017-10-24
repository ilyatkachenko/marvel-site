import { YoutubePipe } from './youtube.pipe';
import { DomSanitizer, ɵe as DomSanitizerImpl } from "@angular/platform-browser";

describe('YoutubePipe', () => {
  it('create an instance', () => {
    let sanitizer: DomSanitizer = new DomSanitizerImpl(null);
    const pipe = new YoutubePipe(sanitizer);
    expect(pipe).toBeTruthy();
  });
});
