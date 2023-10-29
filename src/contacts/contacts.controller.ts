// contacts.controller.ts
import { Controller, Get, Post, Body, HttpCode, HttpStatus, Res, Query } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { Contact } from './contact.entity';

@Controller({
  version: '1',
  path: 'contacts',
})
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED) 
  createContact(@Body() contactData: Contact, @Res() response) {
    const createdContact = this.contactsService.createContact(contactData);
    const responseData = { status: 'created', ...createdContact }; 
    response.status(HttpStatus.CREATED).json(responseData);
  }

  @Get()
  getContacts(@Query() queryParams: { param1: string, param2: string }) {
    return this.contactsService.getContacts();
  }
}

