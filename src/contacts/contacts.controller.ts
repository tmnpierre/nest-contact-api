import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { Contact } from './contact.entity';

@Controller({
  version: '1',
  path: 'contacts'
})
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Post()
  createContact(@Body() contactData: Contact) {
    this.contactsService.createContact(contactData);
  }

  @Get()
  getContacts() {
    return this.contactsService.getContacts();
  }

  @Get(':email')
  getContactByEmail(@Param('email') email: string) {
    return this.contactsService.getContactByEmail(email);
  }
}
