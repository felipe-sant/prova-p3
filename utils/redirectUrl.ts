import { Linking } from "react-native";

function redirectUrl(url: string): void {
    Linking.openURL(url)
}

export default redirectUrl;