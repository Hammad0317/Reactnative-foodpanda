// import * as React from 'react';
// import { View,Text,StyleSheet,StatusBar } from 'react-native';

// const App = () => {

//     return (
//       <View>
//       <Appbar.Header style={{backgroundColor:'#f70170'}}>
        
//         <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()}/>
                   
//         <Appbar.Content 
//           title="Current Location "
//           titleStyle={{fontSize: 16}} 
//           subtitle="St 13"
//         />
//         <Appbar.Action icon="heart-outline" />
//         <Appbar.Action icon="handbag"  />
        
//       </Appbar.Header>
//       <View style={{backgroundColor:'#f70170',height:60}}>
//        <Text> HAMMAD</Text>
//        <StatusBar/>
//   </View>
    
//       </View>
//     );
//   }




// export default App

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  StatusBar,
  backgroundColor,
  ImageBackground,
  ScrollView,
  Dimensions,
  SafeAreaView
  
} from 'react-native';


import Icon from 'react-native-vector-icons/Ionicons';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function App() {
  console.log(windowWidth)

    return (
      
      <View style={styles.container} >
        <SafeAreaView />
        <StatusBar   backgroundColor = "#f70170" />
      <View style={styles.Appbar}>
      <Icon style={{color:'white'}} name="menu" size={28} />

        <Text style={styles.Title}>{'Home\nA1 Hamra Garden Appartment'}</Text>
         <Icon style={{color:'white'}} name="heart-outline" size={22} />
         <Icon style={{color:'white',marginHorizontal:15}} name="card" size={22} />
      </View>
      
      <View style={styles.containerSearch}>
        <View style={styles.search}>
        <Icon style={{color:'#8f8f8f',marginTop:10}} name="search-outline" size={25} />
          <TextInput style={{alignSelf:'center',alignItems:'center',color:'##8f8f8f',fontSize:14,paddingLeft:10}} placeholder="Search for shops resturent" keyboardType="email-address"></TextInput>

        </View>
      </View>

     {/* Main contain 1 Row */}
        {/* ///column 1 Start */}

        <ScrollView>

      <View style={styles.container1}>


         {/* <View style={{flexDirection:'column'}}>
        <View style={styles.card1}>
          <Text style={{fontSize:22,color:'black',paddingLeft:15,paddingTop:10,fontWeight:'bold'}}>{'Food \ndelivery'}</Text>
          <Text style={{fontSize:10,color:'gray',paddingLeft:15}}>{'Order from your favorite\nresturent and homech...'}</Text>
          <View>
          <Image style={{height:100,width:140,resizeMode:'contain',alignSelf:'center',marginTop:20,marginLeft:10}} source={require('./images/burger.png')} />
          </View>
        </View>

        <View style={styles.card3}>
        <View style={{flexDirection:'row'}}>
          <View>
          <Text style={{fontSize:16,color:'black',paddingLeft:15,paddingTop:10,fontWeight:'bold'}}>{'Dine-in'}</Text>
          <Text style={{fontSize:10,color:'gray',paddingLeft:15}}>{'Exclusive\noffer at par...'}</Text>
          
         </View>
         <Image style={{height:50,width:100,resizeMode:'contain',marginLeft:5,marginTop:20}} source={require('./images/rice.png')} />
          
          </View>
          
        </View>


        </View> */}



           {/* /// LEFT SIDE View */}
        
           <View style={{ flexDirection:'row'}}>
            
        <View style={{backgroundColor:'#edf2f5',height:330, width: '50%'}}>

        <View style={{flexDirection:'column'}}>
        <View style={styles.card1}>
          <Text style={{fontSize:22,color:'black',paddingLeft:15,paddingTop:10,fontWeight:'bold'}}>{'Food \ndelivery'}</Text>
          <Text style={{fontSize:10,color:'gray',paddingLeft:15}}>{'Order from your favorite\nresturent and homech...'}</Text>
          <View>
          <Image style={{alignSelf:"flex-end",height:100,width:140,resizeMode:'contain',marginTop:20}} source={require('./images/burger.png')} />
          </View>
        </View>

        <View style={styles.card3}>
        <View style={{flexDirection:'row',marginHorizontal:5}}>
          <View>
          <Text style={{fontSize:16,color:'black',paddingLeft:10,paddingTop:10,fontWeight:'bold'}}>{'Dine-in'}</Text>
          <Text style={{fontSize:10,color:'gray',paddingLeft:10}}>{'Exclusive\noffer at par...'}</Text>
          
         </View>
         <Image style={{alignSelf:"flex-end",height:40,width:60,resizeMode:'contain',marginTop:20,marginLeft:20}} source={require('./images/rice.png')} />
          
          </View>
          
        </View>


        </View>

        </View>

        

        {/* /// RIGHT SIDE View */}
       <View style={{backgroundColor:'#edf2f5',height:330, width: '50%'}} >

        <View style={{flexDirection:'column'}}>        
        <View style={styles.card2}>
          <Text style={{fontSize:16,color:'black',paddingLeft:15,paddingTop:10,fontWeight:'bold'}}>{'pandamart'}</Text>
          <Text style={{fontSize:10,color:'gray',paddingLeft:15}}>{'convenience, deivered'}</Text>
          <View>
          <Image style={{alignSelf:"flex-end",height:90,width:140,resizeMode:'contain',marginTop:10}} source={require('./images/deal.png')} />
          </View>
        </View>

        <View style={styles.card3}>
        <View style={{flexDirection:'row',marginHorizontal:5}}>
          <View>
          <Text style={{fontSize:16,color:'black',paddingLeft:10,paddingTop:10,fontWeight:'bold'}}>{'Pick-up'}</Text>
          <Text style={{fontSize:10,color:'gray',paddingLeft:10}}>{'Enjoy up to\n50% off and...'}</Text>
          
         </View>
         <Image style={{alignSelf:"flex-end",height:50,width:60,resizeMode:'contain',marginHorizontal:20,marginTop:20,marginLeft:25}} source={require('./images/shop.png')} />
          
          </View>
          
        </View>

        <View style={styles.card3}>
        <View style={{flexDirection:'row',marginHorizontal:5}}>
          <View>
          <Text style={{fontSize:16,color:'black',paddingLeft:10,paddingTop:10,fontWeight:'bold'}}>{'Shops'}</Text>
          <Text style={{fontSize:10,color:'gray',paddingLeft:10}}>{'Everyday\nessentaial...'}</Text>
          
         </View>
         <Image style={{alignSelf:"flex-end",height:50,width:60,resizeMode:'contain',marginLeft:30,marginTop:20}} source={require('./images/dodh.png')} />
          
          </View>
          
        </View>

        </View>

       </View>

       

      </View>


       
       {/* <View style={{flexDirection:'column'}}>        
        <View style={styles.card2}>
          <Text style={{fontSize:16,color:'black',paddingLeft:15,paddingTop:10,fontWeight:'bold'}}>{'pandamart'}</Text>
          <Text style={{fontSize:10,color:'gray',paddingLeft:15}}>{'convenience, deivered'}</Text>
          <View>
          <Image style={{height:100,width:150,resizeMode:'contain',alignSelf:'center',marginTop:10,marginLeft:10}} source={require('./images/deal.png')} />
          </View>
        </View>

        <View style={styles.card3}>
        <View style={{flexDirection:'row'}}>
          <View>
          <Text style={{fontSize:16,color:'black',paddingLeft:15,paddingTop:10,fontWeight:'bold'}}>{'Pick-up'}</Text>
          <Text style={{fontSize:10,color:'gray',paddingLeft:15}}>{'Enjoy up to\n50% off and...'}</Text>
          
         </View>
         <Image style={{height:50,width:100,resizeMode:'contain',marginLeft:20,marginTop:20}} source={require('./images/shop.png')} />
          
          </View>
          
        </View>

        <View style={styles.card3}>
        <View style={{flexDirection:'row'}}>
          <View>
          <Text style={{fontSize:16,color:'black',paddingLeft:15,paddingTop:10,fontWeight:'bold'}}>{'Shops'}</Text>
          <Text style={{fontSize:10,color:'gray',paddingLeft:15}}>{'Everyday\nessentaial...'}</Text>
          
         </View>
         <Image style={{height:50,width:100,resizeMode:'contain',marginLeft:20,marginTop:20}} source={require('./images/dodh.png')} />
          
          </View>
          
        </View>

        </View> */}
        
      </View>

      <View><Text style={{fontSize:16,fontWeight:'bold',color:'black',marginHorizontal:20,marginTop:20}}>Your Restaurents</Text></View>
       
       
       <View style={{flexDirection: 'column'}}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
        
       <View style={styles.scrolContainer}>
        
        <Image style={{height:150,width:240, borderRadius:10,}} source={require('./images/pizza.png')} />
        

        <View style={{  position: 'absolute', top:110,left: 5  }}>
            <Text
              style={{
                width:50,
                height:25,
                fontSize: 10,
                color: 'black',
                backgroundColor: 'white',
                borderRadius:50,
                textAlign:'center',
                paddingTop:5,
                
              
              }}>
              35 min
            </Text>
            
          </View>

          <View style={{ position: 'absolute', top: 10, left: 0 }}>
            <Text
              style={{width:146,height:24, fontSize: 14, color: 'white', backgroundColor: '#f70170', 
              borderTopRightRadius: 5,borderBottomRightRadius: 5,paddingLeft:5 }}>
              Summer - 30% OFF   
            </Text>
          </View>

        <View>
        <Text style={{color:'#000000',fontWeight:'bold'}}>Kababjees Pizza - Johar</Text>
        <Text style={{color:'gray',marginTop:5}}>$. Pizza</Text>
        <Text style={{color:'#000000',fontWeight:'bold',marginTop:5}}>PKR 115 delivery fee</Text>
        </View>
       </View>
       

      <View style={styles.scrolContainer}>
        <Image style={{height:150,width:240, borderRadius:10,}} source={require('./images/roo.png')}/>

        <View style={{ position: 'absolute', top:110,left: 5 }}>
            <Text
              style={{
                width:50,
                height:25,
                fontSize: 10,
                color: 'black',
                backgroundColor: 'white',
                borderRadius:50,
                textAlign:'center',
                paddingTop:5,
                
              }}>
              45 min
            </Text>
            
          </View>

          <View style={{ position: 'absolute', top: 10 }}>
            <Text
              style={{width:146,height:24, fontSize: 14, color: 'white', backgroundColor: '#f70170', 
              borderTopRightRadius: 5,borderBottomRightRadius: 5,paddingLeft:5 }}>
              Summer - 10% OFF   
            </Text>
          </View>
        <View>
        <Text style={{color:'#000000',fontWeight:'bold',marginTop:5}}>Karachi Roll - Gulshan</Text>
        <Text style={{color:'gray',marginTop:5}}>$. Roll</Text>
        <Text style={{color:'#000000',fontWeight:'bold',marginTop:5}}>PKR 100 delivery fee</Text>
        </View>
        
       </View>

       <View style={styles.scrolContainer}>
        <Image style={{height:150,width:240, borderRadius:10,}} source={require('./images/burger1.png')}/>

        <View style={{ position: 'absolute', top:110, left: 5 }}>
            <Text
              style={{
                width:50,
                height:25,
                fontSize: 10,
                color: 'black',
                backgroundColor: 'white',
                borderRadius:50,
                textAlign:'center',
                paddingTop:5,
              }}>
              55 min
            </Text>
            
          </View>

          <View style={{ position: 'absolute', top: 10, left: 0 }}>
            <Text
              style={{width:146,height:24, fontSize: 14, color: 'white', backgroundColor: '#f70170', 
              borderTopRightRadius: 5,borderBottomRightRadius: 5,paddingLeft:5 }}>
              Summer - 20% OFF   
            </Text>
          </View>

        <View>
        <Text style={{color:'#000000',fontWeight:'bold',marginTop:5}}>Mr.Corn Burger - Surjani</Text>
        <Text style={{color:'gray',marginTop:5}}>$. Burger</Text>
        <Text style={{color:'#000000',fontWeight:'bold',marginTop:5}}>PKR 150 delivery fee</Text>
        </View>
       </View>

      
        </ScrollView>
        </View>

        <View><Text style={{fontSize:16,fontWeight:'bold',color:'black',marginHorizontal:15}}>Your daily deals </Text></View> 

    
        </ScrollView>
      </View>
 
      
    );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  
        
 },
 containerSearch:{
    height:70,
    backgroundColor:'#f70170',


 },
  Appbar:{
    backgroundColor: '#f70170',
    paddingTop:5,
    paddingBottom:5,
    paddingLeft:20,
    paddingRight:20,
    flexDirection:'row',
    
},
Title:{
  marginLeft:10,
  fontSize:12,
  color:'#ffffff',
  fontWeight:'bold',
  flex:1,                
},
// Subtitle:{
//   marginTop:5,          
//   color:'#ffffff',
//   fontSize:8,
// },
// container:{
//   height:75,
//   backgroundColor:'#f70170',
  
  
// },
search:{
  justifyContent: "flex-start",
  flexDirection:'row',
  height:45,
  borderRadius:30,
  backgroundColor:'white',
  marginTop:10,
  marginHorizontal:20,
  paddingLeft:20,
},
// container1:{
//   height:340,
//   width:'100%',
//   backgroundColor:'#edf2f5',
//   flexDirection:'row',


// },
card1:{
  // marginHorizontal:10,
  marginTop:15,
  height:220,
  width:'90%',
  alignSelf:'center',
  backgroundColor:'white',
  borderRadius:8,
  // borderColor:'#8f8f8f',
  // borderWidth:.15,
  
},
card2:{
  // marginHorizontal:10,
  marginTop:15,
  height:135,
  width:'90%',
  alignSelf:'center',
  backgroundColor:'white',
  borderRadius:8,
  // borderColor:'#8f8f8f',
  // borderWidth:.15,
  
},
card3:{
  // marginHorizontal:10,
  marginTop:10,
  height:75,
  width:'90%',
  alignSelf:'center',
  backgroundColor:'white',
  borderRadius:8,
  backgroundColor:'white',
  

},
scrolContainer:{
  height:250,
  width:240,
  marginHorizontal:15,
  marginTop:20,

},
});





