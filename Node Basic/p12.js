const dns = require('dns')
const { json } = require('stream/consumers')

  dns.resolve4('www.facebook.com', (err,data ) => {
    if(err) throw err
    
    data.forEach(item => {
        dns.reverse(item, (err,host) =>{
            if(err) throw err;
            console.log('reverse dns = ', item ,":", JSON.stringify(host))
        })
    })
  })

//reverse dns =  157.240.228.35 : ["edge-star-mini-shv-01-tir2.facebook.com"]

dns.resolve6('www.facebook.com', (err,data ) => {
    if(err) throw err
    
    data.forEach(item => {
        dns.reverse(item, (err,host) =>{
            if(err) throw err;
            console.log('reverse dns = ', item ,":", JSON.stringify(host))
        })
    })
  })

//reverse dns =  2a03:2880:f168:81:face:b00c:0:25de : ["edge-star-mini6-shv-01-tir2.facebook.com"]

