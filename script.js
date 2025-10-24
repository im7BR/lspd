// --- Penal Code Mapping ---
const PC_MAP = {
    "2.1.1": {stars:'—',count:0,fine:'$20,000',desc:'Possession of Cocaine in small quantities'},
    "2.1.2": {stars:'—',count:0,fine:'$30,000',desc:'Possession of Cocaine in moderate quantities'},
    "2.1.3": {stars:'⭐⭐',count:2,fine:'$15,000',desc:'Possession of Cocaine with intent to supply'},
    "2.2.1": {stars:'—',count:0,fine:'$20,000',desc:'Possession of cannabis in small quantities'},
    "2.2.2": {stars:'—',count:0,fine:'$30,000',desc:'Possession of cannabis in moderate quantities'},
    "2.2.3": {stars:'⭐⭐',count:2,fine:'$15,000',desc:'Possession of Cannabis with intent to supply'},
    "2.2.4.1": {stars:'⭐',count:1,fine:'$30,000',desc:'Cultivation of cannabis in small quantities'},
    "2.2.4.2": {stars:'⭐⭐⭐',count:3,fine:'$45,000',desc:'Cultivation of cannabis in large quantities'},
    "2.3": {stars:'—',count:0,fine:'$10,000',desc:'Usage of illicit substances in public'},
    "2.4.1": {stars:'—',count:0,fine:'$15,000',desc:'Possession of prohibited items in small quantities'},
    "2.4.2": {stars:'⭐⭐',count:2,fine:'$15,000',desc:'Possession of prohibited items in large quantities'},
    "2.4.3": {stars:'⭐⭐⭐',count:3,fine:'$25,000',desc:'Sale of prohibited item'},
    "2.4.4": {stars:'⭐⭐⭐⭐',count:4,fine:'$35,000',desc:'Possession of infected technology with malicious intent'},
    "2.5.1": {stars:'—',count:0,fine:'$20,000',desc:'Carrying a weapon without a license'},
    "2.5.2": {stars:'⭐⭐',count:2,fine:'$20,000',desc:'Overcarrying'},
    "2.5.3": {stars:'⭐⭐',count:2,fine:'$10,000',desc:'Open Carrying'},
    "2.5.4": {stars:'—',count:0,fine:'$20,000',desc:'Possession of any prohibited weapon'},
    "2.5.5": {stars:'⭐⭐⭐',count:3,fine:'$20,000',desc:'Possession of multiple prohibited weapons'},
    "2.5.6": {stars:'⭐⭐⭐',count:3,fine:'$25,000',desc:'Brandishing of a weapon'},
    "2.5.7": {stars:'⭐⭐⭐',count:3,fine:'$20,000',desc:'Possession of state issued articles'},
    "2.5.8": {stars:'⭐',count:1,fine:'$10,000',desc:'Discharging a weapon in a public place'},
    "2.5.9": {stars:'⭐⭐⭐',count:3,fine:'$50,000',desc:'Distribution of weapons ammunition or state-issued articles'},
    "2.6.1": {stars:'⭐',count:1,fine:'$10,000',desc:'Non-lethal battery'},
    "2.6.2": {stars:'⭐⭐⭐',count:3,fine:'$15,000',desc:'Manslaughter'},
    "2.6.3": {stars:'⭐⭐',count:2,fine:'$10,000',desc:'Assault by Threat'},
    "2.6.4": {stars:'⭐⭐⭐⭐',count:4,fine:'$20,000',desc:'Attempted Murder'},
    "2.6.5": {stars:'⭐⭐⭐⭐',count:4,fine:'$30,000',desc:'Murder through hostile action'},
    "2.6.6": {stars:'⭐⭐⭐⭐',count:4,fine:'$50,000',desc:'Rape and/or Sexual Assault'},
    "2.7.1": {stars:'⭐',count:1,fine:'$10,000',desc:'Failure to Act'},
    "2.7.2": {stars:'⭐⭐⭐',count:3,fine:'$60,000',desc:'Refusal of Duty to Act'},
    "2.7.3": {stars:'⭐⭐⭐',count:3,fine:'—',desc:'Failure to act by a Public servant'},
    "2.7.4": {stars:'⭐⭐⭐⭐',count:4,fine:'—',desc:'Abandonment of a civilian by a public servant'},
    "2.8.1": {stars:'⭐⭐⭐⭐',count:4,fine:'$20,000',desc:'Abduction'},
    "2.8.2": {stars:'⭐⭐⭐⭐',count:4,fine:'$25,000',desc:'Kidnapping'},
    "2.8.3": {stars:'⭐⭐⭐⭐',count:4,fine:'$30,000',desc:'Taking a hostage'},
    "2.8.4": {stars:'⭐⭐⭐⭐',count:4,fine:'$50,000',desc:'Human Trafficking'},
    "2.8.5": {stars:'⭐⭐',count:2,fine:'$20,000',desc:'Violation of privacy'},
    "2.8.6": {stars:'⭐⭐⭐',count:3,fine:'$20,000',desc:'Unlawful Detention'},
    "2.9.1": {stars:'⭐⭐',count:2,fine:'$10,000',desc:'Street Harassment'},
    "2.9.2": {stars:'⭐⭐⭐⭐',count:4,fine:'$150,000',desc:'Sexual Harassment'},
    "2.9.3": {stars:'⭐⭐⭐⭐',count:4,fine:'$35,000',desc:'Stalking'},
    "2.9.4": {stars:'⭐⭐⭐',count:3,fine:'$20,000',desc:'Hooliganism'},
    "2.9.5": {stars:'⭐⭐⭐',count:3,fine:'$35,000',desc:'Rioting or inciting a riot'},
    "2.9.6": {stars:'—',count:0,fine:'$10,000',desc:'Spreading of disease'},
    "2.9.7": {stars:'⭐⭐',count:2,fine:'$20,000',desc:'Indecent Exposure'},
    "2.9.8": {stars:'⭐⭐',count:2,fine:'$10,000',desc:'Provoking'},
    "2.9.9": {stars:'—',count:0,fine:'$5,000',desc:'Engaging in prostitution'},
    "2.9.10": {stars:'⭐⭐⭐',count:3,fine:'$50,000',desc:'Defamation of character'},
    "2.9.11": {stars:'⭐⭐⭐',count:3,fine:'$30,000',desc:'Harassment of a public servant'},
    "2.10.1": {stars:'⭐⭐⭐',count:3,fine:'$15,000',desc:'Document forgery'},
    "2.10.2": {stars:'⭐',count:1,fine:'$8,000',desc:'Looting of an ATM'},
    "2.10.3": {stars:'⭐⭐⭐',count:3,fine:'$20,000',desc:'Theft of property'},
    "2.10.4": {stars:'⭐⭐⭐',count:3,fine:'$20,000',desc:'Fraud'},
    "2.10.5": {stars:'⭐⭐⭐',count:3,fine:'$30,000',desc:'Grand Theft Auto'},
    "2.10.6": {stars:'⭐⭐⭐⭐',count:4,fine:'$35,000',desc:'Robbery'},
    "2.10.7": {stars:'—',count:0,fine:'$10,000',desc:'False Advertising'},
    "2.11.1": {stars:'⭐⭐',count:2,fine:'$20,000',desc:'Reckless Driving'},
    "2.11.2": {stars:'⭐⭐⭐',count:3,fine:'$20,000',desc:'Causing injury by dangerous driving'},
    "2.11.3": {stars:'⭐⭐⭐⭐',count:4,fine:'$30,000',desc:'Causing death by dangerous driving'},
    "2.11.4": {stars:'⭐',count:1,fine:'$10,000',desc:'Failure to yield to an emergency vehicle'},
    "2.12.1": {stars:'⭐⭐',count:2,fine:'$20,000',desc:'Animal abuse causing minor harm'},
    "2.12.2": {stars:'⭐⭐⭐',count:3,fine:'$30,000',desc:'Animal abuse causing major harm'},
    "2.12.3": {stars:'⭐⭐⭐⭐',count:4,fine:'$30,000',desc:'Animal abuse resulting in death'},
    "2.13.1": {stars:'⭐',count:1,fine:'$20,000',desc:'Attempted Suicide'},
    "2.13.2": {stars:'⭐⭐',count:2,fine:'$20,000',desc:'Conspiracy to commit a crime'},
    "2.13.3": {stars:'⭐⭐⭐',count:3,fine:'$30,000',desc:'Vandalism'},
    "2.13.4": {stars:'—',count:0,fine:'$10,000',desc:'Illegal Fishing'},
    "2.13.5": {stars:'⭐⭐⭐',count:3,fine:'—',desc:'Breach of Contract'},
    "2.13.6": {stars:'⭐⭐⭐⭐',count:4,fine:'$100,000',desc:'Entrapment'},
    "2.13.7": {stars:'—',count:0,fine:'$15,000',desc:'Installation of temporary structure without a permit'},
    "2.13.8": {stars:'⭐',count:1,fine:'$15,000',desc:'Installation of temporary structure on a roadway or path'},
    "3.1.1": {stars:'⭐⭐⭐⭐',count:4,fine:'$50,000',desc:'Participation in terrorism'},
    "3.1.2": {stars:'⭐⭐⭐⭐',count:4,fine:'$75,000',desc:'Organization of terrorism'},
    "3.1.3": {stars:'⭐⭐⭐⭐',count:4,fine:'$100,000',desc:'Leading a terrorist organization'},
    "3.1.4": {stars:'⭐⭐⭐⭐',count:4,fine:'$50,000',desc:'Committing a terrorist act'},
    "3.1.5": {stars:'⭐⭐⭐⭐',count:4,fine:'$35,000',desc:'Creation of a stable armed group'},
    "3.1.6": {stars:'⭐⭐⭐⭐',count:4,fine:'$25,000',desc:'Banditry'},
    "3.2": {stars:'⭐⭐⭐',count:3,fine:'$35,000',desc:'Obstruction of Justice'},
    "3.3": {stars:'⭐⭐⭐⭐',count:4,fine:'$75,000',desc:'Attempted Seizure of Power'},
    "3.4.1": {stars:'⭐⭐',count:2,fine:'$20,000',desc:'Trespassing on private property'},
    "3.4.2": {stars:'⭐⭐⭐',count:3,fine:'$30,000',desc:'Trespassing in a State Facility'},
    "3.4.3": {stars:'⭐⭐⭐⭐',count:4,fine:'$35,000',desc:'Breaking and Entering'},
    "3.5": {stars:'⭐⭐⭐⭐',count:4,fine:'$35,000',desc:'Failure to comply'},
    "3.6": {stars:'⭐⭐',count:2,fine:'$10,000',desc:'Failure to Identify'},
    "3.7": {stars:'⭐⭐',count:2,fine:'$20,000',desc:'Illegal Gambling'},
    "3.8.1": {stars:'⭐⭐',count:2,fine:'$35,000',desc:'Impersonating a public Servant'},
    "3.8.2": {stars:'⭐⭐⭐',count:3,fine:'$35,000',desc:'Impersonating a law enforcement Officer'},
    "3.9.1": {stars:'⭐⭐⭐',count:3,fine:'$25,000',desc:'Breach of electoral silence'},
    "3.9.2": {stars:'⭐⭐⭐⭐',count:4,fine:'$50,000',desc:'Breach of electoral silence at the voting booth'},
    "3.9.3": {stars:'⭐⭐⭐⭐',count:4,fine:'$35,000',desc:'Blocking a voting site'},
    "3.9.4": {stars:'⭐⭐⭐⭐',count:4,fine:'$35,000',desc:'Illegal persuasion of votes'},
    "3.10": {stars:'⭐⭐⭐',count:3,fine:'$15,000',desc:'Battery of a public servant'},
    "3.11": {stars:'⭐⭐⭐⭐',count:4,fine:'$35,000',desc:'Murder or Attempted murder of a public servant'},
    "3.12": {stars:'⭐⭐⭐',count:3,fine:'$20,000',desc:'False reporting'},
    "3.13.1": {stars:'⭐⭐⭐',count:3,fine:'$20,000',desc:'Active Bribery'},
    "3.13.2": {stars:'⭐⭐⭐⭐',count:4,fine:'$50,000',desc:'Passive Bribery'},
    "3.13.3": {stars:'⭐⭐⭐⭐',count:4,fine:'$50,000',desc:'Quid Pro Quo'},
    "3.14": {stars:'⭐⭐⭐',count:3,fine:'$20,000',desc:'Failure to pay fines'},
    "3.15.1": {stars:'⭐⭐⭐',count:3,fine:'$20,000',desc:'Evading arrest'},
    "3.15.2": {stars:'⭐⭐⭐',count:3,fine:'$20,000',desc:'Assisting the evasion of arrest'},
    "3.15.3": {stars:'⭐⭐⭐⭐',count:4,fine:'$75,000',desc:'Assisting the evasion of arrest by a public servant'},
    "3.16.1": {stars:'⭐⭐',count:2,fine:'$20,000',desc:'Street harassment towards a colleague'},
    "3.16.2": {stars:'⭐⭐⭐',count:3,fine:'$50,000',desc:'Hostile work environment'},
    "3.16.3": {stars:'⭐⭐⭐',count:3,fine:'$50,000',desc:'Sexual harassment towards a colleague'},
    "3.17": {stars:'⭐⭐⭐⭐',count:4,fine:'$50,000',desc:'Going absent without leave'},
    "3.18": {stars:'⭐⭐',count:2,fine:'$20,000',desc:'Provoking a public servant'},
    "3.19": {stars:'⭐⭐⭐⭐',count:4,fine:'Variable',desc:'Tax Evasion'},
    "3.20": {stars:'⭐⭐⭐⭐',count:4,fine:'$25,000',desc:"Participation in a cyber attack of the state's resources"},
    "3.21": {stars:'⭐⭐⭐⭐',count:4,fine:'Variable',desc:'Unfair Dismissal'},
    "4.1": {stars:'⭐⭐⭐',count:3,fine:'$20,000',desc:'Disobeying an order'},
    "4.2": {stars:'⭐⭐⭐⭐',count:4,fine:'$75,000',desc:'Professional Misconduct'},
    "4.3": {stars:'⭐⭐⭐⭐',count:4,fine:'$75,000',desc:'Sabotage'},
    "4.4": {stars:'⭐⭐⭐⭐',count:4,fine:'$75,000',desc:'Espionage'},
    "4.5": {stars:'⭐⭐⭐⭐',count:4,fine:'$75,000',desc:'Conduct Unbecoming'},
    "4.6": {stars:'⭐⭐⭐⭐',count:4,fine:'$75,000',desc:'Corruption'},
    "5.1": {stars:'⭐⭐⭐⭐',count:4,fine:'$20,000',desc:'Disobeying a judicial order'},
    "5.2": {stars:'⭐⭐⭐⭐',count:4,fine:'$20,000',desc:'Disruption of a trial'},
    "5.3": {stars:'⭐⭐⭐⭐',count:4,fine:'$20,000',desc:'Dishonoring a judiciary member'},
    "5.4": {stars:'⭐⭐⭐⭐',count:4,fine:'$20,000',desc:'Contempt of court'},
    "5.5": {stars:'⭐⭐⭐⭐',count:4,fine:'$20,000',desc:'Ill-use of a judiciary permit'},
    "5.6": {stars:'⭐⭐⭐⭐',count:4,fine:'$20,000',desc:'Forged Evidence'},
    "5.7": {stars:'⭐⭐⭐⭐',count:4,fine:'$20,000',desc:'Perjury'}
};

// State objects for wizards
const towingWizardState = { currentStep: 1, totalSteps: 0, steps: [], prevBtn: null, nextBtn: null, counter: null, restartBtn: null };
const fineVehicleWizardState = { currentStep: 1, totalSteps: 0, steps: [], prevBtn: null, nextBtn: null, counter: null, restartBtn: null };

// --- Helper Functions ---
const normalize = (input) => input ? input.trim().toUpperCase().replace(/^PC\s*/, '').replace(/\s+/g, '') : '';
const lookup = (code) => {
    const key = code.replace(/\s+/g, '');
    if (PC_MAP[key]) return PC_MAP[key];
    const parts = key.match(/(\d)(\d{1,2})(\d{1,2})/);
    if (parts) {
        const alt = `${parts[1]}.${parts[2]}.${parts[3]}`;
        if (PC_MAP[alt]) return PC_MAP[alt];
    }
    const prefix = key.split('.').slice(0, 2).join('.');
    if (PC_MAP[prefix]) return PC_MAP[prefix];
    return null;
};
const formatTime = (seconds) => { const h = Math.floor(seconds / 3600); const m = Math.floor((seconds % 3600) / 60); const s = Math.floor(seconds % 60); return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`; };

// --- Wizard Step Display Functions ---
function showWizardStep(state, stepNumber) {
    if (!state.steps || state.steps.length === 0) return;
    state.currentStep = stepNumber;
    state.steps.forEach((step, index) => { step.classList.toggle('active', (index + 1) === stepNumber); });
    if (state.counter) state.counter.textContent = `Step ${state.currentStep} of ${state.totalSteps}`;
    if (state.prevBtn) state.prevBtn.disabled = state.currentStep === 1;
    if (state.nextBtn) state.nextBtn.disabled = state.currentStep === state.totalSteps;
}
const showTowingStep = (stepNumber) => showWizardStep(towingWizardState, stepNumber);
const showFineVehicleStep = (stepNumber) => showWizardStep(fineVehicleWizardState, stepNumber);


// --- Main Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM Loaded. Initializing...");

    // --- Select ALL elements ---
    const penalCodeInput = document.getElementById('codeInput');
    const searchBtn = document.getElementById('searchBtn');
    const resultArea = document.getElementById('resultArea');
    const notFound = document.getElementById('notFound');
    const starDisplay = document.getElementById('starDisplay');
    const pcTitle = document.getElementById('pcTitle');
    const pcMeta = document.getElementById('pcMeta');

    const startDutyBtn = document.getElementById('startDutyBtn');
    const endDutyBtn = document.getElementById('endDutyBtn');
    const bodycamArea = document.getElementById('bodycamArea');
    const endBodycamArea = document.getElementById('endBodycamArea');

    const situationInput = document.getElementById('situationInput');
    const analyzeBtn = document.getElementById('analyzeBtn');
    const analysisResultArea = document.getElementById('analysisResultArea');
    const analysisSummary = document.getElementById('analysisSummary');
    const analysisList = document.getElementById('analysisList');
    const analysisNotFound = document.getElementById('analysisNotFound');

    const menuToggleBtn = document.getElementById('menuToggleBtn');
    const menuOverlay = document.getElementById('menuOverlay');
    const slideMenu = document.getElementById('slideMenu');
    const closeMenuBtn = document.getElementById('closeMenuBtn');
    const homeBtn = document.getElementById('homeBtn');
    const settingsBtn = document.getElementById('settingsBtn');
    const towBtn = document.getElementById('towBtn');
    const fineBtn = document.getElementById('fineBtn');
    const arrestBtn = document.getElementById('arrestBtn');
    const importantCmdBtn = document.getElementById('importantCmdBtn');
    const aboutBtn = document.getElementById('aboutBtn');
    const tabContents = document.querySelectorAll('.tab-content');

    const settingsBadgeInput = document.getElementById('settingsBadgeInput');
    const themeDarkRadio = document.getElementById('themeDarkRadio');
    const themeLightRadio = document.getElementById('themeLightRadio');
    const saveSettingsBtn = document.getElementById('saveSettingsBtn');
    const settingsSavedMsg = document.getElementById('settingsSavedMsg');
    const themeToggleBtn = document.getElementById('themeToggleBtn');

    const shiftTimerDisplay = document.getElementById('shiftTimerDisplay');
    const startTimerBtn = document.getElementById('startTimerBtn');
    const stopTimerBtn = document.getElementById('stopTimerBtn');

    // Important CMD Elements
    const cmdLawyerBtn = document.getElementById('cmdLawyerBtn');
    const cmdLawyerContent = document.getElementById('cmdLawyerContent');
    const cmdCodeABtn = document.getElementById('cmdCodeABtn');
    const cmdCodeAContent = document.getElementById('cmdCodeAContent');
    const cmdAfterSitBtn = document.getElementById('cmdAfterSitBtn');
    const cmdAfterSitContent = document.getElementById('cmdAfterSitContent');
    const cmdJumpsuitBtn = document.getElementById('cmdJumpsuitBtn');
    const cmdJumpsuitContent = document.getElementById('cmdJumpsuitContent');
    const cmdPlateVinBtn = document.getElementById('cmdPlateVinBtn');
    const cmdPlateVinContent = document.getElementById('cmdPlateVinContent');
    const allCmdContentSections = [cmdLawyerContent, cmdCodeAContent, cmdAfterSitContent, cmdJumpsuitContent, cmdPlateVinContent];

    // --- Settings ---
    function applySettings() {
        const savedBadge = localStorage.getItem('badgeNumber') || '';
        if (settingsBadgeInput) settingsBadgeInput.value = savedBadge;
        const savedTheme = localStorage.getItem('theme') || 'dark';
        if (themeDarkRadio) themeDarkRadio.checked = (savedTheme === 'dark');
        if (themeLightRadio) themeLightRadio.checked = (savedTheme === 'light');
        document.body.classList.toggle('light-theme', savedTheme === 'light');
    }

    function saveSettings() {
        if (settingsBadgeInput) localStorage.setItem('badgeNumber', settingsBadgeInput.value.trim());
        let selectedTheme = (themeLightRadio && themeLightRadio.checked) ? 'light' : 'dark';
        localStorage.setItem('theme', selectedTheme);
        applySettings();
        if (settingsSavedMsg) {
            settingsSavedMsg.style.display = 'inline';
            setTimeout(() => { settingsSavedMsg.style.display = 'none'; }, 2000);
        }
    }
    if (saveSettingsBtn) saveSettingsBtn.addEventListener('click', saveSettings);

    // --- Theme Toggle Button ---
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const isLight = document.body.classList.toggle('light-theme');
            const newTheme = isLight ? 'light' : 'dark';
            localStorage.setItem('theme', newTheme);
            if (themeDarkRadio) themeDarkRadio.checked = !isLight;
            if (themeLightRadio) themeLightRadio.checked = isLight;
        });
    }

    // --- Menu and Tab Navigation ---
    function openMenu() { if (slideMenu && menuOverlay) { slideMenu.classList.add('menu-open'); menuOverlay.classList.add('menu-open'); } }
    function closeMenu() { if (slideMenu && menuOverlay) { slideMenu.classList.remove('menu-open'); menuOverlay.classList.remove('menu-open'); } }
    function showTab(targetId) {
        tabContents.forEach(tab => { tab.classList.toggle('active', tab.id === targetId); });
        window.scrollTo(0, 0);
    }
    if (menuToggleBtn) menuToggleBtn.addEventListener('click', openMenu);
    if (closeMenuBtn) closeMenuBtn.addEventListener('click', closeMenu);
    if (menuOverlay) menuOverlay.addEventListener('click', closeMenu);
    if (homeBtn) homeBtn.addEventListener('click', () => { showTab('homeTab'); closeMenu(); });
    if (settingsBtn) settingsBtn.addEventListener('click', () => { showTab('settingsTab'); closeMenu(); });
    if (towBtn) towBtn.addEventListener('click', () => { showTab('towingTab'); closeMenu(); });
    if (fineBtn) fineBtn.addEventListener('click', () => { showTab('fineVehicleTab'); closeMenu(); });
    if (arrestBtn) arrestBtn.addEventListener('click', () => { alert('Arrest guide coming soon!'); closeMenu(); });
    if (importantCmdBtn) importantCmdBtn.addEventListener('click', () => { showTab('importantCmdTab'); closeMenu(); });
    if (aboutBtn) aboutBtn.addEventListener('click', () => { showTab('aboutTab'); closeMenu(); });

    // --- Penal Code Search ---
    if (searchBtn && penalCodeInput) {
        searchBtn.addEventListener('click', () => {
            const raw = penalCodeInput.value;
            const norm = normalize(raw);
            const res = lookup(norm);
            if (res) {
                if(notFound) { notFound.style.display = 'none'; notFound.classList.remove('smooth-show'); }
                if(resultArea) { resultArea.style.display = 'flex'; resultArea.classList.add('smooth-show'); }
                if(starDisplay) starDisplay.textContent = res.stars === '—' ? '🚩' : res.stars;
                if(pcTitle) pcTitle.textContent = 'PC ' + norm;
                if(pcMeta) pcMeta.innerHTML = `<div class="small">Stars: ${res.stars === '—' ? 0 : res.count} &nbsp; • &nbsp; Fine: ${res.fine}</div><div class="small">${res.desc}</div>`;
            } else {
                if(resultArea) { resultArea.style.display = 'none'; resultArea.classList.remove('smooth-show'); }
                if(notFound) { notFound.style.display = 'block'; notFound.classList.add('smooth-show'); }
            }
        });
        penalCodeInput.addEventListener('keydown', e => { if (e.key === 'Enter') searchBtn.click(); });
    }

    // --- Duty Tools ---
     if (startDutyBtn && bodycamArea && endBodycamArea) {
        startDutyBtn.addEventListener('click', () => {
            const savedBadge = localStorage.getItem('badgeNumber');
            if (!savedBadge || savedBadge.trim() === '') { alert('Please set your Badge Number in the Settings tab first!'); showTab('settingsTab'); return; }
            const now = new Date(); const ukTime = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'Europe/London' });
            const text = `${savedBadge} to Dispatch, show me 10-41 at ${ukTime}`;
            navigator.clipboard.writeText(text);
            bodycamArea.style.display = 'block'; bodycamArea.classList.add('smooth-show');
            endBodycamArea.style.display = 'none'; endBodycamArea.classList.remove('smooth-show');
        });
    }
    if (endDutyBtn && endBodycamArea && bodycamArea) {
        endDutyBtn.addEventListener('click', () => {
             const savedBadge = localStorage.getItem('badgeNumber');
            if (!savedBadge || savedBadge.trim() === '') { alert('Please set your Badge Number in the Settings tab first!'); showTab('settingsTab'); return; }
            const now = new Date(); const ukTime = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'Europe/London' });
            const text = `${savedBadge} to Dispatch, show me 10-42 at ${ukTime}`;
            navigator.clipboard.writeText(text);
            endBodycamArea.style.display = 'block'; endBodycamArea.classList.add('smooth-show');
            bodycamArea.style.display = 'none'; bodycamArea.classList.remove('smooth-show');
        });
    }

    // --- Situation Analyzer ---
    if (analyzeBtn && situationInput && analysisList && analysisNotFound && analysisResultArea && analysisSummary) {
        analyzeBtn.addEventListener('click', () => {
            analyzeBtn.disabled = true; analyzeBtn.textContent = 'Analyzing...';
            const text = situationInput.value.trim().toLowerCase();
            const keywords = text.split(/\s+/).filter(k => k.length > 3);
            const matches = []; let totalStars = 0;
            if (keywords.length > 0) {
                for (const code in PC_MAP) {
                    const charge = PC_MAP[code]; const description = charge.desc.toLowerCase();
                    if (keywords.some(keyword => description.includes(keyword))) { matches.push({ code, ...charge }); totalStars += charge.count; }
                }
            }
            analysisList.innerHTML = '';
            if (matches.length > 0) {
                analysisNotFound.style.display = 'none'; analysisNotFound.classList.remove('smooth-show');
                analysisResultArea.style.display = 'block'; analysisResultArea.classList.add('smooth-show');
                analysisSummary.textContent = `Found ${matches.length} matching charges. Total Stars: ${totalStars}`;
                matches.forEach(charge => { /* ... create and append result element ... */ });
            } else {
                analysisResultArea.style.display = 'none'; analysisResultArea.classList.remove('smooth-show');
                analysisNotFound.style.display = 'block'; analysisNotFound.classList.add('smooth-show');
            }
            analyzeBtn.disabled = false; analyzeBtn.textContent = 'Analyze Situation';
        });
    }

    // --- Shift Timer ---
    let shiftTimerInterval = null, shiftStartTime = 0, shiftElapsedTime = 0, isTimerRunning = false;
    function updateTimerDisplay() { if (shiftTimerDisplay) shiftTimerDisplay.textContent = formatTime(shiftElapsedTime); }
    function startTimer() { /* ... start logic ... */ }
    function stopTimer() { /* ... stop logic ... */ }
    if (startTimerBtn) startTimerBtn.addEventListener('click', startTimer);
    if (stopTimerBtn) stopTimerBtn.addEventListener('click', stopTimer);
    updateTimerDisplay();

    // --- Important CMD Button Logic ---
    function hideAllCmdSections() {
        allCmdContentSections.forEach(section => {
            if (section) { section.style.display = 'none'; section.classList.remove('smooth-show'); }
        });
    }
    function setupCmdButton(button, content) {
        if (button && content) {
            button.addEventListener('click', () => {
                const isVisible = content.style.display === 'block';
                hideAllCmdSections();
                if (!isVisible) { content.style.display = 'block'; content.classList.add('smooth-show'); }
            });
        }
    }
    setupCmdButton(cmdLawyerBtn, cmdLawyerContent);
    setupCmdButton(cmdCodeABtn, cmdCodeAContent);
    setupCmdButton(cmdAfterSitBtn, cmdAfterSitContent);
    setupCmdButton(cmdJumpsuitBtn, cmdJumpsuitContent);
    setupCmdButton(cmdPlateVinBtn, cmdPlateVinContent);

    // --- Wizard Setup ---
    function setupWizard(state, containerId, prevBtnId, nextBtnId, counterId, restartBtnId, showStepFunc) {
        const container = document.getElementById(containerId); if (!container) return;
        state.steps = container.querySelectorAll('.wizard-step'); state.totalSteps = state.steps.length; if (state.totalSteps === 0) return;
        state.prevBtn = document.getElementById(prevBtnId); state.nextBtn = document.getElementById(nextBtnId);
        state.counter = document.getElementById(counterId); state.restartBtn = document.getElementById(restartBtnId);
        if (state.prevBtn) state.prevBtn.addEventListener('click', () => { if (state.currentStep > 1) showStepFunc(state.currentStep - 1); });
        if (state.nextBtn) state.nextBtn.addEventListener('click', () => { if (state.currentStep < state.totalSteps) showStepFunc(state.currentStep + 1); });
        if (state.restartBtn) state.restartBtn.addEventListener('click', () => { showStepFunc(1); });
        showStepFunc(1);
    }
    setupWizard(towingWizardState, 'towingWizardContainer', 'prevStepBtn', 'nextStepBtn', 'stepCounter', 'restartWizardBtn', showTowingStep);
    setupWizard(fineVehicleWizardState, 'fineWizardContainer', 'prevFineStepBtn', 'nextFineStepBtn', 'fineStepCounter', 'restartFineWizardBtn', showFineVehicleStep);

    // --- Apply Initial Settings ---
    applySettings();

    // --- Generic Copy Buttons ---
    document.querySelectorAll('.copy-btn[data-target]').forEach(theBtn => {
        theBtn.addEventListener('click', () => {
            const targetId = theBtn.dataset.target; const target = document.getElementById(targetId);
            if (target) {
                navigator.clipboard.writeText(target.textContent);
                const originalText = theBtn.textContent;
                if (originalText.toLowerCase() !== 'copied!') {
                    theBtn.textContent = 'Copied!';
                    setTimeout(() => { theBtn.textContent = originalText; }, 1000);
                }
            } else { console.warn(`Copy target not found: ${targetId}`); }
        });
    });

    console.log("Initialization complete.");

}); // End of DOMContentLoaded

