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
      let at_p;
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
    
      document.getElementById('an_case').innerHTML = an_cases.toLocaleString('en');
      document.getElementById('andhra_cases').innerHTML = andhra_cases.toLocaleString('en');
      document.getElementById('aru_cases').innerHTML = aru_cases.toLocaleString('en');
      document.getElementById('as_cases').innerHTML =as_cases.toLocaleString('en');
      document.getElementById('bh_cases').innerHTML = bh_cases.toLocaleString('en');
      document.getElementById('ch_cases').innerHTML = ch_cases.toLocaleString('en');
      document.getElementById('d_cases').innerHTML = d_cases.toLocaleString('en');
      document.getElementById('de_cases').innerHTML = de_cases.toLocaleString('en');
      document.getElementById('g_cases').innerHTML = g_cases.toLocaleString('en');
      document.getElementById('gj_cases').innerHTML = gj_cases.toLocaleString('en');
      document.getElementById('h_cases').innerHTML = h_cases.toLocaleString('en');
      document.getElementById('hi_cases').innerHTML = hi_cases.toLocaleString('en');
      document.getElementById('jk_cases').innerHTML = jk_cases.toLocaleString('en');
      document.getElementById('jh_cases').innerHTML = jh_cases.toLocaleString('en');
      document.getElementById('kn_cases').innerHTML = kn_cases.toLocaleString('en');
      document.getElementById('kl_cases').innerHTML = kl_cases.toLocaleString('en');
      document.getElementById('la_cases').innerHTML = la_cases.toLocaleString('en');
      document.getElementById('mp_cases').innerHTML = mp_cases.toLocaleString('en');
      document.getElementById('mh_cases').innerHTML = mh_cases.toLocaleString('en');
      document.getElementById('mn_cases').innerHTML = mn_cases.toLocaleString('en');
      document.getElementById('me_cases').innerHTML = me_cases.toLocaleString('en');
      document.getElementById('mz_cases').innerHTML = mz_cases.toLocaleString('en');
      document.getElementById('ng_cases').innerHTML = ng_cases.toLocaleString('en');
      document.getElementById('od_cases').innerHTML = od_cases.toLocaleString('en');
      document.getElementById('pd_cases').innerHTML = pd_cases.toLocaleString('en');
      document.getElementById('pb_cases').innerHTML = pb_cases.toLocaleString('en');
      document.getElementById('rj_cases').innerHTML = rj_cases.toLocaleString('en');
      document.getElementById('sk_cases').innerHTML = sk_cases.toLocaleString('en');
      document.getElementById('tn_cases').innerHTML = tn_cases.toLocaleString('en');
      document.getElementById('tr_cases').innerHTML = tr_cases.toLocaleString('en');
      document.getElementById('up_cases').innerHTML = up_cases.toLocaleString('en');
      document.getElementById('uk_cases').innerHTML = uk_cases.toLocaleString('en');
      document.getElementById('wb_cases').innerHTML = wb_cases.toLocaleString('en');
      



    });
  });
