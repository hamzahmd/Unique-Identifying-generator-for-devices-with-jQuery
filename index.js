const deviceId = document.getElementById('device-id');

$.getJSON('https://api.ipify.org?format=json')
  .done(function (data) {
    const IPAdr = data.ip;
    const screenRatio = (
      window.screen.availWidth / window.screen.availHeight
    ).toFixed(2);
    const memory = navigator.deviceMemory ? navigator.deviceMemory : 32;
    const cookie = navigator.cookieEnabled ? 1 : 0;
    const pixel = window.screen.pixelDepth ? window.screen.pixelDepth : 0;
    const processors = navigator.hardwareConcurrency
      ? navigator.hardwareConcurrency
      : 16;
    deviceId.innerHTML = `${IPAdr}.${screenRatio}.${pixel}.${memory}.${cookie}.${processors}`;
  })
  .fail(function () {
    const APIKey = 'ea67a6de99ce41339e2c7c60f68be0d7';
    const url = `https://api.ipgeolocation.io/ipgeo?apiKey=${APIKey}`;
    $.getJSON(url)
      .done(function (data) {
        const IPAdr = data.ip;
        const screenRatio = (
          window.screen.availWidth / window.screen.availHeight
        ).toFixed(2);
        const memory = navigator.deviceMemory ? navigator.deviceMemory : 32; //RAM Check
        const cookie = navigator.cookieEnabled ? 1 : 0;
        const pixel = window.screen.pixelDepth ? window.screen.pixelDepth : 0; // Pixel depth
        const processors = navigator.hardwareConcurrency
          ? navigator.hardwareConcurrency
          : 16; // Number of processors
        const browserLength = navigator.userAgent
          ? navigator.userAgent.length
          : 50; // length of the browser string
        const touchSupport = navigator.maxTouchPoints
          ? navigator.maxTouchPoints
          : 0; // Touch support
        deviceId.innerHTML = `${IPAdr}.${screenRatio}.${pixel}.${memory}.${browserLength}.${touchSupport}.${cookie}.${processors}`;
      })
      .fail(function () {
        deviceId.innerHTML = 'Please Disable Ad';
      });
  });
