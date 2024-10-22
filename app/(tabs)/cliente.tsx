import { View, Text, ScrollView, StyleSheet } from "react-native";
import Avatar from "../components/avatar.component";
import Colors from "../constants/colors.constant";
import { RFValue } from "react-native-responsive-fontsize";
import dados from '../../fakedata.json';
import Input from "../components/input.component";
import { useState } from "react";
import ButtonIcon from "../components/button.icon.component";

export default function Cliente() {
    let [clinte , setCliente] = useState<string>('');
    

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerConteudo}>
                    <Text style={styles.inicioText}>Clientes</Text>
                    <Avatar name="Rodrigo Froes" size={40} />
                </View>
                <View style={styles.headerValor}>
                    <View style={styles.totalContainer}>
                        <Text style={styles.total}>Total</Text>
                    </View>
                    <View style={styles.totalContainer}>
                        <Text style={styles.valor}>
                            {dados.clintes.total}
                        </Text>
                    </View>
                </View>
                <View style={styles.headerInput}>
                    <View>
                        <Input placeholder="Procurar clientes..." value={clinte} onChange={setCliente} isSerch={true} />
                    </View>
                    <View>
                        <ButtonIcon color={Colors.black} colorButton={Colors.offWhite} icon="filter" onPress={() =>{}} size={30} />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 1,
        backgroundColor: Colors.primary,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        padding: 16,
    },
    headerConteudo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30,
    },
    inicioText: {
        color: Colors.offWhite,
        fontSize: RFValue(16),
    },
    headerValor: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    totalContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    total: {
        color: Colors.offWhite,
        fontSize: RFValue(16),
        fontWeight: '600',
    },
    valor: {
        color: Colors.offWhite,
        fontSize: RFValue(24),
        fontWeight: 'bold',
    },
    headerInput: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
    }
})