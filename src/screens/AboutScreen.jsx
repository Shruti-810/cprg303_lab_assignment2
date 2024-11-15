import React from "react"
import { Button, View } from "react-native"
import MainLayout from "../layouts/MainLayout"


export default function AboutScreen({ navigation }) {

    return (
        <MainLayout>
        <Button
            title="Go to Home"
            onPress={() => navigation.navigate("Home")}
        />
        </MainLayout>

    )
}