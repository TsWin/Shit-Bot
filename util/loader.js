const fs = require('fs')
const ascii = require("ascii-table"); //6.2K (gzipped: 2.1K)
const { checkCommandModule, checkProperties } = require('./validate');

//const table = new ascii().setHeading("Command", "Load Status");


const loadCommands = (client, dir = "./commands/") => {
    fs.readdirSync(dir).forEach(dirs => {
      const commands = fs.readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));
      try { 
      for (const file of commands) {
        const getFileName = require(`../${dir}/${dirs}/${file}`);
        client.commands.set(getFileName.help.name, getFileName); 
        console.log(`✅ - | [LOG] Commande chargée: ${getFileName.help.name}`)
        /*if (checkCommandModule(file, getFileName.help)) {
          if (checkProperties(file, getFileName.help)) {
            
          }
          console.log("good");
        } else {
          
        }*/
      }
      }catch(err) {
      console.log(`❌ - | [ERROR] Il y a une commande érroné`)
      console.log(err);
       
      }});
  };
  
  const loadEvents = (client, dir = "./events/") => {
    fs.readdirSync(dir).forEach(dirs => {
      const events = fs.readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));
      try {
        for (const event of events) {
        const evt = require(`../${dir}/${dirs}/${event}`);
        const evtName = event.split('.')[0];
        client.on(evtName, evt.bind(null, client));
        console.log(`✅ - | [LOG] Event chargé: ${evtName}`)
        /*if (evt) {
          
          //table.addRow(event, '✅');
        } else {
          //table.addRow(event, '❌ -> missing something??');
          continue;
        }*/
        
      };
      } catch (err) {
        console.log(`❌ - | Il y a un évènement érroné`)
        console.log(err);
      }
      
    });
  };

 // console.log(table.toString());
  //console.log(table2.toString());
  module.exports = {
      loadCommands,
      loadEvents,
  };

