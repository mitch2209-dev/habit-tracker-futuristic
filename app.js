// App State Management
class HabitApp {
    constructor() {
        this.state = {
            goals: [],
            userProfile: {
                level: 1,
                currentXP: 0,
                xpToNextLevel: 100,
                title: "Initiate",
                totalHabitsCompleted: 0,
                longestStreak: 0,
                achievements: []
            },
            achievements: [
                {
                    id: 1,
                    name: "First Steps",
                    description: "Complete your first habit",
                    icon: "⭐",
                    unlocked: false
                },
                {
                    id: 2,
                    name: "Week Warrior",
                    description: "Maintain a 7-day streak",
                    icon: "🔥",
                    unlocked: false
                },
                {
                    id: 3,
                    name: "System Architect",
                    description: "Create 5 different habits",
                    icon: "💻",
                    unlocked: false
                },
                {
                    id: 4,
                    name: "Habit Master",
                    description: "Complete 100 habits",
                    icon: "🏆",
                    unlocked: false
                },
                {
                    id: 5,
                    name: "Streak Legend",
                    description: "Maintain a 30-day streak",
                    icon: "⚡",
                    unlocked: false
                }
            ]
        };
        
        this.levelTitles = {
            1: "Initiate",
            11: "Habit Architect",
            26: "Life Designer", 
            51: "System Master",
            76: "Evolution Complete"
        };
        
        this.currentView = 'dashboard';
        this.loadData();
        this.init();
    }

    init() {
        this.setupNavigation();
        this.setupModals();
        this.setupEventListeners();
        this.render();
        this.updateCurrentDate();
    }

    // Data Management
    loadData() {
        const savedData = localStorage.getItem('habitAppData');
        if (savedData) {
            const parsed = JSON.parse(savedData);
            this.state = { ...this.state, ...parsed };
        } else {
            // Load sample data
            this.state.goals = [
                {
                    id: 1,
                    title: "Master Physical Fitness",
                    description: "Build strength, endurance, and overall health",
                    progress: 65,
                    habits: [
                        {
                            id: 1,
                            title: "Morning Exercise",
                            cue: "After I wake up and brush my teeth",
                            craving: "To feel energized for the day",
                            response: "I will do 10 minutes of bodyweight exercises",
                            reward: "Then I will track it and earn XP",
                            streak: 12,
                            completed: false,
                            type: "build",
                            lastCompleted: null
                        },
                        {
                            id: 2,
                            title: "Drink Water",
                            cue: "When I sit down at my desk",
                            craving: "To stay hydrated and focused",
                            response: "I will drink a full glass of water",
                            reward: "Then I will mark it complete and feel refreshed",
                            streak: 8,
                            completed: true,
                            type: "build",
                            lastCompleted: new Date().toDateString()
                        }
                    ]
                },
                {
                    id: 2,
                    title: "Expand Knowledge",
                    description: "Continuous learning and skill development",
                    progress: 40,
                    habits: [
                        {
                            id: 3,
                            title: "Read Daily",
                            cue: "After dinner",
                            craving: "To grow my knowledge and relax",
                            response: "I will read for 20 minutes",
                            reward: "Then I will log my progress and gain XP",
                            streak: 5,
                            completed: false,
                            type: "build",
                            lastCompleted: null
                        }
                    ]
                }
            ];
            
            this.state.userProfile = {
                level: 23,
                currentXP: 2150,
                xpToNextLevel: 300,
                title: "Habit Architect",
                totalHabitsCompleted: 215,
                longestStreak: 30,
                achievements: ["First Steps", "Week Warrior"]
            };
            
            this.state.achievements[0].unlocked = true;
            this.state.achievements[1].unlocked = true;
        }
    }

    saveData() {
        localStorage.setItem('habitAppData', JSON.stringify(this.state));
    }

    // Navigation
    setupNavigation() {
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const view = item.dataset.view;
                console.log('Switching to view:', view); // Debug log
                this.switchView(view);
                
                // Update active nav item
                navItems.forEach(nav => nav.classList.remove('active'));
                item.classList.add('active');
            });
        });
    }

    switchView(viewName) {
        console.log('switchView called with:', viewName); // Debug log
        
        // Hide all views
        const views = document.querySelectorAll('.view');
        views.forEach(view => {
            view.classList.remove('active');
            console.log('Hiding view:', view.id); // Debug log
        });
        
        // Show target view
        const targetView = document.getElementById(`${viewName}-view`);
        console.log('Target view element:', targetView); // Debug log
        
        if (targetView) {
            targetView.classList.add('active');
            this.currentView = viewName;
            console.log('Switched to view:', viewName); // Debug log
            
            // Render specific view content
            setTimeout(() => {
                switch(viewName) {
                    case 'dashboard':
                        this.renderDashboard();
                        break;
                    case 'goals':
                        this.renderGoals();
                        break;
                    case 'habits':
                        this.renderHabits();
                        break;
                    case 'progress':
                        this.renderProgress();
                        break;
                    case 'profile':
                        this.renderProfile();
                        break;
                }
            }, 50);
        } else {
            console.error('Target view not found:', `${viewName}-view`);
        }
    }

    // Modal Management
    setupModals() {
        // Goal Modal
        const goalModal = document.getElementById('goal-modal');
        const addGoalBtn = document.getElementById('add-goal-btn');
        const closeGoalModal = document.getElementById('close-goal-modal');
        const cancelGoal = document.getElementById('cancel-goal');
        const goalForm = document.getElementById('goal-form');

        if (addGoalBtn) {
            addGoalBtn.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Add goal button clicked'); // Debug log
                if (goalModal) {
                    goalModal.classList.remove('hidden');
                    console.log('Goal modal opened'); // Debug log
                }
            });
        }

        if (closeGoalModal) {
            closeGoalModal.addEventListener('click', (e) => {
                e.preventDefault();
                goalModal.classList.add('hidden');
                goalForm.reset();
            });
        }

        if (cancelGoal) {
            cancelGoal.addEventListener('click', (e) => {
                e.preventDefault();
                goalModal.classList.add('hidden');
                goalForm.reset();
            });
        }

        if (goalForm) {
            goalForm.addEventListener('submit', (e) => {
                e.preventDefault();
                console.log('Goal form submitted'); // Debug log
                this.createGoal();
                goalModal.classList.add('hidden');
                goalForm.reset();
            });
        }

        // Habit Modal
        const habitModal = document.getElementById('habit-modal');
        const addHabitBtn = document.getElementById('add-habit-btn');
        const closeHabitModal = document.getElementById('close-habit-modal');
        const cancelHabit = document.getElementById('cancel-habit');
        const habitForm = document.getElementById('habit-form');

        if (addHabitBtn) {
            addHabitBtn.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Add habit button clicked'); // Debug log
                this.populateGoalSelect();
                if (habitModal) {
                    habitModal.classList.remove('hidden');
                    console.log('Habit modal opened'); // Debug log
                }
            });
        }

        if (closeHabitModal) {
            closeHabitModal.addEventListener('click', (e) => {
                e.preventDefault();
                habitModal.classList.add('hidden');
                habitForm.reset();
            });
        }

        if (cancelHabit) {
            cancelHabit.addEventListener('click', (e) => {
                e.preventDefault();
                habitModal.classList.add('hidden');
                habitForm.reset();
            });
        }

        if (habitForm) {
            habitForm.addEventListener('submit', (e) => {
                e.preventDefault();
                console.log('Habit form submitted'); // Debug log
                this.createHabit();
                habitModal.classList.add('hidden');
                habitForm.reset();
            });
        }

        // Close modals on overlay click
        [goalModal, habitModal].forEach(modal => {
            if (modal) {
                modal.addEventListener('click', (e) => {
                    if (e.target === modal) {
                        modal.classList.add('hidden');
                    }
                });
            }
        });
    }

    setupEventListeners() {
        // Level up overlay close
        const levelUpOverlay = document.getElementById('level-up-overlay');
        if (levelUpOverlay) {
            levelUpOverlay.addEventListener('click', () => {
                levelUpOverlay.classList.add('hidden');
            });
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const modals = document.querySelectorAll('.modal');
                modals.forEach(modal => modal.classList.add('hidden'));
                
                const levelUp = document.getElementById('level-up-overlay');
                if (levelUp) levelUp.classList.add('hidden');
            }
        });
    }

    // Goal Management
    createGoal() {
        const titleElement = document.getElementById('goal-title');
        const descriptionElement = document.getElementById('goal-description');
        
        if (!titleElement || !descriptionElement) {
            console.error('Goal form elements not found');
            return;
        }

        const title = titleElement.value.trim();
        const description = descriptionElement.value.trim();

        if (!title) {
            alert('Bitte geben Sie einen Titel für das Ziel ein.');
            return;
        }

        const newGoal = {
            id: Date.now(),
            title,
            description: description || 'Kein Beschreibung angegeben',
            progress: 0,
            habits: []
        };

        this.state.goals.push(newGoal);
        this.saveData();
        this.renderGoals();
        console.log('Goal created:', newGoal); // Debug log
    }

    deleteGoal(goalId) {
        this.state.goals = this.state.goals.filter(goal => goal.id !== goalId);
        this.saveData();
        this.renderGoals();
        console.log('Goal deleted:', goalId); // Debug log
    }

    // Habit Management
    populateGoalSelect() {
        const goalSelect = document.getElementById('habit-goal');
        if (!goalSelect) return;

        goalSelect.innerHTML = '<option value="">Wähle ein Ziel...</option>';
        this.state.goals.forEach(goal => {
            const option = document.createElement('option');
            option.value = goal.id;
            option.textContent = goal.title;
            goalSelect.appendChild(option);
        });
    }

    createHabit() {
        const titleElement = document.getElementById('habit-title');
        const goalElement = document.getElementById('habit-goal');
        const typeElement = document.getElementById('habit-type');
        const cueElement = document.getElementById('habit-cue');
        const cravingElement = document.getElementById('habit-craving');
        const responseElement = document.getElementById('habit-response');
        const rewardElement = document.getElementById('habit-reward');

        if (!titleElement || !goalElement || !typeElement || !responseElement) {
            console.error('Habit form elements not found');
            return;
        }

        const title = titleElement.value.trim();
        const goalId = parseInt(goalElement.value);
        const type = typeElement.value;
        const cue = cueElement.value.trim() || "When the time is right";
        const craving = cravingElement.value.trim() || "To improve myself";
        const response = responseElement.value.trim();
        const reward = rewardElement.value.trim() || "I will feel accomplished";

        if (!title || !goalId || !response) {
            alert('Bitte füllen Sie alle Pflichtfelder aus.');
            return;
        }

        const newHabit = {
            id: Date.now(),
            title,
            cue,
            craving,
            response,
            reward,
            streak: 0,
            completed: false,
            type,
            lastCompleted: null
        };

        const goal = this.state.goals.find(g => g.id === goalId);
        if (goal) {
            goal.habits.push(newHabit);
            this.updateGoalProgress(goalId);
            this.saveData();
            this.renderHabits();
            this.checkAchievements();
            console.log('Habit created:', newHabit); // Debug log
        } else {
            console.error('Goal not found for habit creation:', goalId);
        }
    }

    toggleHabit(goalId, habitId) {
        const goal = this.state.goals.find(g => g.id === goalId);
        const habit = goal?.habits.find(h => h.id === habitId);
        
        if (!habit) {
            console.error('Habit not found:', habitId);
            return;
        }

        const today = new Date().toDateString();
        const wasCompleted = habit.completed;

        if (!wasCompleted) {
            // Complete the habit
            habit.completed = true;
            habit.lastCompleted = today;
            habit.streak += 1;
            
            // Award XP
            let xpGain = 10;
            if (habit.streak >= 30) xpGain = 30; // 30+ day streak bonus
            else if (habit.streak >= 7) xpGain = 15; // 7+ day streak bonus
            
            this.addXP(xpGain);
            this.state.userProfile.totalHabitsCompleted += 1;
            
            // Update longest streak
            if (habit.streak > this.state.userProfile.longestStreak) {
                this.state.userProfile.longestStreak = habit.streak;
            }
            
            this.showHabitCompletionFeedback(habitId);
        } else {
            // Uncomplete the habit
            habit.completed = false;
            habit.streak = Math.max(0, habit.streak - 1);
            
            // Remove XP (but don't go below 0)
            let xpLoss = 10;
            if (habit.streak >= 29) xpLoss = 30;
            else if (habit.streak >= 6) xpLoss = 15;
            
            this.state.userProfile.currentXP = Math.max(0, this.state.userProfile.currentXP - xpLoss);
            this.state.userProfile.totalHabitsCompleted = Math.max(0, this.state.userProfile.totalHabitsCompleted - 1);
        }

        this.updateGoalProgress(goalId);
        this.saveData();
        this.checkAchievements();
        this.render();
    }

    updateGoalProgress(goalId) {
        const goal = this.state.goals.find(g => g.id === goalId);
        if (!goal || goal.habits.length === 0) return;

        const completedHabits = goal.habits.filter(h => h.completed).length;
        goal.progress = Math.round((completedHabits / goal.habits.length) * 100);
    }

    showHabitCompletionFeedback(habitId) {
        const habitElement = document.querySelector(`[data-habit-id="${habitId}"]`);
        if (habitElement) {
            habitElement.style.transform = 'scale(1.05)';
            habitElement.style.boxShadow = '0 0 20px var(--cyber-glow-blue)';
            
            setTimeout(() => {
                habitElement.style.transform = '';
                habitElement.style.boxShadow = '';
            }, 300);
        }
    }

    // XP and Level System
    addXP(amount) {
        this.state.userProfile.currentXP += amount;
        
        while (this.state.userProfile.currentXP >= this.getXPForNextLevel()) {
            this.levelUp();
        }
    }

    getXPForNextLevel() {
        return this.state.userProfile.level * 100;
    }

    levelUp() {
        const oldLevel = this.state.userProfile.level;
        this.state.userProfile.currentXP -= this.getXPForNextLevel();
        this.state.userProfile.level += 1;
        
        // Update title based on level
        const newTitle = this.getLevelTitle(this.state.userProfile.level);
        this.state.userProfile.title = newTitle;
        
        // Show level up animation
        this.showLevelUpAnimation(this.state.userProfile.level, newTitle);
    }

    getLevelTitle(level) {
        const titles = Object.keys(this.levelTitles).sort((a, b) => b - a);
        for (let threshold of titles) {
            if (level >= parseInt(threshold)) {
                return this.levelTitles[threshold];
            }
        }
        return "Initiate";
    }

    showLevelUpAnimation(newLevel, newTitle) {
        const overlay = document.getElementById('level-up-overlay');
        const levelElement = document.getElementById('new-level');
        const titleElement = document.getElementById('new-title');
        
        if (overlay && levelElement && titleElement) {
            levelElement.textContent = newLevel;
            titleElement.textContent = newTitle;
            overlay.classList.remove('hidden');
            
            setTimeout(() => {
                overlay.classList.add('hidden');
            }, 3000);
        }
    }

    // Achievement System
    checkAchievements() {
        const achievements = this.state.achievements;
        
        // First Steps
        if (!achievements[0].unlocked && this.state.userProfile.totalHabitsCompleted >= 1) {
            this.unlockAchievement(1);
        }
        
        // Week Warrior
        const hasWeekStreak = this.getAllHabits().some(habit => habit.streak >= 7);
        if (!achievements[1].unlocked && hasWeekStreak) {
            this.unlockAchievement(2);
        }
        
        // System Architect
        const totalHabits = this.getAllHabits().length;
        if (!achievements[2].unlocked && totalHabits >= 5) {
            this.unlockAchievement(3);
        }
        
        // Habit Master
        if (!achievements[3].unlocked && this.state.userProfile.totalHabitsCompleted >= 100) {
            this.unlockAchievement(4);
        }
        
        // Streak Legend
        if (!achievements[4].unlocked && this.state.userProfile.longestStreak >= 30) {
            this.unlockAchievement(5);
        }
    }

    unlockAchievement(achievementId) {
        const achievement = this.state.achievements.find(a => a.id === achievementId);
        if (achievement && !achievement.unlocked) {
            achievement.unlocked = true;
            this.state.userProfile.achievements.push(achievement.name);
            
            // Show achievement notification (could be enhanced)
            console.log(`Achievement unlocked: ${achievement.name}`);
        }
    }

    getAllHabits() {
        return this.state.goals.flatMap(goal => goal.habits);
    }

    // Rendering Methods
    render() {
        if (this.currentView === 'dashboard') {
            this.renderDashboard();
        } else if (this.currentView === 'goals') {
            this.renderGoals();
        } else if (this.currentView === 'habits') {
            this.renderHabits();
        } else if (this.currentView === 'progress') {
            this.renderProgress();
        } else if (this.currentView === 'profile') {
            this.renderProfile();
        }
    }

    renderDashboard() {
        // Update level display
        const levelNumber = document.getElementById('level-number');
        const levelTitle = document.getElementById('level-title');
        const currentXP = document.getElementById('current-xp');
        const xpToNext = document.getElementById('xp-to-next');
        const xpFill = document.getElementById('xp-fill');

        if (levelNumber) levelNumber.textContent = this.state.userProfile.level;
        if (levelTitle) levelTitle.textContent = this.state.userProfile.title;
        if (currentXP) currentXP.textContent = this.state.userProfile.currentXP;
        
        const xpForNext = this.getXPForNextLevel();
        if (xpToNext) xpToNext.textContent = this.state.userProfile.currentXP + xpForNext;
        
        const xpProgress = (this.state.userProfile.currentXP / xpForNext) * 100;
        if (xpFill) xpFill.style.width = `${Math.min(xpProgress, 100)}%`;

        // Render today's habits
        this.renderTodayHabits();
        
        // Render streaks
        this.renderStreaks();
        
        // Render recent achievements
        this.renderRecentAchievements();
    }

    renderTodayHabits() {
        const container = document.getElementById('dashboard-habits');
        const completedCount = document.getElementById('completed-count');
        const totalCount = document.getElementById('total-count');
        
        if (!container) return;

        const allHabits = this.getAllHabits();
        const completedHabitsCount = allHabits.filter(h => h.completed).length;
        
        if (completedCount) completedCount.textContent = completedHabitsCount;
        if (totalCount) totalCount.textContent = allHabits.length;

        container.innerHTML = '';
        
        this.state.goals.forEach(goal => {
            goal.habits.forEach(habit => {
                const habitElement = document.createElement('div');
                habitElement.className = `habit-item ${habit.completed ? 'completed' : ''}`;
                habitElement.setAttribute('data-habit-id', habit.id);
                
                habitElement.innerHTML = `
                    <div class="habit-checkbox ${habit.completed ? 'completed' : ''}"></div>
                    <div class="habit-text">${habit.title}</div>
                    <div class="habit-streak">${habit.streak}🔥</div>
                `;
                
                habitElement.addEventListener('click', () => {
                    this.toggleHabit(goal.id, habit.id);
                });
                
                container.appendChild(habitElement);
            });
        });
    }

    renderStreaks() {
        const container = document.getElementById('streak-list');
        if (!container) return;

        container.innerHTML = '';
        
        const allHabits = this.getAllHabits().filter(h => h.streak > 0);
        allHabits.sort((a, b) => b.streak - a.streak);
        
        allHabits.slice(0, 5).forEach(habit => {
            const streakElement = document.createElement('div');
            streakElement.className = 'streak-item';
            streakElement.innerHTML = `
                <div class="streak-name">${habit.title}</div>
                <div class="streak-count">${habit.streak} Tage</div>
            `;
            container.appendChild(streakElement);
        });
    }

    renderRecentAchievements() {
        const container = document.getElementById('recent-achievements');
        if (!container) return;

        container.innerHTML = '';
        
        const recentAchievements = this.state.achievements
            .filter(a => a.unlocked)
            .slice(-3);
        
        recentAchievements.forEach(achievement => {
            const achElement = document.createElement('div');
            achElement.className = 'achievement-badge unlocked';
            achElement.innerHTML = `
                <div class="achievement-icon">${achievement.icon}</div>
                <div class="achievement-name">${achievement.name}</div>
                <div class="achievement-desc">${achievement.description}</div>
            `;
            container.appendChild(achElement);
        });
    }

    renderGoals() {
        const container = document.getElementById('goals-grid');
        if (!container) return;

        container.innerHTML = '';
        
        this.state.goals.forEach(goal => {
            const goalElement = document.createElement('div');
            goalElement.className = 'stat-card goal-card';
            goalElement.innerHTML = `
                <div class="card-header">
                    <h3>${goal.title}</h3>
                    <button class="btn btn--secondary btn--sm delete-goal" data-goal-id="${goal.id}">Löschen</button>
                </div>
                <div class="card-body">
                    <p>${goal.description}</p>
                    <div class="goal-progress">
                        <div class="goal-progress-fill" style="width: ${goal.progress}%"></div>
                    </div>
                    <div style="margin-top: 8px; font-size: 12px; color: var(--cyber-text-muted);">
                        ${goal.progress}% abgeschlossen (${goal.habits.length} Gewohnheiten)
                    </div>
                </div>
            `;
            
            // Add delete functionality
            const deleteBtn = goalElement.querySelector('.delete-goal');
            if (deleteBtn) {
                deleteBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    if (confirm('Bist du sicher, dass du dieses Ziel löschen möchtest?')) {
                        this.deleteGoal(goal.id);
                    }
                });
            }
            
            container.appendChild(goalElement);
        });
    }

    renderHabits() {
        const container = document.getElementById('habits-grid');
        if (!container) return;

        container.innerHTML = '';
        
        this.state.goals.forEach(goal => {
            goal.habits.forEach(habit => {
                const habitElement = document.createElement('div');
                habitElement.className = 'stat-card habit-card';
                habitElement.innerHTML = `
                    <div class="card-header">
                        <h3>${habit.title}</h3>
                        <div class="habit-streak">${habit.streak}🔥</div>
                    </div>
                    <div class="card-body">
                        <div style="margin-bottom: 12px;">
                            <strong>Ziel:</strong> ${goal.title}
                        </div>
                        <div style="margin-bottom: 12px;">
                            <strong>Typ:</strong> ${habit.type === 'build' ? 'Aufbauen' : 'Durchbrechen'}
                        </div>
                        <div style="margin-bottom: 8px;">
                            <strong>Auslöser:</strong> ${habit.cue}
                        </div>
                        <div style="margin-bottom: 8px;">
                            <strong>Verlangen:</strong> ${habit.craving}
                        </div>
                        <div style="margin-bottom: 8px;">
                            <strong>Reaktion:</strong> ${habit.response}
                        </div>
                        <div style="margin-bottom: 16px;">
                            <strong>Belohnung:</strong> ${habit.reward}
                        </div>
                        <button class="btn ${habit.completed ? 'btn--secondary' : 'btn--primary'} toggle-habit" 
                                data-goal-id="${goal.id}" data-habit-id="${habit.id}">
                            ${habit.completed ? 'Rückgängig' : 'Abschließen'}
                        </button>
                    </div>
                `;
                
                // Add toggle functionality
                const toggleBtn = habitElement.querySelector('.toggle-habit');
                if (toggleBtn) {
                    toggleBtn.addEventListener('click', () => {
                        this.toggleHabit(goal.id, habit.id);
                    });
                }
                
                container.appendChild(habitElement);
            });
        });
    }

    renderProgress() {
        // Update stats
        const totalCompleted = document.getElementById('total-habits-completed');
        const longestStreak = document.getElementById('longest-streak');
        
        if (totalCompleted) totalCompleted.textContent = this.state.userProfile.totalHabitsCompleted;
        if (longestStreak) longestStreak.textContent = this.state.userProfile.longestStreak;
        
        // Render all achievements
        const container = document.getElementById('all-achievements');
        if (!container) return;

        container.innerHTML = '';
        
        this.state.achievements.forEach(achievement => {
            const achElement = document.createElement('div');
            achElement.className = `achievement-badge ${achievement.unlocked ? 'unlocked' : ''}`;
            achElement.innerHTML = `
                <div class="achievement-icon">${achievement.icon}</div>
                <div class="achievement-name">${achievement.name}</div>
                <div class="achievement-desc">${achievement.description}</div>
            `;
            container.appendChild(achElement);
        });
    }

    renderProfile() {
        const profileTitle = document.getElementById('profile-title');
        const profileLevel = document.getElementById('profile-level');
        const profileTotalXP = document.getElementById('profile-total-xp');
        const profileHabitsCount = document.getElementById('profile-habits-count');
        
        if (profileTitle) profileTitle.textContent = this.state.userProfile.title;
        if (profileLevel) profileLevel.textContent = this.state.userProfile.level;
        if (profileTotalXP) profileTotalXP.textContent = this.state.userProfile.currentXP;
        if (profileHabitsCount) profileHabitsCount.textContent = this.getAllHabits().length;
    }

    updateCurrentDate() {
        const dateElement = document.getElementById('current-date');
        if (dateElement) {
            const now = new Date();
            const options = { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            };
            dateElement.textContent = now.toLocaleDateString('de-DE', options);
        }
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded - Initializing Habit App'); // Debug log
    window.habitApp = new HabitApp();
});

// Reset daily habits (can be called manually or on date change)
function resetDailyHabits() {
    if (window.habitApp) {
        const allHabits = window.habitApp.getAllHabits();
        const today = new Date().toDateString();
        
        allHabits.forEach(habit => {
            if (habit.lastCompleted !== today) {
                if (habit.completed) {
                    // Habit was completed yesterday or earlier, break streak if not completed today
                    if (habit.lastCompleted !== new Date(Date.now() - 86400000).toDateString()) {
                        habit.streak = 0;
                    }
                }
                habit.completed = false;
            }
        });
        
        window.habitApp.saveData();
        window.habitApp.render();
    }
}