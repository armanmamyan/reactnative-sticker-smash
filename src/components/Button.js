
import { StyleSheet, Pressable, View, Text } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useMemo } from 'react';

const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
      },
      button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
      },
      buttonIcon: {
        paddingRight: 8,
      },
      buttonLabel: {
        color: '#fff',
        fontSize: 16,
      },
});

const Button = ({ label, theme, onPress }) => {
    const isThemePrimary = useMemo(() => theme === 'primary', [theme]);
    return (
      <View style={[styles.buttonContainer, isThemePrimary ?  { borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18 } : null]}>
          <Pressable
              style={[styles.button, isThemePrimary ? { backgroundColor: "#fff" } : null]}
              onPress={onPress}
          > 
            {isThemePrimary ? (
                <FontAwesome
                name="picture-o"
                size={18}
                color="#25292e"
                style={styles.buttonIcon}
              />
            ) : null}
              <Text style={[styles.buttonLabel, isThemePrimary ? { color: "#25292e" } : null]}>
                  {label}
              </Text>
          </Pressable>
      </View>
    );
  }


export default Button;