
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export interface CreateBookInput {
    name?: string;
}

export interface Book {
    id?: string;
    name?: string;
}

export interface IMutation {
    createBook(createBookInput?: CreateBookInput): Book | Promise<Book>;
}

export interface IQuery {
    getBooks(): Book[] | Promise<Book[]>;
    book(id: string): Book | Promise<Book>;
}
