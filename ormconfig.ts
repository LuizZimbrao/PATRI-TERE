module.exports =  {
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
}
