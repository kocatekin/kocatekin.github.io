//exercise 2

const book = {
    title: "The Great Adventure",
    author: {
        firstName: "Alex",
        lastName: "Johnson"
    },
    publication: {
        year: 2021,
        publisher: "Adventure Books Co.",
        ISBN: "123-456-789"
    },
    genres: ["Adventure", "Mystery", "Fantasy"],
    chapters: [
        { chapterNumber: 1, title: "The Mysterious Forest", pages: 20 },
        { chapterNumber: 2, title: "The Hidden Cave", pages: 15 },
        { chapterNumber: 3, title: "The Secret Map", pages: 18 },
        
    ],
    availableFormats: ["Hardcover", "Paperback", "eBook"],
    isAvailable: true
};


let totalPages = 0;
for(let i=0;i<book.chapters.length;i++) {
    totalPages += book.chapters[i].pages;
}
console.log(`Total number of pages is ${totalPages}`);