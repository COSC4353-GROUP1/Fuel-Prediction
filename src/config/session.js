import session from "express-session"

const MongoStore = require("connect-mongo")(session);

let sessionStore = new MongoStore ({
    url: `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_NAME}.nvgidv8.mongodb.net/?retryWrites=true&w=majority`,
    autoReconnect: true,
    //autoRemove: "native"
})
/**
 * config session for app
 */
let config = (app) => {
    app.use(session({
        key: "express.sid",
        secret: "mySecret",
        store: sessionStore,
        resave: true,
        saveUninitialized: false,
        cookies: {
            maxAge: 1000 * 60 * 60 *24  //1 day
            
        }
    }))
};

module.exports = {
    config: config,
    sessionStore: sessionStore
}
