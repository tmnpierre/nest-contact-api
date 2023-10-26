import { Injectable } from '@nestjs/common';

@Injectable()
export class ContactsService {
  private contacts = [];

  createContact(contactData) {
    // Ici, vous pouvez ajouter la logique pour créer un contact dans la base de données ou en mémoire.
    this.contacts.push(contactData);
  }

  getContacts() {
    // Ici, vous pouvez récupérer la liste des contacts depuis la base de données ou en mémoire.
    return this.contacts;
  }
}
