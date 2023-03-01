import { TestBed } from '@angular/core/testing';

import { HasPermissionGuardChild } from './has-permission-child.guard';

describe('HasPermissionChildGuard', () => {
  let guard: HasPermissionGuardChild;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HasPermissionGuardChild);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
