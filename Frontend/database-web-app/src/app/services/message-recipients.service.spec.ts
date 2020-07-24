import { TestBed } from '@angular/core/testing';

import { MessageRecipientsService } from './message-recipients.service';

describe('MessageRecipientsService', () => {
  let service: MessageRecipientsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageRecipientsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
