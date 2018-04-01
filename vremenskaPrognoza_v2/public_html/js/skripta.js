let TemplateKostur=`
               <p>
                 <h1>Vremenska prognoza</h1>
                        <span style="float:right;">
					<input type="radio" name="prikaz" onclick="setJedinica(this)" value="&units=metric" checked>&#8451;
					<input type="radio" name="prikaz" onclick="setJedinica(this)" value="&units=imperial">&#8457;
					<input type="radio" name="prikaz" onclick="setJedinica(this)" value="">&#8490;
                        </span>
               </p>

                <p><h2>Izaberite grad</h2></p>
                <select id="KojiGrad">
                    <option value="belgrade">Beograd</option>
                    <option value="novi Sad">Novi Sad</option>
                    <option value="nis">Nis</option>
                    <option value="zagreb">Zagreb</option>
                    <option value="london">London</option>
                </select>

                  <button onclick="pretragaGrad()" class="btn btn-primary">Prikazi</button> 
                   <div id="prikaziGrad"></div>
                <hr style="height:3px;background-color:black;">
    
    
    
                <p><h1>Izaberite gradove:</h1></p>
                       <input type="checkbox" onclick="staviNiz(this)" value="Belgrade">Beograd
                       <input type="checkbox" onclick="staviNiz(this)" value="London">London
                       <input type="checkbox" onclick="staviNiz(this)" value="Zagreb">Zagreb
                       <input type="checkbox" onclick="staviNiz(this)" value="Novi Sad">Novi Sad
                       <input type="checkbox" onclick="staviNiz(this)" value="Nis">Nis
                       <input type="checkbox" onclick="staviNiz(this)" value="barcelona">Barselona

                <div id="prikaziGradove" class="row"></div>

                <p><h2>Prognoza za 5 dana:</h2></p>

                <p><h3>Izaberite grad</h3></p>
                <select id="KojiGradForecast">
                    <option value="belgrade,rs">Beograd</option>
                    <option value="novi Sad,rs">Novi Sad</option>
                    <option value="nis,rs">Nis</option>
                    <option value="zagreb,hr">Zagreb</option>
                    <option value="london,uk">London</option>
                </select>

                <button onclick="pretragaForecast()" class="btn btn-primary">Prikazi</button> 
                   <div id="prikaziForecast"></div>
                <hr style="height:3px;background-color:black;">

                <p><h3>Izaberite gradove:</h3></p>
                    <input type="checkbox" onclick="staviForecast(this)" value="Belgrade">Beograd
                    <input type="checkbox" onclick="staviForecast(this)" value="London">London
                    <input type="checkbox" onclick="staviForecast(this)" value="Zagreb">Zagreb
                    <input type="checkbox" onclick="staviForecast(this)" value="Novi Sad">Novi Sad
                    <input type="checkbox" onclick="staviForecast(this)" value="Nis">Nis
                <div id="prikaziForecastove" class="row"></div>
 `
               
             
 
   
    let resultsTemplateGrad= 
     `
        <div class="col-4 portfolio-item" style="float:left;width:100%;">

          <div class="weather-app" style="float:left;">
                    <div class="left">
                        <div class="temperature"><span id="temperature">{{weathers.main.temp}}</span>&deg;</div>
                        <div class="loc"><span id="loc">{{weathers.name}}</span></div>
                    </div>
                    <div class="right">
                        <div class="top">
                            <img id="slika" width="45px" src="images/codes/{{weathers.weather.0.id}}.png"/>
                        </div>
                        <div class="bottom">
                            <div class="humidity">
                                <img src="images/humidity.png" height="16"/>
                                <span id="humidity">{{weathers.main.humidity}}</span>%
                            </div>
                            <div class="wind">
                                <span id="wind">{{weathers.wind.speed}}</span>
                            </div>
                        </div>
                    </div>
                </div><br><br>
        </div>
     `;
    
     let resultsTemplateGradovi= 
      `
            <div class="col-4 portfolio-item" style="float:left;display:inline;">

              <div class="weather-app">
                        <div class="left">
                            <div class="temperature"><span id="temperature">{{weathers.main.temp}}</span>&deg;</div>
                            <div class="loc"><span id="loc">{{weathers.name}}</span></div>
                        </div>
                        <div class="right">
                            <div class="top">
                                <img id="slika" width="75px" src="images/codes/{{weathers.weather.0.id}}.png"/>
                            </div>
                            <div class="bottom">
                                <div class="humidity">
                                    <img src="images/humidity.png" height="16"/>
                                    <span id="humidity">{{weathers.main.humidity}}</span>%
                                </div>
                                <div class="wind">
                                    <span id="wind">{{weathers.wind.speed}}</span>
                                </div>
                            </div>
                        </div>
                    </div><br><br>
            </div>
   
     `;
    
    let resultsTemplateForecast= 
      `
            <div class="col-4 portfolio-item" style="float:left;display:inline;">
              <div class="weather-app">
                        <div class="left">
                            <div class="datum"><span id="datum">{{datum}}</span></div>
                            <div class="temperature"><span id="temperature">{{weathers.main.temp}}</span>&deg;</div>
                            <div class="loc"><span id="loc">{{naziv}}</span></div>
                        </div>
                        <div class="right">
                            <div class="top">
                                <img id="slika" width="75px" src="images/codes/{{weathers.weather.0.id}}.png"/>
                            </div>
                            <div class="bottom">
                                <div class="humidity">
                                    <img src="images/humidity.png" height="16"/>
                                    <span id="humidity">{{weathers.main.humidity}}</span>%
                                </div>
                                <div class="wind">
                                    <span id="wind">{{weathers.wind.speed}}</span>
                                </div>
                            </div>
                        </div>
                    </div><br><br>
            </div>

     `;
    
    
    let RenderKostur=Handlebars.compile(TemplateKostur);
    let RenderRezultatiGrad=Handlebars.compile(resultsTemplateGrad);
    let RenderRezultatiGradovi=Handlebars.compile(resultsTemplateGradovi);
    let RenderRezultatiForecast=Handlebars.compile(resultsTemplateForecast);
    
    window.onload=function(){
       sadrzaj.innerHTML=RenderKostur();
       
      
    };
    function pretragaGrad(){
        let inputGrad=document.querySelector("#KojiGrad");
        let grad=inputGrad.value;
        upit(grad,false);
    }
    var jedinica="&units=metric";
    function setJedinica(objekat){
        jedinica=objekat.value;
    }
    
    var nizGradova=[];
    function staviNiz(object){
        if(object.checked){
            nizGradova.push(object.value);         
        }
        else{
            nizGradova.splice(nizGradova.indexOf(object.value),1);
        }
        document.querySelector("#prikaziGradove").innerHTML="";
        for(let grad of nizGradova){           
           upit(grad,true);
        }
    }
    function prikazi(data){
         prikaziGrad.innerHTML=RenderRezultatiGrad({weathers: data});
    }
    
    function prikaziVise(data){
	prikaziGradove.innerHTML+=RenderRezultatiGradovi({weathers:data});
    }
    function upit(grad,flagZaCheckBox){
        let appid="69bfe0462ed8013452695b8f9ef34436";
        let apiString="http://api.openweathermap.org/data/2.5/weather?q="+grad+"&APPID="+appid+jedinica;
        
        $.get(apiString,odgovor=function(response){           
           if(flagZaCheckBox){            
               prikaziVise(response);
               temp_uk.push(response.main.temp);
               for(let t of temp_uk){
                   if(response.main.temp==t){
                       temp_uk.splice(temp_uk.indexOf(response.main.temp),1);
                   }
                   else{
                        temp_uk.push(response.main.temp);
                   }
               }
            console.log(temp_uk);          
           } 
           else{
               prikazi(response);
           }
        });
    }   
    function pretragaForecast(){
        var input=document.querySelector("#KojiGradForecast").value;
        upitForecast(input,false);
    }
    function prikaziForecast(data){
        let sadrzaj=document.querySelector("#prikaziForecast");
         console.log(data);
	sadrzaj.innerHTML=RenderRezultatiForecast({weathers:data.list[4],datum:data.list[4].dt_txt,naziv:data.city.name});	
        sadrzaj.innerHTML+=RenderRezultatiForecast({weathers:data.list[12],datum:data.list[12].dt_txt.split("-")[2].split(" ")[0]+"."+data.list[15].dt_txt.split("-")[1],naziv:data.city.name});
	sadrzaj.innerHTML+=RenderRezultatiForecast({weathers:data.list[20],datum:data.list[20].dt_txt.split("-")[2].split(" ")[0]+"."+data.list[23].dt_txt.split("-")[1],naziv:data.city.name});
	sadrzaj.innerHTML+=RenderRezultatiForecast({weathers:data.list[28],datum:data.list[28].dt_txt.split("-")[2].split(" ")[0]+"."+data.list[31].dt_txt.split("-")[1],naziv:data.city.name});
	sadrzaj.innerHTML+=RenderRezultatiForecast({weathers:data.list[36],datum:data.list[36].dt_txt.split("-")[2].split(" ")[0]+"."+data.list[39].dt_txt.split("-")[1],naziv:data.city.name});
    }
    function prikaziViseForecast(data){
        let sadrzaj=document.querySelector("#prikaziForecastove"); 
	sadrzaj.innerHTML+=RenderRezultatiForecast({weathers:data.list[4],datum:data.list[4].dt_txt.split("-")[2].split(" ")[0]+"."+data.list[7].dt_txt.split("-")[1],naziv:data.city.name});	
        sadrzaj.innerHTML+=RenderRezultatiForecast({weathers:data.list[12],datum:data.list[12].dt_txt.split("-")[2].split(" ")[0]+"."+data.list[15].dt_txt.split("-")[1],naziv:data.city.name});
	sadrzaj.innerHTML+=RenderRezultatiForecast({weathers:data.list[20],datum:data.list[20].dt_txt.split("-")[2].split(" ")[0]+"."+data.list[23].dt_txt.split("-")[1],naziv:data.city.name});
	sadrzaj.innerHTML+=RenderRezultatiForecast({weathers:data.list[28],datum:data.list[28].dt_txt.split("-")[2].split(" ")[0]+"."+data.list[31].dt_txt.split("-")[1],naziv:data.city.name});
	sadrzaj.innerHTML+=RenderRezultatiForecast({weathers:data.list[36],datum:data.list[36].dt_txt.split("-")[2].split(" ")[0]+"."+data.list[39].dt_txt.split("-")[1],naziv:data.city.name});
    }
    var nizForecast=[];
    function staviForecast(object){
        if(object.checked){
            nizForecast.push(object.value);
        }
        else{
            nizForecast.splice(nizForecast.indexOf(object.value),1);
        }
        document.querySelector("#prikaziForecastove").innerHTML="";
        for(let grad of nizForecast){
            upitForecast(grad,true);
        }
    }
    
    function upitForecast(grad,flagZaCheckBox){
         let appid="69bfe0462ed8013452695b8f9ef34436";
         let apiString="http://api.openweathermap.org/data/2.5/forecast?q="+grad+"&APPID="+appid+jedinica;   
        $.get(apiString,odgovor=function(response){
           if(flagZaCheckBox){
               prikaziViseForecast(response);
           } 
           else{
               prikaziForecast(response);
           }
        });
    }