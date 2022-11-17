const app = require('./app');
const port = process.env.PORT;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`El servidor esta corriendo en el puerto ${port}`);
});
