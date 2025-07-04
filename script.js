// Get all elements with the class "fade-in"
const fadeInElements = document.querySelectorAll('.fade-in');

// Add event listener to window load
window.addEventListener('load', () => {
  // Iterate over each element and add the fade-in animation
  fadeInElements.forEach((element) => {
    element.classList.add('fade-in');
  });
});

// Add event listener to window scroll
window.addEventListener('scroll', () => {
  // Get the current scroll position
  const scrollPosition = window.scrollY;
  
  // Get all elements with the class "nav-item"
  const navItems = document.querySelectorAll('.nav-item');
  
  // Iterate over each nav item and add the active class if it's in view
  navItems.forEach((navItem) => {
    const navItemTop = navItem.offsetTop;
    const navItemBottom = navItem.offsetTop + navItem.offsetHeight;
    
    if (scrollPosition >= navItemTop && scrollPosition < navItemBottom) {
      navItem.classList.add('active');
    } else {
      navItem.classList.remove('active');
    }
  });
});