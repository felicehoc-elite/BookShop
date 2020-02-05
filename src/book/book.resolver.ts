import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BookService } from './book.service';
import { Book, CreateBookInput } from '../graphql.schema';

@Resolver('Book')
export class BookResolver {

  constructor(
    private readonly bookService: BookService
  ) {
  }

  @Query()
  getBooks() {
    return this.bookService.findAll();
  }

  @Mutation('createBook')
  create(@Args('createBookInput') args: CreateBookInput): Promise<Book> {
    return this.bookService.add(args) as any;
  }
}
