const { app } = require("./app");
//utils
const { db } = require("./utils/database.util");

db.authenticate()
  .then(() => {
    console.log("database authenticate!!");
  })
  .catch((err) => {
    console.log(err);
  });

db.sync()
  .then(() => {
    console.log("db Synced!");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(4000, () => {
  console.log("app Runing!!");
});
