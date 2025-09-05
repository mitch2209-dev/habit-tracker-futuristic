// Application Data with Goals and Identity-Based Structure
let appData = {
  "user": {
    "name": "Alex",
    "level": 7,
    "totalXP": 6350,
    "currentXP": 350,
    "xpToNext": 650,
    "totalHabits": 12,
    "totalGoals": 4,
    "completedToday": 4,
    "currentStreak": 8,
    "longestStreak": 23,
    "identityScore": 76
  },
  "goals": [
    {
      "id": 1,
      "title": "Körperliche Gesundheit",
      "description": "Ein starker, energiegeladener und vitaler Mensch werden",
      "category": "Gesundheit",
      "identityStatement": "Ich bin jemand, der seinen Körper respektiert und pflegt",
      "systemDescription": "Tägliche Bewegung, bewusste Ernährung und ausreichend Erholung",
      "targetDate": "2026-01-01",
      "priority": "high",
      "status": "active",
      "relatedHabits": [3, 6],
      "completionRate": 78,
      "totalXP": 890,
      "currentStreak": 12,
      "color": "#10B981",
      "icon": "💪"
    },
    {
      "id": 2,
      "title": "Persönliche Entwicklung",
      "description": "Ein wissbegieriger und reflektierter Mensch werden",
      "category": "Bildung",
      "identityStatement": "Ich bin jemand, der kontinuierlich lernt und wächst",
      "systemDescription": "Tägliches Lesen, Reflexion und Wissenserweiterung",
      "targetDate": "2025-12-31",
      "priority": "high",
      "status": "active", 
      "relatedHabits": [2, 5],
      "completionRate": 85,
      "totalXP": 1240,
      "currentStreak": 8,
      "color": "#8B5CF6",
      "icon": "📚"
    },
    {
      "id": 3,
      "title": "Innere Ruhe",
      "description": "Ein ausgeglichener und achtsamer Mensch werden",
      "category": "Wellness",
      "identityStatement": "Ich bin jemand, der in Ruhe und Achtsamkeit lebt",
      "systemDescription": "Tägliche Meditation und bewusste Dankbarkeit",
      "targetDate": "2025-11-30",
      "priority": "medium",
      "status": "active",
      "relatedHabits": [1, 5],
      "completionRate": 92,
      "totalXP": 1580,
      "currentStreak": 15,
      "color": "#06B6D4",
      "icon": "🧘"
    },
    {
      "id": 4,
      "title": "Organisierte Umgebung",
      "description": "Ein ordentlicher und systematischer Mensch werden", 
      "category": "Lifestyle",
      "identityStatement": "Ich bin jemand, der Ordnung und Struktur schätzt",
      "systemDescription": "Tägliches Aufräumen und systematische Organisation",
      "targetDate": "2025-10-31",
      "priority": "low",
      "status": "active",
      "relatedHabits": [4],
      "completionRate": 45,
      "totalXP": 320,
      "currentStreak": 3,
      "color": "#F59E0B",
      "icon": "🏠"
    }
  ],
  "habits": [
    {
      "id": 1,
      "title": "Morgendliche Meditation",
      "description": "2 Minuten bewusst atmen",
      "category": "Wellness",
      "frequency": "daily",
      "xpValue": 25,
      "currentStreak": 8,
      "completedToday": false,
      "color": "#4F46E5",
      "twoMinuteVersion": "Setze dich für 2 Minuten hin und atme bewusst",
      "parentGoalId": 3,
      "contributionWeight": 0.8,
      "identityAlignment": 95
    },
    {
      "id": 2,
      "title": "Lesen",
      "description": "Eine Seite in einem Buch lesen",
      "category": "Bildung",
      "frequency": "daily",
      "xpValue": 30,
      "currentStreak": 5,
      "completedToday": true,
      "color": "#059669",
      "twoMinuteVersion": "Lies nur eine Seite - das dauert unter 2 Minuten",
      "parentGoalId": 2,
      "contributionWeight": 0.9,
      "identityAlignment": 88
    },
    {
      "id": 3,
      "title": "Wasser trinken",
      "description": "Ein Glas Wasser trinken",
      "category": "Gesundheit",
      "frequency": "daily",
      "xpValue": 15,
      "currentStreak": 12,
      "completedToday": true,
      "color": "#0EA5E9",
      "twoMinuteVersion": "Trinke einfach ein Glas Wasser",
      "parentGoalId": 1,
      "contributionWeight": 0.4,
      "identityAlignment": 70
    },
    {
      "id": 4,
      "title": "Aufräumen",
      "description": "Einen Gegenstand wegräumen",
      "category": "Haushalt",
      "frequency": "daily",
      "xpValue": 20,
      "currentStreak": 3,
      "completedToday": false,
      "color": "#DC2626",
      "twoMinuteVersion": "Räume nur einen einzigen Gegenstand weg",
      "parentGoalId": 4,
      "contributionWeight": 1.0,
      "identityAlignment": 82
    },
    {
      "id": 5,
      "title": "Dankbarkeit",
      "description": "Eine Sache notieren, für die ich dankbar bin",
      "category": "Wellness",
      "frequency": "daily",
      "xpValue": 25,
      "currentStreak": 6,
      "completedToday": true,
      "color": "#7C3AED",
      "twoMinuteVersion": "Schreibe nur eine Sache auf, für die du dankbar bist",
      "parentGoalId": 3,
      "contributionWeight": 0.6,
      "identityAlignment": 91
    },
    {
      "id": 6,
      "title": "Spaziergang",
      "description": "5 Minuten draußen gehen",
      "category": "Fitness",
      "frequency": "daily",
      "xpValue": 35,
      "currentStreak": 4,
      "completedToday": false,
      "color": "#059669",
      "twoMinuteVersion": "Gehe nur bis zur Haustür und wieder zurück",
      "parentGoalId": 1,
      "contributionWeight": 0.7,
      "identityAlignment": 85
    }
  ],
  "achievements": [
    {
      "id": 1,
      "title": "Erste Schritte",
      "description": "Erste Gewohnheit abgeschlossen",
      "icon": "🌟",
      "earned": true,
      "earnedDate": "2025-08-15",
      "type": "habit"
    },
    {
      "id": 2,
      "title": "Identity Builder",
      "description": "Erstes Ziel mit Identity Statement erstellt",
      "icon": "🎭",
      "earned": true,
      "earnedDate": "2025-08-20",
      "type": "identity"
    },
    {
      "id": 3,
      "title": "Systems Thinker",
      "description": "Alle Gewohnheiten einem Ziel zugeordnet",
      "icon": "⚙️",
      "earned": true,
      "earnedDate": "2025-08-25",
      "type": "system"
    },
    {
      "id": 4,
      "title": "Identity Master",
      "description": "90% Identity Alignment erreicht",
      "icon": "👑",
      "earned": false,
      "type": "identity"
    }
  ],
  "identityInsights": [
    {
      "statement": "Du handelst wie jemand, der kontinuierlich lernt und wächst",
      "evidence": "5 Tage Lese-Streak + regelmäßige Dankbarkeits-Reflexion",
      "strength": 88
    },
    {
      "statement": "Du lebst wie jemand, der in Ruhe und Achtsamkeit lebt", 
      "evidence": "15 Tage Meditations-Streak + tägliche Dankbarkeit",
      "strength": 95
    },
    {
      "statement": "Du verhältst dich wie jemand, der seinen Körper respektiert",
      "evidence": "Regelmäßiges Wasser trinken + gelegentliche Spaziergänge",
      "strength": 65
    }
  ],
  "weeklyProgress": [
    {"day": "Mo", "completed": 5, "total": 6, "goalProgress": {"1": 0.8, "2": 1.0, "3": 1.0, "4": 0.0}},
    {"day": "Di", "completed": 6, "total": 6, "goalProgress": {"1": 1.0, "2": 1.0, "3": 1.0, "4": 1.0}},
    {"day": "Mi", "completed": 4, "total": 6, "goalProgress": {"1": 0.5, "2": 1.0, "3": 1.0, "4": 0.0}},
    {"day": "Do", "completed": 6, "total": 6, "goalProgress": {"1": 1.0, "2": 1.0, "3": 1.0, "4": 1.0}},
    {"day": "Fr", "completed": 5, "total": 6, "goalProgress": {"1": 1.0, "2": 1.0, "3": 1.0, "4": 0.0}},
    {"day": "Sa", "completed": 3, "total": 6, "goalProgress": {"1": 0.5, "2": 0.0, "3": 1.0, "4": 0.0}},
    {"day": "So", "completed": 6, "total": 6, "goalProgress": {"1": 1.0, "2": 1.0, "3": 1.0, "4": 1.0}}
  ]
};

// Chart instances
let goalProgressChart = null;
let xpChart = null;
let identityChart = null;

// Wizard state
let currentWizardStep = 1;
let maxWizardSteps = 3;

// Application initialization
document.addEventListener('DOMContentLoaded', function() {
  console.log('Goals & Systems App initializing...');
  initializeApp();
  setupEventListeners();
  updateDashboard();
  renderGoals();
  renderGroupedHabits();
  renderAllHabits();
  renderIdentityInsights();
});

function initializeApp() {
  console.log('Initializing app...');
  
  // Update user info
  document.getElementById('user-level').textContent = appData.user.level;
  document.getElementById('current-streak').textContent = appData.user.currentStreak;
  document.getElementById('current-xp').textContent = appData.user.currentXP;
  document.getElementById('xp-to-next').textContent = appData.user.xpToNext;
  document.getElementById('total-xp').textContent = appData.user.totalXP;
  document.getElementById('total-goals').textContent = appData.user.totalGoals;
  
  // Update identity scores
  document.getElementById('identity-score').textContent = appData.user.identityScore;
  document.getElementById('identity-score-large').textContent = appData.user.identityScore;
  
  // Update XP progress bar
  const progressPercentage = (appData.user.currentXP / 1000) * 100;
  document.querySelector('.xp-bar').style.width = `${progressPercentage}%`;
  
  // Update completed today count
  const completedToday = appData.habits.filter(h => h.completedToday).length;
  document.getElementById('completed-today').textContent = completedToday;
}

function setupEventListeners() {
  console.log('Setting up event listeners...');
  
  // Navigation
  const navButtons = document.querySelectorAll('.nav-btn');
  navButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const viewName = this.getAttribute('data-view');
      switchView(viewName);
    });
  });
  
  // Goal creation buttons
  document.getElementById('add-goal-btn')?.addEventListener('click', openGoalModal);
  document.getElementById('add-goal-btn-alt')?.addEventListener('click', openGoalModal);
  
  // Habit creation button
  document.getElementById('add-habit-btn')?.addEventListener('click', openHabitModal);
  
  // Modal close buttons
  document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', closeModals);
  });
  
  // Modal overlay close
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', closeModals);
  });
  
  // Goal form submission
  const goalForm = document.getElementById('goal-form');
  if (goalForm) {
    goalForm.addEventListener('submit', handleGoalSubmission);
  }
  
  // Habit form submission
  const habitForm = document.getElementById('habit-form');
  if (habitForm) {
    habitForm.addEventListener('submit', handleHabitSubmission);
  }
  
  // Goal wizard navigation
  document.getElementById('wizard-next')?.addEventListener('click', nextWizardStep);
  document.getElementById('wizard-prev')?.addEventListener('click', prevWizardStep);
  document.getElementById('wizard-submit')?.addEventListener('click', submitGoalForm);
}

function switchView(viewName) {
  console.log('Switching to view:', viewName);
  
  // Update nav buttons
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  
  const activeNavBtn = document.querySelector(`[data-view="${viewName}"]`);
  if (activeNavBtn) {
    activeNavBtn.classList.add('active');
  }
  
  // Update views
  document.querySelectorAll('.view').forEach(view => {
    view.classList.remove('active');
  });
  
  const targetView = document.getElementById(viewName);
  if (targetView) {
    targetView.classList.add('active');
  }
  
  // Initialize specific view content
  if (viewName === 'analytics') {
    setTimeout(() => {
      initializeCharts();
    }, 100);
  } else if (viewName === 'goals') {
    renderAllGoals();
  } else if (viewName === 'identity') {
    setTimeout(() => {
      initializeIdentityChart();
    }, 100);
  }
}

function renderGoals() {
  const goalsGrid = document.getElementById('goals-grid');
  if (!goalsGrid) return;
  
  goalsGrid.innerHTML = '';
  
  appData.goals.forEach(goal => {
    const goalCard = createGoalCard(goal);
    goalsGrid.appendChild(goalCard);
  });
}

function renderAllGoals() {
  const allGoalsList = document.getElementById('all-goals-list');
  if (!allGoalsList) return;
  
  allGoalsList.innerHTML = '';
  
  appData.goals.forEach(goal => {
    const goalCard = createGoalCard(goal, true);
    allGoalsList.appendChild(goalCard);
  });
}

function createGoalCard(goal, detailed = false) {
  const card = document.createElement('div');
  card.className = 'goal-card';
  card.style.setProperty('--goal-color', goal.color);
  
  card.innerHTML = `
    <div class="goal-header">
      <span class="goal-icon">${goal.icon}</span>
      <h4 class="goal-title">${goal.title}</h4>
    </div>
    <p class="goal-identity">"${goal.identityStatement}"</p>
    ${detailed ? `<p class="goal-description">${goal.description}</p>` : ''}
    <div class="goal-progress">
      <div class="goal-progress-bar">
        <div class="goal-progress-fill" style="width: ${goal.completionRate}%"></div>
      </div>
      <div class="goal-progress-text">${goal.completionRate}% Fortschritt</div>
    </div>
    <div class="goal-meta">
      <span class="goal-streak">🔥 ${goal.currentStreak} Tage</span>
      <span class="goal-xp">${goal.totalXP} XP</span>
    </div>
  `;
  
  // Add click listener to open goal detail modal
  card.addEventListener('click', () => openGoalDetail(goal));
  
  return card;
}

function renderGroupedHabits() {
  const groupedHabitsContainer = document.getElementById('grouped-habits-list');
  if (!groupedHabitsContainer) return;
  
  groupedHabitsContainer.innerHTML = '';
  
  // Group habits by goals
  appData.goals.forEach(goal => {
    const goalHabits = appData.habits.filter(habit => habit.parentGoalId === goal.id);
    
    if (goalHabits.length > 0) {
      const groupElement = createGoalHabitGroup(goal, goalHabits);
      groupedHabitsContainer.appendChild(groupElement);
    }
  });
  
  // Add ungrouped habits
  const ungroupedHabits = appData.habits.filter(habit => !habit.parentGoalId);
  if (ungroupedHabits.length > 0) {
    const ungroupedElement = createGoalHabitGroup(
      { title: 'Einzelne Gewohnheiten', icon: '📝', color: '#6B7280' },
      ungroupedHabits
    );
    groupedHabitsContainer.appendChild(ungroupedElement);
  }
}

function createGoalHabitGroup(goal, habits) {
  const group = document.createElement('div');
  group.className = 'goal-habit-group';
  group.style.setProperty('--goal-color', goal.color);
  
  const completedCount = habits.filter(h => h.completedToday).length;
  
  group.innerHTML = `
    <div class="goal-habit-header">
      <h4 class="goal-habit-title">
        <span class="goal-icon">${goal.icon}</span>
        ${goal.title}
      </h4>
      <span class="goal-habit-progress">${completedCount}/${habits.length}</span>
    </div>
    <div class="goal-habits-list">
      ${habits.map(habit => createHabitCardHTML(habit)).join('')}
    </div>
  `;
  
  // Add event listeners for habit completion buttons
  const completeButtons = group.querySelectorAll('.habit-complete-btn');
  completeButtons.forEach(btn => {
    const habitId = parseInt(btn.dataset.habitId);
    btn.addEventListener('click', () => toggleHabitCompletion(habitId));
  });
  
  return group;
}

function renderAllHabits() {
  const habitsList = document.getElementById('all-habits-list');
  if (!habitsList) return;
  
  habitsList.innerHTML = '';
  
  appData.habits.forEach(habit => {
    const habitCard = createDetailedHabitCard(habit);
    habitsList.appendChild(habitCard);
  });
}

function createHabitCardHTML(habit) {
  const completedClass = habit.completedToday ? 'completed' : '';
  const completedIcon = habit.completedToday ? '✓' : '';
  
  return `
    <div class="habit-card" style="--habit-color: ${habit.color}">
      <div class="habit-info">
        <h4 class="habit-title">${habit.title}</h4>
        <p class="habit-description">${habit.description}</p>
        <div class="habit-meta">
          <span class="habit-streak">🔥 ${habit.currentStreak} Tage</span>
        </div>
      </div>
      <div class="habit-actions">
        <span class="habit-xp">+${habit.xpValue} XP</span>
        <button class="habit-complete-btn ${completedClass}" data-habit-id="${habit.id}">
          ${completedIcon}
        </button>
      </div>
    </div>
  `;
}

function createDetailedHabitCard(habit) {
  const card = document.createElement('div');
  card.className = 'habit-card';
  card.style.setProperty('--habit-color', habit.color);
  
  const completedClass = habit.completedToday ? 'completed' : '';
  const completedIcon = habit.completedToday ? '✓' : '';
  
  const parentGoal = appData.goals.find(g => g.id === habit.parentGoalId);
  const goalTag = parentGoal ? `<span class="habit-goal-tag">${parentGoal.title}</span>` : '';
  
  card.innerHTML = `
    <div class="habit-info">
      <h4 class="habit-title">${habit.title}</h4>
      <p class="habit-description">${habit.description}</p>
      <div class="habit-meta">
        ${goalTag}
        <span class="habit-streak">🔥 ${habit.currentStreak} Tage</span>
        <span class="habit-identity">${habit.identityAlignment}% Identity</span>
      </div>
    </div>
    <div class="habit-actions">
      <span class="habit-xp">+${habit.xpValue} XP</span>
      <button class="habit-complete-btn ${completedClass}" data-habit-id="${habit.id}">
        ${completedIcon}
      </button>
    </div>
  `;
  
  // Add click listener for completion
  const completeBtn = card.querySelector('.habit-complete-btn');
  completeBtn.addEventListener('click', function() {
    toggleHabitCompletion(habit.id);
  });
  
  return card;
}

function toggleHabitCompletion(habitId) {
  const habit = appData.habits.find(h => h.id === habitId);
  if (!habit) return;
  
  const parentGoal = appData.goals.find(g => g.id === habit.parentGoalId);
  
  if (!habit.completedToday) {
    // Complete the habit
    habit.completedToday = true;
    habit.currentStreak++;
    
    // Add XP
    appData.user.currentXP += habit.xpValue;
    appData.user.totalXP += habit.xpValue;
    
    // Update goal progress
    if (parentGoal) {
      parentGoal.totalXP += habit.xpValue;
      updateGoalProgress(parentGoal);
    }
    
    // Check for level up
    if (appData.user.currentXP >= 1000) {
      levelUp();
    }
    
    // Show success notification
    showNotification(`${habit.title} abgeschlossen!`, `+${habit.xpValue} XP`);
    
    // Show identity reinforcement
    if (parentGoal && habit.identityAlignment > 80) {
      setTimeout(() => {
        showIdentityReinforcement(parentGoal.identityStatement, habit.title);
      }, 1500);
    }
    
  } else {
    // Uncomplete the habit (undo)
    habit.completedToday = false;
    habit.currentStreak = Math.max(0, habit.currentStreak - 1);
    
    // Remove XP
    appData.user.currentXP = Math.max(0, appData.user.currentXP - habit.xpValue);
    appData.user.totalXP = Math.max(0, appData.user.totalXP - habit.xpValue);
    
    // Update goal progress
    if (parentGoal) {
      parentGoal.totalXP = Math.max(0, parentGoal.totalXP - habit.xpValue);
      updateGoalProgress(parentGoal);
    }
  }
  
  // Update UI
  updateDashboard();
  renderGoals();
  renderGroupedHabits();
  renderAllHabits();
}

function updateGoalProgress(goal) {
  const goalHabits = appData.habits.filter(h => h.parentGoalId === goal.id);
  if (goalHabits.length === 0) return;
  
  // Calculate completion rate based on habit streaks and completion
  let totalWeight = 0;
  let completedWeight = 0;
  
  goalHabits.forEach(habit => {
    const weight = habit.contributionWeight || 1;
    totalWeight += weight;
    
    if (habit.completedToday) {
      completedWeight += weight;
    }
  });
  
  goal.completionRate = Math.round((completedWeight / totalWeight) * 100);
  
  // Update streak
  const allCompleted = goalHabits.every(h => h.completedToday);
  if (allCompleted && goal.currentStreak >= 0) {
    // This would be updated daily in a real app
  }
}

function levelUp() {
  appData.user.level++;
  appData.user.currentXP -= 1000;
  
  showNotification(`Level Up! Du bist jetzt Level ${appData.user.level}!`, '🎊');
}

function showNotification(text, xpOrIcon) {
  const notification = document.getElementById('success-notification');
  if (!notification) return;
  
  const textEl = notification.querySelector('.notification-text');
  const xpEl = notification.querySelector('.notification-xp');
  
  if (textEl) textEl.textContent = text;
  if (xpEl) xpEl.textContent = xpOrIcon;
  
  notification.classList.remove('hidden');
  notification.classList.add('show');
  
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => {
      notification.classList.add('hidden');
    }, 300);
  }, 3000);
}

function showIdentityReinforcement(identityStatement, habitTitle) {
  const notification = document.getElementById('identity-notification');
  if (!notification) return;
  
  const feedbackText = notification.querySelector('.feedback-text');
  if (feedbackText) {
    feedbackText.textContent = `${identityStatement} (durch "${habitTitle}")`;
  }
  
  notification.classList.remove('hidden');
  notification.classList.add('show');
  
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => {
      notification.classList.add('hidden');
    }, 300);
  }, 4000);
}

function updateDashboard() {
  const completedToday = appData.habits.filter(h => h.completedToday).length;
  
  const elements = {
    'completed-today': completedToday,
    'current-xp': appData.user.currentXP,
    'total-xp': appData.user.totalXP,
    'user-level': appData.user.level,
    'current-streak': appData.user.currentStreak,
    'total-goals': appData.user.totalGoals,
    'identity-score': appData.user.identityScore,
    'identity-score-large': appData.user.identityScore
  };
  
  Object.entries(elements).forEach(([id, value]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  });
  
  // Update XP progress bar
  const progressBar = document.querySelector('.xp-bar');
  if (progressBar) {
    const progressPercentage = (appData.user.currentXP / 1000) * 100;
    progressBar.style.width = `${progressPercentage}%`;
  }
}

function openGoalModal() {
  const modal = document.getElementById('goal-modal');
  if (!modal) return;
  
  modal.classList.remove('hidden');
  
  // Reset wizard
  currentWizardStep = 1;
  updateWizardStep();
  
  // Reset form
  const form = document.getElementById('goal-form');
  if (form) form.reset();
}

function openHabitModal() {
  const modal = document.getElementById('habit-modal');
  if (!modal) return;
  
  modal.classList.remove('hidden');
  
  // Populate goal options
  const goalSelect = document.getElementById('habit-goal');
  if (goalSelect) {
    goalSelect.innerHTML = '<option value="">Wähle ein Ziel...</option>';
    appData.goals.forEach(goal => {
      const option = document.createElement('option');
      option.value = goal.id;
      option.textContent = goal.title;
      goalSelect.appendChild(option);
    });
  }
  
  // Reset form
  const form = document.getElementById('habit-form');
  if (form) form.reset();
}

function openGoalDetail(goal) {
  const modal = document.getElementById('goal-detail-modal');
  if (!modal) return;
  
  // Populate goal details
  document.getElementById('goal-detail-icon').textContent = goal.icon;
  document.getElementById('goal-detail-title').textContent = goal.title;
  document.getElementById('goal-detail-identity').textContent = goal.identityStatement;
  document.getElementById('goal-detail-progress').textContent = `${goal.completionRate}%`;
  document.getElementById('goal-detail-streak').textContent = `${goal.currentStreak} Tage`;
  document.getElementById('goal-detail-xp').textContent = goal.totalXP;
  document.getElementById('goal-detail-system').textContent = goal.systemDescription;
  
  // Populate related habits
  const habitsList = document.getElementById('goal-detail-habits');
  const goalHabits = appData.habits.filter(h => h.parentGoalId === goal.id);
  
  habitsList.innerHTML = '';
  goalHabits.forEach(habit => {
    const habitItem = document.createElement('div');
    habitItem.className = 'goal-habit-item';
    habitItem.innerHTML = `
      <div class="habit-item-info">${habit.title}</div>
      <div class="habit-item-meta">
        <span>🔥 ${habit.currentStreak}</span>
        <span>${habit.identityAlignment}% Identity</span>
        <span>${habit.completedToday ? '✅' : '⭕'}</span>
      </div>
    `;
    habitsList.appendChild(habitItem);
  });
  
  modal.classList.remove('hidden');
}

function closeModals() {
  document.querySelectorAll('.modal').forEach(modal => {
    modal.classList.add('hidden');
  });
}

function nextWizardStep() {
  if (currentWizardStep < maxWizardSteps) {
    currentWizardStep++;
    updateWizardStep();
  }
}

function prevWizardStep() {
  if (currentWizardStep > 1) {
    currentWizardStep--;
    updateWizardStep();
  }
}

function updateWizardStep() {
  // Hide all steps
  document.querySelectorAll('.wizard-step').forEach(step => {
    step.classList.remove('active');
  });
  
  // Show current step
  const currentStep = document.querySelector(`[data-step="${currentWizardStep}"]`);
  if (currentStep) {
    currentStep.classList.add('active');
  }
  
  // Update navigation buttons
  const prevBtn = document.getElementById('wizard-prev');
  const nextBtn = document.getElementById('wizard-next');
  const submitBtn = document.getElementById('wizard-submit');
  
  if (prevBtn) {
    prevBtn.style.display = currentWizardStep > 1 ? 'block' : 'none';
  }
  
  if (nextBtn) {
    nextBtn.style.display = currentWizardStep < maxWizardSteps ? 'block' : 'none';
  }
  
  if (submitBtn) {
    submitBtn.style.display = currentWizardStep === maxWizardSteps ? 'block' : 'none';
  }
}

function submitGoalForm() {
  const form = document.getElementById('goal-form');
  if (form) {
    const event = new Event('submit');
    form.dispatchEvent(event);
  }
}

function handleGoalSubmission(e) {
  e.preventDefault();
  
  const identity = document.getElementById('goal-identity').value;
  const title = document.getElementById('goal-title').value;
  const description = document.getElementById('goal-description').value;
  const category = document.getElementById('goal-category').value;
  const system = document.getElementById('goal-system').value;
  const priority = document.getElementById('goal-priority').value;
  
  if (!identity.trim() || !title.trim()) {
    showNotification('Bitte fülle alle Pflichtfelder aus.', '⚠️');
    return;
  }
  
  // Create new goal
  const newGoal = {
    id: Date.now(),
    title: title.trim(),
    description: description.trim(),
    category: category,
    identityStatement: identity.trim(),
    systemDescription: system.trim(),
    targetDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    priority: priority,
    status: 'active',
    relatedHabits: [],
    completionRate: 0,
    totalXP: 0,
    currentStreak: 0,
    color: getCategoryColor(category),
    icon: getCategoryIcon(category)
  };
  
  // Add to goals list
  appData.goals.push(newGoal);
  appData.user.totalGoals++;
  
  // Update UI
  renderGoals();
  renderAllGoals();
  renderGroupedHabits();
  closeModals();
  
  showNotification(`Neues Ziel "${title}" erstellt!`, '🎯');
}

function handleHabitSubmission(e) {
  e.preventDefault();
  
  const goalId = document.getElementById('habit-goal').value;
  const title = document.getElementById('habit-title').value;
  const description = document.getElementById('habit-description').value;
  const xpValue = parseInt(document.getElementById('habit-xp').value);
  const twoMinuteVersion = document.getElementById('habit-two-minute').value;
  
  if (!title.trim()) {
    showNotification('Bitte gib einen Titel für die Gewohnheit ein.', '⚠️');
    return;
  }
  
  // Create new habit
  const newHabit = {
    id: Date.now(),
    title: title.trim(),
    description: description.trim() || `Tägliche ${title}`,
    category: 'Sonstige',
    frequency: 'daily',
    xpValue: xpValue,
    currentStreak: 0,
    completedToday: false,
    color: '#4F46E5',
    twoMinuteVersion: twoMinuteVersion.trim() || `Mache nur den ersten Schritt für "${title}"`,
    parentGoalId: goalId ? parseInt(goalId) : null,
    contributionWeight: 1.0,
    identityAlignment: 75
  };
  
  // Add to habits list
  appData.habits.push(newHabit);
  appData.user.totalHabits++;
  
  // Update goal's related habits
  if (goalId) {
    const goal = appData.goals.find(g => g.id === parseInt(goalId));
    if (goal) {
      goal.relatedHabits.push(newHabit.id);
    }
  }
  
  // Update UI
  renderGroupedHabits();
  renderAllHabits();
  closeModals();
  
  showNotification(`Neue Gewohnheit "${title}" erstellt!`, '✅');
}

function getCategoryColor(category) {
  const colors = {
    'Gesundheit': '#10B981',
    'Bildung': '#8B5CF6',
    'Wellness': '#06B6D4',
    'Lifestyle': '#F59E0B',
    'Produktivität': '#4F46E5',
    'Beziehungen': '#F59E0B'
  };
  return colors[category] || '#4F46E5';
}

function getCategoryIcon(category) {
  const icons = {
    'Gesundheit': '💪',
    'Bildung': '📚',
    'Wellness': '🧘',
    'Lifestyle': '🏠',
    'Produktivität': '⚡',
    'Beziehungen': '❤️'
  };
  return icons[category] || '🎯';
}

function renderIdentityInsights() {
  const insightsContainer = document.getElementById('identity-insights-list');
  if (!insightsContainer) return;
  
  insightsContainer.innerHTML = '';
  
  appData.identityInsights.forEach(insight => {
    const card = document.createElement('div');
    card.className = 'insight-card';
    
    card.innerHTML = `
      <h4 class="insight-statement">${insight.statement}</h4>
      <p class="insight-evidence">${insight.evidence}</p>
      <div class="insight-strength">
        <span class="strength-label">Stärke</span>
        <span class="strength-value">${insight.strength}%</span>
      </div>
    `;
    
    insightsContainer.appendChild(card);
  });
}

function initializeCharts() {
  // Destroy existing charts
  if (goalProgressChart) {
    goalProgressChart.destroy();
    goalProgressChart = null;
  }
  if (xpChart) {
    xpChart.destroy();
    xpChart = null;
  }
  
  const goalProgressCanvas = document.getElementById('goal-progress-chart');
  const xpCanvas = document.getElementById('xp-chart');
  
  if (!goalProgressCanvas || !xpCanvas) return;
  
  // Goal Progress Chart
  const goalProgressCtx = goalProgressCanvas.getContext('2d');
  const goalNames = appData.goals.map(g => g.title);
  const goalData = appData.weeklyProgress.map(day => {
    return appData.goals.map(goal => day.goalProgress[goal.id] * 100 || 0);
  });
  
  goalProgressChart = new Chart(goalProgressCtx, {
    type: 'line',
    data: {
      labels: appData.weeklyProgress.map(d => d.day),
      datasets: appData.goals.map((goal, index) => ({
        label: goal.title,
        data: appData.weeklyProgress.map(day => day.goalProgress[goal.id] * 100 || 0),
        borderColor: goal.color,
        backgroundColor: goal.color + '20',
        borderWidth: 3,
        fill: false,
        tension: 0.4
      }))
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: '#f5f5f5'
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          ticks: {
            color: '#f5f5f5',
            callback: function(value) {
              return value + '%';
            }
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.1)'
          }
        },
        x: {
          ticks: {
            color: '#f5f5f5'
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.1)'
          }
        }
      }
    }
  });
  
  // XP Chart
  const xpCtx = xpCanvas.getContext('2d');
  const xpData = [
    { day: 'Mo', xp: 95 },
    { day: 'Di', xp: 120 },
    { day: 'Mi', xp: 80 },
    { day: 'Do', xp: 150 },
    { day: 'Fr', xp: 110 },
    { day: 'Sa', xp: 65 },
    { day: 'So', xp: 140 }
  ];
  
  xpChart = new Chart(xpCtx, {
    type: 'bar',
    data: {
      labels: xpData.map(d => d.day),
      datasets: [{
        label: 'XP pro Tag',
        data: xpData.map(d => d.xp),
        backgroundColor: '#FFC185',
        borderRadius: 8,
        borderSkipped: false
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: '#f5f5f5'
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: '#f5f5f5'
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.1)'
          }
        },
        x: {
          ticks: {
            color: '#f5f5f5'
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.1)'
          }
        }
      }
    }
  });
}

function initializeIdentityChart() {
  if (identityChart) {
    identityChart.destroy();
    identityChart = null;
  }
  
  const identityCanvas = document.getElementById('identity-chart');
  if (!identityCanvas) return;
  
  const identityCtx = identityCanvas.getContext('2d');
  
  identityChart = new Chart(identityCtx, {
    type: 'doughnut',
    data: {
      labels: appData.identityInsights.map(insight => 
        insight.statement.replace('Du handelst wie jemand, der ', '').substring(0, 30) + '...'
      ),
      datasets: [{
        data: appData.identityInsights.map(insight => insight.strength),
        backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C'],
        borderWidth: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: '#f5f5f5'
          }
        }
      }
    }
  });
}