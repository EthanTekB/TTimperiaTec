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
    - Mongo DB (mongodb://@localhost:27017/) (mongodb est configuré pour tourner sur cette addresse dans le datastores.js et ma machine)

### À INSTALLER:

    -Ouvrir un terminal sur le dossier TTimperiaTec et rentrez les commandes suivantes pour
    installer toute les dépendances requises:

    (! Le projet peux ne pas marcher si les dépandance ne sont pas toutes installer !)

    $> cd TestTechnique
    $> npm install

    $> npm install passport
    $> npm install passport-local
    $> npm install bcrypt-nodejs

    $> npm install sails-mongo --save
    $> npm install connect-mongo@1.1.0 --save --save-exact
    $> npm install nodemon

### UTILISATION (TECH):

    -Ouvrir un terminal sur le dossier TTimperiaTec et rentrez les deux commande suivantes:

    $> cd TestTechnique
    $> nodemon app.js

### UTILISATION (UTILISATEUR):

## Page d'acceuil/connection:

    l'utilisateur arrive par défaut sur la page d'acceuil qui est l'écran de connexion.
    Avant de continuer l'utilisateur doit d'abord se créer un compte et s'authentifier:

        -L'utilisateur peux cliquer sur le boutton "Register" pour se créer un compte, et remplir les champs demandées.
        une fois les champs remplis l'utilisateur sera directement rediriger sur la page de sa liste d'arriver.

        -L'utilisateur peux cliquer sur le boutton "Login" pour se connecter à un compte déjà éxistant une fois qu'il
        aura remplis les champs demandées.

## Page Register:

    La page Register permet a l'utilisateur de se créer son propre compte.
    Pour créer son compte l'utilisateur doit remplir les champs suivant:
        - Nom d'utilisateur (pseudo personnel)
        - Email (mail de l'utilisateur)
        - Mot de passe
    Une fois ces champs remplis L'utilisateur peux cliquer sur le boutton "Register" pour créer son compte.
    L'utilisateur sera automatiquement rediriger sur la page Liste D'arrivée.
    L'utilisateur peux cliquer sur le boutton "Retour" pour revenir sur la page de connection.

## Page Liste D'arrivée:

    La page liste d'arriver affiche toute les arrivés que l'utilisateur a noté:
        -L'utilisateur peux cliquer sur le boutton "Deconnexion" pour se deconnecter de son compte.
        -L'utilisateur peux cliquer sur le boutton "Ajouter Arrivée" pour ajouter une arrivée.

    Si la liste contient au moins une Arrivée:
        -L'utilisateur peux cliquer sur le boutton "Modifier" pour modifier l'arrivée séléctionnée.
        -L'utilisateur peux cliquer sur le boutton "Effacer" pour effacer l'arrivée de la liste.

## Page "Ajouter une arrivée":

    La Page Ajouter une arrivée permet d'ajouter une arrivée a la liste d'arrivées.
    Afin d'ajouter une nouvelle arrivée l'utilisateur doit remplir les champs:
        - Titre:(le sujet de l'arrivée).
        - Personne:  (la personne arrivée).
        - Date: (la date d'arriver).
        - Heure: (l'heure d'arriver).
        - Email: (l'email de la personne Arrivée).
    Une fois les champs rempli l'utilisateur peux cliquer sur le boutton "Ajouter" pour ajouter la nouvelle arrivée a sa liste.

## Page "Modifier une arrivée":

    La Page Modifier une arrivée permet de modifier une arrivée séléctionnée dans la liste.
    Pour modifier une arrivée l'utilisateur peux changer/modifier les champs suivant:
        - Titre:(le sujet de l'arrivée).
        - Personne:  (la personne arrivée).
        - Date: (la date d'arriver).
        - Heure: (l'heure d'arriver).
        - Email: (l'email de la personne Arrivée).
    Une fois les champs modifié l'utilisateur peux cliquer sur le boutton "Modifier" pour modifier l'arrivée dans la liste.
