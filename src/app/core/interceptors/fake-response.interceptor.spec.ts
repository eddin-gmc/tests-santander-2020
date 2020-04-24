import { TestBed } from '@angular/core/testing';

import { FakeResponseInterceptor } from './fake-response.interceptor';

describe('FakeResponseInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      FakeResponseInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: FakeResponseInterceptor = TestBed.inject(FakeResponseInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
