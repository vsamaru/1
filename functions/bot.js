

export async function onRequestPost(context) {
	var { request } = context

  try {
    await Z(request)
    var j = await L.get("J")
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