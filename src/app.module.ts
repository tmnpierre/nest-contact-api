import { Module } from '@nestjs/common';
import { ContactsController } from './contacts/contacts.controller';
import { ContactsService } from './contacts/contacts.service';

@Module({
  imports: [],
  controllers: [ContactsController],
  providers: [ContactsService],
})
export class AppModule {}
