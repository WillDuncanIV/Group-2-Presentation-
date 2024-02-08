function addBulletPoint() {
    const newBulletPoint = document.getElementById('newBulletPoint').value.trim();
    if (newBulletPoint !== '') {
      const bulletPointsList = document.getElementById('bulletPoints');
      const li = document.createElement('li');
      li.textContent = newBulletPoint;
      bulletPointsList.appendChild(li);
      document.getElementById('newBulletPoint').value = ''; // Clear input field after adding bullet point
    } else {
      alert('Please enter a bullet point!');
    }
  }
  