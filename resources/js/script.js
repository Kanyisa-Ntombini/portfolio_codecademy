const flexboxBusiness = document.getElementById('flexboxBusiness');
flexboxBusiness.click = false;
const hideFlexboxBusiness = document.getElementById('hideFlexboxBusiness');
const flexboxCloseBtn = document.getElementById('flexboxBtn');

const mysteryOrganism = document.getElementById('mysteryOrganism');
mysteryOrganism.click = false;
const hideMysteryOrganism = document.getElementById('hideMysteryOrganism');
const mysteryOrganismCloseBtn = document.getElementById('mysteryOrganismBtn');

const chatbot = document.getElementById('chatbot');
chatbot.click = false;
const hideChatbot = document.getElementById('hideChatbot');
const chatbotCloseBtn = document.getElementById('chatbotBtn');

const printProject = event => {
  event.target.click = true;
  if (flexboxBusiness.click === true) {
    hideFlexboxBusiness.style.display = 'block';
  } else if (mysteryOrganism.click === true) {
    hideMysteryOrganism.style.display = 'block';
  }  else if (chatbot.click === true) {
    hideChatbot.style.display = 'block';
  }
}

const closeProject = event => {
  if (flexboxBusiness.click === true) {
    hideFlexboxBusiness.style.display = 'none';
    flexboxBusiness.click = false;
  } else if (mysteryOrganism.click === true) {
    hideMysteryOrganism.style.display = 'none';
    mysteryOrganism.click = false;
  } else if (chatbot.click === true) {
    hideChatbot.style.display = 'none';
    chatbot.click = false;
  }
}

flexboxBusiness.addEventListener('click', printProject);
flexboxCloseBtn.addEventListener('click', closeProject);

mysteryOrganism.addEventListener('click', printProject);
mysteryOrganismCloseBtn.addEventListener('click', closeProject);

chatbot.addEventListener('click', printProject);
chatbotCloseBtn.addEventListener('click', closeProject);

console.log(hideChatbot);

/* Submit button */
const submit = document.getElementById('submit');
const contactForm = document.getElementById('contact-form');

const submitMessage = () => contactForm.innerHTML = 'Thank you for your message!';

submit.addEventListener('click', submitMessage);