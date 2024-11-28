import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    marginVertical: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  headText: {
    fontSize: SIZES.large,
    fontWeight: "bold",
  },
  contentBox: {
    marginTop: SIZES.small,
  },
  contextText: {
    textAlign: 'justify',
  },
});

export default styles;
