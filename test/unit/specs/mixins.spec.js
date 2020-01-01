import Vue from 'vue'
import axios from 'axios'
import moxios from 'moxios'

import  { isUndefinedOrZero, getCurrentLondonWeatherData }  from "@/shared/mixins";

describe('Mixins.js', () => {

  beforeEach(function () {
    // import and pass your custom axios instance to this method
    moxios.install()
  })

  afterEach(function () {
    // import and pass your custom axios instance to this method
    moxios.uninstall()
  })

  it('should return true if the input is zero', () => {
      // 1. Arrange
      const input = 0;
      // 2.Act // 3. Assert
      expect (isUndefinedOrZero(input)).to.equal(true);
  });

  it('should return true if the input is undefined', () => {
    // 1. Arrange
    const input = undefined;
    // 2.Act // 3. Assert
    expect (isUndefinedOrZero(input)).to.equal(true);
  });

  it('should return false if the input is 5', () => {
    // 1. Arrange
    const input = 5;
    // 2.Act // 3. Assert
    expect (isUndefinedOrZero(input)).to.equal(false);
  });
  
});


