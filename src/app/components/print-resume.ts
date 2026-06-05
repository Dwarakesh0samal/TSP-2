import {ChangeDetectionStrategy, Component, signal, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink, Router} from '@angular/router';
import {
  PERSONAL_INFO,
  EDUCATION_HISTORY,
  SKILLS_DATA,
  WORK_EXPERIENCE,
  KEY_ACHIEVEMENTS,
  SkillGroup
} from '../data/cv-data';

@Component({
  selector: 'app-print-resume',
  imports: [CommonModule, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- Top Action Bar (Hides on standard print media) -->
    <div class="no-print bg-slate-900 text-white py-4 px-6 sticky top-0 z-50 shadow-md">
      <div class="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <div class="flex items-center gap-3">
          <button (click)="goBack()" class="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold hover:bg-slate-800 rounded-lg border border-slate-700 transition" id="back_portfolio_btn">
            <span class="material-icons text-sm">arrow_back</span>
            Back to Interactive Portfolio
          </button>
          <div class="h-4 w-[1px] bg-slate-700 hidden sm:block"></div>
          <span class="text-sm font-medium text-slate-300 hidden sm:inline">Print / PDF Download Mode</span>
        </div>
        
        <div class="flex items-center gap-3 w-full sm:w-auto justify-end">
          <span class="text-xs text-slate-400 font-mono hidden md:inline">Optimized for standard A4 Portrait paper</span>
          <button (click)="triggerPrint()" class="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-slate-950 font-bold py-2 px-5 rounded-lg shadow transition cursor-pointer text-sm" id="trigger_pdf_print_btn">
            <span class="material-icons text-lg">picture_as_pdf</span>
            Print / Save as PDF
          </button>
        </div>
      </div>
    </div>

    <!-- Print Canvas (Centered Page Frame) -->
    <div class="bg-slate-100 min-h-screen py-8 px-4 sm:px-6 md:py-16 PRINT_PAGE_CONTAINER">
      <!-- High-fidelity Resume Sheet -->
      <div class="max-w-[800px] mx-auto bg-white p-8 sm:p-12 shadow-xl border border-slate-200/50 print:border-none print:shadow-none print:p-0 flex flex-col gap-6 font-sans select-text">
        
        <!-- Header Profile -->
        <div class="text-center border-b-[3px] border-slate-900 pb-5" id="resume_header">
          <h1 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-2 font-display">{{ info().name }}</h1>
          
          <div class="flex flex-wrap justify-center items-center gap-x-4 gap-y-1.5 text-xs text-slate-700 font-mono" id="resume_contact_grid">
            <span class="flex items-center gap-1">
              <span class="material-icons text-sm text-slate-500">phone</span>
              {{ info().phones[0] }}
            </span>
            <span class="text-slate-300">|</span>
            <span class="flex items-center gap-1">
              <span class="material-icons text-sm text-slate-500">phone</span>
              {{ info().phones[1] }}
            </span>
            <span class="text-slate-300">|</span>
            <span class="flex items-center gap-1">
              <span class="material-icons text-sm text-slate-500">email</span>
              <a href="mailto:{{ info().email }}" class="hover:underline text-slate-900">{{ info().email }}</a>
            </span>
            <span class="text-slate-300">|</span>
            <span class="flex items-center gap-1">
              <span class="material-icons text-sm text-slate-500">place</span>
              {{ info().location }}
            </span>
          </div>
        </div>

        <!-- Section: Profile Summary -->
        <div class="mt-2" id="resume_section_profile">
          <h2 class="text-xs font-bold tracking-widest text-slate-900 uppercase border-b border-slate-300 pb-1 mb-2 font-mono">Profile Summary</h2>
          <p class="text-xs text-slate-700 leading-relaxed text-justify">{{ info().profileSumary }}</p>
        </div>

        <!-- Two Column Skill & Details Alignment -->
        <div class="grid grid-cols-1 md:grid-cols-12 gap-6 mt-2" id="resume_columns_grid">
          
          <!-- Mid-Left Col: Education, Skills Summary, Certifications -->
          <div class="md:col-span-4 flex flex-col gap-4">
            
            <!-- Education -->
            <div id="resume_section_edu">
              <h2 class="text-xs font-bold tracking-widest text-slate-900 uppercase border-b border-slate-300 pb-1 mb-2.5 font-mono">Education</h2>
              <div class="flex flex-col gap-2.5">
                @for (edu of education(); track edu.institution) {
                  <div>
                    <h3 class="text-[11px] font-bold text-slate-900 leading-tight">{{ edu.institution }}</h3>
                    <div class="flex justify-between items-start text-[10px] text-slate-600 mt-0.5">
                      <span>{{ edu.degree }}</span>
                      <span class="font-mono">{{ edu.year }}</span>
                    </div>
                  </div>
                }
              </div>
            </div>

            <!-- Skills -->
            <div id="resume_section_skills">
              <h2 class="text-xs font-bold tracking-widest text-slate-900 uppercase border-b border-slate-300 pb-1 mb-2.5 font-mono">Core Skills</h2>
              <div class="flex flex-col gap-3">
                @for (grp of skills(); track grp.category) {
                  <div>
                    <span class="text-[10px] font-bold text-slate-900 block leading-tight">{{ grp.category }}</span>
                    <p class="text-[10px] text-slate-600 mt-0.5 leading-relaxed">
                      {{ getSkillNames(grp) }}
                    </p>
                  </div>
                }
              </div>
            </div>

            <!-- Certifications -->
            <div id="resume_section_certs">
              <h2 class="text-xs font-bold tracking-widest text-slate-900 uppercase border-b border-slate-300 pb-1 mb-2.5 font-mono">Certifications</h2>
              <div class="flex flex-col gap-1.5">
                @for (cert of info().certifications; track cert) {
                  <span class="text-[10px] text-slate-700 font-medium leading-normal flex items-start gap-1">
                    <span class="material-icons text-[11px] text-slate-400 mt-0.5">check_circle</span>
                    <span>{{ cert }}</span>
                  </span>
                }
              </div>
            </div>

            <!-- Key Achievements Widget (Compact for print) -->
            <div id="resume_section_achieve">
              <h2 class="text-xs font-bold tracking-widest text-slate-900 uppercase border-b border-slate-300 pb-1 mb-2.5 font-mono">Key Highlights</h2>
              <div class="flex flex-col gap-2">
                @for (ach of achievements(); track ach.title) {
                  <div class="bg-slate-50 p-2 rounded border border-slate-100 print:bg-transparent print:border-none print:p-0">
                    <span class="text-[10px] font-bold text-slate-900 block leading-tight">{{ ach.title }}</span>
                    <span class="text-[11px] font-bold text-emerald-700 block my-0.5 font-mono">{{ ach.value }}</span>
                    <p class="text-[9px] text-slate-500 leading-tight">{{ ach.description }}</p>
                  </div>
                }
              </div>
            </div>

          </div>

          <!-- Mid-Right Col: Work History -->
          <div class="md:col-span-8 flex flex-col gap-4">
            <div id="resume_section_exp">
              <h2 class="text-xs font-bold tracking-widest text-slate-900 uppercase border-b border-slate-300 pb-1 mb-3.5 font-mono">Professional Experience</h2>
              
              <div class="flex flex-col gap-4.5">
                @for (work of experience(); track work.company + work.duration) {
                  <div class="flex flex-col gap-1 print:break-inside-avoid">
                    <div class="flex justify-between items-start">
                      <div>
                        <h3 class="text-[11px] font-extrabold text-slate-900 capitalize">{{ work.company }}</h3>
                        <p class="text-[10px] text-slate-600 italic font-medium mt-0.5">{{ work.role }}</p>
                      </div>
                      <div class="text-right">
                        <span class="text-[10px] font-bold text-slate-900 font-mono block">{{ work.duration }}</span>
                        <span class="text-[9px] text-slate-500 font-mono">{{ work.location }}</span>
                      </div>
                    </div>

                    <!-- Bullet items -->
                    <ul class="list-disc list-outside pl-4 flex flex-col gap-1 mt-1">
                      @for (bullet of work.bullets; track bullet) {
                        <li class="text-[10px] text-slate-700 leading-relaxed text-justify">{{ bullet }}</li>
                      }
                    </ul>
                  </div>
                }
              </div>
            </div>
          </div>

        </div>

        <!-- Footer watermark (hides for normal print sheets) -->
        <div class="mt-8 pt-4 border-t border-slate-200 text-center text-[10px] text-slate-400 font-mono flex justify-between items-center no-print">
          <span>Trilokesh Samal &copy; 2026</span>
          <span>Open standard printable PDF resume system</span>
        </div>

      </div>
    </div>
  `,
  styles: `
    @media print {
      body {
        margin: 0;
        padding: 0;
      }
      .no-print {
        display: none !important;
      }
      .PRINT_PAGE_CONTAINER {
        background: transparent !important;
        padding: 0 !important;
      }
    }
  `
})
export class PrintResume {
  private router = inject(Router);

  info = signal(PERSONAL_INFO);
  education = signal(EDUCATION_HISTORY);
  skills = signal(SKILLS_DATA);
  experience = signal(WORK_EXPERIENCE);
  achievements = signal(KEY_ACHIEVEMENTS);

  getSkillNames(group: SkillGroup): string {
    return group.skills.map((s) => s.name).join(', ');
  }

  triggerPrint(): void {
    window.print();
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
