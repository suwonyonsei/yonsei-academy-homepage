const menuButton=document.querySelector('.menu-button');
const nav=document.querySelector('.nav');
menuButton?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'메뉴 닫기':'메뉴 열기')});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuButton?.setAttribute('aria-expanded','false')}));

const teachers=[
  {name:'Julie',role:'대표원장',tag:'DIRECTOR',photo:'images/teachers-updated/executive-director.jpg',text:'1999년부터 지금까지 연세어학원이 지켜온 교육의 중심은 학생 한 명 한 명의 성장입니다. 영어를 통해 더 넓은 세상을 만나고, 자신의 꿈을 자신 있게 펼칠 수 있도록 함께하겠습니다.'},
  {name:'Chairman',role:'연세어학원',tag:'LEADERSHIP',photo:'images/teachers-updated/chairman.jpg',text:'영어로 꿈을 키우는 공간, 연세어학원. 아이들의 가능성이 실력이 되는 순간까지 흔들림 없는 교육 환경을 만들어갑니다.'},
  {name:'Grace',role:'Teacher',tag:'ELEMENTARY',photo:'images/teachers-updated/grace.jpg',text:'영어를 단순히 외우는 과목이 아닌 자연스럽게 익히고 즐길 수 있는 언어로 생각합니다. 밝고 활기찬 분위기 속에서 단어와 문법을 다지고, 말하기와 듣기 활동으로 실제 사용할 수 있는 힘을 키웁니다.'},
  {name:'Emily',role:'Teacher',tag:'ELEMENTARY',photo:'images/teachers-updated/emily.jpg',text:'아이들이 영어를 공부가 아닌 재미있는 언어로 느낄 수 있도록 함께합니다. 작은 성장도 놓치지 않고 칭찬하며, 아이 한 명 한 명의 성향과 속도에 맞춰 따뜻하게 지도합니다.'},
  {name:'Hailey',role:'Teacher',tag:'ELEMENTARY · MIDDLE',photo:'images/teachers-updated/hailey.jpg',text:'영어가 어렵고 낯설게 느껴지는 아이들에게 영어는 재미있는 공부라는 경험을 만들어주고 싶습니다. 각자의 눈높이에 맞춰 편안하게 소통하며 자신감을 키워주는 수업을 지향합니다.'},
  {name:'Kelly',role:'Teacher',tag:'BILINGUAL TEACHER',photo:'images/teachers-updated/kelly.jpg',text:'공인 이중언어 강사로서 2021년부터 연세어학원에서 함께하고 있습니다. 학생들이 편안하게 질문하고 스스로 도전할 수 있는 교실을 만들며, 노력과 성장을 가장 중요하게 생각합니다.'},
  {name:'Kathryn',role:'Teacher',tag:'NATIVE TEACHER',photo:'images/teachers-updated/kathryn.jpg',text:'Portland State University에서 영어를 전공했습니다. 읽기와 창의적 글쓰기를 좋아하며, 학생들과 영어에 대한 사랑을 나누고 즐겁게 배우는 시간을 만들어가고 싶습니다.'},
  {name:'Jamie',role:'Teacher',tag:'ELEMENTARY · MIDDLE',photo:'images/teachers-updated/jamie.jpg',text:'초등·중등 담임으로서 영어로 말하는 것에 자신감을 갖는 수업을 중요하게 생각합니다. 짧고 쉬운 문장부터 시작해 자신의 생각을 영어로 자유롭게 표현할 수 있도록 차근차근 지도합니다.'},
  {name:'Ebony',role:'Teacher',tag:'NATIVE TEACHER',photo:'images/teachers-updated/ebony.jpg',text:'University of Texas at Arlington에서 Communications를 전공하고 Yonsei University에서도 공부했습니다. 학생들이 편안하게 말하고 참여하며 긍정적인 경험 속에서 영어 자신감을 얻는 수업을 만듭니다.'},
  {name:'Karissa',role:'Teacher',tag:'YONSEI TEACHER',photo:'images/teachers-updated/karissa.jpg',text:'약 8년 동안 연세어학원에서 학생들과 함께해왔습니다. 초등 1학년부터 중등 3학년까지 성장하는 과정을 지켜보며, 학생들의 영어 여정에 함께할 수 있어 기쁩니다.'},
  {name:'Jinny',role:'Teacher',tag:'ELEMENTARY · MIDDLE',photo:'images/teachers-updated/jinny.jpg',text:'초등부는 다양한 영어 게임과 활동으로 스스로 참여하고 자기주도적으로 공부하도록 이끌고, 중등부는 질문과 소통을 통해 스스로 답을 찾으며 학교 시험 고득점을 목표로 지도합니다.'},
  {name:'Julia',role:'Teacher',tag:'HIGH SCHOOL ENGLISH',photo:'images/teachers-updated/julia.jpg',text:'고등부 영어 담당으로 기본부터 실전까지 흔들리지 않는 실력을 만드는 수업을 합니다. 문법 개념을 꼼꼼히 익히고 정확하게 독해하는 힘을 길러 내신과 수능을 함께 준비합니다.'},
  {name:'Sunny',role:'Teacher',tag:'YONSEI TEACHER',photo:'images/teachers-updated/sunny.jpg',text:'학생들이 영어를 더 편안하게 받아들이고 자신감을 키울 수 있도록 따뜻하게 함께합니다. 한 명 한 명의 성장을 가까이에서 응원하는 선생님이 되겠습니다.'}
];

const teacherGrid=document.querySelector('#teachers .teacher-grid');
if(teacherGrid){
  teacherGrid.innerHTML=teachers.map((teacher,index)=>`
    <article class="teacher-card ${index===0?'director':''} reveal">
      <div class="teacher-photo"><img src="${teacher.photo}" alt="${teacher.name} ${teacher.role}" loading="lazy" onerror="this.onerror=null;this.src='images/logo.jpg';"></div>
      <div class="teacher-info"><p>${teacher.tag}</p><h3>${teacher.name} <small>${teacher.role}</small></h3><span>${teacher.text}</span></div>
    </article>`).join('');
}

const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
