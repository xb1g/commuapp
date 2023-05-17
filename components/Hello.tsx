import { useEffect, useState } from "react";
import {
  Canvas,
  Circle,
  Group,
  mix,
  Rect,
  Text,
  useFont,
  useSharedValueEffect,
  useValue,
} from "@shopify/react-native-skia";
import {
  useDerivedValue,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

export const HelloWorld = () => {
  const x = useValue(0);
  const progress = useSharedValue(0);
  const [textValue, setTextValue] = useState("");

  const font = useFont(
    require("@expo-google-fonts/raleway/Raleway_400Regular_Italic.ttf"),
    24
  );

  useEffect(() => {
    progress.value = withRepeat(withTiming(1, { duration: 3000 }), -1, true);
  }, [progress]);

  useSharedValueEffect(() => {
    x.current = mix(progress.value, 50, 200);
    setTextValue(x.current.toFixed(2));
  }, progress);

  return (
    <Canvas style={{ flex: 1 }}>
      <Rect x={x} y={100} width={10} height={10} color="red" />
      <Text x={x} y={100} text={textValue} color="red" font={font} />
      <Rect x={x} y={100} width={10} height={10} color="red" />
      <Rect x={x} y={100} width={10} height={10} color="red" />
    </Canvas>
  );
};
