// Books page

document.addEventListener('DOMContentLoaded', () => {
    const deleteButtons = document.querySelectorAll('.delete-button');

    deleteButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const titleResultRow = event.target.closest('.title-result-row');
            if (titleResultRow) {
                titleResultRow.remove();
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Result container where new book entries will be added
    const resultContainer = document.querySelector('.title-result');

    // Add book button
    const addBookButton = document.querySelector('.add_book_button .clickable-image');
    const cancelButton = document.querySelector('.cancel_form_button');

    // Add book form
    const addBookForm = document.querySelector('.add_book_form');
    const bookForm = document.getElementById('bookForm');

    if (addBookButton) {
        addBookButton.addEventListener('click', () => {
            addBookForm.style.display = 'block';
        });
    } else {
        console.error('Add book button image not found');
    }

    if(cancelButton){
        cancelButton.addEventListener('click', () => {
            addBookForm.style.display = 'none';
        });
    } else {
        console.error('Add book button image not found');
    }

    if (bookForm) {
        bookForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const imgUrl = document.getElementById('imgUrl').value;
            const bookTitle = document.getElementById('bookTitle').value;
//            const bookLink = document.getElementById('bookLink').value;
            const seriesName = document.getElementById('seriesName').value;
            const authorName = document.getElementById('authorName').value;
            const publicationDate = document.getElementById('publicationDate').value;

            const newTitleResultRow = `
                <div class="title-result-row" data-isbn="new-isbn">
                    <div class="type-icon icon-ebook"></div>
                    <div class="title-result-row__cover-cell">
                        <div class="title-result-row__cover">
                            <img not-data-src="/Content/img/load.gif" src="${imgUrl}" srcset="" alt="cover image of ${bookTitle}" data-ga-action="cover" data-title="${bookTitle}" data-id="new-id" onerror="this.onerror = null; this.srcset = ''; this.src = '/media/default-cover-image?title=${bookTitle}';">
                        </div>
                    </div>
                    <div class="title-result-row__details">
                        <h3 class="title-result-row__title">
                            <a href="" data-ga-action="cover" data-title="${bookTitle}" data-id="new-id">
                                ${bookTitle}
                            </a>
                        </h3>
                        <h3 class="title-result-row__series">${seriesName}</h3>
                        <h3 class="title-result-row__creator">
                            ${authorName} <span class="title-result-row__creator-role">Author</span><br>
                            <span class="title-result-row__publication-date">(${publicationDate})</span>
                        </h3>
                    </div>
                    <button class="delete-button" aria-label="Delete this entry">Delete</button>
                </div>
            `;

            resultContainer.insertAdjacentHTML('beforeend', newTitleResultRow);
            addBookForm.style.display = 'none'; // Hide the form after submission
            bookForm.reset(); // Reset the form fields

            // Add event listener to the new delete button
            resultContainer.lastElementChild.querySelector('.delete-button').addEventListener('click', (event) => {
                const titleResultRow = event.target.closest('.title-result-row');
                if (titleResultRow) {
                    titleResultRow.remove();
                }
            });
        });
    } else {
        console.error('Book form not found');
    }

    // Event delegation for existing delete buttons (if any)
    if (resultContainer) {
        resultContainer.addEventListener('click', (event) => {
            if (event.target.classList.contains('delete-button')) {
                const titleResultRow = event.target.closest('.title-result-row');
                if (titleResultRow) {
                    titleResultRow.remove();
                } else {
                    console.error('Title result row not found for the clicked delete button');
                }
            }
        });
    } else {
        console.error('Result container not found');
    }
});