import { Book } from "./Interfaces.js";

const detailsDiv = document.querySelector(".details") as HTMLElement;

export function displayBookDetails(book: Book) {
	const detailsDiv = document.querySelector(".details") as HTMLElement;
	detailsDiv.style.visibility = "visible";
	detailsDiv.innerHTML = `
        <h2>${book.title}</h2>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Publisher:</strong> ${book.publisher}</p>
        <p><strong>Year:</strong> ${book.year}</p>
        <p><strong>Pages:</strong> ${book.pages || "N/A"}</p>
        <p><strong>Plot:</strong> ${book.plot}</p>
        <p><strong>Audience:</strong> ${book.audience}</p>
        <button class="return-button">Return</button>
    `;

    const returnButton = detailsDiv.querySelector(".return-button") as HTMLButtonElement;
    returnButton.addEventListener("click", () => {
      closeDetails();
    });
    
}

function closeDetails() {
    detailsDiv.style.visibility = "hidden";
    detailsDiv.innerHTML = ""; 
  }