// globalThis.TOKEN = "1750259556:AAEEDprZUtW_dcJiX3wtmCFSVJqsv4ZE2E4"
// import "./iinl/66o"

export async function onRequestPost(context) {
	var { request, env } = context
	
	request = await request.json()
    
	// await Z(request)
    return new Response(JSON.stringify({
            method: "sendmessage",
            chat_id: 5043676235,
            text: request
        }, null, 4), {
    headers: {
      'content-type': 'application/json',
    }
  })
}