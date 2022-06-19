module.exports = {
    "type": "postgres",
    "url": process.env.DATABASE_URL,
    "entities": [
        "dist/src/entities/*.js"
    ],
    "migrations": [
        "dist/src/database/migrations/*.js"
    ],
    "cli": {
        "migrationsDir": "./src/database/migrations"
    }
};
