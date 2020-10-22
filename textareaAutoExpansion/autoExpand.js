const autoExpand = (elem) => {

  // Pull back to the height of its parent height property
  elem.style.height = 'inherit';

  const computed = window.getComputedStyle(elem);
  const borderTopWidth = parseInt(computed.getPropertyValue('border-top-width'), 10);
  const borderBottomWidth = parseInt(computed.getPropertyValue('border-bottom-width'), 10);
            
  const height = elem.scrollHeight
                + borderTopWidth
                + borderBottomWidth;

  // this expands the element's height if it needs to stretch
  elem.style.height = height + 'px';
}

const textarea = document.querySelector('textarea');
textarea.addEventListener('input', () => {
  autoExpand(event.target);
});
