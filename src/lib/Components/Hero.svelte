<script lang="ts">
  import logoSrc from '$lib/assets/logo.svg';

  let { badgeText = 'Master English • Speak with Confidence' }: { badgeText?: string } = $props();
</script>

<section id="home" class="relative overflow-hidden py-24 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
  <!-- Ambient background glow elements (Glassmorphic depth) -->
  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-(--gold)/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
  <div class="absolute top-1/4 left-1/4 w-50 h-50 bg-amber-500/5 rounded-full blur-[90px] pointer-events-none -z-10"></div>

  <!-- Glassmorphic Badge -->
  <div class="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-(--gold)/30 bg-(--bg-card)/60 backdrop-blur-xl mb-8 shadow-lg shadow-black/5">
    <span class="w-2 h-2 rounded-full bg-(--gold) animate-pulse"></span>
    <span class="text-xs font-bold tracking-wider uppercase text-(--gold)">
      {badgeText}
    </span>
  </div>

  <!-- Logo with Glass Frame -->
    <img src={logoSrc} alt="BettyDiction Logo" class="h-28 sm:h-36 w-auto drop-shadow-xl" />
 

  <!-- Headline -->
  <h1 class="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl leading-[1.15]">
    Building Confident Speakers Through <span class="bg-linear-to-r from-(--gold) to-amber-200 bg-clip-text text-transparent">English, Diction & Communication</span>
  </h1>

  <!-- Description -->
  <p class="mt-6 text-lg sm:text-xl text-(--text-muted) max-w-2xl font-light leading-relaxed">
    Empowering teachers, students, and professionals with world-class lesson plans, phonetics resources, and diction mastery tools.
  </p>

  <!-- CTA Buttons with Glassmorphic Overlays -->
  <div class="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
    <a 
      href="#shop" 
      class="w-full sm:w-auto px-8 py-4 rounded-2xl font-bold bg-(--gold) text-black hover:opacity-95 transition-all shadow-lg shadow-(--gold)/20 text-center flex items-center justify-center gap-2 group"
    >
      <span>Browse Shop Resources</span>
      <span class="transition-transform group-hover:translate-x-1">&rarr;</span>
    </a>
    <a 
      href="#about" 
      class="w-full sm:w-auto px-8 py-4 rounded-2xl font-bold border border-(--border-color) bg-(--bg-card)/60 backdrop-blur-xl text-(--text-primary) hover:border-(--gold) hover:bg-(--bg-card) transition-all text-center shadow-sm"
    >
      Our Story
    </a>
  </div>
</section>