//cluster
const cluster = require('cluster')

//isMaster => true = single thread
//isWorker => true = multi thread

if(cluster.isWorker){
    console.log('node is running in multi thread mode')
}else{
    cluster.fork()
    cluster.fork()
    cluster.fork()
    cluster.fork()
}