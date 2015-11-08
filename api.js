
//var soda = require('soda-js');
//var consumer = new soda.Consumer('data.greensboro-nc.gov');
import request from 'superagent'

export let getViolations = function (lat, long, diameter){
  let url = "https://brigades.opendatanetwork.com/resource/eh9f-tamt.json?$where=within_circle(location," + lat + ',' + long + ',' + diameter + ')';
    request.get(url).end((error, result) => {
    if (result.ok) {
      return (result.body || []);
    }
    else {
      //alert('Oh noes! ' + error.message);
    }
  });
};
//
