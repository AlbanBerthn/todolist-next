# Dictionnaire de données

## Utilisateur (`users`)

| Champ      | Type         | Spécificités                                    | Description                                  |
| ---------- | ------------ | ----------------------------------------------- | -------------------------------------------- |
| id         | INT          | PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT | L'identifiant de notre utilisateur           |
| name       | VARCHAR(128) | NOT NULL                                        | Le prénom de l'utilisateur                   |
| lastname   | VARCHAR(128) | NOT NULL,                                       | Le nom de l'utilisateur                      |
| mail       | VARCHAR(128) | NOT NULL,                                       | Le mail de l'utilisateur                     |
| password   | VARCHAR(128) | NOT NULL,                                       | Le mot de passe de l'utilisateur             |
| created_at | TIMESTAMP    | NOT NULL, DEFAULT CURRENT_TIMESTAMP             | La date de création de l'utilisateur'        |
| updated_at | TIMESTAMP    | NULL                                            | La date de la dernière mise de l'utilisateur |

## Tâche (`tasks`)

| Champ      | Type        | Spécificités                                    | Description                                    |
| ---------- | ----------- | ----------------------------------------------- | ---------------------------------------------- |
| id         | INT         | PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT | L'identifiant de notre tâche                   |
| name       | VARCHAR(64) | NOT NULL                                        | Le nom de la tâche                             |
| completion | TINYINT     | NOT NULL                                        | Le pourcentage de complétion de la tâche       |
| status     | TINYINT     | NOT NULL, DEFAULT 1                             | Le statut de la tâche (1=active, 2=archivée)   |
| created_at | TIMESTAMP   | NOT NULL, DEFAULT CURRENT_TIMESTAMP             | La date de création de la tâche                |
| updated_at | TIMESTAMP   | NULL                                            | La date de la dernière mise à jour de la tâche |
| user_id    | INT         | NOT NULL, UNSIGNED                              | Identifiant de l'auteur de la tâche            |

## Course (`courses`)

| Champ      | Type        | Spécificités                                    | Description                                     |
| ---------- | ----------- | ----------------------------------------------- | ----------------------------------------------- |
| id         | INT         | PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT | L'identifiant de notre tâche                    |
| name       | VARCHAR(64) | NOT NULL                                        | Le nom de la tâche                              |
| quantity   | TINYINT     | NOT NULL                                        | La quantité a acheter                           |
| status     | TINYINT     | NOT NULL, DEFAULT 1                             | Le statut de la course (1=active, 2=archivée)   |
| created_at | TIMESTAMP   | NOT NULL, DEFAULT CURRENT_TIMESTAMP             | La date de création de la course                |
| updated_at | TIMESTAMP   | NULL                                            | La date de la dernière mise à jour de la course |
| user_id    | INT         | NOT NULL, UNSIGNED                              | Identifiant de l'auteur de la course            |
