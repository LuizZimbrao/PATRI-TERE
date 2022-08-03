module.exports =  process.env.HEROKU_POSTGRESQL_PURPLE_URL ? {
  "type": "postgres",
  "url": process.env.HEROKU_POSTGRESQL_PURPLE_URL,
  "ssl": {rejectUnauthorized: false },
  "entities": [
    "dist/src/entities/*.js"
  ],
  "migrations": [
    "dist/src/database/migrations/*.js"
  ],
  "cli": {
    "migrationsDir": "./src/database/migrations"
  }
} : {
  "type": "postgres",
  "host": "localhost",
  "port": 5432,
  "username": "patritere",
  "password": "patritereapi",
  "database": "patriteredb",
  "entities": [
    "src/entities/*.ts"
  ],
  "migrations": [
    "src/database/migrations/*.ts"
  ],
  "cli": {
    "migrationsDir": "./src/database/migrations"
  }
}
