
// Api
const apiUrl = 'https://jsonplaceholder.typicode.com/posts?_limit=6';
const container = document.getElementById('container');
									
// Fonction pour afficher les articles
function displayPosts(posts) {
     container.innerHTML = '';
     posts.forEach(post => {
	const postElement = document.createElement('div');
	postElement.classList.add('post');
	postElement.setAttribute('data-id', post.id);
	postElement.innerHTML = `
          <h3>${post.title}</h3>
		<p>${post.body}</p>
	`;
	postElement.onclick = function() {
          window.location.href = 'article.html?id=' + encodeURIComponent(post.id);
	    }
	     container.appendChild(postElement);
     });
}
// Fonction de recherche
function searchPosts(posts, query) {
	return posts.filter(post => {
	    const title = post.title.toLowerCase();
	    const body = post.body.toLowerCase();
	    return title.includes(query) || body.includes(query);
	});
 }
 
 // Écouteur d'événement pour le bouton de recherche
 document.getElementById('search-button').addEventListener('click', function() {
	const input = document.getElementById('search-input');
	const query = input.value.toLowerCase();
	fetch(apiUrl)
	.then(response => response.json())
	.then(data => {
	    const filteredPosts = searchPosts(data, query);
	    displayPosts(filteredPosts);
	})
	.catch(error => {
	    console.error('Une erreur s\'est produite :', error);
	});
 });
 
								 
// Charger les données initiales
fetch(apiUrl)
.then(response => response.json())
.then(data => {
	displayPosts(data);
})
.catch(error => {
	console.error('Une erreur s\'est produite :', error);
});
							