const Dimensions = require('Dimensions');
const windowSize = Dimensions.get('window');

import React, {
  PixelRatio,
  Platform
} from 'react-native';

class DetectDeviceService {
  constructor() {
    this.pixelDensity = PixelRatio.get();
    this.width = windowSize.width;
    this.height = windowSize.height;
    
    this.isPhoneOrTablet();
    this.isIosOrAndroid();
  }
  
  isPhoneOrTablet() {
    if(this.pixelDensity < 2 && (this.width >= 1000 || this.height >= 1000)) {
      this.isTablet = true;
      this.isPhone = false;
    } else if(this.pixelDensity === 2 && (this.width >= 1920 || this.height >= 1920)) {
      this.isTablet = true;
      this.isPhone = false;
    } else {
      this.isTablet = false;
      this.isPhone = true;
    }
  }
  
  isIosOrAndroid() {
    if(Platform.OS === 'ios') {
      this.isIos = true;
      this.isAndroid = false;
    } else {
      this.isIos = false;
      this.isAndroid = true;
    }
  }
}

module.exports = new DetectDeviceService();