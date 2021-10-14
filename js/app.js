
const navItems = document.querySelectorAll('.menu__link');

//====

const navbarLinkClick = event =>{
  console.log(event);
  smoothScroll(event)
}

navItems.forEach(item => item.addEventListener("click", navbarLinkClick));

const smoothScroll = (event) =>{
  event.preventDefault();
  const targetID = event.currentTarget.getAttribute("href")==="#" ? "header" : event.currentTarget.getAttribute("href");
  var targetPosition = document.querySelector(targetID).offsetTop;
  var startPosition = window.pageYOffset;
  console.log(startPosition)
  var distance = targetPosition - startPosition;
  var startTime = null;
  var duration = 1000;

  
    
  const animation = currentTime =>{
    if(startTime == null) startTime = currentTime
    var timeElapsed = currentTime - startTime
    var run = ease(timeElapsed, startPosition, distance, duration)
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation)
  }

  const ease = (t, b, c, d) =>{
    t /= d / 2;
    if (t < 1) 
      return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation)
}


// Scrolling to header appear function

const sections = document.querySelectorAll('section')

const options = {
  threshold : 0.8
}


const navCheck = entries =>{
  entries.forEach(entry =>{
    const Name = entry.target.id
    const activeAnchor = document.querySelector(`[data-page=${Name}]`);
    let button = document.querySelector('#to-top');
    if(Name =='section2' || Name =='section3')
      button.style.display = 'block';
    else
      button.style.display = 'none';


  })
}


let observer = new IntersectionObserver(navCheck, options);

sections.forEach(section =>{
  observer.observe(section)
})

