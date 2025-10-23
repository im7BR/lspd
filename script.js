// --- Penal Code Mapping ---
const PC_MAP = { /* ... Abridged ... */ };

// State objects
const towingWizardState = { /* ... */ };
const fineVehicleWizardState = { /* ... */ };

// --- Helper Functions ---
const normalize = (input) => { /* ... */ };
const lookup = (code) => { /* ... */ };
const formatTime = (seconds) => { /* ... */ };

// --- Wizard Step Display Functions ---
function showTowingStep(stepNumber) { /* ... */ }
function showFineVehicleStep(stepNumber) { /* ... */ }

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

    // Flyout Elements
    const situationsFlyout = document.getElementById('situationsFlyout');
    const situationsToggleBtn = document.getElementById('situationsToggleBtn');
    const lawyerSitBtnFlyout = document.getElementById('lawyerSitBtnFlyout');
    const lawyerCommandsFlyout = document.getElementById('lawyerCommandsFlyout');


    // --- Settings ---
    function applySettings() { /* ... */ }
    function saveSettings() { /* ... */ }
    if (saveSettingsBtn) saveSettingsBtn.addEventListener('click', saveSettings);

    // --- Theme Toggle Button ---
    if (themeToggleBtn) { /* ... listener ... */ }

    // --- Menu and Tab Navigation ---
    function openMenu() { /* ... */ }
    function closeMenu() { /* ... */ }
    function showTab(targetId) { /* ... */ }

    if (menuToggleBtn) menuToggleBtn.addEventListener('click', openMenu);
    // ... (other menu/tab button listeners) ...
    if (aboutBtn) aboutBtn.addEventListener('click', () => { showTab('aboutTab'); closeMenu(); });


    // --- Penal Code Search ---
    if (searchBtn && penalCodeInput) { /* ... listener ... */ }

    // --- Duty Tools ---
     if (startDutyBtn && bodycamArea && endBodycamArea) { /* ... listener ... */ }
     if (endDutyBtn && endBodycamArea && bodycamArea) { /* ... listener ... */ }

    // --- Situation Analyzer ---
    if (analyzeBtn && situationInput) { /* ... listener ... */ }

    // --- Shift Timer ---
    let shiftTimerInterval = null; /* ... timer variables and functions ... */
    if (startTimerBtn) startTimerBtn.addEventListener('click', startTimer);
    if (stopTimerBtn) stopTimerBtn.addEventListener('click', stopTimer);
    updateTimerDisplay(); // Initial display

    // --- Situations Flyout Logic ---
    if (situationsToggleBtn && situationsFlyout) {
        situationsToggleBtn.addEventListener('click', () => {
            situationsFlyout.classList.toggle('flyout-open');
            const isOpen = situationsFlyout.classList.contains('flyout-open');
            situationsToggleBtn.textContent = isOpen ? '>' : '<'; // Toggle arrow
        });
    }

    if (lawyerSitBtnFlyout && lawyerCommandsFlyout) {
        lawyerSitBtnFlyout.addEventListener('click', () => {
            const isVisible = lawyerCommandsFlyout.style.display === 'block';
            lawyerCommandsFlyout.style.display = isVisible ? 'none' : 'block';
             // Apply smooth show animation only when showing
            if (!isVisible) {
                lawyerCommandsFlyout.classList.add('smooth-show');
            } else {
                 lawyerCommandsFlyout.classList.remove('smooth-show');
            }
        });
    }


    // --- Wizard Setup ---
    function setupWizard(state, containerId, prevBtnId, nextBtnId, counterId, restartBtnId, showStepFunc) { /* ... */ }
    setupWizard(towingWizardState, 'towingWizardContainer', 'prevStepBtn', 'nextStepBtn', 'stepCounter', 'restartWizardBtn', showTowingStep);
    setupWizard(fineVehicleWizardState, 'fineWizardContainer', 'prevFineStepBtn', 'nextFineStepBtn', 'fineStepCounter', 'restartFineWizardBtn', showFineVehicleStep);

    // --- Apply Initial Settings ---
    applySettings();

    // --- Generic Copy Buttons (Attach last - important!) ---
    // This needs to select ALL copy buttons, including those now in the flyout
    document.querySelectorAll('.copy-btn').forEach(theBtn => {
        // Check if it has the data-target attribute
        if(theBtn.dataset.target) {
            theBtn.addEventListener('click', () => {
                const targetId = theBtn.dataset.target;
                const target = document.getElementById(targetId);
                if (target) {
                    navigator.clipboard.writeText(target.textContent);
                    const originalText = theBtn.textContent;
                    if (originalText.toLowerCase() !== 'copied!') {
                        theBtn.textContent = 'Copied!';
                        setTimeout(() => { theBtn.textContent = originalText; }, 1000);
                    }
                } else {
                    console.warn(`Copy target not found: ${targetId}`);
                }
            });
        }
    });

    // Home tab is active by default in HTML
    console.log("Initialization complete.");

}); // End of DOMContentLoaded

// --- Global Functions ---
function showTowingStep(stepNumber) { /* ... wizard step logic ... */ }
function showFineVehicleStep(stepNumber) { /* ... wizard step logic ... */ }
function applySettings() { /* ... settings logic ... */ }
// Define helper functions globally if needed
function formatTime(seconds) { const h = Math.floor(seconds / 3600); const m = Math.floor((seconds % 3600) / 60); const s = Math.floor(seconds % 60); return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`; }