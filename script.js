const enterBtn=document.getElementById('enterBtn');
const cover=document.getElementById('cover');
const party=document.getElementById('party');
const music=document.getElementById('music');

enterBtn.addEventListener('click',async()=>{
  try{
    music.currentTime=74;
    music.volume=.82;
    await music.play();
  }catch(e){
    music.currentTime=74;
  }
  cover.classList.add('fade-out');
  setTimeout(()=>party.scrollIntoView({behavior:'smooth'}),360);
});