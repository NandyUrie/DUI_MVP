import React, { Component} from 'react'
// import { View, Image, Text } from 'react';

import fotoagenda from '../assets/homeAgenda.png'
import fotomas from '../assets/homeMas.png'
import fotomesa from '../assets/homeMesa.png'

export default class Opciones extends Component{
    render(){
        return (
            <div class="container">
                <div class="row">

                    <div class="col-sm-4">
                        {/* <View style={{ flexDirection: 'row' }}>
                            <Image style={{ width: 50, height: 50}} source={fotomesa} />
                            <View style={{justifyContent: 'center'}}>
                                <Text>this is heading</Text>
                                <Text>this is subheading</Text>
                            </View>
                        </View> */}
                        <img src={fotoagenda} alt="Italian Trulli"/>
                        <p>Poronga</p>
                    </div>
                </div>
                
            </div>
        )
    }
}
