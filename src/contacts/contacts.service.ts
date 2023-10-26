import { Injectable, Scope } from '@nestjs/common';
import { Contact } from './contact.entity';

@Injectable({ scope: Scope.DEFAULT })
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
    // Ici, vous pouvez ajouter la logique pour créer un contact dans la base de données ou en mémoire.
    this.contacts.push(contactData);
  }

  getContacts() {
    // Ici, vous pouvez récupérer la liste des contacts depuis la base de données ou en mémoire.
    return this.contacts;
  }
}
