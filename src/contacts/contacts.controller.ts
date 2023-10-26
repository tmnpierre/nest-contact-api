import { Controller, Get, Post, Body } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { Contact } from './contact.entity';

@Controller('v1/contacts')
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
}
