import React, {useState}from "react";
import {View,Text, StyleSheet, Image, TouchableOpacity} from "react-native";


let timer = null;
let ss = 0
let mm = 0
let hh = 0

function app() {

    const [number,setNumber] = useState(0);
    const [button,setButton] = useState('GO!');
    const [last,setLast] =useState(null);

    function go() {
      if (timer !== null) {

        //stop timer here//
        clearInterval(timer);
        timer = null;
        setButton('GO!')
      }else{

          //start timer//

          timer = setInterval(() => {
              ss++;

              if (ss == 60) {
                ss == 0;
                mm ++;
              }
              
              if (mm == 60) {
                mm == 0;
                hh++;
              }

              let format = 
              (hh < 10 ? '0' + hh : hh ) + ':'
              + (mm < 10 ? '0' + mm: mm) + ':'
              + (ss < 10 ? '0' + ss: ss);

              setNumber(format)


          }, 1000);
          
          setButton('STOP!');

      }



    }

    function clear() {
      if (timer !== null) {
        //stop timer//
        clearInterval(timer);
        timer = null
        
      }
      setLast(number);
      setNumber('00:00:00');
      ss = 0;
      mm = 0;
      hh = 0;

      setButton('GO!')
    }




  return(

    <View style={styles.container}>

     <Image
        source={require('./src/crono.png')}
     />
      <Text style={styles.timer}>{number}</Text>

            <View style={styles.btnArea}>

                <TouchableOpacity style={styles.btn} onPress={go}>
                    <Text style={styles.btnText}>{button}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={clear}>
                  <Text style={styles.btnText}>CLEAR</Text>
                </TouchableOpacity>
        
            </View> 

            <View style={styles.lastime}>
                <Text style={styles.lastText}>
                { last ?  'Your last time was : ' + last : ''}

                </Text>
            </View>


    </View>



  );
  
}

const styles = StyleSheet.create({

 container:{

  flex:1,
  alignItems:'center',
  justifyContent:'center',
  backgroundColor: '#6495ED',

 },
 timer:{

  marginTop:-160,
  fontSize:45,
  fontWeight:"bold",
  color:'#fff',

 },
 btnArea:{

  flexDirection:"row",
  fontSize:25,
  marginTop:130,
  height:60,

},
btn:{
 flex:1,
 justifyContent:"center",
 alignItems:"center",
 backgroundColor:'white',
 height:40,
 margin:25,
 borderRadius: 9,

},
btnText:{

  fontSize:25,
  fontWeight:"bold",
  color:'black'

},
lastime:{

  marginTop:47,
},
lastText:{

fontSize:20,
color:'white',
fontStyle:"italic",

}


})

export default app;