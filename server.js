const app = require("./app");
const port = 8060;

app.listen(port, () => {
  console.log(`app está rodando na porta ${port}`);
});