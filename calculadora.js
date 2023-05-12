
var ncoma, cadenaSuma=0, cadenaResta=0, cadenaMulti=0, cadenaDiv=0, total, banSuma=0, banResta=0, puntoPuesto=0, banMulti=0, banDiv=0, limpiar=0

document.getElementById("1").addEventListener("click",()=>{
    if (limpiar==0){
        document.getElementById("res").innerHTML=document.getElementById("res").value + document.getElementById("1").value;
    }else{
        limpiar=0
        document.getElementById("res").innerHTML="";
        document.getElementById("res").innerHTML=document.getElementById("res").value + document.getElementById("1").value;
    }
})
document.getElementById("2").addEventListener("click",()=>{
    if (limpiar==0){
        document.getElementById("res").innerHTML=document.getElementById("res").value+document.getElementById("2").value;
    }else{
        limpiar=0
        document.getElementById("res").innerHTML="";
        document.getElementById("res").innerHTML=document.getElementById("res").value + document.getElementById("2").value;
    }
})
document.getElementById("3").addEventListener("click",()=>{
    if (limpiar==0){
        document.getElementById("res").innerHTML=document.getElementById("res").value + document.getElementById("3").value;
    }else{
        limpiar=0
        document.getElementById("res").innerHTML="";
        document.getElementById("res").innerHTML=document.getElementById("res").value + document.getElementById("3").value;
    }
})
document.getElementById("4").addEventListener("click",()=>{
    if (limpiar==0){
        document.getElementById("res").innerHTML=document.getElementById("res").value + document.getElementById("4").value;
    }else{
        limpiar=0
        document.getElementById("res").innerHTML="";
        document.getElementById("res").innerHTML=document.getElementById("res").value + document.getElementById("4").value;
    }
})
document.getElementById("5").addEventListener("click",()=>{
    if (limpiar==0){
        document.getElementById("res").innerHTML=document.getElementById("res").value + document.getElementById("5").value;
    }else{
        limpiar=0
        document.getElementById("res").innerHTML="";
        document.getElementById("res").innerHTML=document.getElementById("res").value + document.getElementById("5").value;
    }
})
document.getElementById("6").addEventListener("click",()=>{
    if (limpiar==0){
        document.getElementById("res").innerHTML=document.getElementById("res").value + document.getElementById("6").value;
    }else{
        limpiar=0
        document.getElementById("res").innerHTML="";
        document.getElementById("res").innerHTML=document.getElementById("res").value + document.getElementById("6").value;
    }
})
document.getElementById("7").addEventListener("click",()=>{
    if (limpiar==0){
        document.getElementById("res").innerHTML=document.getElementById("res").value + document.getElementById("7").value;
    }else{
        limpiar=0
        document.getElementById("res").innerHTML="";
        document.getElementById("res").innerHTML=document.getElementById("res").value + document.getElementById("7").value;
    }
})
document.getElementById("8").addEventListener("click",()=>{
    if (limpiar==0){
        document.getElementById("res").innerHTML=document.getElementById("res").value + document.getElementById("8").value;
    }else{
        limpiar=0
        document.getElementById("res").innerHTML="";
        document.getElementById("res").innerHTML=document.getElementById("res").value + document.getElementById("8").value;
    }
})
document.getElementById("9").addEventListener("click",()=>{
    if (limpiar==0){
        document.getElementById("res").innerHTML=document.getElementById("res").value + document.getElementById("9").value;
    }else{
        limpiar=0
        document.getElementById("res").innerHTML="";
        document.getElementById("res").innerHTML=document.getElementById("res").value + document.getElementById("9").value;
    }
})
document.getElementById(".").addEventListener("click",()=>{
    if (puntoPuesto==0){
        if (document.getElementById("res").value!=""){
            ncoma=document.getElementById(".").value;
            document.getElementById("res").innerHTML=document.getElementById("res").value+ncoma;
            puntoPuesto=1;
        }else{
            document.getElementById("res").innerHTML="0.";
            puntoPuesto=1;
        }
    }
})
document.getElementById("0").addEventListener("click",()=>{
    if (limpiar==0){
        document.getElementById("res").innerHTML=document.getElementById("res").value + document.getElementById("0").value;
    }else{
        limpiar=0
        document.getElementById("res").innerHTML="";
        document.getElementById("res").innerHTML=document.getElementById("res").value + document.getElementById("0").value;
    }           
})
document.getElementById("+/-").addEventListener("click",()=>{
    valor=document.getElementById("res").value;
    if(valor.charAt(0) != "-"){                
        document.getElementById("res").value="-"+valor;
    }else{
        document.getElementById("res").value=valor.substring(1);
    }
    
})
document.getElementById("C").addEventListener("click",()=>{
    puntoPuesto=0;
    limpiar=0;
    banSuma=0;
    banResta=0;
    banMulti=0;
    banDiv=0;
    document.getElementById("res").value="";            
})
document.getElementById("+").addEventListener("click",()=>{
    banSuma=1;
    puntoPuesto=0;
    cadenaSuma=cadenaSuma+parseFloat(document.getElementById("res").value);
    document.getElementById("res").value="";
    
})
document.getElementById("-").addEventListener("click",()=>{
    banResta=1;
    puntoPuesto=0;    
    if (cadenaResta!=0){
        cadenaResta=cadenaResta-parseFloat(document.getElementById("res").value);
    }else{
        cadenaResta=parseFloat(document.getElementById("res").value);
    }
    document.getElementById("res").value="";            
})
document.getElementById("*").addEventListener("click",()=>{
    banMulti=1;
    puntoPuesto=0;
    if (cadenaMulti!=0){
        cadenaMulti=cadenaMulti*parseFloat(document.getElementById("res").value);
    }else{
        cadenaMulti=parseFloat(document.getElementById("res").value);
    }    
    document.getElementById("res").value="";    
})
document.getElementById("/").addEventListener("click",()=>{
    banDiv=1;
    puntoPuesto=0;
    if (cadenaDiv!=0){
        cadenaDiv=cadenaDiv/parseFloat(document.getElementById("res").value);
    }else{
        cadenaDiv=parseFloat(document.getElementById("res").value);
    }  
    document.getElementById("res").value="";
})
document.getElementById("R2").addEventListener("click",()=>{
    if (document.getElementById("res").value!=""){ 
        limpiar=1               
        document.getElementById("res").value=Math.sqrt(document.getElementById("res").value);
    }            
})
document.getElementById("R3").addEventListener("click",()=>{
    if (document.getElementById("res").value!=""){  
        limpiar=1              
        document.getElementById("res").value=Math.cbrt(document.getElementById("res").value);
    }            
})
document.getElementById("sen").addEventListener("click",()=>{
    if (document.getElementById("res").value!=""){  
        limpiar=1              
        document.getElementById("res").value=Math.sin(document.getElementById("res").value);
    }            
})
document.getElementById("asen").addEventListener("click",()=>{
    if (document.getElementById("res").value!=""){  
        limpiar=1              
        document.getElementById("res").value=Math.asin(document.getElementById("res").value);
    }            
})
document.getElementById("csc").addEventListener("click",()=>{
    if (document.getElementById("res").value!=""){  
        limpiar=1              
        document.getElementById("res").value=Math.acos(document.getElementById("res").value);
    }            
})
document.getElementById("cot").addEventListener("click",()=>{
    if (document.getElementById("res").value!=""){  
        limpiar=1              
        document.getElementById("res").value=Math.atan(document.getElementById("res").value);
    }            
})
document.getElementById("P").addEventListener("click",()=>{
    if (document.getElementById("res").value!=""){ 
        limpiar=1               
        document.getElementById("res").value=document.getElementById("res").value * document.getElementById("res").value;
    }            
})
document.getElementById("P3").addEventListener("click",()=>{
    if (document.getElementById("res").value!=""){  
        limpiar=1
        const n=document.getElementById("res").value;
        document.getElementById("res").value=(document.getElementById("res").value * document.getElementById("res").value)*n;
    }            
})
document.getElementById("tan").addEventListener("click",()=>{
    if (document.getElementById("res").value!=""){  
        limpiar=1              
        document.getElementById("res").value=Math.tan(document.getElementById("res").value);
    }            
})
document.getElementById("log").addEventListener("click",()=>{
    if (document.getElementById("res").value!=""){  
        limpiar=1
        document.getElementById("res").value;
        document.getElementById("res").value=Math.log10(document.getElementById("res").value);
    }            
})
document.getElementById("cos").addEventListener("click",()=>{
    if (document.getElementById("res").value!=""){  
        limpiar=1              
        document.getElementById("res").value=Math.cos(document.getElementById("res").value);
    }            
})
document.getElementById("=").addEventListener("click",()=>{
    limpiar=1
    
    if (banSuma==1){ 
        banSuma=0;
        total=parseFloat(document.getElementById("res").value);
        document.getElementById("res").value="";          
        document.getElementById("res").innerHTML=cadenaSuma+total;
        cadenaSuma=0;
    }
    if (banResta==1){ 
        banResta=0;
        total=parseFloat(document.getElementById("res").value);
        document.getElementById("res").value="";          
        document.getElementById("res").innerHTML=cadenaResta-total;
        cadenaResta=0;
    }
    if (banMulti==1){ 
        banMulti=0;
        total=parseFloat(document.getElementById("res").value);
        document.getElementById("res").value="";          
        document.getElementById("res").innerHTML=cadenaMulti*total;
        cadenaMulti=0;
    }
    if (banDiv==1){ 
        banDiv=0;
        total=parseFloat(document.getElementById("res").value);
        document.getElementById("res").value="";          
        document.getElementById("res").innerHTML=cadenaDiv/total;
        cadenaDiv=0;
    }
})
document.getElementById("cambio").addEventListener("click",()=>{
    if (document.getElementById("cambio").value=="Estandar"){
        document.getElementById("container").style.width="272px";
        document.getElementById("res").style.width="270px";
        document.getElementById("cambio").innerHTML="Ver Calculadora Científica";
        document.getElementById("cambio").value="Cientifica";        
        document.getElementById("R3").style.visibility="visible";
        document.getElementById("P3").style.visibility="visible";
        document.getElementById("log").style.visibility="visible";
        document.getElementById("sen").style.visibility="visible";
        document.getElementById("tan").style.visibility="visible";
        document.getElementById("cos").style.visibility="visible";
        document.getElementById("asen").style.visibility="visible";
        document.getElementById("csc").style.visibility="visible";
        document.getElementById("cot").style.visibility="visible";
    }else{
        document.getElementById("container").style.width="153px";
        document.getElementById("res").style.width="151px";
        document.getElementById("cambio").innerHTML="Ver Calculadora Estándar";
        document.getElementById("cambio").value="Estandar";        
        document.getElementById("R3").style.visibility="hidden";
        document.getElementById("P3").style.visibility="hidden";
        document.getElementById("log").style.visibility="hidden";
        document.getElementById("sen").style.visibility="hidden";
        document.getElementById("tan").style.visibility="hidden";
        document.getElementById("cos").style.visibility="hidden";
        document.getElementById("asen").style.visibility="hidden";
        document.getElementById("csc").style.visibility="hidden";
        document.getElementById("cot").style.visibility="hidden";
    }
})
        
