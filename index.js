const http = require('node:http');
const pupeteer = require('puppeteer');

const server = http.createServer((req,res)=>{
  
  console.log(req.url)
  if (req.url === '/'){
    res.write('this is karim');
    res.end();
  }
  else if (req.url.startsWith('/risko')){
    res.write('this is risko');
    res.end();
  }else if (req.url.startsWith('/omar')){
    res.write('this is omar');
    res.end();
  } 


/*setInterval(async()=>{
  const browser = await pupeteer.launch({headless:false});
  const page = await browser.newPage();
  await Promise.all([
    page.waitForNavigation(),
    page.goto('www.google.com')
  ])
  await page.close();
  await browser.close();
},60000);*/

});
server.listen(80);


