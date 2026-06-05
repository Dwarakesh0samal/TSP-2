import {ChangeDetectionStrategy, Component, signal, computed} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {
  PERSONAL_INFO,
  EDUCATION_HISTORY,
  SKILLS_DATA,
  WORK_EXPERIENCE,
  INITIAL_PROJECTS,
  KEY_ACHIEVEMENTS,
  ProjectItem
} from '../data/cv-data';

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule, RouterLink, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="min-h-screen bg-[#FDFCF7] text-[#121212] selection:bg-[#A44322]/10 selection:text-[#A44322] font-sans pb-24">
      
      <!-- Top Minimal Header / Nav Bar -->
      <header class="border-b border-[#121212] py-4 px-6 md:px-12 sticky top-0 bg-[#FDFCF7]/95 backdrop-blur-md z-40">
        <div class="max-w-7xl mx-auto flex justify-between items-center">
          <div class="flex items-center gap-3">
            <span class="font-mono text-xs tracking-widest uppercase font-bold text-[#A44322]">[ FOLIO.2026 ]</span>
            <div class="h-3 w-[1px] bg-[#121212]/30"></div>
            <span class="font-display font-bold italic text-sm">Trilokesh Samal</span>
          </div>
          
          <nav class="hidden md:flex items-center gap-8 text-xs font-mono tracking-widest uppercase font-extrabold">
            <a href="#about" class="hover:text-[#A44322] transition-colors">./about</a>
            <a href="#experience" class="hover:text-[#A44322] transition-colors">./experience</a>
            <a href="#projects" class="hover:text-[#A44322] transition-colors">./projects_log</a>
            <a href="#skills" class="hover:text-[#A44322] transition-colors">./competencies</a>
          </nav>

          <div class="flex items-center gap-4">
            <a routerLink="/print" class="flex items-center gap-2 border border-[#121212] hover:bg-[#121212] hover:text-[#FDFCF7] transition-all px-4 py-2 text-xs font-mono uppercase tracking-wider font-bold" id="header_pdf_download_link">
              <span class="material-icons text-sm">picture_as_pdf</span>
              PDF Resume
            </a>
          </div>
        </div>
      </header>

      <!-- Central Newsprint Core Layout Grid -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        <!-- ================= LEFT COLUMN: Editorial Profile Card ================= -->
        <aside class="lg:col-span-4 flex flex-col gap-8 lg:sticky lg:top-28 lg:h-[calc(100vh-140px)] lg:overflow-y-auto pr-2 no-scrollbar" id="about">
          <div>
            <!-- Big Serif Display Portrait Header -->
            <h1 class="text-6xl sm:text-7xl font-bold font-display tracking-tighter leading-none text-[#121212] mb-4">
              Samal,<br/>
              <span class="italic font-normal">Trilokesh.</span>
            </h1>
            
            <p class="text-xs uppercase tracking-[0.25em] font-mono font-bold text-[#A44322] mb-6">
              Senior Operations Executive & civil engineer
            </p>

            <p class="text-sm text-stone-700 leading-relaxed font-serif italic text-justify mb-8 pr-2">
              "Providing structural precision, end-to-end operational rigor, and bespoke spatial management for enterprise multi-million rupee projects."
            </p>

            <!-- Key metrics badge grid -->
            <div class="grid grid-cols-3 gap-2 border-t border-b border-[#121212] py-4 my-6">
              <div class="text-center">
                <span class="block text-xl font-bold font-display text-[#A44322]">9+ Yrs</span>
                <span class="block text-[9px] uppercase font-mono tracking-wider text-stone-500">Exp</span>
              </div>
              <div class="text-center border-l border-r border-[#121212]/20">
                <span class="block text-xl font-bold font-display text-[#A44322]">100%</span>
                <span class="block text-[9px] uppercase font-mono tracking-wider text-stone-500">CSAT</span>
              </div>
              <div class="text-center">
                <span class="block text-xl font-bold font-display text-[#A44322]">&lt;2%</span>
                <span class="block text-[9px] uppercase font-mono tracking-wider text-stone-500">Budget Var</span>
              </div>
            </div>
          </div>

          <!-- Quick Contact Registry -->
          <div class="space-y-4 pt-4 border-t border-[#121212]/10">
            <h4 class="text-xs uppercase tracking-widest font-mono font-bold text-stone-500">Secure Registry</h4>
            
            <div class="space-y-2 text-sm font-mono">
              <div class="flex items-center gap-3">
                <span class="material-icons text-base text-[#A44322]">phone_iphone</span>
                <span class="text-xs text-stone-700">{{ personalInfo().phones[0] }}</span>
              </div>
              <div class="flex items-center gap-3">
                <span class="material-icons text-base text-[#A44322]">alternate_email</span>
                <a href="mailto:{{ personalInfo().email }}" class="text-xs text-stone-700 hover:underline">{{ personalInfo().email }}</a>
              </div>
              <div class="flex items-center gap-3">
                <span class="material-icons text-base text-[#A44322]">location_on</span>
                <span class="text-xs text-stone-700">{{ personalInfo().location }}</span>
              </div>
            </div>
          </div>

          <!-- Download Action Callout -->
          <div class="bg-[#121212] text-[#FDFCF7] p-6 border border-[#121212] flex flex-col justify-between gap-4 mt-4">
            <div>
              <p class="text-xs font-mono uppercase tracking-[0.2em] text-[#A44322] font-extrabold mb-1">Standard CV Download</p>
              <h4 class="text-lg font-bold font-display italic">Need physical documentation?</h4>
              <p class="text-[11px] text-stone-400 mt-2 leading-relaxed font-sans">
                Access a print-ready, professionally styled A4 vellum-standard resume layout optimized for instant browser save & ATS parsing.
              </p>
            </div>
            <a routerLink="/print" class="flex items-center justify-between bg-[#FDFCF7] text-[#121212] hover:bg-[#A44322] hover:text-[#FDFCF7] font-bold py-2.5 px-4 text-xs font-mono uppercase tracking-wider transition-all" id="aside_print_resume_btn">
              <span>Generate Printable PDF</span>
              <span class="material-icons text-base">arrow_forward</span>
            </a>
          </div>

          <!-- Digital Presence -->
          <div class="pt-6 border-t border-[#121212]/10 space-y-2">
            <p class="text-xs uppercase tracking-widest font-mono font-bold text-stone-500">Digital Identity Linkages</p>
            <div class="flex flex-col space-y-1 text-xs">
              <a [href]="personalInfo().linkedin" target="_blank" class="hover:text-[#A44322] transition-colors flex items-center gap-1">
                <span class="font-mono">./linkedin/in/trilokesh-samal</span>
                <span class="material-icons text-[10px]">open_in_new</span>
              </a>
              <a href="mailto:trilokesh.samal26@gmail.com" class="hover:text-[#A44322] transition-colors flex items-center gap-1">
                <span class="font-mono">./email/trilokesh.samal26</span>
                <span class="material-icons text-[10px]">open_in_new</span>
              </a>
            </div>
          </div>
        </aside>

        <!-- ================= RIGHT COLUMN: Interactive Dashboard Panels ================= -->
        <main class="lg:col-span-8 flex flex-col gap-14">
          
          <!-- Key Achievements Banners -->
          <section class="border border-[#121212] p-8 bg-white/40" id="achievements">
            <h2 class="text-xs uppercase tracking-[0.3em] font-mono font-black text-[#A44322] mb-6">./operational_achievements</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              @for (ach of achievements(); track ach.title) {
                <div class="flex flex-col justify-between border-t border-[#121212]/20 pt-4">
                  <div>
                    <span class="font-mono text-xs text-stone-500 uppercase block tracking-wider">{{ ach.title }}</span>
                    <span class="text-3xl font-extrabold font-display my-1 text-[#121212] block">{{ ach.value }}</span>
                  </div>
                  <p class="text-[11px] text-stone-600 mt-2 leading-relaxed text-justify">{{ ach.description }}</p>
                </div>
              }
            </div>
          </section>

          <!-- Core Professional Chronology -->
          <section id="experience">
            <div class="flex justify-between items-baseline mb-6 border-b border-[#121212] pb-4">
              <h2 class="text-xs uppercase tracking-[0.3em] font-mono font-black text-[#A44322]">./career_chronology</h2>
              <span class="text-xs font-mono text-stone-500">9+ years operations experience</span>
            </div>

            <!-- List of Interactive Timelines -->
            <div class="space-y-6">
              @for (work of experience(); track work.company + work.duration; let i = $index) {
                <div class="border border-[#121212] bg-white transition-all overflow-hidden duration-300" 
                     [class.shadow-md]="activeExp() === i"
                     [class.border-l-4]="activeExp() === i"
                     [class.border-l-[#A44322]]="activeExp() === i"
                     id="experience_card_{{i}}">
                  
                  <!-- Accordion Header Button -->
                  <button type="button" class="w-full text-left p-6 cursor-pointer flex justify-between items-start gap-4 hover:bg-[#FDFCF7] select-none focus:outline-none focus:ring-1 focus:ring-[#A44322] border-none" 
                       (click)="toggleExp(i)">
                    <div class="space-y-1">
                      <div class="flex flex-wrap items-center gap-x-2 gap-y-1">
                        <h3 class="text-xl font-bold font-display text-[#121212]">{{ work.company }}</h3>
                        <span class="text-xs font-mono text-stone-500">/ {{ work.location }}</span>
                      </div>
                      <p class="text-xs uppercase tracking-wider font-mono font-bold text-[#A44322]">{{ work.role }}</p>
                    </div>

                    <div class="flex items-center gap-4 text-right">
                      <div class="hidden sm:block">
                        <span class="font-mono text-xs font-bold block text-stone-900">{{ work.duration }}</span>
                      </div>
                      <span class="material-icons transition-transform text-lg text-stone-600" [class.rotate-180]="activeExp() === i">
                        expand_more
                      </span>
                    </div>
                  </button>

                  <!-- Accordion Content -->
                  @if (activeExp() === i) {
                    <div class="border-t border-[#121212]/10 bg-[#FDFCF7]/30 p-6 space-y-4">
                      
                      <!-- Metrics pills if any -->
                      @if (work.metrics && work.metrics.length > 0) {
                        <div class="flex flex-wrap gap-4 bg-white p-3 border border-[#121212]/10">
                          @for (met of work.metrics; track met.label) {
                            <div class="flex items-center gap-2">
                              <span class="h-1.5 w-1.5 rounded-full bg-[#A44322]"></span>
                              <span class="text-[11px] font-mono font-bold text-stone-600">{{ met.label }}:</span>
                              <span class="text-xs font-mono font-bold text-[#A44322]">{{ met.value }}</span>
                            </div>
                          }
                        </div>
                      }

                      <!-- Bullet points text -->
                      <ul class="list-disc list-outside pl-5 space-y-2 text-xs text-stone-700 leading-relaxed text-justify">
                        @for (bullet of work.bullets; track bullet) {
                          <li>{{ bullet }}</li>
                        }
                      </ul>

                      <!-- Tools tag registry -->
                      @if (work.tools) {
                        <div class="flex flex-wrap gap-1.5 pt-2">
                          @for (tool of work.tools; track tool) {
                            <span class="px-2 py-0.5 bg-[#121212]/5 text-[#121212] border border-[#121212]/10 font-mono text-[9px] uppercase tracking-wider">
                              {{ tool }}
                            </span>
                          }
                        </div>
                      }
                    </div>
                  }
                </div>
              }
            </div>
          </section>

          <!-- Selected Project Showcase -->
          <section id="projects">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-baseline mb-6 border-b border-[#121212] pb-4 gap-4">
              <div>
                <h2 class="text-xs uppercase tracking-[0.3em] font-mono font-black text-[#A44322]">./projects_log</h2>
                <p class="text-xs text-stone-500 mt-1">Proof of engineering execution across categories</p>
              </div>
              
              <!-- Filter Tabs -->
              <div class="flex flex-wrap gap-1 bg-[#121212]/5 p-1 border border-[#121212]/10 text-xs font-mono">
                @for (cat of categories; track cat) {
                  <button (click)="changeFilter(cat)" 
                          class="px-3 py-1 cursor-pointer transition-all border-none"
                          [class.bg-[#121212]]="selectedFilter() === cat"
                          [class.text-[#FDFCF7]]="selectedFilter() === cat"
                          [class.opacity-60]="selectedFilter() !== cat"
                          id="filter_btn_{{cat.replace(' ', '_')}}">
                    {{ cat }}
                  </button>
                }
              </div>
            </div>

            <!-- Empty State for filters -->
            @if (filteredProjects().length === 0) {
              <div class="border border-[#121212] p-12 bg-white text-center">
                <span class="material-icons text-4xl text-stone-300">folder_open</span>
                <p class="text-sm font-mono mt-4 font-bold text-stone-600">No project logs under "{{ selectedFilter() }}"</p>
                <button (click)="changeFilter('All')" class="mt-4 px-4 py-2 border border-[#121212] text-xs font-mono uppercase bg-[#121212] text-white">Reset filter</button>
              </div>
            }

            <!-- Project Cards Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              @for (proj of filteredProjects(); track proj.id) {
                <div class="border border-[#121212] bg-white flex flex-col justify-between hover:shadow-lg transition-shadow" id="project_card_{{proj.id}}">
                  
                  <!-- Project Image or Scenic Block -->
                  <div class="relative h-48 bg-stone-100 border-b border-[#121212] overflow-hidden">
                    <img [src]="proj.imageUrl" [alt]="proj.title" class="w-full h-full object-cover grayscale transition-all duration-500 hover:grayscale-0">
                    <div class="absolute top-3 left-3 bg-[#121212] text-white font-mono text-[9px] uppercase tracking-widest px-2.5 py-0.5 border border-white/20">
                      {{ proj.category }}
                    </div>
                    <div class="absolute bottom-3 right-3 bg-white text-[#121212] border border-[#121212] font-mono text-[10px] font-bold px-2 py-0.5">
                      {{ proj.year }}
                    </div>
                  </div>

                  <!-- Text Block -->
                  <div class="p-6 flex-1 flex flex-col justify-between gap-4">
                    <div class="space-y-2">
                      <span class="text-[10px] uppercase font-mono tracking-widest text-[#A44322] font-bold block">
                        {{ proj.organization }} &bull; {{ proj.role }}
                      </span>
                      <h4 class="text-xl font-bold font-display underline underline-offset-4 decoration-stone-300 leading-tight">
                        {{ proj.title }}
                      </h4>
                      <p class="text-xs text-stone-600 leading-relaxed text-justify mt-2">
                        {{ proj.description }}
                      </p>
                    </div>

                    <!-- Highlight Highlights list -->
                    <div class="border-t border-b border-[#121212]/10 py-3 space-y-1 bg-[#FDFCF7]/30 px-2 rounded">
                      <p class="text-[10px] font-mono font-bold uppercase tracking-wider text-stone-500">Key Records:</p>
                      @for (hl of proj.highlights.slice(0, 2); track hl) {
                        <p class="text-[11px] text-stone-700 leading-normal flex items-start gap-1">
                          <span class="material-icons text-[11px] text-[#A44322] mt-0.5">done</span>
                          <span>{{ hl }}</span>
                        </p>
                      }
                    </div>

                    <!-- Project KPIs grid -->
                    <div class="grid grid-cols-3 gap-2 text-center py-1">
                      @for (kpi of proj.kpis; track kpi.label) {
                        <div class="bg-stone-50 p-1.5 border border-stone-100 rounded">
                          <span class="block text-[8px] uppercase tracking-wider text-stone-400 font-mono">{{ kpi.label }}</span>
                          <span class="block text-xs font-bold font-mono text-[#A44322] truncate" [title]="kpi.value">{{ kpi.value }}</span>
                        </div>
                      }
                    </div>

                    <!-- Tools tag list -->
                    <div class="flex flex-wrap gap-1 mt-1">
                      @for (tool of proj.tools; track tool) {
                        <span class="bg-stone-100 px-2 py-0.5 rounded font-mono text-[9px] uppercase tracking-wider text-stone-600">
                          #{{ tool }}
                        </span>
                      }
                    </div>
                  </div>
                </div>
              }
            </div>

            <!-- Optional Custom Project Adder Block -->
            <div class="border border-dashed border-[#121212]/60 bg-white/50 p-6 sm:p-8 mt-10 rounded-lg">
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-full bg-[#A44322]/10 text-[#A44322] flex items-center justify-center shrink-0">
                  <span class="material-icons">add_link</span>
                </div>
                <div class="flex-1 space-y-4">
                  <div>
                    <h4 class="text-sm font-bold font-mono text-[#121212] uppercase tracking-wider">Expand Workspace Portfolio Logs</h4>
                    <p class="text-xs text-stone-500 leading-normal mt-1">
                      Append your physical construction links, architectural sites, or private portfolio records below to interact with live state data on the page.
                    </p>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-3" id="add_project_form">
                    <input [(ngModel)]="newProjTitle" placeholder="Project Title (e.g. Noida Highrise complex)" class="bg-white border border-[#121212]/20 px-3 py-2 text-xs placeholder-sans lowercase tracking-wide focus:outline-none focus:border-[#A44322]" />
                    <select [(ngModel)]="newProjCategory" class="bg-white border border-[#121212]/20 px-3 py-2 text-xs focus:outline-none focus:border-[#A44322]">
                      <option value="Interior Design">Interior Design</option>
                      <option value="Furniture Design">Furniture Design</option>
                      <option value="Civil Infrastructure">Civil Infrastructure</option>
                      <option value="Operations & Strategy">Operations & Strategy</option>
                    </select>
                    <input [(ngModel)]="newProjOrg" placeholder="Organization (e.g. Livspace)" class="bg-white border border-[#121212]/20 px-3 py-2 text-xs focus:outline-none focus:border-[#A44322]" />
                    <input [(ngModel)]="newProjYear" placeholder="Execution Year (e.g. 2026)" class="bg-white border border-[#121212]/20 px-3 py-2 text-xs focus:outline-none focus:border-[#A44322]" />
                    <input [(ngModel)]="newProjKPI" placeholder="KPI Highlight (e.g. Budget: -4% Under)" class="bg-white border border-[#121212]/20 px-3 py-2 text-xs focus:outline-none focus:border-[#A44322] md:col-span-2" />
                    <textarea [(ngModel)]="newProjDesc" placeholder="Brief project summary and operational outcomes..." rows="2" class="bg-white border border-[#121212]/20 px-3 py-2 text-xs focus:outline-none focus:border-[#A44322] md:col-span-2"></textarea>
                  </div>

                  <button (click)="addCustomProject()" 
                          class="bg-[#121212] text-white hover:bg-[#A44322] transition-colors font-mono uppercase text-[10px] tracking-wider font-extrabold px-5 py-2.5 flex items-center gap-2 cursor-pointer" 
                          id="add_custom_project_btn">
                    <span class="material-icons text-sm">add</span>
                    Register Project Link to state
                  </button>
                </div>
              </div>
            </div>
          </section>

          <!-- Core Competencies Matrix -->
          <section id="skills">
            <div class="border-b border-[#121212] pb-4 mb-6">
              <h2 class="text-xs uppercase tracking-[0.3em] font-mono font-black text-[#A44322]">./competencies_matrix</h2>
              <p class="text-xs text-stone-500 mt-1">Granular scoring metrics matching technical & executive thresholds</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              @for (group of skills(); track group.category) {
                <div class="border border-[#121212] p-6 bg-white flex flex-col justify-between gap-4">
                  <div>
                    <h4 class="text-sm font-bold font-mono uppercase tracking-widest text-[#A44322] mb-4 pb-2 border-b border-stone-100">
                      {{ group.category }}
                    </h4>
                    
                    <div class="space-y-4">
                      @for (sub of group.skills; track sub.name) {
                        <div class="space-y-1">
                          <div class="flex justify-between items-baseline text-xs">
                            <span class="font-bold text-stone-800 leading-tight">{{ sub.name }}</span>
                            <span class="font-mono text-[10px] font-bold text-stone-500">{{ sub.level }}%</span>
                          </div>
                          
                          <!-- Progress Bar -->
                          <div class="h-1.5 w-full bg-stone-100 rounded-full overflow-hidden border border-stone-200/50">
                            <div class="h-full bg-[#121212]" [style.width.%]="sub.level"></div>
                          </div>
                          
                          <p class="text-[10px] text-stone-500 leading-normal">{{ sub.description }}</p>
                        </div>
                      }
                    </div>
                  </div>

                  <div class="pt-2">
                    <span class="text-[9px] uppercase tracking-wider font-mono text-[#A44322] font-semibold">&bull; verified operations standard</span>
                  </div>
                </div>
              }
            </div>
          </section>

          <!-- Education History Registry -->
          <section id="education">
            <div class="border-b border-[#121212]/20 pb-4 mb-6">
              <h2 class="text-xs uppercase tracking-[0.3em] font-mono font-black text-stone-600">./academic_credentials</h2>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              @for (edu of education(); track edu.institution) {
                <div class="border border-[#121212]/10 p-6 bg-[#121212]/5 hover:bg-[#121212]/10 transition-colors">
                  <span class="font-mono text-xs text-stone-500 block uppercase tracking-widest">{{ edu.year }}</span>
                  <h4 class="text-lg font-bold font-display text-[#121212] my-1 leading-tight">{{ edu.institution }}</h4>
                  <p class="text-xs uppercase tracking-widest font-mono text-[#A44322] font-bold">{{ edu.degree }}</p>
                </div>
              }
            </div>
          </section>

        </main>
      </div>

      <!-- Centered Editorial Footer -->
      <footer class="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 mt-20 pt-8 border-t border-[#121212] flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.4em] font-mono text-stone-500">
        <span>Folio — Version 2026.06</span>
        <span>Bhubaneswar, Odisha, India</span>
        <span>&copy; 2026 Trilokesh Samal &bull; All Rights Reserved</span>
      </footer>
    </div>
  `,
  styles: `
    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .no-scrollbar {
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
    }
  `
})
export class Portfolio {
  personalInfo = signal(PERSONAL_INFO);
  education = signal(EDUCATION_HISTORY);
  skills = signal(SKILLS_DATA);
  experience = signal(WORK_EXPERIENCE);
  projects = signal<ProjectItem[]>(INITIAL_PROJECTS);
  achievements = signal(KEY_ACHIEVEMENTS);

  categories = ['All', 'Interior Design', 'Furniture Design', 'Civil Infrastructure', 'Operations & Strategy'];
  selectedFilter = signal<string>('All');
  activeExp = signal<number>(0);

  // Form states for custom project register
  newProjTitle = '';
  newProjCategory: 'Interior Design' | 'Furniture Design' | 'Civil Infrastructure' | 'Operations & Strategy' = 'Interior Design';
  newProjOrg = '';
  newProjYear = '2026';
  newProjKPI = 'Budget: 100% on Target';
  newProjDesc = '';

  filteredProjects = computed(() => {
    const filter = this.selectedFilter();
    if (filter === 'All') {
      return this.projects();
    }
    return this.projects().filter(p => p.category === filter);
  });

  changeFilter(category: string): void {
    this.selectedFilter.set(category);
  }

  toggleExp(index: number): void {
    if (this.activeExp() === index) {
      this.activeExp.set(-1); // Collapse
    } else {
      this.activeExp.set(index);
    }
  }

  addCustomProject(): void {
    if (!this.newProjTitle.trim() || !this.newProjDesc.trim()) {
      alert('Please fill out at least Title and Description parameters to register standard log data.');
      return;
    }

    const uniqueId = 'custom_' + Date.now();
    const parsedKPIs = [
      { label: 'Variance', value: '0% Standard' },
      { label: 'Log Status', value: 'Live Draft' }
    ];

    if (this.newProjKPI.trim()) {
      const splitPair = this.newProjKPI.split(':');
      if (splitPair.length === 2) {
        parsedKPIs.push({ label: splitPair[0].trim(), value: splitPair[1].trim() });
      } else {
        parsedKPIs.push({ label: 'Outcome', value: this.newProjKPI.trim() });
      }
    }

    const newProject: ProjectItem = {
      id: uniqueId,
      title: this.newProjTitle.trim(),
      category: this.newProjCategory,
      organization: this.newProjOrg.trim() || 'Independent Practice',
      role: 'Project Lead',
      year: this.newProjYear.trim() || '2026',
      description: this.newProjDesc.trim(),
      highlights: ['Manually appended to local database state', 'Validated against custom workspace settings'],
      tools: ['AutoCAD', 'Structural Estimation'],
      kpis: parsedKPIs,
      imageUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=400&q=80', // standard blueprint backdrop
      isCustom: true
    };

    this.projects.set([newProject, ...this.projects()]);

    // Reset inputs
    this.newProjTitle = '';
    this.newProjOrg = '';
    this.newProjYear = '2026';
    this.newProjKPI = 'Budget: 100% on Target';
    this.newProjDesc = '';
  }
}
