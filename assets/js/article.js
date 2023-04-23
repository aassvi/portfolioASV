const urlParams = new URLSearchParams(window.location.search);
                                        const id = urlParams.get('id');
                                        const apiUrl = 'https://jsonplaceholder.typicode.com/posts/' + id;
                                        const container = document.getElementById('container');

                                        // Fonction pour afficher les détails de l'article
                                        function displayPost(post) {
                                        const postElement = document.createElement('div');
                                        postElement.classList.add('post');
                                        postElement.innerHTML = `
                                             <h3>${post.title}</h3>
                                             <p>${post.body}</p>
                                             <button onclick="addToCart(${id})">Ajouter à la liste </button>
                                        `;
                                        container.appendChild(postElement);
                                        }

                                        // Charger les données de l'article
                                        fetch(apiUrl)
                                        .then(response => response.json())
                                        .then(data => {
                                             displayPost(data);
                                        })
                                        .catch(error => {
                                             console.error('Une erreur s\'est produite :', error);
                                        });

                                        // Fonction pour afficher le panier
                                        function viewCart() {
                                        window.location.href = 'cart.html';
                                        }
                                        
                                        // Fonction pour ajouter un article au panier
                                        function addToCart(articleId) {
                                        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
                                        
                                        // Vérifier si l'article est déjà dans le panier
                                        const itemIndex = cartItems.findIndex(item => item.id === articleId);
                                        if (itemIndex >= 0) {
                                             // Si l'article est déjà dans le panier, augmenter la quantité
                                             cartItems[itemIndex].quantity += 1;
                                        } else {
                                             // Sinon, ajouter l'article avec une quantité de 1
                                             cartItems.push({ id: articleId, quantity: 1 });
                                        }
                                        
                                        // Enregistrer les articles dans le panier dans le stockage local
                                        localStorage.setItem('cartItems', JSON.stringify(cartItems));
                                        }