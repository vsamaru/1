globalThis.TOKEN = "1750259556:AAEEDprZUtW_dcJiX3wtmCFSVJqsv4ZE2E4"
import "./iinl"

export async function onRequestPost(context) {
    var { request } = context
	await Z(request)
    return new Response(JSON.stringify(B, null, 4), {
    headers: {
      'content-type': 'application/json',
    }
  })
}