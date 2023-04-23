const cart = document.getElementById('cart');
                                   const cartItems = JSON.parse(localStorage.getItem('cartItems'));

                                   // Fonction pour afficher les articles du panier
                                   function displayCart() {
                                        // Vider le contenu précédent du panier
                                        cart.innerHTML = '';

                                        // Afficher chaque article dans le panier
                                        cartItems.forEach(item => {
                                             const itemElement = document.createElement('div');
                                             itemElement.classList.add('item');
                                             itemElement.innerHTML = `
                                             <h3>Article ${item.id}</h3>
                                             <p>Quantité : ${item.quantity}</p>
                                             `;
                                             cart.appendChild(itemElement);
                                        });
                                   }

                                   // Vérifier si le panier est vide
                                   if (cartItems && cartItems.length > 0) {
                                        displayCart();
                                   } else {
                                        cart.innerHTML = '<p>Le panier est vide.</p>';
                                   }

                                   // Fonction pour passer la commande
                                   function checkout() {
                                        // Vérifier que tous les champs ont été remplis
                                        const email = document.getElementById('email').value;
                                        const password = document.getElementById('password').value;
                                        const fullname = document.getElementById('fullname').value;
                                        const address = document.getElementById('address').value;
                                        const city = document.getElementById('city').value;
                                        const postcode = document.getElementById('postcode').value;
                                        
                                        if (!email || !password || !fullname || !address || !city || !postcode) {
                                             alert('Veuillez remplir tous les champs.');
                                             return;
                                        }
                                        
                                        // Vérifier les informations de connexion et commander
                                        if (email === 'test@example.com' && password === '1234') {
                                             alert('Commande passée avec succès !');
                                             // Vider le panier
                                             localStorage.removeItem('cartItems');
                                             // Rediriger vers la page d'accueil
                                             window.location.href = 'index.html';
                                        } else {
                                             alert('Adresse email ou mot de passe incorrect.');
                                        }
                                   }

                                   // Fonction pour traiter la soumission du formulaire
                                   const form = document.querySelector('form');
                                   form.addEventListener('submit', (event) => {
                                        event.preventDefault();
                                        checkout();
                                   });