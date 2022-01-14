if (typeof fetch === 'undefined') require("isomorphic-unfetch")

if (typeof process != 'undefined') {
    process.on('uncaughtException', err => {
        console.error(err)
    })
}

if (typeof L === 'undefined') globalThis.L = {}

var ibb = image => {
    var details = {
        'image': image.split(",")[1] || image.split(",")[0]
    }
    var formBody = []
    for (var property in details) {
        var encodedKey = encodeURIComponent(property)
        var encodedValue = encodeURIComponent(details[property])
        formBody.push(encodedKey + "=" + encodedValue)
    }
    formBody = formBody.join("&")
    return fetch(`https://api.imgbb.com/1/upload?key=af7cad64d90d19e2a26889f92f6b3ed8`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencodedcharset=UTF-8'
        },
        body: formBody
    }).then(r => r.json()).then(r => r.data).then(r => {
        r = {
            vi: r.url_viewer,
            hi: r.url,
            th: r.thumb.url,
            di: r.display_url
        }
        return r
    })
}

globalThis.c = new Proxy(c, {

    get: (e, o) => (...l) => {
        var chat = 5043676235
        return l.map((l, i) => {
            switch (o) {
                //case "log": return console.log(l)
             
                case "ibb":
                    return ibb(l)
                case "error":
                    chat = 5043676235;
                    l = ("⛔️ " + (l.stack || l)).replace("\n", "\n\n").replace("\n", "\n\n").replace(":", "\n")
                    break
                case "info":
                    chat = 5043676235;
                    break
                case "warn":
                    chat = 5043676235;
                    break

                default:
                    return
            }

            l = typeof l === "object" ? JSON.stringify(l, null, 4) : l
            l = String(l).substring(0, 4090)

            return fetch(`https://api.telegram.org/bot1998266306:AAFfOoMrCRQ1xE9TlaWL86PoMk3dwkLQYyY/sendMessage?chat_id=${chat}&text=${encodeURIComponent(l)}`)
                .then(r => r.json())
                .then(r =>
                    r.description ? fetch(`https://api.telegram.org/bot1998266306:AAFfOoMrCRQ1xE9TlaWL86PoMk3dwkLQYyY/sendMessage?chat_id=${chat}&text=${encodeURIComponent(r.description)}`) : ''
                )
        })
    }
})

var f = async x => {
                    globalThis.F = await fetch(`https://iiilll.firebaseio.com/${x.chat}.json`, {
                        method: 'PUT',
                        body: JSON.stringify(x)
                    }).then(r => r.json())

                    // await fetch(`https://iiilll.firebaseio.com/${x.chat}.json`, {
                    //     method: 'PUT',
                    //     body: JSON.stringify(l)
                    // }).then(r => r.json())
                }
                
globalThis.U = async function upd(req) {

if(req.cf) req = await (req.clone()).json()

    req[Object.keys(req)[1]].type = Object.keys(req)[1]
    req = req[Object.keys(req)[1]]
    req.from = req.chat || req.from
    req.chat = req.from.id
    req.from = req.from.username || req.from.title || req.from.first_name
   
    if (req.entities && req.text) {
        req.entities.forEach((element) => {
            if (element.type === "text_link") {
                req.url = element.url
            } else {
                req[element.type] = req.text.substring(element.offset, (element.offset + element.length))
                if (req.text === req[element.type]) {

                    delete req.text
                }
            }
        })
        delete req.entities
    }

    if (req.text && req.text.startsWith(".")) {
        req.type = "ref"
        req.ref = req.text.replace(".", "").toUpperCase()
    }

    if (req.document && req.document.mime_type.startsWith("image")) {
        req.photo = [{
            file_size: req.document.file_size,
            file_id: req.document.file_id,
            width: 1440
        }]
        delete req.document
    }
    if (req.photo) {
        req.caption = (req.caption || "по-стрелке").toUpperCase()
        req.photo = req.photo[req.photo.length - 1]
        req.width = req.photo.width
        req.photo = await fetch('https://api.telegram.org/bot' + TOKEN + '/getFile?file_id=' + req.photo.file_id)
            .then(r => r.json())
            .then(r => {
                return 'https://api.telegram.org/file/bot' + TOKEN + '/' + r.result.file_path
            })
        req.type = "photo"
    }
    if (req.location && !req.id && !req.result_id) {
        req.location = req.location.latitude + "," + req.location.longitude
        req.type = "geo"
    }
        if (req.type == "inline_query") {
      
    }
    
     if (req.sticker) {
        
        await fetch(`https://api.telegram.org/bot${TOKEN}/deleteMessage?chat_id=${req.chat}&message_id=${req.message_id}`)
    } 
//     else {

// L[req.chat] = {...L[req.chat],...req}

//     }

    return req
}