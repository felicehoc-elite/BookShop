if ((!process.env.NODE_ENV) || process.env.NODE_ENV === 'local') {
  module.exports = {
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "root",
    "database": "bookshop",
    "entities": ["dist/**/*.entity{.ts,.js}"],
    "synchronize": true
  };
} else if (process.env.NODE_ENV === 'dev') {
  module.exports = {
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "root",
    "database": "bookshop",
    "entities": ["dist/**/*.entity{.ts,.js}"],
    "synchronize": true
  };
} else if (process.env.NODE_ENV === 'test') {
  module.exports = {
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "root",
    "database": "bookshop",
    "entities": ["dist/**/*.entity{.ts,.js}"],
    "synchronize": true
  };
}
