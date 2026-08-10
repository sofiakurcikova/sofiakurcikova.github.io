const inspectOrder = ["brief", "signal", "impact"];

const inspectContent = {
  brief: {
    objective:
      "Make the first encounter feel like entry into a living world, then convert that atmosphere into a repeatable social signal.",
    approach:
      "Build recognition around one luminous botanical mark, then let crop, motion, and sound mutate while the core signal remains intact.",
    outputs: "Launch film, short-form assets, modular social system",
    impact: "A distinct world with a recognizable campaign memory structure",
  },
  signal: {
    objective:
      "Give every asset a shared point of recognition without forcing every format into the same composition.",
    approach:
      "Treat the seed mark as a living behavior: it opens, pulses, hides, and reappears across motion, stills, and social crops.",
    outputs: "Signal language, motion behavior, asset adaptation rules",
    impact: "Flexible execution with one unmistakable campaign signature",
  },
  impact: {
    objective:
      "Turn repeated exposure into familiarity while preserving the campaign's mysterious, premium atmosphere.",
    approach:
      "Sequence reveals from intrigue to recognition, allowing the audience to learn the visual code instead of explaining it all at once.",
    outputs: "Phased rollout, recall moments, recognition-led cutdowns",
    impact: "A campaign system designed to accumulate memory over time",
  },
};

const poniVeniSourceNote =
  "Poznámka: Case study dokumentuje môj profesionálny podiel na verejne publikovaných výstupoch vytvorených počas môjho pôsobenia v Poni Veni. Pôvodné kampaňové materiály a prvky značky sú prezentované s uvedením Poni Veni ako pôvodného zdroja.";

const defaultDossierLabels = {
  objective: "Objective / 01",
  approach: "Creative thinking / 02",
  role: "Role",
  outputs: "Outputs",
  impact: "Impact",
};

const selectedDossierLabels = {
  objective: "Brief",
  approach: "Idea",
  role: "My role",
  outputs: "Creative process",
  impact: "Final execution",
};

const caseStudyContent = {
  bridgerton: {
    objective:
      "Podporiť sezónny predaj a zároveň vytvoriť výraznú komunikáciu, ktorá využije aktuálny kultúrny trend, odlíši Poni Veni od bežnej komunikácie v segmente a pritiahne pozornosť publika.",
    approach:
      "Postaviť kampaň na „vlastnom“ svete inšpirovanom estetikou a rozprávačským tónom seriálu Bridgerton, pričom výsledok nebude pôsobiť ako priama imitácia, ale ako sezónne spracovaný jazyk značky Poni Veni.",
    role: "Concept / Creative Direction / Copy",
    outputs:
      "Koncept som rozvíjala cez storytelling, vizuálnu atmosféru a konzistentný systém prvkov. Viktoriánsky styling, rastlinné motívy, maska s logom a tonalita komunikácie vytvorili rozpoznateľný vizuálny aj textový jazyk, ktorý sa dal prirodzene adaptovať do viacerých social formátov.",
    impact:
      "Sezónna social kampaň spracovaná pre feed, stories a formátové adaptácie, ktorá prepojila kultúrny kontext s identitou značky a vytvorila konzistentnú komunikáciu naprieč výstupmi.",
    note: poniVeniSourceNote,
    labels: selectedDossierLabels,
  },
  viral: {
    objective:
      "Využiť prvý apríl na vytvorenie odľahčeného social obsahu, ktorý naruší bežnú produktovú komunikáciu značky a prirodzene pritiahne pozornosť publika.",
    approach:
      "Vytvorila som fiktívnu čemericu „Helleborus Fosforus“ — na prvý pohľad uveriteľný produkt, ktorého absurdnosť sa odhalila až cez detail a humorné copy.",
    role: "Concept / Creative / Copy / AI Visual",
    outputs:
      "Koncept som postavila na kontraste medzi dôveryhodnou produktovou komunikáciou a prvoplánovo nenápadným vtipom. Vizuál vznikol pomocou AI a následne som ho prepojila s názvom produktu, tonalitou značky a copy tak, aby pointa fungovala prirodzene v social feede.",
    impact:
      "April Fools social post kombinujúci AI vizuál, fiktívny produkt a humorný text do jednoduchého formátu, ktorý rozšíril komunikačný jazyk značky o aktuálny a odľahčený obsah.",
    note: poniVeniSourceNote,
    labels: selectedDossierLabels,
  },
  "billboard-fpv": {
    objective:
      "Vytvoriť outdoorovú komunikáciu, ktorá bude okamžite čitateľná, vizuálne výrazná a bude fakultu reprezentovať aj pri rýchlom kontakte vo verejnom priestore.",
    approach:
      "Postaviť billboard na jasnej hierarchii, silnom hlavnom posolstve a vizuále, ktorý funguje aj z väčšej vzdialenosti bez zbytočného informačného preťaženia.",
    role: "Graphic Design / Visual Execution",
    outputs:
      "Prvý návrh vznikol v roku 2025. Pri verzii pre rok 2026 som pracovala so spätnou väzbou od seniorných dizajnérov a upravila kompozíciu, hierarchiu aj množstvo informácií tak, aby bol výsledok čistejší, rýchlejšie čitateľný a funkčnejší.",
    impact:
      "Dve veľkoformátové outdoorové realizácie pre roky 2025 a 2026, ktoré dokumentujú vývoj návrhu a posun smerom k prehľadnejšej a efektívnejšej vizuálnej komunikácii.",
    labels: selectedDossierLabels,
  },
  "award-svoauk": {
    objective:
      "Navrhnúť HORTUCM ako udržateľný komunitný priestor a cez výskum cieľovej skupiny overiť jeho potenciál pre študentov, univerzitu aj jej marketingovú komunikáciu. Projekt prepájal ekologické, technologické a spoločenské princípy.",
    approach:
      "Koncept som postavila na princípoch kvantového marketingu – prepojení emócie, technológie a hodnôt. Maskot Zero, storytelling, QR kódy, AR a IoT prvky pretvorili záhradu z fyzického priestoru na interaktívny zážitok a komunikačný nástroj univerzity.",
    role: "Koncept / výskum cieľovej skupiny / storytelling",
    outputs: "HORTUCM, maskot Zero, QR kódy, AR a IoT prvky",
    impact:
      "Návrh komunitného priestoru prepájajúci udržateľnosť, technológie a marketingovú komunikáciu univerzity.",
  },
  "award-ipma": {
    objective:
      "Zostaviť vlastný projektový tím a počas hackathonu vytvoriť koncept komunitnej záhrady pre novú obytnú štvrť v Trnave, ktorý prepája komunitu, udržateľnosť a digitálne technológie.",
    approach:
      "Tím som zostavila výberom ľudí s rozdielnymi kompetenciami a spoločne sme vytvorili projekt Arboria Hortus – komunitnú záhradu prepojenú s aplikáciou zobrazujúcou LIVE údaje o priestore.",
    role: "Zostavenie a vedenie projektového tímu / koncept",
    outputs: "Arboria Hortus, koncept komunitnej záhrady, návrh LIVE aplikácie",
    impact:
      "Hackathonový návrh prepájajúci komunitu, udržateľnosť a digitálne technológie.",
  },
  "award-dean": {
    objective:
      "Navrhnúť ucelený projekt marketingovej komunikácie komunitnej záhrady UCM, ktorý vychádza z výskumu cieľovej skupiny a prepája projektový manažment, udržateľnosť, komunitný marketing a princípy kvantového marketingu.",
    approach:
      "Záhradu som nevnímala len ako fyzický priestor, ale ako prepojený komunikačný ekosystém. Na základe dát, persón a analýz som vytvorila systém, v ktorom vizuálna identita, maskot Zero, mobilná aplikácia, QR komunikácia, IoT dáta, gamifikácia a online aj offline kampaň fungujú ako jeden konzistentný celok.",
    role: "Výskum / stratégia / projektový manažment / koncept",
    outputs:
      "Marketingový projekt, vizuálna identita, maskot Zero, aplikácia, QR a IoT systém, online a offline kampaň",
    impact:
      "Konzistentný komunikačný ekosystém komunitnej záhrady UCM.",
  },
};

const projectSkillSets = {
  bridgerton: [
    ["sales", "Predaje"],
    ["trend", "Trend"],
    ["identity", "Identita"],
    ["storytelling", "Storytelling"],
  ],
  viral: [
    ["awareness", "Povedomie"],
    ["insight", "Insight"],
    ["identity", "Identita"],
    ["viral", "Viral"],
  ],
  "billboard-fpv": [
    ["identity", "Identita"],
    ["awareness", "Povedomie"],
    ["conversions", "Konverzie"],
    ["visits", "Návštevnosť"],
  ],
  "award-dean": [
    ["quantum", "Kvantový marketing"],
    ["sustainability", "Udržateľnosť"],
    ["awareness", "Povedomie"],
    ["pr", "PR"],
  ],
  "award-svoauk": [
    ["sustainability", "Udržateľnosť"],
    ["awareness", "Povedomie"],
    ["pr", "PR"],
    ["analysis", "Analýzy"],
  ],
  "award-ipma": [
    ["project", "Projekt"],
    ["leadership", "Leadership"],
    ["team", "Tím"],
    ["hackathon", "Hackathon"],
  ],
};

const projectSkillIcons = {
  sales: '<circle cx="6" cy="15.5" r="2.2" /><circle cx="18" cy="8.5" r="2.2" /><path d="M8.2 15.5h3.1c3.9 0 2.1-7 4.5-7M11 12.5l2.5 3-2.5 3" />',
  trend: '<path d="m4 17 5-5 4 3 6.5-8" /><path d="M15.5 7H20v4.5" /><circle cx="4" cy="17" r="1.2" /><circle cx="9" cy="12" r="1.2" />',
  identity: '<path d="M12 3.5c4.4 2.5 6.6 5.3 6.6 8.3 0 3.3-2.6 6.1-6.6 8.7-4-2.6-6.6-5.4-6.6-8.7 0-3 2.2-5.8 6.6-8.3Z" /><path d="M9 13.5c.7-2.9 1.7-5.1 3-6.5 1.3 1.4 2.3 3.6 3 6.5M8.1 16c2.6-1 5.2-1 7.8 0" />',
  storytelling: '<path d="M4.5 6.5c2.8-.8 5.3-.3 7.5 1.4v11c-2.2-1.7-4.7-2.2-7.5-1.4z" /><path d="M19.5 6.5c-2.8-.8-5.3-.3-7.5 1.4v11c2.2-1.7 4.7-2.2 7.5-1.4zM12 4v3.9" />',
  awareness: '<circle cx="12" cy="12" r="3.2" /><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M18.7 5.3l-2.1 2.1M7.4 16.6l-2.1 2.1" />',
  insight: '<path d="M3 12s3.2-5.5 9-5.5 9 5.5 9 5.5-3.2 5.5-9 5.5S3 12 3 12Z" /><circle cx="12" cy="12" r="2.2" /><path d="M18.2 4.2h2.3M19.35 3v2.4" />',
  viral: '<circle cx="12" cy="12" r="2.2" /><circle cx="5" cy="6" r="1.6" /><circle cx="19" cy="5" r="1.6" /><circle cx="5" cy="18" r="1.6" /><circle cx="19" cy="19" r="1.6" /><path d="m10.3 10.6-4-3.4m7.4 3.2 4-4.1m-7.4 7.1-4 3.4m7.4-3.2 4 4.1" />',
  conversions: '<path d="M4 5h16l-6.2 7.2v4.7L10.2 19v-6.8Z" /><path d="m15.8 18 1.8 1.8 3.4-4" />',
  visits: '<path d="M6 20V4h12v16M9 20v-5h6v5" /><circle cx="14.5" cy="10" r=".9" /><path d="M9 8.5h2.5M9 11.5h2.5" />',
  quantum: '<circle cx="12" cy="12" r="1.8" /><ellipse cx="12" cy="12" rx="8.5" ry="3.5" transform="rotate(30 12 12)" /><ellipse cx="12" cy="12" rx="8.5" ry="3.5" transform="rotate(-30 12 12)" />',
  sustainability: '<path d="M12 20v-7M12 13c-4 0-6.5-2.4-6.5-6.5 4.1 0 6.5 2.4 6.5 6.5ZM12 16c0-4.1 2.4-6.5 6.5-6.5 0 4.1-2.4 6.5-6.5 6.5Z" />',
  pr: '<path d="M4 11h3l8-4v10l-8-4H4zM7 13v5h3" /><path d="M18 9c1.2 1.7 1.2 4.3 0 6M20.5 7c2.5 3 2.5 7 0 10" />',
  analysis: '<path d="M4 19V5M4 19h16M7.5 16v-4M11.5 16V8M15.5 16v-6M19.5 16V5" />',
  project: '<circle cx="5" cy="6" r="2" /><circle cx="12" cy="12" r="2" /><circle cx="19" cy="18" r="2" /><path d="M7 6h2c3 0 0 6 3 6s0 6 3 6h2" />',
  leadership: '<path d="M7 20V4m0 1h9l-2 3 2 3H7" /><circle cx="7" cy="20" r="1.5" />',
  team: '<circle cx="12" cy="8" r="2.5" /><circle cx="5.5" cy="10" r="2" /><circle cx="18.5" cy="10" r="2" /><path d="M7.5 19c.5-4 2-6 4.5-6s4 2 4.5 6M2.5 18c.3-3 1.3-4.5 3-4.5 1.1 0 2 .5 2.6 1.5M21.5 18c-.3-3-1.3-4.5-3-4.5-1.1 0-2 .5-2.6 1.5" />',
  hackathon: '<path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" /><path d="M12 2.5v1.8M12 19.7v1.8" />',
};

const body = document.body;
const screen = document.querySelector(".archive-screen");
const dossier = document.querySelector(".mission-dossier");
const announcer = document.querySelector(".state-announcer");
const skillHud = document.querySelector(".skill-hud");
const skillHudEntries = [...skillHud.querySelectorAll(".hud-entry")];
const caseStudyLinks = document.querySelectorAll("[data-case-study]");
const archiveGroups = document.querySelectorAll(".archive-group");
const archiveTriggers = document.querySelectorAll("[data-archive-trigger]");
const archiveCategoryLabel = document.querySelector("[data-archive-category]");
const archiveCurrentLabel = document.querySelector("[data-archive-current]");
const archiveDirectionButtons = document.querySelectorAll("[data-archive-direction]");
const missionTitle = document.querySelector("#mission-title");
const missionType = document.querySelector(".mission-type");
const caseStudyNote = document.querySelector('[data-copy="note"]');
const dossierCopyLabels = Object.fromEntries(
  [...document.querySelectorAll("[data-copy-label]")].map((label) => [label.dataset.copyLabel, label]),
);
const dossierToggle = document.querySelector("[data-dossier-toggle]");
const dossierToggleLabel = document.querySelector("[data-dossier-toggle-label]");
const profileField = document.querySelector(".protagonist-field");
const profileToggle = document.querySelector("[data-profile-toggle]");
const profileToggleLabel = document.querySelector("[data-profile-toggle-label]");
const profileMobileAbility = document.querySelector("[data-profile-mobile-ability]");
const portfolioProgress = document.querySelector(".portfolio-progress");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const finePointer = window.matchMedia("(pointer: fine)");
const mobileViewport = window.matchMedia("(max-width: 699px)");
const contextFields = {
  identity: profileField,
  ability: document.querySelector(".ability-field"),
  mission: document.querySelector(".mission-dossier"),
};

const mobileAbilitySpine = contextFields.ability.querySelector(".attribute-spine").cloneNode(true);
mobileAbilitySpine.removeAttribute("aria-label");
profileMobileAbility.append(mobileAbilitySpine);

let migrationTimer;
let copyTimer;
let wheelLocked = false;
let wheelGestureDelta = 0;
let wheelReleaseTimer;
let touchStartX = 0;
let touchStartY = 0;
let dossierTouchStartX = 0;
let dossierTouchStartY = 0;
let dossierTouchStartScroll = 0;
let profileTouchStartX = 0;
let profileTouchStartY = 0;
let profileTouchStartScroll = 0;
let pointerFrame = null;
const archiveCloseTimers = new WeakMap();

function announce(message) {
  announcer.textContent = message;
}

function updatePortfolioProgress(step, label) {
  const totalSteps = caseStudyLinks.length + 1;
  const activeStep = Math.min(totalSteps, Math.max(1, step));

  portfolioProgress.style.setProperty("--portfolio-progress", `${(activeStep / totalSteps) * 100}%`);
  portfolioProgress.setAttribute("aria-valuemax", String(totalSteps));
  portfolioProgress.setAttribute("aria-valuenow", String(activeStep));
  portfolioProgress.setAttribute("aria-valuetext", label);
}

function setDossierCollapsed(collapsed, options = {}) {
  dossier.classList.toggle("is-collapsed", collapsed);
  body.classList.toggle("is-dossier-collapsed", collapsed);
  dossierToggle.setAttribute("aria-expanded", String(!collapsed));
  dossierToggle.setAttribute("aria-label", collapsed ? "Show project details" : "Hide project details");
  dossierToggleLabel.textContent = collapsed ? "Zobraziť text" : "Skryť text";

  if (collapsed) {
    dossier.scrollTop = 0;
  }

  if (options.announce !== false) {
    announce(collapsed ? "Project details hidden." : "Project details shown.");
  }
}

function setProfileCollapsed(collapsed, options = {}) {
  profileField.classList.toggle("is-collapsed", collapsed);
  body.classList.toggle("is-profile-collapsed", collapsed);
  profileToggle.setAttribute("aria-expanded", String(!collapsed));
  profileToggle.setAttribute("aria-label", collapsed ? "Show profile details" : "Hide profile details");
  profileToggleLabel.textContent = collapsed ? "Zobraziť text" : "Skryť text";

  if (collapsed) {
    profileField.scrollTop = 0;
  }

  if (options.announce !== false) {
    announce(collapsed ? "Profile details hidden." : "Profile details shown.");
  }
}

function syncInteractiveVisibility() {
  Object.entries(contextFields).forEach(([panel, field]) => {
    const hiddenByMobilePanel = mobileViewport.matches && body.dataset.mobilePanel !== panel;
    const hiddenByMode =
      (panel === "mission" && body.dataset.mode === "protagonist") ||
      (panel === "ability" && body.dataset.mode === "mission");
    const hidden = hiddenByMobilePanel || hiddenByMode;
    field.toggleAttribute("inert", hidden);

    if (hidden) {
      field.setAttribute("aria-hidden", "true");
    } else {
      field.removeAttribute("aria-hidden");
    }
  });

  const skillsHidden = body.dataset.mode !== "mission";
  skillHud.toggleAttribute("inert", skillsHidden);
  skillHud.setAttribute("aria-hidden", String(skillsHidden));
}

function setMode(mode, options = {}) {
  if (!['mission', 'protagonist'].includes(mode) || body.dataset.mode === mode) {
    return;
  }

  body.classList.remove("is-migrating");
  window.clearTimeout(migrationTimer);

  if (!prefersReducedMotion.matches) {
    requestAnimationFrame(() => body.classList.add("is-migrating"));
    migrationTimer = window.setTimeout(() => body.classList.remove("is-migrating"), 900);
  }

  body.dataset.mode = mode;

  document.querySelectorAll("[data-mode-target]").forEach((button) => {
    const active = button.dataset.modeTarget === mode;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  if (window.innerWidth < 700 && options.keepPanel !== true) {
    setMobilePanel(mode === "mission" ? "mission" : "identity");
  }

  syncInteractiveVisibility();

  if (mode === "protagonist") {
    archiveGroups.forEach((group) => {
      const trigger = group.querySelector("[data-archive-trigger]");
      const submenu = group.querySelector(".archive-submenu");

      cancelArchiveClose(group);
      group.classList.remove("has-selection", "is-open", "is-dismissed");
      delete group.dataset.mobileMenuOpen;
      delete group.dataset.timedMenu;
      trigger.setAttribute("aria-expanded", "false");
      submenu.setAttribute("aria-hidden", "true");
      submenu.setAttribute("inert", "");
    });

    setProfileCollapsed(false, { announce: false });
    updatePortfolioProgress(1, "Profil");
  }

  announce(`${mode === "mission" ? "Projects" : "Profile"} mode.`);
}

function updateDossierCopy(inspect) {
  const copy = caseStudyContent[body.dataset.caseStudy] || inspectContent[inspect];
  const labels = copy.labels || defaultDossierLabels;

  document.querySelector('[data-copy="objective"]').textContent = copy.objective;
  document.querySelector('[data-copy="approach"]').textContent = copy.approach;
  document.querySelector('[data-copy="role"]').textContent = copy.role || "Concept / direction";
  document.querySelector('[data-copy="outputs"]').textContent = copy.outputs;
  document.querySelector('[data-copy="impact"]').textContent = copy.impact;

  Object.entries(labels).forEach(([key, value]) => {
    dossierCopyLabels[key].textContent = value;
  });

  dossier.classList.toggle("is-longform", copy.labels === selectedDossierLabels);
  caseStudyNote.textContent = copy.note || "";
  caseStudyNote.hidden = !copy.note;
}

function updateProjectSkills(caseStudy) {
  const skills = projectSkillSets[caseStudy] || projectSkillSets.bridgerton;

  skillHudEntries.forEach((entry, index) => {
    const [icon, label] = skills[index];
    entry.dataset.skillKey = icon;
    entry.querySelector("svg").innerHTML = projectSkillIcons[icon];
    entry.querySelector(".hud-label").textContent = label;
  });

  skillHud.setAttribute("aria-label", `Projektové signály: ${skills.map(([, label]) => label).join(", ")}`);
}

function setInspect(inspect, options = {}) {
  if (!inspectOrder.includes(inspect)) {
    return;
  }

  const unchanged = body.dataset.inspect === inspect;
  body.dataset.inspect = inspect;

  document.querySelectorAll("[data-inspect-target]").forEach((button) => {
    const active = button.dataset.inspectTarget === inspect;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  document.querySelectorAll("[data-screen-state]").forEach((state) => {
    const active = state.dataset.screenState === inspect;
    state.classList.toggle("is-active", active);
    state.setAttribute("aria-hidden", String(!active));
  });

  if (!unchanged && !prefersReducedMotion.matches) {
    dossier.classList.add("is-updating");
    window.clearTimeout(copyTimer);
    copyTimer = window.setTimeout(() => {
      updateDossierCopy(inspect);
      dossier.classList.remove("is-updating");
    }, 170);
  } else {
    updateDossierCopy(inspect);
  }

  if (options.switchMode !== false && body.dataset.mode !== "mission") {
    setMode("mission", { keepPanel: true });
  }

  if (body.dataset.mode === "mission") {
    announce(`Projects mode. ${inspect} inspection selected.`);
  } else {
    announce("Profile mode.");
  }
}

function moveInspect(direction) {
  const currentIndex = inspectOrder.indexOf(body.dataset.inspect);
  const nextIndex = Math.min(inspectOrder.length - 1, Math.max(0, currentIndex + direction));

  if (nextIndex !== currentIndex) {
    setInspect(inspectOrder[nextIndex]);
    return true;
  }

  return false;
}

function setArchiveMenu(trigger, open, options = {}) {
  const targetGroup = trigger.closest(".archive-group");

  if (open) {
    if (targetGroup.dataset.timedMenu !== "true") {
      cancelArchiveClose(targetGroup);
    }
  } else {
    cancelArchiveClose(targetGroup);
    delete targetGroup.dataset.timedMenu;
  }

  archiveGroups.forEach((group) => {
    const groupTrigger = group.querySelector("[data-archive-trigger]");
    const submenu = group.querySelector(".archive-submenu");

    if (!open && groupTrigger !== trigger) {
      return;
    }

    const active = groupTrigger === trigger && open;

    group.classList.toggle("is-open", active);
    if (!active) {
      delete group.dataset.mobileMenuOpen;
    }
    groupTrigger.setAttribute("aria-expanded", String(active));
    submenu.toggleAttribute("inert", !active);
    submenu.setAttribute("aria-hidden", String(!active));
  });

  if (open && options.announce !== false) {
    announce(`${trigger.querySelector(".hud-label-short").textContent} menu opened.`);
  }
}

function cancelArchiveClose(group) {
  const closeTimer = archiveCloseTimers.get(group);

  if (closeTimer) {
    window.clearTimeout(closeTimer);
    archiveCloseTimers.delete(group);
  }
}

function scheduleArchiveClose(group, trigger, options = {}) {
  const { delay = 520, force = false } = options;

  if (!force && group.dataset.timedMenu === "true") {
    return;
  }

  cancelArchiveClose(group);

  const closeTimer = window.setTimeout(() => {
    if (force || !group.contains(document.activeElement)) {
      delete group.dataset.timedMenu;
      setArchiveMenu(trigger, false, { announce: false });
    }

    archiveCloseTimers.delete(group);
  }, delay);

  archiveCloseTimers.set(group, closeTimer);
}

function updateArchiveNavigator(link) {
  const entries = [...caseStudyLinks];
  const entryIndex = entries.indexOf(link);
  const group = link.closest(".archive-group");
  const groupEntries = [...group.querySelectorAll("[data-case-study]")];
  const groupIndex = groupEntries.indexOf(link);
  const category = group.querySelector(".archive-submenu-title").textContent.split("/")[0].trim();

  archiveCategoryLabel.textContent = `${category} ${String(groupIndex + 1).padStart(2, "0")}/${String(groupEntries.length).padStart(2, "0")}`;
  archiveCurrentLabel.textContent = link.dataset.hudLabel;
  updatePortfolioProgress(entryIndex + 2, `${category}: ${link.dataset.hudLabel}`);

  archiveDirectionButtons.forEach((button) => {
    const direction = Number(button.dataset.archiveDirection);
    const disabled = direction < 0 ? entryIndex === 0 : entryIndex === entries.length - 1;
    button.disabled = disabled;
    button.setAttribute("aria-disabled", String(disabled));
  });
}

function setCaseStudy(link, options = {}) {
  caseStudyLinks.forEach((caseLink) => {
    const active = caseLink === link;
    caseLink.classList.toggle("is-active", active);

    if (active) {
      caseLink.setAttribute("aria-current", "location");
    } else {
      caseLink.removeAttribute("aria-current");
    }
  });

  archiveGroups.forEach((group) => {
    group.classList.toggle("has-selection", group.contains(link));
  });

  body.dataset.caseStudy = link.dataset.caseStudy;
  updateArchiveNavigator(link);

  if (body.dataset.mode !== "mission") {
    setMode("mission");
  }

  if (mobileViewport.matches) {
    setMobilePanel("mission");
  }

  const group = link.closest(".archive-group");
  const trigger = group.querySelector("[data-archive-trigger]");
  const category = group.querySelector(".archive-submenu-title").textContent.split("/")[0].trim();

  missionTitle.textContent = link.dataset.hudLabel;
  missionType.textContent = `${category} / Selected record`;
  updateDossierCopy(body.dataset.inspect);
  updateProjectSkills(link.dataset.caseStudy);
  setDossierCollapsed(false, { announce: false });

  if (options.keepMenuVisible) {
    setArchiveMenu(trigger, true, { announce: false });
    group.dataset.timedMenu = "true";
    scheduleArchiveClose(group, trigger, { delay: 2000, force: true });
  } else {
    setArchiveMenu(trigger, false, { announce: false });
  }

  announce(`${link.dataset.hudLabel} archive entry selected.`);
}

function moveArchive(direction) {
  const entries = [...caseStudyLinks];
  const activeIndex = entries.findIndex((link) => link.classList.contains("is-active"));
  const nextIndex = activeIndex < 0
    ? (direction > 0 ? 0 : entries.length - 1)
    : Math.min(entries.length - 1, Math.max(0, activeIndex + direction));

  if (nextIndex === activeIndex) {
    return;
  }

  const nextLink = entries[nextIndex];

  window.history.pushState(null, "", `#${nextLink.id}`);
  setCaseStudy(nextLink);
}

function syncCaseStudyFromHash() {
  const selectedLink = [...caseStudyLinks].find((link) => link.id === window.location.hash.slice(1));

  if (selectedLink) {
    const group = selectedLink.closest(".archive-group");
    setCaseStudy(selectedLink, { keepMenuVisible: group.dataset.timedMenu === "true" });
  }
}

function setMobilePanel(panel) {
  if (!['identity', 'ability', 'mission'].includes(panel)) {
    return;
  }

  body.dataset.mobilePanel = panel;
  document.querySelectorAll("[data-panel-target]").forEach((button) => {
    const active = button.dataset.panelTarget === panel;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  syncInteractiveVisibility();
}

document.querySelectorAll("[data-mode-target]").forEach((button) => {
  button.addEventListener("click", () => setMode(button.dataset.modeTarget));
});

document.querySelectorAll("[data-inspect-target]").forEach((button) => {
  button.addEventListener("click", () => setInspect(button.dataset.inspectTarget));
});

archiveGroups.forEach((group) => {
  const trigger = group.querySelector("[data-archive-trigger]");

  group.addEventListener("pointerenter", () => {
    if (finePointer.matches) {
      cancelArchiveClose(group);
      setArchiveMenu(trigger, true, { announce: false });
    }
  });

  group.addEventListener("pointerleave", () => {
    group.classList.remove("is-dismissed");

    if (finePointer.matches && !group.contains(document.activeElement)) {
      scheduleArchiveClose(group, trigger);
    }
  });

  group.addEventListener("focusin", () => {
    cancelArchiveClose(group);
    setArchiveMenu(trigger, true, { announce: false });
  });
  group.addEventListener("focusout", (event) => {
    if (!group.contains(event.relatedTarget)) {
      scheduleArchiveClose(group, trigger);
    }
  });
});

archiveTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const group = trigger.closest(".archive-group");
    const firstLink = group.querySelector("[data-case-study]");

    delete group.dataset.timedMenu;
    group.classList.remove("is-dismissed");

    if (!firstLink) {
      return;
    }

    window.history.pushState(null, "", `#${firstLink.id}`);
    setCaseStudy(firstLink);
    setArchiveMenu(trigger, true, { announce: false });

    if (mobileViewport.matches) {
      group.dataset.mobileMenuOpen = "true";
    }
  });

  trigger.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setArchiveMenu(trigger, false, { announce: false });
      trigger.focus();
    }
  });
});

function prepareCaseStudyNavigation(link, { keyboard = false } = {}) {
  const group = link.closest(".archive-group");
  const trigger = group.querySelector("[data-archive-trigger]");
  const unchanged = window.location.hash === link.hash;

  window.setTimeout(() => {
    group.classList.add("is-dismissed");

    if (keyboard) {
      trigger.focus({ preventScroll: true });
    } else {
      link.blur();
    }

    setArchiveMenu(trigger, false, { announce: false });

    if (unchanged) {
      setCaseStudy(link);
    }
  }, 0);
}

caseStudyLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    prepareCaseStudyNavigation(link, { keyboard: event.detail === 0 });
  });

  link.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      const trigger = link.closest(".archive-group").querySelector("[data-archive-trigger]");
      setArchiveMenu(trigger, false, { announce: false });
      trigger.focus();
    }
  });
});

archiveDirectionButtons.forEach((button) => {
  button.addEventListener("click", () => moveArchive(Number(button.dataset.archiveDirection)));
});

dossierToggle.addEventListener("click", () => {
  setDossierCollapsed(!dossier.classList.contains("is-collapsed"));
});

profileToggle.addEventListener("click", () => {
  setProfileCollapsed(!profileField.classList.contains("is-collapsed"));
});

profileField.addEventListener(
  "touchstart",
  (event) => {
    profileTouchStartX = event.changedTouches[0].clientX;
    profileTouchStartY = event.changedTouches[0].clientY;
    profileTouchStartScroll = profileField.scrollTop;
  },
  { passive: true },
);

profileField.addEventListener(
  "touchend",
  (event) => {
    if (
      !mobileViewport.matches ||
      body.dataset.mode !== "protagonist" ||
      body.dataset.mobilePanel !== "identity"
    ) {
      return;
    }

    const deltaX = event.changedTouches[0].clientX - profileTouchStartX;
    const deltaY = event.changedTouches[0].clientY - profileTouchStartY;

    if (Math.abs(deltaY) < 48 || Math.abs(deltaY) <= Math.abs(deltaX) * 1.2) {
      return;
    }

    if (
      deltaY > 0 &&
      profileTouchStartScroll <= 4 &&
      !profileField.classList.contains("is-collapsed")
    ) {
      setProfileCollapsed(true);
    } else if (deltaY < 0 && profileField.classList.contains("is-collapsed")) {
      setProfileCollapsed(false);
    }
  },
  { passive: true },
);

dossier.addEventListener(
  "touchstart",
  (event) => {
    dossierTouchStartX = event.changedTouches[0].clientX;
    dossierTouchStartY = event.changedTouches[0].clientY;
    dossierTouchStartScroll = dossier.scrollTop;
  },
  { passive: true },
);

dossier.addEventListener(
  "touchend",
  (event) => {
    if (!mobileViewport.matches || body.dataset.mode !== "mission") {
      return;
    }

    const deltaX = event.changedTouches[0].clientX - dossierTouchStartX;
    const deltaY = event.changedTouches[0].clientY - dossierTouchStartY;

    if (Math.abs(deltaY) < 48 || Math.abs(deltaY) <= Math.abs(deltaX) * 1.2) {
      return;
    }

    if (deltaY > 0 && dossierTouchStartScroll <= 4 && !dossier.classList.contains("is-collapsed")) {
      setDossierCollapsed(true);
    } else if (deltaY < 0 && dossier.classList.contains("is-collapsed")) {
      setDossierCollapsed(false);
    }
  },
  { passive: true },
);

screen.addEventListener(
  "wheel",
  (event) => {
    const scrollableDossier = event.target.closest(".mission-dossier");

    if (
      mobileViewport.matches &&
      scrollableDossier &&
      scrollableDossier.scrollHeight > scrollableDossier.clientHeight
    ) {
      return;
    }

    event.preventDefault();

    window.clearTimeout(wheelReleaseTimer);
    wheelReleaseTimer = window.setTimeout(() => {
      wheelLocked = false;
      wheelGestureDelta = 0;
    }, 200);

    if (wheelLocked) {
      return;
    }

    const deltaMultiplier =
      event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? window.innerHeight : 1;
    wheelGestureDelta += event.deltaY * deltaMultiplier;

    if (Math.abs(wheelGestureDelta) < 28) {
      return;
    }

    wheelLocked = true;
    const direction = wheelGestureDelta > 0 ? 1 : -1;
    wheelGestureDelta = 0;

    moveArchive(direction);
  },
  { passive: false },
);

document.addEventListener("keydown", (event) => {
  const scrollableDossier = event.target.closest(".mission-dossier");

  if (
    mobileViewport.matches &&
    scrollableDossier &&
    scrollableDossier.scrollHeight > scrollableDossier.clientHeight &&
    ["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End"].includes(event.key)
  ) {
    event.preventDefault();
    const behavior = prefersReducedMotion.matches ? "auto" : "smooth";

    if (event.key === "Home" || event.key === "End") {
      scrollableDossier.scrollTo({
        top: event.key === "Home" ? 0 : scrollableDossier.scrollHeight,
        behavior,
      });
    } else {
      const direction = ["ArrowUp", "PageUp"].includes(event.key) ? -1 : 1;
      const distance = event.key.startsWith("Page") ? scrollableDossier.clientHeight * 0.8 : 44;
      scrollableDossier.scrollBy({ top: direction * distance, behavior });
    }

    return;
  }

  const interactive = event.target.closest("button, a");

  if (interactive && !["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)) {
    return;
  }

  if (event.key === "1") {
    setMode("protagonist");
  } else if (event.key === "2") {
    setMode("mission");
  } else if (event.key === "ArrowLeft") {
    event.preventDefault();
    moveArchive(-1);
  } else if (event.key === "ArrowRight") {
    event.preventDefault();
    moveArchive(1);
  } else if (event.key === "ArrowUp") {
    event.preventDefault();
    setMode("protagonist");
  } else if (event.key === "ArrowDown") {
    event.preventDefault();
    setMode("mission");
  }
});

screen.addEventListener(
  "touchstart",
  (event) => {
    touchStartX = event.changedTouches[0].clientX;
    touchStartY = event.changedTouches[0].clientY;
  },
  { passive: true },
);

screen.addEventListener(
  "touchend",
  (event) => {
    const deltaX = event.changedTouches[0].clientX - touchStartX;
    const deltaY = event.changedTouches[0].clientY - touchStartY;

    if (Math.abs(deltaX) > 48 && Math.abs(deltaX) > Math.abs(deltaY)) {
      moveArchive(deltaX < 0 ? 1 : -1);
    }
  },
  { passive: true },
);

screen.addEventListener("pointermove", (event) => {
  if (!finePointer.matches || prefersReducedMotion.matches || pointerFrame) {
    return;
  }

  pointerFrame = requestAnimationFrame(() => {
    const x = (event.clientX / window.innerWidth - 0.5) * 9;
    const y = (event.clientY / window.innerHeight - 0.5) * 7;
    document.documentElement.style.setProperty("--pointer-x", `${x}px`);
    document.documentElement.style.setProperty("--pointer-y", `${y}px`);
    pointerFrame = null;
  });
});

screen.addEventListener("pointerleave", () => {
  document.documentElement.style.setProperty("--pointer-x", "0px");
  document.documentElement.style.setProperty("--pointer-y", "0px");
});

prefersReducedMotion.addEventListener("change", () => {
  body.classList.remove("is-migrating");
});

mobileViewport.addEventListener("change", syncInteractiveVisibility);
window.addEventListener("hashchange", syncCaseStudyFromHash);

setInspect(body.dataset.inspect, { switchMode: false });
setMobilePanel("identity");
updatePortfolioProgress(1, "Profil");

if (window.location.hash) {
  window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
}
