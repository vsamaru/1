if (typeof L === 'undefined') globalThis.L = {}

async function errorHandler(context) {
  var { request, env: { URLS } } = context
  L = URLS
  try {
    // wait for the next function to finish
    return await context.next()
  } catch (err) {
    // catch and report and errors when running the next function
    return new Response(`${err.message}\n${err.stack}`, { status: 500 })
  }
}

// Attach `errorHandler` to all HTTP requests
export const onRequest = errorHandler;
// const errorHandler = async ({ next }) => {
//   try {
//     return await next()
//   } catch (err) {
//     return new Response(`${err.message}\n${err.stack}`, { status: 500 })
//   }
// }

// const hello = async ({ next }) => {
//   const response = await next()
//   response.headers.set('X-Hello', 'Hello from functions Middleware!')
//   return response
// }

// export const onRequest = [
//   errorHandler,
//   hello
// ]