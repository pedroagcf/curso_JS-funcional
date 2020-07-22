setTimeout(function () {
  console.log('executando callback 1');
  setTimeout(function () {
    console.log('executando callback 2');
    setTimeout(function () {
      console.log('executando callback 3');
    }, 2000);
  }, 2000);
}, 2000);
