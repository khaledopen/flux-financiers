# MonBudget

MonBudget est une application web de gestion financière personnelle. Elle permet de suivre revenus et dépenses, définir des budgets mensuels, piloter des objectifs d’épargne et calculer une prévision à partir des trois ou six derniers mois.

## Technologies

- Frontend : React 19, Vite, React Router, Tailwind CSS, Axios, Chart.js, Lucide React
- Backend : Node.js, Express, PostgreSQL (`pg`), JWT, bcrypt, express-validator

## Structure

```text
frontend/src/  components, pages, layouts, services, context, utils
backend/src/   config, controllers, routes, middleware, services, utils, database
backend/tests/ tests unitaires des calculs financiers
```

## Installation

Prérequis : Node.js 20+, npm et PostgreSQL 15+.

1. Créez la base : `createdb monbudget`.
2. Initialisez les tables : `psql -d monbudget -f backend/src/database/schema.sql`.
3. Copiez `backend/.env.example` vers `backend/.env`, puis renseignez `DATABASE_URL` et une longue valeur aléatoire pour `JWT_SECRET`.
4. Copiez `frontend/.env.example` vers `frontend/.env` si l’API n’est pas accessible à l’adresse proposée.
5. Dans `backend`, exécutez `npm install`, puis `npm run dev`.
6. Dans un second terminal, dans `frontend`, exécutez `npm install`, puis `npm run dev`.
7. Ouvrez `http://localhost:5173` et créez un compte. Les catégories par défaut sont ajoutées automatiquement.

Le fichier `backend/src/database/demo.sql` montre comment ajouter deux transactions de démonstration après inscription. Il n’existe aucun compte avec un mot de passe codé en dur.

## API principale

Toutes les routes sauf l’inscription et la connexion exigent `Authorization: Bearer <token>`.

- Authentification : `POST /api/auth/register`, `POST /api/auth/login`, `GET /api/auth/me`, `PUT /api/auth/profile`, `PUT /api/auth/password`
- Transactions : `GET|POST /api/transactions`, `GET|PUT|DELETE /api/transactions/:id`
- Catégories : `GET|POST /api/categories`, `GET|PUT|DELETE /api/categories/:id`
- Budgets : `GET|POST /api/budgets`, `GET|PUT|DELETE /api/budgets/:id`
- Épargne : `GET|POST /api/savings-goals`, `GET|PUT|DELETE /api/savings-goals/:id`, `POST /api/savings-goals/:id/contributions`
- Synthèse : `GET /api/dashboard?month=9&year=2026`
- Prévisions : `GET /api/forecasts/:goalId?period=6`

Les montants sont enregistrés en `NUMERIC(14,2)`, les requêtes sont paramétrées et chaque lecture ou modification est limitée au propriétaire authentifié.

## Vérifications

- Tests financiers backend : `cd backend && npm test`
- Build de production frontend : `cd frontend && npm run build`
- Santé de l’API : `GET http://localhost:5000/api/health`

Pour tester l’intégration complète, démarrez PostgreSQL, créez deux comptes distincts et vérifiez que leurs transactions, budgets et objectifs restent isolés.
