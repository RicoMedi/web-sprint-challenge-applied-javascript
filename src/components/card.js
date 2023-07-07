import axios from 'axios'


const Card = (article) => {
  const cards = document.createElement('div')
  const imgContainer = document.createElement('div')
  const img = document.createElement('img')
  const spanBy = document.createElement('span')
  const author = document.createElement('div')
  const headline = document.createElement('div')

  img.src = article.authorPhoto
  img.alt = 'Photo of author'

  author.classList.add('author')
  imgContainer.classList.add('img-container')
  cards.classList.add('card')
  headline.classList.add('headline')

  headline.textContent = article.headline
  spanBy.textContent = `By ${article.authorName}`

  cards.appendChild(headline)
  cards.appendChild(author)
  author.appendChild(imgContainer)
  author.appendChild(spanBy)
  imgContainer.appendChild(img)

  return cards;

  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
}

 // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //


  const cardAppender = (selector) => {
    axios.get('http://localhost:5001/api/articles')
      .then(res => {
        const articleCategories = ['javascript', 'bootstrap', 'technology', 'node', 'jquery'];
        for (let category of articleCategories) {
          const articles = res.data.articles[category];
          for (let article of articles) {
            const card = Card(article);
            document.querySelector(selector).appendChild(card);
          }
        }
      });
  };
  
  export { Card, cardAppender };
