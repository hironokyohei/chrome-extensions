chrome.storage.sync.get('color', function(data) {
    if (data.color) {
      document.body.style.backgroundColor = data.color;
    }
  });
  