import React, {useState} from 'react'
import { SafeAreaView, Text } from 'react-native'

const MyFirstComponent = () => {
    // Declarar variable y método utilizando destructuring
    const [userName, setUserName] = useState('')

  return (
   <SafeAreaView>
        <Text>My First Component</Text>
    </SafeAreaView>
  )
}

export default MyFirstComponent
