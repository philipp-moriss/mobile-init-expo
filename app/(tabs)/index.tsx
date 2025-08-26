import { Text, View } from "react-native";

import Button from "@/src/shared/components/ui-kit/button";
import { Column } from "@/src/shared/components/ui-kit/column";
import { Row } from "@/src/shared/components/ui-kit/row";
import Input from "@/src/shared/components/ui-kit/text-input";
import Typography from "@/src/shared/components/ui-kit/typography";
import { useState } from "react";

export default function HomeScreen() {
  const [value, setValue] = useState("");

  return (
    <Column
      gap={12}
      justifyContent="center"
      alignItems="center"
      flex={1}
      style={{ marginHorizontal: 20 }}
    >
      <Typography>Home</Typography>

      <Input value={value} placeholder="test" onChangeText={setValue} />

      <Row gap={12}>
        <View style={{ flex: 1 }}>
          <Button onPress={() => console.log(value)}>
            <Text>Send</Text>
          </Button>
        </View>
        <View style={{ flex: 1 }}>
          <Button onPress={() => console.log(value)}>
            <Text>receive</Text>
          </Button>
        </View>
      </Row>
    </Column>
  );
}
