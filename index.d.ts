declare module "react-native-device-detection" {
    class DetectDeviceService {
        pixelDensity: number;
        width: number;
        height: number;
        isIos: boolean;
        isAndroid: boolean;
        isPhone: boolean;
        isTablet: boolean;
        isIphoneXstatic: boolean;
    }

    const Device = new DetectDeviceService();

    export default Device;
}