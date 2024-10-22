import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

interface ButtonIconProps {
    icon: string;
    onPress: () => void;
    color?: string;
    size?: number;
    colorButton?: string;
}

export default function ButtonIcon({ icon, onPress, color, size, colorButton }: ButtonIconProps) {
    return (
        <TouchableOpacity  style={styles.button && {backgroundColor: colorButton ? colorButton : 'trasnparent' }} onPress={onPress}>
            <Ionicons name={icon} size={size ? size : 24} color={color} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    }
});