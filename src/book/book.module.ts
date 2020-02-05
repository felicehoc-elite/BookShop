import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookService } from './book.service';
import { Book } from './book.entity';
import { BookResolver } from './book.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([Book])
  ],
  providers: [BookService, BookResolver]
})
export class BookModule {}
