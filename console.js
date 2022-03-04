require('dotenv').config();
const repl = require('repl')

const run = async () => {
  const r = repl.start('wordle > ')

  r.context.models = require('./models');
  Object.keys(r.context.models).forEach((model) => {
    r.context[model] = r.context.models[model]
  })
}

run()
