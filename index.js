const shareBtn = document.getElementById("share-btn")
const cardFooter = document.getElementsByClassName("card-footer")[0]
const share= `


          <div class="card-social">
            <div class="share-word">
              share
            </div>
            <div class="social-icon">
              <img src="./images/icon-facebook.svg" alt="facebook icon" />
              <img src="./images/icon-twitter.svg" alt="twitter icon" />
              <img src="./images/icon-pinterest.svg" alt="pinterest icon" />
            </div>
            <button class="share-icon active">
              <i class="fa-solid fa-share"></i>
            </button>
          </div>
`
shareBtn.addEventListener("click", function () {
 
    cardFooter.innerHTML = cardFooter.innerHTML + share

})