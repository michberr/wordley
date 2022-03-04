require('dotenv').config();
const repl = require('repl')

const run = async () => {
  const r = repl.start('wordle > ')

  r.context.models = require('./models');
  r.context.User = r.context.models.User
}

run()
