
// Join Custom room start here
const title = document.querySelector('#title');
const time = document.querySelector('#time');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const vs = document.querySelector('#vs');
const btn = document.querySelector('.btn');
const bookList = document.querySelector('#book-list');

btn.addEventListener('click', function (e) {
  e.preventDefault();

  // Basic Validation
  if (title.value == '' && time.value == '' && author.value == '' && year.value == '' && vs.value) {
    alert('Please input your information.');
  } else {
    const newRow = document.createElement('tr');
 
    // Creating new title
    const newTitle = document.createElement('th');
    newTitle.innerHTML = title.value;
    newRow.appendChild(newTitle);

    // Creating new Time
    const newTime = document.createElement('th');
    newTime.innerHTML = time.value;
    newRow.appendChild(newTime);

    // Creating new author
    const newAuthor = document.createElement('th');
    newAuthor.innerHTML = author.value;
    newRow.appendChild(newAuthor);

    // Creating new password
    const newYear = document.createElement('th');
    newYear.innerHTML = year.value;
    newRow.appendChild(newYear);

    // Creating new VS
    const newVs = document.createElement('th');
    newVs.innerHTML = vs.value;
    newRow.appendChild(newVs);

    // Displaying in UI
    bookList.appendChild(newRow);
  }
});

function removeItem(){
  var ul = document.getElementById('dynamicList');
  var candidate = document.getElementById('candidate')
  var item = document.getElementById('candidate.value')
  th.removeChild(item)
}
// Join Custom room end here









