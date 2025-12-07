import React from 'react';
import Image from 'next/image';
import styles from './bookshelf.module.css';
import booksData from '../../data/books.json';

export const metadata = {
    title: 'My Bookshelf',
    description: 'A curated list of books that have influenced my thinking.',
};

export default function BookshelfPage() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <header className={styles.header}>
                    <h1 className={styles.title}>My Bookshelf</h1>
                    <p className={styles.description}>
                        A collection of books that have shaped my perspective, taught me valuable lessons, and provided endless inspiration.
                    </p>
                </header>

                <div className={styles.grid}>
                    {booksData.map((book) => (
                        <article key={book.id} className={styles.book}>
                            <div className={styles.coverWrapper}>
                                <Image
                                    src={book.coverImage}
                                    alt={`Cover of ${book.title}`}
                                    fill
                                    sizes="(max-width: 600px) 50vw, 200px"
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <div className={styles.bookInfo}>
                                <h2 className={styles.bookTitle}>{book.title}</h2>
                                <span className={styles.bookAuthor}>{book.author}</span>
                                {book.thoughts && (
                                    <p className={styles.thoughts}>"{book.thoughts}"</p>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </main>
        </div>
    );
}
