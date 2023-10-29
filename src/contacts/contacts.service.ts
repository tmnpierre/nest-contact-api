import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { Contact } from './contact.entity';
import { nanoid } from 'nanoid';

@Injectable()
export class ContactsService {
  private readonly contacts: Array<Contact>;

  constructor() {
    this.contacts = [
      {
        firstName: 'jean',
        lastName: 'test',
        email: 'jean.test@test.com',
      } as Contact,
    ];
  }

  createContact(contactData) {
    const existingContact = this.contacts.find(c => c.email === contactData.email);

    if (existingContact) {
      throw new ConflictException('Ce contact existe déjà.');
    }

    const uniqueId = nanoid();
    const contactWithId = { ...contactData, id: uniqueId };
    this.contacts.push(contactWithId);

    console.log('Statut (ID) généré :', uniqueId);

    return contactWithId;
  }

  getContacts() {
    return this.contacts;
  }

  getContactByEmail(email: string) {
    const contact = this.contacts.find(c => c.email === email);

    if (!contact) {
      throw new NotFoundException('Contact non trouvé');
    }

    return contact;
  }
}
