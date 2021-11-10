console.log('hello');
const recursia = function () {
    const dateStart = new Date();
    
    document.querySelector('.start1').style.display = 'none';
    document.querySelector('.about-me-block').style.display = 'block';
    document.querySelector('.skills').style.display = 'block';
    document.querySelector('.skills').innerHTML = ` <article class="next-type">
    <img class="small-leo" src="./img/leoStart.jpg" alt="">
    <p class="next-type-text">Nice job!Let's see my skills.</p>
    </article>`;
    document.querySelector('.next-type').addEventListener('click', ()=>{
        document.querySelector('.next-type').remove()
        document.querySelector('.education').style.display = 'block';
        document.querySelector('.pet-projects').style.display = 'block';
        document.querySelector('.skills').innerHTML = `
        <h3>Skills</h3>
        <div class="html"><div class="html-bar"></div></div>
        <div class="css"><div class="css-bar"></div></div>
        <div class="javascript"><div class="javascript-bar"></div></div>
        <div class="typescript"><div class="typescript-bar"></div></div>`;
        document.querySelector('.education').innerHTML = ` <article class="next-type">
    <img class="small-leo" src="./img/leoStart.jpg" alt="">
    <p class="next-type-text">In the next step you will see where I studied!</p>
    </article>`;
    document.querySelector('.next-type').addEventListener('click', ()=>{
        document.querySelector('.next-type').remove()
        
        document.querySelector('.education').innerHTML = `<h3>Education</h3>
        <p class="university">National Transport University</p>
        <p class="faculty">Faculty: Transport Technologies</p>
        <p class="spec">Specialization: Logistics and Custom conrol,2020</p>`;
        document.querySelector('.pet-projects').innerHTML =  `<article class="next-type">
        <img class="small-leo" src="./img/leoStart.jpg" alt="">
        <p class="next-type-text">One tap and you will see my project.</p>
        </article>`;
        document.querySelector('.next-type').addEventListener('click', ()=>{
            document.querySelector('.next-type').remove();
            document.querySelector('.pet-projects').innerHTML = `<h3>Pet-projects</h3>
            <h4 class="pet-title"><a href="https://maksimromanovvv.github.io/weatherappkyiv/dist/"target="_blank">Weather-app</a> </h2>
            <a href="https://maksimromanovvv.github.io/weatherappkyiv/dist/" target="_blank"><img class="proj-img" src="./img/proj.png" alt=""></a>`
       document.querySelector('.finish-btn').style.display = 'block';
       document.querySelector('.finish-btn').addEventListener('click',()=>{
        document.querySelector('.finish-btn').style.display = 'none';
       
        const endDate = new Date();
     
      const timeInPage =  Math.round((endDate-dateStart)/1000);
    console.log(timeInPage);
      if(timeInPage<60){
          document.querySelector('.message-text').textContent = `Dear HR or tech specialist,you spent ${timeInPage} seconds of your life to see my resume. Next time be faster)`
      }
      if(timeInPage>60){
        document.querySelector('.message-text').textContent = `Dear HR or tech specialist,you spent ${Math.floor(timeInPage/60)} minutes ${timeInPage%60} seconds of your life to see my resume. Next time be faster)`
    }
    
    
      document.querySelector('.overlay').style.display = 'block';
      document.querySelector('.overlay').addEventListener('click',(e)=>{
          console.log(e.target);
          if(e.target.classList.contains('message') || e.target.classList.contains('message-text')){
              return
          }
          document.querySelector('.overlay').style.display = 'none';
          document.querySelector('.restart-btn').style.display = 'block';
          document.querySelector('.restart-btn').addEventListener('click', ()=>{
            document.querySelector('.about-me-block').style.display = 'none';

            document.querySelector('.skills').style.display = 'none';
            document.querySelector('.education').style.display = 'none';
            document.querySelector('.pet-projects').innerHTML= '';
            document.querySelector('.restart-btn').style.display = 'none';
    
            document.querySelector('.start1').style.display = 'block';
            // document.querySelector('.start1').addEventListener('click',recursia)
          })
      })
       })
       
        })
    })
    })
    
    
}


document.querySelector('.start1').addEventListener('click',recursia)