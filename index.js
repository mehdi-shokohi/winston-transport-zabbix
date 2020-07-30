const Transport = require('winston-transport');
var ZabbixSender = require('node-zabbix-sender');
var Sender = new ZabbixSender();

class CustomTransport extends Transport {
  constructor(opts) {
    super(opts);
    this.opts=opts;
  }

  async log(info, callback) {
    Sender.host=this.opts.server
    if(this.opts.with_timestamps)
      info.AppLocalTime=new Date().toLocaleString()


    if(info.level===this.opts.level)
      Sender.addItem( this.opts.items_host,this.opts.key, JSON.stringify(info));



    await this.sendToServer();


    callback();
  }

  sendToServer(){
    return new Promise((resolve, reject) => {
      Sender.send(function(err, res) {
        if (err) {
          reject(err)

        }
        resolve(res)
      });
    })
  }
}

module.exports =  CustomTransport