function toggleSidebar() {
   const sidebar = document.getElementById('sidebar');
   const isOpen = sidebar.classList.toggle('open');
   handleBackdrop(isOpen);
}

// Category tab functionality
document.querySelectorAll('.category-tab').forEach(tab => {
    tab.addEventListener('click', function() {
        document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
    });
});

// Sidebar item functionality
document.querySelectorAll('.sidebar-item').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('.sidebar-item').forEach(i => i.classList.remove('active'));
        this.classList.add('active');
    });
});

// Video card hover effects
document.querySelectorAll('.video-card, .shorts-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Search functionality
document.querySelector('.search-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        console.log('Searching for:', this.value);
        // Add search functionality here
    }
});

document.querySelector('.search-btn').addEventListener('click', function() {
    const searchInput = document.querySelector('.search-input');
    console.log('Searching for:', searchInput.value);
    // Add search functionality here
});

// Responsive sidebar handling
function handleResize() {
    const sidebar = document.getElementById('sidebar');
    if (window.innerWidth > 768) {
        // Keep rail visible; close expanded state
        sidebar.classList.remove('open');
        handleBackdrop(false);
    } else {
        // On small screens, keep it closed by default
        sidebar.classList.remove('open');
        handleBackdrop(false);
    }
}

// Simple backdrop for small screens
function handleBackdrop(show) {
    let backdrop = document.getElementById('sidebar-backdrop');
    if (window.innerWidth > 768) {
        if (backdrop) backdrop.remove();
        return;
    }
    if (show) {
        if (!backdrop) {
            backdrop = document.createElement('div');
            backdrop.id = 'sidebar-backdrop';
            backdrop.style.position = 'fixed';
            backdrop.style.inset = '0';
            backdrop.style.background = 'rgba(0,0,0,0.5)';
            backdrop.style.zIndex = '998';
            backdrop.addEventListener('click', () => toggleSidebar());
            document.body.appendChild(backdrop);
        }
    } else if (backdrop) {
        backdrop.remove();
    }
}

window.addEventListener('resize', handleResize);
handleResize(); // Call on initial load
 