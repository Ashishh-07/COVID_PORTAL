$(document).ready(function () {
    // Get JSON data from url

    $.getJSON("https://api.covid19india.org/data.json",function (data1){

    
        let testPermil =0;
        let totalsampletest =0;

        $.each(data1.tested, function (id1, obj1){
            testPermil = obj1.testspermillion;
            totalsampletest =obj1.totalsamplestested;
        });
        document.getElementById("testdone").innerHTML = totalsampletest.toLocaleString('en');
        document.getElementById("testmil").innerHTML = testPermil.toLocaleString('en');


    });

    $.getJSON("https://api.covid19india.org/state_test_data.json", function (data) {
      let an_cases =0;
      let andhra_cases =0;
      let aru_cases =0;
      let as_cases =0;
      let bh_cases =0;
      let ch_cases =0;
      let d_cases =0;
      let de_cases =0;
      let g_cases =0;
      let gj_cases =0;
      let h_cases =0;
      let jk_cases =0;
      let kn_cases =0;
      let kl_cases =0;
      let la_cases =0;
      let mp_cases =0;
      let mh_cases = 0;
      let mn_cases =0;
      let me_cases =0;
      let mz_cases=0;
      let ng_cases=0;
      let od_cases =0;
      let pd_cases =0;
      let pb_cases = 0;
      let rj_cases =0;
      let sk_cases =0;
      let tn_cases = 0;
      let tr_cases =0;
      let up_cases =0;
      let uk_cases = 0;
      let wb_cases = 0;
      
      $.each(data.states_tested_data, function (id, obj) {
        if(obj.state == "Andaman and Nicobar Islands"){
            an_cases = obj.totaltested;            
        }  
        if(obj.state == "Andhra Pradesh"){
            andhra_cases = obj.totaltested;
        }
        if(obj.state == "Arunachal Pradesh"){
            aru_cases = obj.totaltested;
        }
        if(obj.state == "Assam"){
            as_cases = obj.totaltested;
        }
        if(obj.state =="Bihar"){
            bh_cases =obj.totaltested;
        }
        if(obj.state == "Chandigarh"){
            ch_cases = obj.totaltested;
        }
        if(obj.state == "Dadra and Nagar Haveli and Daman and Diu"){
            d_cases = obj.totaltested;
        }
        if(obj.state =="Delhi"){
            de_cases = obj.totaltested;
        }
        if(obj.state == "Goa"){
            g_cases = obj.totaltested;
        }
        if(obj.state == "Gujarat"){
            gj_cases = obj.totaltested;
        }
        if(obj.state == "Haryana"){
            h_cases = obj.totaltested;
        }
        if(obj.state == "Himachal Pradesh"){
            hi_cases = obj.totaltested;
        }
        if(obj.state == "Jammu and Kashmir"){
            jk_cases = obj.totaltested;
        }
        if(obj.state == "Jharkhand"){
            jh_cases = obj.totaltested;
        }
        if(obj.state =="Karnataka"){
            kn_cases = obj.totaltested;
        }
        if(obj.state =="Kerala"){
            kl_cases = obj.totaltested;
        }
        if(obj.state == "Ladakh"){
            la_cases = obj.totaltested;
        }
        if(obj.state =="Madhya Pradesh"){
            mp_cases = obj.totaltested;
        }
        if(obj.state =="Maharashtra"){
            mh_cases = obj.totaltested;
        }
        if(obj.state =="Manipur"){
            mn_cases = obj.totaltested;
        }
        if(obj.state == "Meghalaya"){
            me_cases = obj.totaltested;
        }
        if(obj.state =="Mizoram"){
            mz_cases = obj.totaltested;
        }
        if(obj.state =="Nagaland"){
            ng_cases = obj.totaltested;
        }
        if(obj.state =="Odisha"){
            od_cases = obj.totaltested;
        }
        if(obj.state == "Puducherry"){
            pd_cases = obj.totaltested;
        }
        if(obj.state == "Punjab"){
            pb_cases = obj.totaltested;
        }
        if(obj.state == "Rajasthan"){
            rj_cases = obj.totaltested;
        }
        if(obj.state =="Sikkim"){
            sk_cases = obj.totaltested;
        }
        if(obj.state == "Tamil Nadu"){
            tn_cases = obj.totaltested;
        }
        if(obj.state == "Tripura"){
            tr_cases = obj.totaltested;
        }
        if(obj.state == "Uttar Pradesh"){
            up_cases = obj.totaltested;
        }
        if(obj.state == "Uttarakhand"){
            uk_cases = obj.totaltested;
        }
        if(obj.state == "West Bengal" ){
            wb_cases = obj.totaltested;
        }
        
      });
      const mymap = L.map('issMap').setView([0, 0], 6);
      const attribution =
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
  
      const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
      const tiles = L.tileLayer(tileUrl, { attribution });
        tiles.addTo(mymap);
  
       mymap.setView([19.663280, 75.300293], 5);
       L.marker([19.663280, 75.300293]).addTo(mymap)
      .bindPopup('Maharashtra Test Count:' +mh_cases)
      .openPopup();
       mymap.setView([11.623377, 92.726486], 5);
       L.marker([11.623377, 92.726486]).addTo(mymap)
       .bindPopup('Andaman and Nicobar Islands test count:'+an_cases)
       .openPopup();
       mymap.setView([17.004393, 81.783325], 5);
       L.marker([17.004393, 81.783325]).addTo(mymap)
      .bindPopup('Andhra Pradesh test count:' +andhra_cases)
      .openPopup();
       mymap.setView([28.218, 94.7278], 5);
       L.marker([28.218, 94.7278]).addTo(mymap)
      .bindPopup('Arunachal pradesh test count:' +aru_cases)
      .openPopup();
      mymap.setView([26.244156, 92.537842], 5);
      L.marker([26.244156, 92.537842]).addTo(mymap)
     .bindPopup('Assam test count:' +as_cases)
     .openPopup();
     mymap.setView([25.612677, 85.158875], 5);
     L.marker([ 25.612677, 85.158875]).addTo(mymap)
    .bindPopup('Bihar test count:' +bh_cases)
    .openPopup();
    mymap.setView([30.741482, 76.768066], 5);
     L.marker([30.741482, 76.768066]).addTo(mymap)
    .bindPopup('Chandigarh test count:' +bh_cases)
    .openPopup();
    mymap.setView([20.397373, 72.832802], 5);
    L.marker([20.397373, 72.832802]).addTo(mymap)
    .bindPopup('Dadra and Nagar Haveli and Daman and Diu test count:' +d_cases)
    .openPopup();
     mymap.setView([28.65381, 77.22897], 5);
     L.marker([28.65381, 77.22897]).addTo(mymap)
    .bindPopup('Delhi test count:' +de_cases)
    .openPopup();
     mymap.setView([15.533414, 73.764954], 5);
     L.marker([15.533414, 73.764954]).addTo(mymap)
    .bindPopup('Goa test count:' +g_cases)
    .openPopup();
    mymap.setView([23.033863,72.585022], 5);
    L.marker([23.033863, 72.585022]).addTo(mymap)
   .bindPopup('Gujarat test count:' +gj_cases)
   .openPopup();
   mymap.setView([29.065773,76.040497], 5);
    L.marker([29.065773, 76.040497]).addTo(mymap)
   .bindPopup('Haryana test count:' +h_cases)
   .openPopup();
   mymap.setView([32.084206,77.571167], 5);
   L.marker([32.084206, 77.571167]).addTo(mymap)
  .bindPopup('Himachal Pradesh test count:' +hi_cases)
  .openPopup();
  mymap.setView([34.083656,74.797371], 5);
  L.marker([34.083656, 74.797371]).addTo(mymap)
 .bindPopup('Jammu kashmir test count:' +jk_cases)
 .openPopup();
 mymap.setView([23.344315,85.296013], 5);
  L.marker([23.344315, 85.296013]).addTo(mymap)
 .bindPopup('Jharkhand test count:' +jh_cases)
 .openPopup();
 mymap.setView([15.317277,75.713890], 5);
 L.marker([ 15.317277, 75.713890]).addTo(mymap)
.bindPopup('Karnataka test count:' +kn_cases)
.openPopup();
mymap.setView([8.524139,76.936638], 5);
 L.marker([ 8.524139,76.936638]).addTo(mymap)
.bindPopup('Kerala test count:' +kl_cases)
.openPopup();
mymap.setView([34.152588,77.577049], 5);
 L.marker([34.152588,77.577049]).addTo(mymap)
.bindPopup('Ladakh test count:' +la_cases)
.openPopup();
mymap.setView([22.346266,78.666916], 5);
 L.marker([22.346266,78.666916]).addTo(mymap)
.bindPopup('Madhya Pradesh test count:' +mp_cases)
.openPopup();
mymap.setView([24.782784,93.885895], 5);
 L.marker([24.782784,93.885895]).addTo(mymap)
.bindPopup('Manipur test count:' +mn_cases)
.openPopup();
mymap.setView([25.469393,89.951324], 5);
 L.marker([25.469393,89.951324]).addTo(mymap)
.bindPopup('Meghalaya test count:' +me_cases)
.openPopup();
mymap.setView([24.226460,92.954552], 5);
 L.marker([24.226460,92.954552]).addTo(mymap)
.bindPopup('Mizoram test count:' +mz_cases)
.openPopup();
mymap.setView([25.906267,93.727592], 5);
 L.marker([25.906267,93.727592]).addTo(mymap)
.bindPopup('Nagaland test count:' +ng_cases)
.openPopup();
mymap.setView([20.296059, 85.824539], 5);
 L.marker([20.296059, 85.824539]).addTo(mymap)
.bindPopup('Odisha test count:' +od_cases)
.openPopup();
mymap.setView([11.916064, 79.812325], 5);
 L.marker([11.916064, 79.812325]).addTo(mymap)
.bindPopup('Puducherry test count:' +pd_cases)
.openPopup();
mymap.setView([30.900965 , 75.857277], 5);
 L.marker([30.900965 , 75.857277]).addTo(mymap)
.bindPopup('Punjab test count:' +pb_cases)
.openPopup();
mymap.setView([27.391277, 73.432617], 5);
 L.marker([27.391277 , 73.432617]).addTo(mymap)
.bindPopup('Rajasthan test count:' +rj_cases)
.openPopup();
mymap.setView([27.338936,  88.606506], 5);
 L.marker([27.338936, 88.606506]).addTo(mymap)
.bindPopup('Sikkim test count:' +sk_cases)
.openPopup();
mymap.setView([11.059821,  88.606506], 5);
 L.marker([11.059821, 78.387451]).addTo(mymap)
.bindPopup('Tamilnadu test count:' +tn_cases)
.openPopup();
mymap.setView([23.829321,  91.277847], 5);
 L.marker([23.829321, 91.277847]).addTo(mymap)
.bindPopup('Tripura test count:' +tr_cases)
.openPopup();
mymap.setView([28.207609,  79.826660], 5);
 L.marker([28.207609, 79.826660]).addTo(mymap)
.bindPopup('Uttar Pradesh test count:' +up_cases)
.openPopup();
mymap.setView([29.380304,  79.463570], 5);
 L.marker([29.380304,79.463570]).addTo(mymap)
.bindPopup('Uttarakhand test count:' +uk_cases)
.openPopup();
mymap.setView([22.390793,  88.227760], 5);
 L.marker([22.390793,88.227760]).addTo(mymap)
.bindPopup('West Bengal test count:' +wb_cases)
.openPopup();
 
 
    
    
    
    
  

    });
    
  });
