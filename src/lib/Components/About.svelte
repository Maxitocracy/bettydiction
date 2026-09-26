<script lang="ts">
  import { ShieldCheck, Clock, Award, BookOpen } from '@lucide/svelte';
</script>

<section id="about" class="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[var(--border-color)]">
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    <!-- Left Column: Story & Mission -->
    <div>
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[var(--gold)]/10 text-[var(--gold)] text-xs font-bold uppercase tracking-wider mb-6 border border-[var(--gold)]/20">
        About BettyDiction Academy
      </div>

      <h2 class="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
        Empowering Educators & <span class="text-[var(--gold)]">Transforming Learners</span>
      </h2>
      
      <p class="text-[var(--text-muted)] leading-relaxed text-base sm:text-lg mb-6 font-light">
        BettyDiction Academy was founded with a clear vision: to help learners and teachers communicate with absolute clarity and professional confidence. Effective communication unlocks academic success and career growth.
      </p>
      
      <p class="text-[var(--text-muted)] leading-relaxed text-base sm:text-lg mb-8 font-light">
        We specialize in structured English language instruction, diction refinement, speech work, and curriculum development for primary, junior, and senior secondary schools.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-sm">
          <h4 class="font-bold text-[var(--gold)] text-lg mb-2 flex items-center gap-2">
            <Award class="w-5 h-5" /> Mission
          </h4>
          <p class="text-xs text-[var(--text-muted)] leading-relaxed font-light">
            Provide world-class English language, diction, and communication materials through practical online and offline resources.
          </p>
        </div>
        <div class="p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-sm">
          <h4 class="font-bold text-[var(--gold)] text-lg mb-2 flex items-center gap-2">
            <ShieldCheck class="w-5 h-5" /> Vision
          </h4>
          <p class="text-xs text-[var(--text-muted)] leading-relaxed font-light">
            To be Africa's most trusted English learning academy, helping millions communicate accurately and professionally.
          </p>
        </div>
      </div>
    </div>

    <!-- Right Column: Why Choose BettyDiction -->
    <div class="p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-lg space-y-6">
      <h3 class="text-2xl font-bold border-b border-[var(--border-color)] pb-4 text-[var(--gold)] flex items-center gap-2.5">
        <BookOpen class="w-6 h-6" />
        Why Choose BettyDiction?
      </h3>

      <div class="space-y-6">
        <div class="flex gap-4 items-start">
          <div class="w-10 h-10 rounded-xl bg-[var(--gold)]/10 border border-[var(--gold)]/20 text-[var(--gold)] flex items-center justify-center font-bold text-base shrink-0">
            <Clock class="w-5 h-5" />
          </div>
          <div>
            <h4 class="font-bold text-[var(--text-primary)] text-base">Time-Saving for Teachers</h4>
            <p class="text-sm text-[var(--text-muted)] mt-1 font-light leading-relaxed">Pre-structured, term-ready lesson plans that eliminate tedious weekly preparation.</p>
          </div>
        </div>

        <div class="flex gap-4 items-start">
          <div class="w-10 h-10 rounded-xl bg-[var(--gold)]/10 border border-[var(--gold)]/20 text-[var(--gold)] flex items-center justify-center font-bold text-base shrink-0">
            <ShieldCheck class="w-5 h-5" />
          </div>
          <div>
            <h4 class="font-bold text-[var(--text-primary)] text-base">Curriculum Alignment</h4>
            <p class="text-sm text-[var(--text-muted)] mt-1 font-light leading-relaxed">Fully aligned with national education standards and WAEC/NECO examination requirements.</p>
          </div>
        </div>

        <div class="flex gap-4 items-start">
          <div class="w-10 h-10 rounded-xl bg-[var(--gold)]/10 border border-[var(--gold)]/20 text-[var(--gold)] flex items-center justify-center font-bold text-base shrink-0">
            <Award class="w-5 h-5" />
          </div>
          <div>
            <h4 class="font-bold text-[var(--text-primary)] text-base">Phonetics & Diction Precision</h4>
            <p class="text-sm text-[var(--text-muted)] mt-1 font-light leading-relaxed">Practical phonetic drills designed to build natural, clear, and confident pronunciation.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>