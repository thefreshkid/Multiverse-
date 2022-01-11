const sqlite3 = require('sqlite3').verbose();

function initialise() {
    const db = new sqlite3.Database('./restaurant.sqlite');

    try {
        db.serialize(function () { 
            //db.run("CREATE TABLE RESTAURANT (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, imagelink TEXT)");
            db.run("DROP TABLE IF EXISTS MENUITEM");
            //db.run("CREATE TABLE MENU (id INTEGER PRIMARY KEY AUTOINCREMENT,title TEXT ,restaurant_id INTEGER, FOREIGN KEY (restaurant_id) REFERENCES RESTAURANT(id))");
            db.run("CREATE TABLE MENUITEM (id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT,price REAL,menu_id INTEGER,FOREIGN KEY(menu_id) REFERENCES MENU(id))");
        });
    } finally { 
        // very important to always close database connections
        // else could lead to memory leaks
        db.close();
    }
}
initialise();
