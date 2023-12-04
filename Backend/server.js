const app = require("./app");
const dontenv = require("dotenv");
const path = require("path");

dontenv.config({ path: path.join(__dirname, "config/config.env") });

app.listen(process.env.PORT, () => {
  console.log(
    `server listening to the port: ${process.env.PORT} in ${process.env.NODE_ENV}`
  );
});
