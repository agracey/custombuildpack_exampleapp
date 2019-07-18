var exports = module.exports = {

  run: (event, context) =>{
    console.log('HELLO CONSOLE!', JSON.stringify(event), JSON.stringify(context))
    return "Hello World"
  }
}
