# Configuration EmailJS pour le Formulaire de Contact

## Étapes à suivre pour configurer l'envoi automatique d'emails

### 1. Créer un compte EmailJS
- Aller sur [https://www.emailjs.com/](https://www.emailjs.com/)
- Cliquer sur "Sign Up" et créer un compte gratuit
- Confirmer votre email

### 2. Configurer un service email
- Dans le dashboard EmailJS, aller dans "Email Services"
- Cliquer sur "Add New Service"
- Choisir "Gmail" (recommandé)
- Suivre les instructions pour connecter votre compte Gmail `GUillaumel1103@gmail.com`
- Donner un nom au service : `service_portfolio_guillaume`

### 3. Créer un template d'email
- Aller dans "Email Templates"
- Cliquer sur "Create New Template"
- Nommer le template : `template_contact_portfolio`
- Configurer le template comme suit :

#### Paramètres du template :
- **To Email** : `GUillaumel1103@gmail.com`
- **From Name** : `{{from_name}}`
- **From Email** : `{{from_email}}`
- **Subject** : `Nouveau message depuis votre portfolio - {{from_name}}`

#### Contenu du template :
```
Bonjour Guillaume,

Vous avez reçu un nouveau message depuis votre portfolio :

Nom : {{from_name}}
Email : {{from_email}}

Message :
{{message}}

---
Ce message a été envoyé automatiquement depuis votre portfolio.
```

### 4. Récupérer votre clé publique
- Aller dans "Account" > "General"
- Copier votre "Public Key"

### 5. Mettre à jour la configuration
- Ouvrir le fichier `src/config/email.ts`
- Remplacer `YOUR_PUBLIC_KEY_HERE` par votre vraie clé publique

### 6. Tester le formulaire
- Démarrer votre application : `npm run dev`
- Aller sur la section Contact
- Remplir et envoyer le formulaire de test
- Vérifier que vous recevez l'email sur `GUillaumel1103@gmail.com`

## Limites du plan gratuit EmailJS
- 200 emails par mois
- Parfait pour un portfolio personnel

## Dépannage
Si les emails n'arrivent pas :
1. Vérifier les spam/courriers indésirables
2. Vérifier que le service Gmail est bien connecté
3. Vérifier que les noms de service et template correspondent
4. Vérifier la clé publique dans la console développeur

## Sécurité
- La clé publique EmailJS peut être visible côté client (c'est normal)
- EmailJS gère la sécurité côté serveur
- Votre adresse Gmail reste protégée 