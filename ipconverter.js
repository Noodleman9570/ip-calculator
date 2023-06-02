function convertDecToBin(ipAddr){
    let array = [];
    let binary = [];
    const afterSplit = ipAddr.split('.');

    array = afterSplit;

    console.log(array);
    array.forEach((element, i) => {
        const ipAddrInt = parseInt(element)
        binary[i] = ipAddrInt.toString(2)
    })
  return binary.join('.')
  
}
class IP {
    constructor(ip, pref){
        this.ip = ip;
        this.pref = pref;
    }

    stringToArray(){
        let array = [];
        const afterSplit = this.ip.split('.');
        array = afterSplit;
        return array;
    }

    decToBin(){
        let binary = []
        let arr = this.stringToArray();
        arr.forEach((element, i) => {
            const ipAddrInt = parseInt(element);
            binary[i] = ipAddrInt.toString(2);
        })
      return binary.join('.');
    }

    static 

    getMaskDec(){
        let 
    }
    
}

$("#calc_btn").on("click", function(e){
    e.preventDefault();
    let ip;
    let pref;
    let nsub;

    
    ip = $("#ip").val();
    pref = $('#pref').val();
    nsub = $('#nsub').val();

    let nbith = 0;
    let i = 0;

    while (nbith < nsub) {
        nbith = math.pow(2,i);
        i++;
    }

    let nbitSubr = 0;
    nbitSubr = (32-nsub)-nbith;

    let newPref = pref + nbitSubr;


    let ipObj = new IP(ip, pref);

    console.log(ipObj.stringToArray());
    console.log(ipObj.decToBin());

    // console.log(convertDecToBin(ip));
    // console.log(getMascara)(pref)
})

