'use strict'
const co2 = require('@tgwf/co2')

module.exports = async (event, context) => {
  const { query } = event

  if (!query.bytes || query.bytes === '') {
    return context
      .status(400)
      .succeed(JSON.stringify({ error: 'Please provide bytes as a query parameter' }))
  }

  const swd = new co2.co2()

  if (isNaN(query.bytes)) {
    return context.status(400).succeed(JSON.stringify({ error: 'Please provide bytes as a number' }))
  }


  const bytes = parseInt(query.bytes)

  const calc = swd.perVisit(bytes)
  return context
    .status(200)
    .succeed(JSON.stringify(calc))
}
