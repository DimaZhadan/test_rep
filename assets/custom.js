// answers section

const answers = document.querySelectorAll('.survey_button > font > font');
const buttonAnswers = document.querySelectorAll('.survey_button');
const modalNutton3 = document.querySelector('#p_modal_button3');
const res = [];

buttonAnswers.forEach(e => {
   e.addEventListener('click', (i => res.push(e.innerText)))
   e.removeEventListener('click', () => { });
})

modalNutton3.addEventListener("click", i => {
   i.preventDefault();
   console.log({ answer1: res[0], answer2: res[1], answer3: res[2], answer4: res[3] });

   const modalBody = document.querySelector('#p_modal3');
   const modalBackdrop = document.querySelector('.modal-backdrop');
   const divImgGift = document.querySelector('.div_img_gift');
   const modalOpen = document.querySelector('.modal-open');

   modalOpen.style.overflow = 'scroll';
   modalBackdrop.style.display = 'none';
   modalBody.style.display = 'none';
   divImgGift.style.display = 'none';

   modalNutton3.removeEventListener('click', () => { });
})

// coment section

const publicButton = document.querySelector('#coment-public');
const commentText = document.querySelector('#exampleFormControlTextarea1');
const commentsFirstElem = document.querySelector('#comment0');
let resText;

commentText.addEventListener('input', i => {
   resText = commentText.value;
})

publicButton.addEventListener('click', e => {

   e.preventDefault();

   if (!resText) {
      return
   }
   let div = document.createElement('div');
   const totalComments = document.querySelectorAll('.profile');

   div.innerHTML = `<div class="comments" id="comment${totalComments.length + 1}" style="display:block">
   <div class="profile">
     <img src="assets/anonim.png" width="60px" height="60px">
   </div>
   <div class="comment-content">
     <p class="name">
       <font style="vertical-align: inherit;">
         <font style="vertical-align: inherit;">Anonimato</font>
       </font>
     </p>
     <p>
       <font style="vertical-align: inherit;">
         <font style="vertical-align: inherit;">${resText}</font>
       </font>
     </p>
   </div>
   <div class="clr"></div>
   <div class="comment-status">
     <span>
       <font style="vertical-align: inherit;">
         <font style="vertical-align: inherit;">Curte·comente</font>
       </font>
       <img src="assets/like.png" width="15px" height="15px">
       <font style="vertical-align: inherit;">
         <font style="vertical-align: inherit;">9</font>
       </font>
     </span>
     <small>
       <font style="vertical-align: inherit;">
         <font style="vertical-align: inherit;">·</font>
       </font>
       <u>
         <font style="vertical-align: inherit;">
           <font style="vertical-align: inherit;">3 minutos antes</font>
         </font>
       </u>
     </small>
   </div>
   </div>`;

   commentsFirstElem.before(div);
   commentText.value = '';

   commentText.removeEventListener('input', () => { });
   publicButton.removeEventListener('click', () => { });
})