const deviceId = document.getElementById('device-id');

$.getJSON('https://api.ipify.org?format=json')
  .done(function (data) {
    const IPAdr = data.ip;
    const screenRatio = (
      window.screen.availWidth / window.screen.availHeight
    ).toFixed(2);
    const memory = navigator.deviceMemory;
    const cookie = navigator.cookieEnabled ? 1 : 0;
    const pixel = window.screen.pixelDepth;
    const processors = navigator.hardwareConcurrency;
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
        const memory = navigator.deviceMemory;
        const cookie = navigator.cookieEnabled ? 1 : 0;
        const pixel = window.screen.pixelDepth;
        const processors = navigator.hardwareConcurrency;
        deviceId.innerHTML = `${IPAdr}.${screenRatio}.${pixel}.${memory}.${cookie}.${processors}`;
      })
      .fail(function () {
        deviceId.innerHTML = 'Please Disable Ad';
      });
  });
