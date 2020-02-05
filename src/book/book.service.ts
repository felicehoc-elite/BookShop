import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.entity';
import { CreateBookInput } from '../graphql.schema';

@Injectable()
export class BookService {

  constructor(
    @InjectRepository(Book)
    private readonly repository: Repository<Book>
  ) {
  }

  findAll(): Promise<Book[]> {
    return this.repository.find();
  }

  add(body: CreateBookInput): Promise<Book> {
    const book = new Book();
    book.name = body.name;
    return this.repository.save(book);
  }

}
