
(function(){
var SB="https://c--2d172385-a609-4e65-a40f-c7e313f1af7f-prod.lovable.cloud",KEY="sb_publishable_uDCD7GyLuD-V4uu7lJw_xw_fC-YDlM1";
// mobile menu
var btn=document.querySelector('button[aria-label="Open menu"],button[aria-label="Close menu"]'),panel=btn&&btn.closest('header').children[1];
function setMenu(o){if(!panel)return;panel.classList.toggle('max-h-[28rem]',o);panel.classList.toggle('opacity-100',o);panel.classList.toggle('max-h-0',!o);panel.classList.toggle('opacity-0',!o);btn.setAttribute('aria-expanded',o);btn.setAttribute('aria-label',o?'Close menu':'Open menu');}
setMenu(false);
if(btn){btn.addEventListener('click',function(){setMenu(btn.getAttribute('aria-expanded')!=='true')});panel.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){setMenu(false)})});}
// header shadow
var hdr=document.querySelector('header');function sc(){var s=scrollY>12;hdr.classList.toggle('shadow-card',s)}addEventListener('scroll',sc,{passive:true});sc();
// FAQ accordion
document.querySelectorAll('#faq .faq-q').forEach(function(b){
 var card=b.closest('[data-state]'),ans=card.querySelector('.faq-a');
 b.addEventListener('click',function(){
  var open=b.getAttribute('aria-expanded')==='true';
  document.querySelectorAll('#faq .faq-q').forEach(function(x){
   if(x!==b&&x.getAttribute('aria-expanded')==='true'){var c=x.closest('[data-state]');x.setAttribute('aria-expanded','false');c.setAttribute('data-state','closed');c.querySelector('.faq-a').hidden=true;}
  });
  b.setAttribute('aria-expanded',!open);card.setAttribute('data-state',!open?'open':'closed');ans.hidden=open;
 });
});
// scroll reveal
var rev=[].slice.call(document.querySelectorAll('.transition-all.duration-700'));
if('IntersectionObserver' in window){rev.forEach(function(el){el.classList.remove('translate-y-0','opacity-100','blur-0');el.classList.add('translate-y-8','opacity-0','blur-[2px]')});
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var el=e.target;el.classList.remove('translate-y-8','opacity-0','blur-[2px]');el.classList.add('translate-y-0','opacity-100','blur-0');io.unobserve(el)}})},{threshold:.15,rootMargin:"0px 0px -60px 0px"});rev.forEach(function(el){io.observe(el)});}
// enquiry form
var form=document.querySelector('#enquiry form');if(!form)return;
var f=form.querySelectorAll('input,select,textarea'),names=['full_name','phone','email','lesson_type','preferred_day','preferred_time','message','consent'];
f.forEach(function(el,i){el.name=names[i]});
var submit=form.querySelector('button[type=submit]'),label=submit.innerHTML;
function err(el,msg){var box=el.type==='checkbox'?el.closest('label').parentElement:el.parentElement;var p=box.querySelector('.err');if(!p&&msg){p=document.createElement('p');p.className='err mt-1 text-xs font-semibold text-destructive';box.appendChild(p)}if(p){p.textContent=msg||'';if(!msg)p.remove()}}
form.addEventListener('submit',function(ev){ev.preventDefault();var v={};names.forEach(function(n){var el=form.elements[n];v[n]=el.type==='checkbox'?el.checked:el.value.trim()});
 var e={};if(!v.full_name)e.full_name="Please enter your full name.";if(!/^[\d\s+()-]{7,}$/.test(v.phone))e.phone="Please enter a valid phone number.";if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email))e.email="Please enter a valid email address.";if(!v.lesson_type)e.lesson_type="Please choose a lesson type.";if(!v.consent)e.consent="Please confirm we can contact you about your enquiry.";
 names.forEach(function(n){err(form.elements[n],e[n])});var g=form.querySelector('.send-error');if(g)g.remove();if(Object.keys(e).length)return;
 submit.disabled=true;submit.textContent='Sending…';
 ['preferred_day','preferred_time','message'].forEach(function(n){if(!v[n])v[n]=null});
 fetch(SB+'/rest/v1/enquiries',{method:'POST',headers:{'apikey':KEY,'Content-Type':'application/json','Prefer':'return=minimal'},body:JSON.stringify(v)}).then(function(r){if(!r.ok)throw 0;
  form.outerHTML='<div class="flex flex-col items-center py-10 text-center"><p class="mt-4 text-lg font-bold text-charcoal">Thanks! Your enquiry has been received. We\'ll get back to you shortly.</p></div>';
 }).catch(function(){submit.disabled=false;submit.innerHTML=label;var p=document.createElement('p');p.className='send-error text-sm font-semibold text-destructive sm:col-span-2';p.textContent='Sorry, something went wrong sending your enquiry. Please try again.';submit.parentElement.before(p)});});

})();
(function(){
// Testimonial carousel
var data=[
 {quote:"Example review text. Replace this with a real learner review once you collect them.",name:"Learner name",location:"Location"},
 {quote:"Example review text showing how a learner describes their lessons and progress.",name:"Learner name",location:"Location"},
 {quote:"Example review text about test preparation and confidence on the road.",name:"Learner name",location:"Location"},
 {quote:"Example review text from a beginner\'s first few lessons behind the wheel.",name:"Learner name",location:"Location"}
];
var cards=[].slice.call(document.querySelectorAll('#testimonials .lift-card'));
var prev=document.querySelector('[aria-label="Previous testimonial"]');
var next=document.querySelector('[aria-label="Next testimonial"]');
if(!cards.length||!prev||!next)return;
var start=0;
function render(){
  cards.forEach(function(card,i){
    var t=data[(start+i)%data.length];
    var p=card.querySelector('p.mt-5');
    if(p)p.textContent='\u201C'+t.quote+'\u201D';
    var foot=card.querySelector('.border-t');
    if(foot){
      var ps=foot.querySelectorAll('p');
      if(ps[0])ps[0].textContent=t.name;
      if(ps[1]){var svg=ps[1].querySelector('svg');ps[1].textContent='';if(svg)ps[1].appendChild(svg);ps[1].appendChild(document.createTextNode(' '+t.location));}
    }
    card.style.animation='none';void card.offsetWidth;card.style.animation='';
  });
}
function go(d){start=(start+d+data.length)%data.length;render()}
prev.addEventListener('click',function(){go(-1)});
next.addEventListener('click',function(){go(1)});
})();
