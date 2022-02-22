const dropArea = document.querySelector('.drag-area');
const dragText = dropArea.querySelector('header');
const button = dropArea.querySelector('button');
const input = dropArea.querySelector('input');

let file;

button.onclick = () => {
  input.click();
};

input.addEventListener('change', function () {
  file = this.files[0];
  showFile();
  dropArea.classList.add('active');
});

dropArea.addEventListener('dragover', (event) => {
  event.preventDefault();
  dropArea.classList.add('active');
  dragText.textContent = 'Release to Upload File';
});

dropArea.addEventListener('dragleave', () => {
  dropArea.classList.remove('active');
  dragText.textContent = 'Drag & Drop to Upload File';
});

dropArea.addEventListener('drop', (event) => {
  event.preventDefault();
  file = event.dataTransfer.files[0];
  showFile();
});

function showFile() {
  const fileType = file.type;
  const validExtensions = ['image/jpeg', 'image/jpg', 'image/png'];
  if (validExtensions.includes(fileType)) {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      const fileUrl = fileReader.result;
      const imgTag = `<img src=${fileUrl} alt='' />`;
      dropArea.innerHTML = imgTag;
    };
    fileReader.readAsDataURL(file);
  } else {
    alert('This is not an Image File!');
    dropArea.classList.remove('active');
    dragText.textContent = 'Drag & Drop to Upload File';
  }
}
