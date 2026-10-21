// ============================================================
// 프로필 데이터: 이 객체만 수정하면 페이지 전체에 반영됩니다.
// ============================================================
const PROFILE = {
  firstName: '홍길',
  lastName: '동',
  role: '프론트엔드 개발자',
  intro: '사용자가 편하게 쓸 수 있는 웹을 만드는 것을 좋아합니다.\n깔끔한 코드와 세심한 UI를 지향합니다.',
  about: '안녕하세요! 프론트엔드 개발자 홍길동입니다.\n반응형 웹과 인터랙티브한 UI를 만드는 일에 흥미를 느낍니다.\n배우고 만드는 과정을 즐기며, 함께 성장하는 개발자가 되고 싶습니다.',

  stats: [
    { value: '3+', label: '경력(년)' },
    { value: '10+', label: '완료한 프로젝트' },
    { value: '5+', label: '사용 기술' },
    { value: '20+', label: '커밋 / 작업 수' },
  ],
  // 떠 있는 카드 두 장 (히어로 이미지 옆)
  floatStats: [
    { value: '3+', label: '년 경력' },
    { value: '10+', label: '프로젝트' },
  ],

  skills: [
    { name: 'HTML / CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 80 },
    { name: 'TypeScript', level: 75 },
    { name: 'Tailwind CSS', level: 85 },
    { name: 'Git', level: 80 },
  ],

  projects: [
    {
      title: '포트폴리오 사이트',
      image: 'images/portfolio.svg',
      desc: '나를 소개하는 반응형 프로필 페이지입니다.',
      tags: ['HTML', 'Tailwind CSS', 'JavaScript'],
      demo: '#',
      github: 'https://github.com/your-id',
    },
    {
      title: '할 일 관리 앱',
      image: 'images/todo.svg',
      desc: '할 일을 추가, 완료, 삭제할 수 있는 간단한 투두 앱입니다.',
      tags: ['React', 'localStorage'],
      demo: '#',
      github: 'https://github.com/your-id',
    },
    {
      title: '날씨 대시보드',
      image: 'images/weather.svg',
      desc: '지역별 날씨를 한눈에 보여주는 대시보드입니다.',
      tags: ['JavaScript', 'REST API'],
      demo: '#',
      github: 'https://github.com/your-id',
    },
  ],

  contact: {
    email: 'example@email.com',
    github: 'https://github.com/your-id',
    text: '새로운 기회나 협업 제안은 언제든 환영합니다.\n편하게 연락 주세요!',
  },
};

// ============================================================
// 렌더링: data-field 속성이 붙은 요소에 PROFILE 값을 채웁니다.
// ============================================================
const $ = (field) => document.querySelector(`[data-field="${field}"]`);

function renderProfile() {
  $('logo').textContent = `${PROFILE.firstName}${PROFILE.lastName}`;
  const fullName = PROFILE.firstName + PROFILE.lastName;
  $('nameHead').textContent = fullName.charAt(0);
  $('nameTail').textContent = fullName.slice(1);
  $('role').textContent = PROFILE.role;
  $('intro').textContent = PROFILE.intro;
  $('about').textContent = PROFILE.about;
  $('initials').textContent = PROFILE.firstName.charAt(0) + PROFILE.firstName.charAt(1) + PROFILE.lastName.charAt(0);
  $('footerName').textContent = `${PROFILE.firstName}${PROFILE.lastName}`;
  $('year').textContent = new Date().getFullYear();

  $('stat1Value').textContent = PROFILE.floatStats[0].value;
  $('stat1Label').textContent = PROFILE.floatStats[0].label;
  $('stat2Value').textContent = PROFILE.floatStats[1].value;
  $('stat2Label').textContent = PROFILE.floatStats[1].label;

  $('stats').innerHTML = PROFILE.stats
    .map(
      (s) => `
        <div class="text-center">
          <p class="text-3xl font-black text-white md:text-4xl">${s.value}</p>
          <p class="mt-1 text-sm text-slate-400">${s.label}</p>
        </div>`
    )
    .join('');

  $('skills').innerHTML = PROFILE.skills
    .map(
      (s) => `
        <li>
          <div class="mb-2 flex justify-between text-sm">
            <span class="font-medium text-white">${s.name}</span>
            <span class="text-slate-400">${s.level}%</span>
          </div>
          <div class="h-2 overflow-hidden rounded-full bg-white/10">
            <div class="skill-bar h-full rounded-full bg-gradient-to-r from-accent to-accent-soft" data-level="${s.level}"></div>
          </div>
        </li>`
    )
    .join('');

  $('projects').innerHTML = PROFILE.projects
    .map(
      (p) => `
        <article class="fade-in group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-panel transition duration-300 hover:-translate-y-2 hover:border-accent/60">
          <img src="${p.image}" alt="${p.title} 미리보기" loading="lazy" class="h-44 w-full object-cover transition duration-500 group-hover:scale-105" />
          <div class="flex flex-1 flex-col p-6">
            <h3 class="text-lg font-bold text-white">${p.title}</h3>
            <p class="mt-2 flex-1 text-sm leading-relaxed text-slate-400">${p.desc}</p>
            <div class="mt-4 flex flex-wrap gap-2">
              ${p.tags.map((t) => `<span class="rounded-md bg-white/5 px-2.5 py-1 text-xs text-slate-300">${t}</span>`).join('')}
            </div>
            <div class="mt-6 flex items-center justify-between text-sm">
              <a href="${p.demo}" target="_blank" rel="noopener" class="font-semibold text-accent-soft hover:text-white">Live Demo ↗</a>
              <a href="${p.github}" target="_blank" rel="noopener" class="text-slate-400 hover:text-white">GitHub</a>
            </div>
          </div>
        </article>`
    )
    .join('');

  $('socials').innerHTML = `
    <a href="${PROFILE.contact.github}" target="_blank" rel="noopener" class="rounded-full border border-white/10 px-3 py-1 text-sm transition hover:border-accent/60 hover:text-white">GitHub</a>
    <a href="mailto:${PROFILE.contact.email}" class="rounded-full border border-white/10 px-3 py-1 text-sm transition hover:border-accent/60 hover:text-white">Email</a>`;

  $('contactText').textContent = PROFILE.contact.text;
  $('contactList').innerHTML = `
    <li>✉️ ${PROFILE.contact.email}</li>
    <li>🐙 <a href="${PROFILE.contact.github}" target="_blank" rel="noopener" class="hover:text-white">${PROFILE.contact.github}</a></li>`;
  $('contactCta').href = `mailto:${PROFILE.contact.email}`;
}

// ============================================================
// 인터랙션
// ============================================================
function setupMobileMenu() {
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');

  toggle.addEventListener('click', () => {
    const isOpen = !menu.classList.contains('hidden');
    menu.classList.toggle('hidden', isOpen);
    toggle.setAttribute('aria-expanded', String(!isOpen));
    toggle.setAttribute('aria-label', isOpen ? '메뉴 열기' : '메뉴 닫기');
  });

  // 메뉴 항목을 누르면 드롭다운 닫기
  menu.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => {
      menu.classList.add('hidden');
      toggle.setAttribute('aria-expanded', 'false');
    })
  );
}

function setupHeaderShadow() {
  const header = document.getElementById('header');
  const onScroll = () => header.classList.toggle('shadow-lg', window.scrollY > 10);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

// 현재 보고 있는 섹션에 해당하는 메뉴 강조
function setupScrollSpy() {
  const links = document.querySelectorAll('.nav-link');
  const sections = [...links].map((a) => document.querySelector(a.getAttribute('href')));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) =>
          link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`)
        );
      });
    },
    { rootMargin: '-45% 0px -50% 0px' }
  );

  sections.forEach((section) => section && observer.observe(section));
}

// 스크롤 시 섹션/카드 페이드인
function setupFadeIn() {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
}

// 스킬 바가 화면에 보이면 목표 퍼센트까지 채우기
function setupSkillBars() {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.style.width = `${entry.target.dataset.level}%`;
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll('.skill-bar').forEach((el) => observer.observe(el));
}

// 다크/라이트 모드 전환 (선택은 localStorage에 저장)
function setupThemeToggle() {
  const btn = document.getElementById('theme-toggle');
  const root = document.documentElement;

  const sync = () => {
    const isDark = root.classList.contains('dark');
    btn.textContent = isDark ? '☀️' : '🌙';
    btn.setAttribute('aria-label', isDark ? '라이트 모드로 전환' : '다크 모드로 전환');
  };

  btn.addEventListener('click', () => {
    const isDark = !root.classList.contains('dark');
    root.classList.toggle('dark', isDark);
    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch (e) {
      // 저장이 막힌 환경(시크릿 모드 등)에서는 이번 방문에만 적용됩니다.
    }
    sync();
  });

  sync();
}

// ============================================================
// 시작
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  renderProfile();
  setupThemeToggle();
  setupMobileMenu();
  setupHeaderShadow();
  setupScrollSpy();
  setupFadeIn();
  setupSkillBars();
});
