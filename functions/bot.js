globalThis.TOKEN = "1750259556:AAEEDprZUtW_dcJiX3wtmCFSVJqsv4ZE2E4"
import "./iinl/66o"

export async function onRequestPost(context) {
	var { request, env: { URLS } } = context
globalThis.U = URLS
  try {
    await Z(request)
    var j = await U.get("J")
    console.info(j)
  } catch (err) {
    console.warn(err)
  }

	request = await request.json()
    
	// await Z(request)
    return new Response(JSON.stringify(B, null, 4), {
    headers: {
      'content-type': 'application/json',
    }
  })
}