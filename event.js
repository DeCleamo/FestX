function filterEvents() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const eventCards = document.querySelectorAll('.event-card');
  
    eventCards.forEach(card => {
      const title = card.querySelector('h2').textContent.toLowerCase();
      card.style.display = title.includes(searchInput) ? 'block' : 'none';
    });
  }
  
  function openModal(modalId) {
    const modal = document.getElementById(modalId); // Corrected 'modaId' to 'modalId'
    modal.classList.add('active'); // Show the modal
  }
  
  // Function to close the modal
  function closeModal(modalId) {
    const modal = document.getElementById(modalId); // Corrected 'modalId' spelling
    modal.classList.remove('active'); // Hide the modal
  }
  
  
  