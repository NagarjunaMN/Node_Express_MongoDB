// dns = domain name system (server)

const dns = require('dns')

  dns.lookup('www.facebook.com',function (err,address,family) {
    if(err) throw err
    console.log("address = ",address)
    console.log("family = ",family)

    dns.lookupService(address,22,function (err,host,service) {
        if(err) throw err;
        console.log("host = ",host)
        console.log("service = ",service)
    })
  })

//www.facebook.com
// address =  2a03:2880:f168:81:face:b00c:0:25de
// family =  6
// host =  edge-star-mini6-shv-01-tir2.facebook.com
// service =  ssh(secure shell/secure socket shell) -> network protocol


//www.be-practicals.com
// address =  52.15.164.149
// family =  4
// host =  ec2-52-15-164-149.us-east-2.compute.amazonaws.com
// service =  ssh

