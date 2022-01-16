var J = ["wo_va","XAT_A","papaswin","gramenu","shas4a"]
// const Repo = require('../store/repo')
function transliterate(word){
    var aa = {"Ё":"YO","Й":"I","Ц":"TS","У":"U","К":"K","Е":"E","Н":"N","Г":"G","Ш":"SH","Щ":"SCH","З":"Z","Х":"H","Ъ":"","ё":"yo","й":"i","ц":"ts","у":"u","к":"k","е":"e","н":"n","г":"g","ш":"sh","щ":"sch","з":"z","х":"h","ъ":"","Ф":"F","Ы":"I","В":"V","А":"a","П":"P","Р":"R","О":"O","Л":"L","Д":"D","Ж":"ZH","Э":"E","ф":"f","ы":"i","в":"v","а":"a","п":"p","р":"r","о":"o","л":"l","д":"d","ж":"zh","э":"e","Я":"Ya","Ч":"CH","С":"S","М":"M","И":"I","Т":"T","Ь":"","Б":"B","Ю":"YU","я":"ya","ч":"ch","с":"s","м":"m","и":"i","т":"t","ь":"","б":"b","ю":"yu"};

  return word.split('').map(function (char) { 
    return aa[char] || char; 
  }).join("");
}

// async function w() {
  
// return await console.warn(777)
// }

exports.POST = async re => {





 
  //console.warn(re)
        var type = Object.keys(re)[1]
    re = re[type]
    re.type = type
    re.from = re.chat || re.from
    re.chat = re.from.id
    re.from = re.from.username || re.from.title || re.from.first_name

if(J.indexOf(re.from)<0) return new Response(console.exit(re), { status: 200 })

      B = {
        "method": "deleteMessage",
       
        "chat_id": re.chat
    }


// B.reply_markup = {
//     "inline_keyboard": [
//         [
//         // {
//         //     "text": "↑",
//         //     "callback_data":  "↑" 
//         // },
//         // {
//         //     "text": "↓",
//         //     "callback_data":  "↓" 
//         // },
//          {
//             "text": ":TO",
//             "switch_inline_query_current_chat": ""
//         },
//                  {
//             "text": "Q",
//             "switch_inline_query": ""
//         },
//                  {
//             "text": "♾",
//             "url": "https://hunt.wwv.workers.dev/map"
//         } ,                {
//             "text": "↓",
//             "callback_data": "↓"
//         },
//         //  {
//         //     "text": "⓪ ① ② ③",
//         //     "callback_data": "⓪ ① ② ③"
//         // }
//         ]
//     ]
// }
B.reply_markup = {
    "inline_keyboard": [
        [
        // {
        //     "text": "↑",
        //     "callback_data":  "↑" 
        // },
        // {
        //     "text": "↓",
        //     "callback_data":  "↓" 
        // },

         {
            "text": ":TO",
            "switch_inline_query_current_chat": ""
        },
                 {
            "text": "🅿️",
            "callback_data": "🅿️"
        },
                         {
            "text": "🅰️",
            "callback_data": "🅰️"
        },
                         {
            "text": "✳️",
            "callback_data": "✳️"
        },
                 {
            "text": "♾",
            "url": "https://03.surge.sh/"
       } //,                {
        //     "text": "↓",
        //     "callback_data": 1
        // },
        //                 {
        //     "text": "⓪",
        //     "callback_data": "⓪"
        // },
        //  {
        //     "text": "⓪ ① ② ③",
        //     "callback_data": "⓪ ① ② ③"
        // }
        ]
    ]
}
    re.in = []

  try {
// if(re.from === "papaswin") B.reply_markup.inline_keyboard.push(
//                          {
//             "text": "X",
//             "switch_inline_query_current_chat": "Xx"
//         })
    //     re.entities = re.entities || re.caption_entities
    // re.text = re.text || re.caption
    if (re.text === '⛔️') await fetch(`https://api.telegram.org/bot${TOKEN}/editMessageMedia`,{
          method: "POST",
    body: {
                message_id: 1705,
                chat_id: 465081843,
                media:{
                media: "https://p-o.surge.sh/i/800.png",type:"photo"
            }
            }
    } )
            //return ERR
  //  var txt = re//[ CACHE.get(re.chat), CACHE.get(re.from) ]

//

        if(re.text === "/start") {
        B.method = 'sendMessage'
          B.text = `
/settings - 🔎
/help - ❓
/start - 🥕
`
            B.reply_markup = {
                "resize_keyboard": true,
                "keyboard": [
                    [{
                        "request_location": true,
                        "text": "📍"
                         }]
                  //  }, "#l", '�','⛔️', "$S"]
                ]
            }
    }
    
    
//    console.log(re.text)
//    delete re.caption
    if(re.via_bot) re.via_bot = re.via_bot.username


try{

    if(re.photo && !re.via_bot) {
   //  x.text = txt
    re.type = "photo"
    re.photo = re.photo[re.photo.length - 1].file_id
    if(re.media_group_id) re.type = "media"
    // re.geo = CACHE.get(re.chat)
   // if(!re.geo) return "ok"
    // re.ref = CACHE.get("ref")
    // re.ref = re.ref || ""
    // var geo = await E.get("ll")
    // geo = await geo.join(",")
    // var ref = await E.get("ref")
    re.cap = " "
    if(re.caption) re.cap = transliterate(re.caption)
    re.caption = re.caption||'по-стрелке'

    var getfile = await fetch('https://api.telegram.org/bot' + TOKEN + '/getFile?file_id=' + re.photo)
    getfile = await getfile.json()
    var path = 'https://api.telegram.org/file/bot' + TOKEN + '/' + getfile.result.file_path
    path = await fetch('https://api.imgbb.com/1/upload?key=33612f7751537f4f27c5253f56edbf16&name='+re.cap+"-"+geo+'&image=' + path);
    path = await path.json()
    // path.from = B.text.from
    // path.geo = B.text.geo
    // path.cap = B.text.caption || "по-стрелке"


   // var x = ["_"+e.data.id,e.data.url_viewer.replace("https://", ""),Date.now(),e.geo,e.data.thumb.url,true,e.cap,e.from,e.data.display_url]

//removeDuplicates()
var it = 0
var rrr = "Серый пак"
if(ref && ref === "🅿️") {it = 2; rrr = "Желтый пак"}
  if(ref && ref === "🅰️") {it = 1; rrr = "Зеленый пак"}
//await E.set(path.data.id,{it:it,ico:ref,msg:(1+re.message_id),key:path.data.id,is:true,from:re.from,ll:geo,img:path.data.url_viewer.replace("https://", ""),th:path.data.thumb.url,url:path.data.display_url,cap:re.caption,ref:rrr,day:Date.now()})
// B.method = 'sendPhoto'
// B.photo = path.data.thumb.url
// B.parse_mode = "HTML"

var ref = await E.get("ref")
var col = "80ffa2"
if(ref && ref === "🅿️") col = "85bfc5"
  if(ref && ref === "🅰️") col = "ff67ab"

       


var caption = [path.data.url_viewer.replace("https://", ""),"🚩 www.google.com/maps?q="+geo,re.caption+" "+ref+" "+rrr].join("\n")
    B.method = 'sendMediaGroup'
  B.media = [
   {
      "type":"photo",
      "media": `https://www.mapquestapi.com/staticmap/v5/map?key=brX4s7eKqZr24Z1icIAJzRYOBQEWxtVv&type=hyb&zoom=18&size=640,320@2x&locations=${geo}|marker-lg-${col}-${col}`
      
   },
   {
      "type":"photo",
      
      "media": path.data.display_url,
      "caption": caption
   }
]
        
         //await fetch(`https://api.telegram.org/bot${TOKEN}/sendmediagroup?chat_id=${re.chat}&media=${encodeURIComponent(JSON.stringify(me))}`)
//          B.reply_markup = {
//     "inline_keyboard": [
//         [
//         // {
//         //     "text": "↑",
//         //     "callback_data":  "↑" 
//         // },
//         // {
//         //     "text": "↓",
//         //     "callback_data":  "↓" 
//         // },
//          {
//             "text": ":TO",
//             "switch_inline_query_current_chat": ""
//         },
//                  {
//             "text": "it",
//            "callback_data": "it"
//         } ,                {
//             "text": "↓",
//             "callback_data": "↓"
//         },
//         //  {
//         //     "text": "⓪ ① ② ③",
//         //     "callback_data": "⓪ ① ② ③"
//         // }
//         ]
//     ]
// }
    }
  } catch(err){}


    try{

     if (re.entities || re.caption_entities) {
      re.text = re.text || re.caption
      re.entities = re.entities || re.caption_entities
            re.entities.forEach((element) => {
         
                   if(element.type === "text_link") { re.url = element.url } else {
                    re[element.type] = re.text.substring(element.offset, (element.offset + element.length))
                    if(re.text === re[element.type]) {
//re.type = element.type
                      delete re.text
                    }
                       if(re[element.type].split("__")[1]) {
                        re.split = re[element.type].split("__")
                        re.split.shift()
                      }
         }
            })
            delete re.entities
            delete re.caption_entities
        }
      } catch (err) {}
       // delete re.message
        delete re.forward_from
        delete re.forward_date
        delete re.chat_instance

//var txt = CACHE.get(re.chat) || "NULL"

     //    if(re.reply_to_message && re.reply_to_message.caption) {

     //      var rr = ''
     //      rr += re.reply_to_message.caption.split("\n")[0]
     //      rr += "\n"
     //      rr += re.text
     //      B.caption = rr
     //     B.method = "editMessageCaption"
     //     B.message_id = re.reply_to_message.message_id
     // await E.put("ref",re.text)
     //    }
         
if(re.text && re.text.startsWith("$")) B.text = "$"
if(re.text > 1000){
B.method = "editMessageText"
//B.message_id = await E.get("msg")
B.text = re.text
}
        if (re.location) {
          var lll = await fetch("https://www.mapquestapi.com/geocoding/v1/reverse?key=brX4s7eKqZr24Z1icIAJzRYOBQEWxtVv&location="+[re.location.latitude , re.location.longitude].join(","))
    .then( r => r.json() )
  .then( r => {r = r.results[0].locations[0].street.replace(/вулиця/gi,'').replace(/проспект/gi,'').trim()
    

            return r || "--"
  })  .catch( err => {
    console.error(err)
  })
  //await E.put({"title":(lll||'-'),"msg":(1+re.message_id),"ll":[re.location.latitude.toFixed(6) , re.location.longitude.toFixed(6)]})
//await E.put("msg",(1+re.message_id))
//await E.put("ll",[re.location.latitude.toFixed(6) , re.location.longitude.toFixed(6)])

re.location = re.location.latitude.toFixed(6) + "," + re.location.longitude.toFixed(6)
//var ref = await E.get("ref")
ref = ref || ''
var col = "80ffa2"
if(ref && ref === "🅿️") col = "85bfc5"
  if(ref && ref === "🅰️") col = "ff67ab"

       var mq = `https://www.mapquestapi.com/staticmap/v5/map?key=brX4s7eKqZr24Z1icIAJzRYOBQEWxtVv&type=hyb&zoom=18&size=640,320@2x&locations=${re.location}|marker-lg-${col}-${col}`





re.type = "location"
B.method = 'sendPhoto'
B.photo = mq
B.caption = ["🚩 www.google.com/maps?q="+re.location,ref].join("\n")
var t = `.
/settings - 🔎
/help - ❓
/start - 🥕

`

        }

if(re.data){
//console.warn(re)
if(re.data === "🅿️" || re.data === "🅰️" || re.data === "✳️"){
  // var geo = await E.get("ll")
  //  geo = await geo.join(",")
  //  geo = "🚩 www.google.com/maps?q="+geo
 ///await E.put("ref",re.data)
           var rr = ''
          rr += geo
          rr += "\n"
          rr += re.data
          B.caption = rr
         B.method = "editMessageCaption"
         B.message_id = re.message.message_id

}
// B = {
// method: "answerCallbackQuery",
// callback_query_id: re.id,
// text: await w(),
// show_alert: true
// }
if(re.data === "↑"){
B = {
method: "pinChatMessage",
chat_id: re.chat,
message_id: re.message.message_id
}
}
if(re.data === "↓"){
B = {
method: "unPinChatMessage",
chat_id: re.chat,
message_id: re.message.message_id
}
}
//CACHE.put(re.from, re.message.message_id, 21600)
delete re.message
}
if(re.result_id){
  if(re.query.includes("/")) { await E.del(re.result_id) } else {
  await E.set(re.result_id,{is:false})
}
  

 //if(re.query.includes("+"))  await E.set(re.result_id,{is:true})

 
  

  
  }
if(re.query != null){
  
 // var rs = await E.inl(re.query)
 //console.warn(rs)

//      

//        if(re.query.endsWith("-")) {

//      if(re.query && re.query.startsWith("-") ){
//  rs = rs.filter(item => !item.is)
//   //rs = rs.filter(item => item.from === re.from)
// }
  // rs = rs.map((el,i) => { el.title = el.title+" #"+i})
// } 
// if(re.query && re.query.startsWith("+")) {
//   rs = rs.filter(item => item.is)
// }  
//   } else { 

// rs = rs.filter(item => item.from === re.from)
    
//   } 
//console.warn(rs)
  // rs = rs.map((el,i) => ({
  //     type: 'article',
  //     id: el.img.replace("ibb.co/","_"),
  //     title: el.ref + " " + el.cap,
  //     description: (el.img.replace("ibb.co/","_") + " " + el.is+" #"+(1+i)).replace("false","❌").replace("true","➕"),
  //     thumb_url: el.th,
  //   //  photo_url: el.url,
  //  //   photo_width: 320,
  //     input_message_content: {
  //       //parse_mode: "HTML",
  //       message_text: [el.img,"🚩 www.google.com/maps?q="+el.ll,el.cap,el.ref].join("\n")
  //     }
  //   })
  //        ).reverse().slice(0,49)
 
B = {
          method: "answerInlineQuery",
      //    switch_pm_text:"🚩"+ll,
          cache_time: 0,
          is_personal: true,
     //     switch_pm_parameter: ll,
          inline_query_id: re.id,
          results: rs
}
//if(re.query === 0) B.cache_time = 1
}

// O[re.from] = O[re.from] || {}

// O[re.from] = {...O[re.from],...re}

//if(re.split && re.split[1]) B.text = re; B.reply_to_message_id = (1+re.split[0])
//console.info(x)

    } catch (err) {
      console.error(err)
   B.text = err.stack || err
  }
  
      return new Response(JSON.stringify(B, null, 4), {
        headers: {
            'content-type': 'application/json'
        }
    })
    }


//module.exports = POST
