document.addEventListener('DOMContentLoaded', function() {
    const colorPicker = document.getElementById('colorPicker');
    const saveButton = document.getElementById('saveButton');
  
    // Load the saved color when the popup is opened
    chrome.storage.sync.get('color', function(data) {
      if (data.color) {
        colorPicker.value = data.color;
      }
    });
  
    // Save the selected color when the button is clicked
    saveButton.addEventListener('click', function() {
      const selectedColor = colorPicker.value;
      chrome.storage.sync.set({ color: selectedColor }, function() {
        console.log('Color saved:', selectedColor);
      });
    });
  });
  