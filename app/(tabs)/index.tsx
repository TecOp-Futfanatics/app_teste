import { View, Text, StyleSheet } from "react-native";
import Avatar from "../components/avatar.component";
import Colors from "../constants/colors.constant";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { router } from "expo-router";


export default function Home() {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerConteudo}>
                    <Text style={styles.inicioText}>Inicio</Text>
                    <Avatar name="Rodrigo Froes" size={40} />
                </View>
                <View style={styles.headerValor}>
                    <View style={styles.totalContainer}>
                        <Text style={styles.total}>Total</Text>
                    </View>
                    <View style={styles.totalContainer}>
                        <Text style={styles.valor}>R$ 500,00</Text>
                        <Ionicons name="refresh" size={20} color={Colors.offWhite} style={styles.refreshIcon} />
                    </View>
                </View>
                <View style={styles.cardContainer}>
                    <View style={styles.card}>
                        <Ionicons name="caret-up-outline" size={24} color={Colors.offWhite} />
                        <View>
                            <Text style={styles.cardText}>Entradas</Text>
                            <Text style={styles.cardValue}>R$ 250,00</Text>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <Ionicons name="caret-down-outline" size={24} color={Colors.offWhite} />
                        <View>
                            <Text style={styles.cardText}>Despesas</Text>
                            <Text style={styles.cardValue}>R$ 250,00</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.atualizacao}>
                    <Text style={styles.atualizacaoText}>
                        Última atualização às
                    </Text>
                    <Text style={styles.atualizacaoText}>
                        {
                            new Date().getHours() + ':' + new Date().getMinutes()
                        }
                    </Text>
                </View>
            </View>
            <View style={styles.corpo}>
                <View style={styles.corpoText}>
                    <Text>Gráfico detalhado</Text>
                    <Text>Úlitmos 7 dias</Text>
                </View>
            </View>
        </View>
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
    refreshIcon: {
        marginLeft: 8,
    },
    valor: {
        color: Colors.offWhite,
        fontSize: RFValue(24),
        fontWeight: 'bold',
    },
    cardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.secondary,
        padding: 10,
        borderRadius: 10,
        width: 150,
        justifyContent: 'space-around',
    },
    cardText: {
        color: Colors.offWhite,
        fontSize: RFValue(14),
        fontWeight: '600',
    },
    cardValue: {
        color: Colors.offWhite,
        fontSize: RFValue(16),
    },
    atualizacao: {
        marginTop: 15,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 5,
    },
    atualizacaoText: {
        color: Colors.offWhite,
        fontSize: RFValue(12),
    },
    corpo: {
        flex: 2,
        backgroundColor: Colors.offWhite,
        paddingHorizontal: 5,
    },
    corpoText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
}); 
