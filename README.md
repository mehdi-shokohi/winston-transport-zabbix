## Winston Transports For Zabbix

#### Using NPM Package of `winston-transport-zabbix`
```js
const winston = require('winston');
const winstonZabbix = require('winston-transport-zabbix')

const logger = winston.createLogger({

  transports: [
    new winstonZabbix({with_timestamps:true,items_host:"APP_HOST_NAME",server: "172.20.0.3", level: "info", key: "project_info_key"}),
    new winstonZabbix({with_timestamps:true,items_host:"APP_HOST_NAME",server: "172.20.0.3", level: "error", key: "project_error_key"}),
    new winstonZabbix({with_timestamps:true,items_host:"APP_HOST_NAME",server: "172.20.0.3", level: "warn", key: "project_warn_key"}),

  ]

});

logger.info("InFo Log ")
logger.warn("Warn Log ")
logger.error("Error Log ")
```

#### Parameters  
***with_timestamps*** :  Add Local Time to Log Body.

***items_host*** : Host Name of Application that is Defined By Zabbix Admin.

***server*** : Address of Zabbix Server.

***level*** : winston Log level title.

***key*** : In Zabbix Per Each Host defined one or more key as Item By Zabbix Admin .