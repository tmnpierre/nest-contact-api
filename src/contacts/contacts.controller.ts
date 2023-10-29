import { Controller, Get, Query } from '@nestjs/common';
import { ContactsService } from './contacts.service';

@Controller({
  version: '1',
  path: 'contacts',
})
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Get()
  getContacts(@Query() queryParams: { param1: string, param2: string }) {
    return this.contactsService.getContacts();
  }
}
