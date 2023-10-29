import { Module } from '@nestjs/common';
import { ContactsModule } from './contacts/contact.module';

@Module({
  imports: [ContactsModule],
})
export class AppModule {}