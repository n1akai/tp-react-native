import { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";
import Commande from "./shared/model/Commande";

export default function App() {
  const [items, setItems] = useState<Commande[]>([]);

  useEffect(() => {
    let commandes = [];
    for (let i = 0; i < 20; i++) {
      commandes.push(new Commande(i + 1, `R${i + 100}`, (i + 1) * 100));
    }
    setItems(commandes);
  }, []);

  return (
    <View style={styles.body}>
      <ScrollView>
        {items.map((element, index) => (
          <View style={styles.item}>
            <Text>
              Ref: {element.ref} - Total: {element.total}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    padding: 8,
    marginBottom: 4,
    backgroundColor: "#DDD",
    borderRadius: 4,
  },
});
