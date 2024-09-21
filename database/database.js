const fs = require('fs');
const path = require('path');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, 'database.sqlite')
});


const checkDatabaseFile = () => {
    const dbPath = path.join(__dirname, 'database.sqlite');
    if (fs.existsSync(dbPath)) {
        console.log('Database file created successfully at:', dbPath);
    } else {
        console.log('Database file not found.');
    }
};

const setupDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

        await sequelize.sync();
        console.log('Database synced.');

        // Verify that sqlite db file exists
        checkDatabaseFile();
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

setupDatabase();

module.exports = {
    setupDatabase,
    sequelize
};