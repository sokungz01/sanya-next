import React from "react";

type Props = {};
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  author: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
  },
});
function PreviewPDF({}: Props) {
  return (
    <Document>
      <Page size="A4">
        <View style={{ textAlign: "center" }}>
          <Text>
            Hello World!!! <br />
          </Text>
        </View>
        <Text style={styles.header} fixed>
          ~ Created with react-pdf ~ <br />
          <span className="text-3xl text-main text-center indent-2">My Span</span>
        </Text> <br />
        <Text style={styles.title}>Don Quijote de la Mancha</Text>
        <Text style={styles.author}>Miguel de Cervantes</Text>

        <Text style={styles.subtitle}>
          Capítulo I: Que trata de la condición y ejercicio del famoso hidalgo
          D. Quijote de la Mancha
        </Text>
        <Text style={styles.text}>
          En un lugar de la Mancha,____ de cuyo nombre no quiero acordarme, no
          ha mucho tiempo que vivía un hidalgo de los de lanza en astillero,
          adarga antigua, rocín flaco y galgo corredor. Una olla de algo más
          vaca que carnero, salpicón las más noches, duelos y quebrantos los
          sábados, lentejas los viernes, algún palomino de añadidura los
          domingos, consumían las tres partes de su hacienda. El resto della
          concluían sayo de velarte, calzas de velludo para las fiestas con sus
          pantuflos de lo mismo, los días de entre semana se honraba con su
          vellori de lo más fino. Tenía en su casa una ama que pasaba de los
          cuarenta, y una sobrina que no llegaba a los veinte, y un mozo de
          campo y plaza, que así ensillaba el rocín como tomaba la podadera.
          Frisaba la edad de nuestro hidalgo con los cincuenta años, era de
          complexión recia, seco de carnes, enjuto de rostro; gran madrugador y
          amigo de la caza. Quieren decir que tenía el sobrenombre de Quijada o
          Quesada (que en esto hay alguna diferencia en los autores que deste
          caso escriben), aunque por conjeturas verosímiles se deja entender que
          se llama Quijana; pero esto importa poco a nuestro cuento; basta que
          en la narración dél no se salga un punto de la verdad
        </Text>
      </Page>
    </Document>
  );
}

export default PreviewPDF;
