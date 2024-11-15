import React from "react"
import { Button, View } from "react-native"
import MainLayout from "../layouts/MainLayout"



export default function HomeScreen({ navigation }) {


    return (
    
        <MainLayout>
        <Button
            title="Go to About"
            onPress={() => navigation.navigate("About")}
        />
      </MainLayout> 
    
    )
}