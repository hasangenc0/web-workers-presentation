export function runForMs(ms){
  console.log("Running for " + ms + "ms");
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
   console.log("Done");
 }