import { Link, router, useNavigation } from "expo-router";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import TabsLayout from "./_layout";
import Home from "../../src/screens/Home"

const HomePage = () => {
//   const Navigation = useNavigation();
//   interface Data {
//     id: number;
//     name: string;
//     text: string;
//   }
  
//   const data: Data = {
//     id: 1,
//     name: "name",
//     text: "Finally!!",
//   };

  return (
//     <View>
//       <Text>Home Page</Text>
//       <Link href="/users/1">Go to user 1</Link>
//       <Pressable
//         onPress={() =>
//           router.push({
//             pathname: "/users/[id]",
//             params: { id: "2" },
//           })
//         }
//       >
//         <Text>Go to user 2</Text>
//       </Pressable>
//       <TouchableOpacity
//         onPress={() => {
//           router.push({
//             pathname: "/home",
//             params: { data: JSON.stringify(data) }, // Pass data as a JSON string
//           });
//         }}
//       >
//         <Text>Send params</Text>
//       </TouchableOpacity>
//     </View>
<View style={{flex: 1}}>
    <Home />
</View>
  );
};

export default HomePage;
