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
      const input = 0;
      expect (isUndefinedOrZero(input)).to.equal(true);
  });

  it('should return true if the input is undefined', () => {
    const input = undefined;
    expect (isUndefinedOrZero(input)).to.equal(true);
  });

  it('should return false if the input is 5', () => {
    const input = 5;
    expect (isUndefinedOrZero(input)).to.equal(false);
  });
  
});


