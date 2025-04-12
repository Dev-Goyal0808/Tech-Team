document.querySelector('.search').addEventListener('keyup', function(e) {
    if (e.key === 'Enter') {
      alert(`You searched for: ${this.value}`);
    }
  });
  