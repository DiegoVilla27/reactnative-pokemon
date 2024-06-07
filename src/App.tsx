import { styled } from "nativewind";
import { SafeAreaView, ScrollView, StatusBar, Text, View } from "react-native";

const StyledViewx = styled(View);
const StyledText = styled(Text);

function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <StyledViewx className="bg-gray-200">
          <StyledText className="text-blue-500 text-lg">
            Hello, Tailwind with NativeWind!
          </StyledText>
        </StyledViewx>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
