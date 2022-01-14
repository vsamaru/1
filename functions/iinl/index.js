const telegrafResponseBuilder = require('./src/telegrafResponseBuilder');
var { Database } = require('firebase-firestore-lite')


var r = async(ref) => {
    try {
        x = await ref.get()
    } catch (err) {
        await ref.set({})
        x = {}
    }
    return x
}

module.exports = bot => async({req,res}) => {
	const D = new Database({ projectId: Z })
    var h = await req.body.json()
    var type = Object.keys(h)[1]
    var upd = h[type]
    upd.type = type
    var from = upd.chat || upd.from
    upd.user = from.username || from.title
    upd.from = from.id
    var ref = D.ref("TEMp/" + upd.user)
    X = await r(ref)
    h.ctx = upd
    var v = await bot.handleUpdate(h, telegrafResponseBuilder(res))
    await ref.set(X)
    res.status = 200
}