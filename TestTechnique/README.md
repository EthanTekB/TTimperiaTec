# Test Technique IMPERIATEC

### URL:

    http://localhost:1337/

### ROUTES:

    http://localhost:1337/ ------------> Page de login

    http://localhost:1337/register ------------> Page d'inscription de l'utilisateur

    http://localhost:1337/ArrivalList/list ------------> Page de la liste des arrivées de l'utilisateur

    http://localhost:1337/ArrivalList/edit/(id) ------------> Page pour modifier une arrivée spécifique

    http://localhost:1337/ArrivalList/add ------------> Page pour ajouter une arrivée

### DEPENDENCIES:

    (pré-requis pour faire tourner le projet)

    - Node js (npm)
    - Sails js
    - Mongo DB (mongodb://@localhost:27017/) (mongodb est configuré pour tourner sur cette adresse dans le datastores.js et ma machine)

### À INSTALLER:

    -Ouvrir un terminal sur le dossier TTimperiaTec et rentrez les commandes suivantes pour
    installer toute les dépendances requises:

    (! Le projet peut ne pas marcher si les dépandances ne sont pas toutes installées !)

    $> cd TestTechnique
    $> npm install

    $> npm install passport
    $> npm install passport-local
    $> npm install bcrypt-nodejs

    $> npm install sails-mongo --save
    $> npm install connect-mongo@1.1.0 --save --save-exact
    $> npm install nodemon

### UTILISATION (TECH):

    -Ouvrir un terminal sur le dossier TTimperiaTec et rentrez les deux commandes suivantes:

    $> cd TestTechnique
    $> nodemon app.js

### UTILISATION (UTILISATEUR):

## Page d'accueil/connexion:

    l'utilisateur arrive par défaut sur la page d'accueil qui est l'écran de connexion.
    Avant de continuer, l'utilisateur doit d'abord se créer un compte et s'authentifier:

        -L'utilisateur peut cliquer sur le bouton "Register" pour se créer un compte, et remplir les champs demandés.
        une fois les champs remplis, l'utilisateur sera directement redirigé sur la page de sa liste d'arrivée.

        -L'utilisateur peut cliquer sur le bouton "Login" pour se connecter à un compte déjà éxistant une fois qu'il
        aura rempli les champs demandés.

## Page Register:

    La page Register permet à l'utilisateur de se créer son propre compte.
    Pour créer son compte l'utilisateur doit remplir les champs suivants:
        - Nom d'utilisateur (pseudo personnel)
        - Email (mail de l'utilisateur)
        - Mot de passe
    Une fois ces champs remplis, l'utilisateur peut cliquer sur le bouton "Register" pour créer son compte.
    L'utilisateur sera automatiquement redirigé sur la page Liste D'arrivée.
    L'utilisateur peut cliquer sur le bouton "Retour" pour revenir sur la page de connexion.

## Page Liste D'arrivée:

    La page Liste D'arrivée affiche toutes les arrivées que l'utilisateur a noté:
        -L'utilisateur peut cliquer sur le bouton "Deconnexion" pour se deconnecter de son compte.
        -L'utilisateur peut cliquer sur le bouton "Ajouter Arrivée" pour ajouter une arrivée.

    Si la liste contient au moins une arrivée:
        -L'utilisateur peut cliquer sur le bouton "Modifier" pour modifier l'arrivée séléctionnée.
        -L'utilisateur peut cliquer sur le bouton "Effacer" pour effacer l'arrivée de la liste.

## Page "Ajouter une arrivée":

    La page "Ajouter une arrivée" permet d'ajouter une arrivée à la liste d'arrivée.
    Afin d'ajouter une nouvelle arrivée l'utilisateur doit remplir les champs:
        - Titre:(le sujet de l'arrivée).
        - Personne:  (la personne arrivée).
        - Date: (la date d'arrivée).
        - Heure: (l'heure d'arrivée).
        - Email: (l'email de la personne Arrivée).
    Une fois les champs remplis, l'utilisateur peut cliquer sur le bouton "Ajouter" pour ajouter la nouvelle arrivée à sa liste.

## Page "Modifier une arrivée":

    La Page "Modifier une arrivée", permet de modifier une arrivée séléctionnée dans la liste.
    Pour modifier une arrivée, l'utilisateur peut changer/modifier les champs suivants:
        - Titre:(le sujet de l'arrivée).
        - Personne: (la personne arrivée).
        - Date: (la date d'arrivée).
        - Heure: (l'heure d'arrivée).
        - Email: (l'email de la personne Arrivée).
    Une fois les champs modifiés, l'utilisateur peut cliquer sur le bouton "Modifier" pour modifier l'arrivée dans la liste.
