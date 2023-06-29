class sum {
    constructor(x,y){
        console.log(x,y);
        this.inp1 = x;
        this.inp2 = y;
        this.calc = () => {
            return x+y
        }
    }
    cal(){
        return this.inp1+this.inp2
    }
    
}

class calculate extends sum {
    constructor(a,b){
        super(a,b)
    }
}

let obj = new calculate(2,3)
console.log("im here",obj.calc())
console.log("im here",obj.cal())


/* Features of node

    1 - Node js is a single threaded
    2 - Cross platform(os)
    3 - asynchronous (executes through callback)
    4 - No blocking or No buffering time
    5 - Highly Scalable
    6 - Open Source
    7 - It's written in vanilla js


    Built-in Modules
    
    1 - Assert - Handling Runtime errors, exceptional handling
    2 - Buffer - storage , in ascii format 8bits
    3 - crypto - for encrypting and decrypting
    4 - cluster - related to thread, check if its running in single or multi thread or converting to multithreading
    5 - dgram - socket communication , it uses UDP protocols - IPV4  - 4 digit port numbers
                                                            IPV6 - 5 digit port numbers
    6 - dns
    7 - net - socket communication , it uses UDP protocols - IPV6 - 5 digit port numbers
    8 - osvm
    9 - zlib
   10 - util

*/