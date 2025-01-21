import { Link, Tabs } from "expo-router";
import { tabBarItems } from "../../constants/constants";
import TabBar from "../../components/TabBar";
import { Text, TouchableOpacity } from "react-native";
import { Octicons } from "@expo/vector-icons";
import UpgradeProfileButton from "@/components/dashboardComponents/UpgradeAndUserProfileButton";

const TabsLayout = () => {
  return (
    <Tabs tabBar={(props) => <TabBar {...props} />}>
      {tabBarItems.map((item) => (
        <Tabs.Screen
          key={item.name}
          name={item.name}
          options={{
            title: item.title,
            headerShadowVisible: false,
            headerTitleStyle: {
              fontSize: 25,
            },
            headerTitleAlign: "left",
            headerRight: () => {
              switch (item.name) {
                case "dashboard":
                  return <UpgradeProfileButton />;
                default:
                  return null;
              }
            },
          }}
        />
      ))}
    </Tabs>
  );
};

export default TabsLayout;
