<script lang="ts">
  import logoSrc from '$lib/assets/logo.png';
  import { Heart, ArrowUp } from '@lucide/svelte';

  const currentYear = new Date().getFullYear();

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
</script>

<footer class="border-t border-[var(--border-color)] bg-[var(--bg-card)]/40 transition-colors">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
      <!-- Col 1: Brand Info -->
      <div class="md:col-span-2 space-y-4">
        <div class="flex items-center gap-3">
          <div class="p-1 rounded-xl bg-[var(--gold)]/10 border border-[var(--gold)]/20">
            <img src={logoSrc} alt="BettyDiction Logo" class="h-8 w-auto" />
          </div>
          <span class="font-extrabold text-lg text-[var(--gold)] tracking-tight">BettyDiction Academy</span>
        </div>
        <p class="text-sm text-[var(--text-muted)] max-w-sm font-light leading-relaxed">
          Empowering educators, students, and professionals with structured English curriculums, phonetics mastery, and professional communication tools.
        </p>
      </div>

      <!-- Col 2: Quick Links -->
      <div>
        <h4 class="text-xs uppercase font-bold tracking-wider text-[var(--text-primary)] mb-4">Quick Links</h4>
        <ul class="space-y-2.5 text-sm font-light">
          <li><a href="#home" class="text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors">Home</a></li>
          <li><a href="#shop" class="text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors">Shop Resources</a></li>
          <li><a href="#about" class="text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors">About Us</a></li>
          <li><a href="#contact" class="text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors">Contact</a></li>
        </ul>
      </div>

      <!-- Col 3: Legal & Support -->
      <div>
        <h4 class="text-xs uppercase font-bold tracking-wider text-[var(--text-primary)] mb-4">Support</h4>
        <ul class="space-y-2.5 text-sm font-light">
          <li><a href="#shop" class="text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors">Payment FAQ</a></li>
          <li><a href="#contact" class="text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors">Teacher Inquiries</a></li>
          <li><a href="#contact" class="text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors">Terms of Service</a></li>
        </ul>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="pt-8 border-t border-[var(--border-color)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
      <p class="flex items-center gap-1 font-light">
        &copy; {currentYear} BettyDiction Academy. Built with 
        <Heart class="w-3.5 h-3.5 text-[var(--gold)] fill-[var(--gold)] inline" /> 
        for excellence.
      </p>

      <button 
        onclick={scrollToTop}
        class="p-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all flex items-center gap-2 font-semibold"
      >
        <span>Back to Top</span>
        <ArrowUp class="w-4 h-4" />
      </button>
    </div>
  </div>
</footer>