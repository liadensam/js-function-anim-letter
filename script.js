function triggerAnimationSequence(element) {
  const lettersArray = element.innerHTML.trim().split('');
  console.log(lettersArray);

  let delay = 0;

  element.innerHTML = '';
  lettersArray.forEach(letter => {
    let span = document.createElement('SPAN');
    let attr = document.createAttribute('data-animate');

    span.setAttributeNode(attr);
    span.innerHTML = letter;
    span.style.transitionDelay = (`${delay}ms`);
    element.appendChild(span);

    void span.offsetWidth;
    span.classList.add('animated');

    delay += 70;

  });

  element.removeAttribute('data-animate');
}

setTimeout(() => {
  triggerAnimationSequence(heading);
}, 1000);



