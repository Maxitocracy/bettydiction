<script lang="ts">
  import { onMount } from 'svelte';
  import logoSrc from '$lib/assets/logo.png';

  let isDark = $state(true);
  let isMobileMenuOpen = $state(false);

  // Sync theme changes with DOM and localStorage using $effect
  $effect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  });

  onMount(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      isDark = savedTheme === 'dark';
    } else {
      isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
  });

  function toggleTheme() {
    isDark = !isDark;
  }
</script>

<header class="sticky top-0 z-50 backdrop-blur-xl bg-[var(--bg-card)]/70 border-b border-[var(--border-color)] transition-colors duration-300 shadow-lg shadow-black/5">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
    <!-- Logo & Brand -->
    <a href="#home" class="flex items-center gap-3 group">
      <div class="p-1.5 rounded-xl bg-gradient-to-br from-[var(--gold)]/20 to-transparent border border-[var(--gold)]/30 backdrop-blur-md group-hover:border-[var(--gold)] transition-all">
        <img src={logoSrc} alt="BettyDiction Logo" class="h-9 w-auto transition-transform group-hover:scale-105" />
      </div>
      <div class="flex flex-col">
        <span class="font-extrabold text-lg tracking-tight text-[var(--gold)] drop-shadow-sm">
          BettyDiction
        </span>
        <span class="text-[9px] tracking-widest uppercase font-semibold text-[var(--text-muted)]">
          Academy
        </span>
      </div>
    </a>

    <!-- Desktop Navigation Links -->
    <nav class="hidden md:flex items-center gap-8 text-sm font-semibold">
      <a href="#home" class="text-[var(--text-primary)] hover:text-[var(--gold)] transition-colors relative py-1 group">
        Home
        <span class="absolute inset-x-0 bottom-0 h-0.5 bg-[var(--gold)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
      </a>
      <a href="#shop" class="text-[var(--text-primary)] hover:text-[var(--gold)] transition-colors relative py-1 group">
        Shop
        <span class="absolute inset-x-0 bottom-0 h-0.5 bg-[var(--gold)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
      </a>
      <a href="#about" class="text-[var(--text-primary)] hover:text-[var(--gold)] transition-colors relative py-1 group">
        About
        <span class="absolute inset-x-0 bottom-0 h-0.5 bg-[var(--gold)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
      </a>
      <a href="#contact" class="text-[var(--text-primary)] hover:text-[var(--gold)] transition-colors relative py-1 group">
        Contact
        <span class="absolute inset-x-0 bottom-0 h-0.5 bg-[var(--gold)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
      </a>
    </nav>

    <!-- Controls (Theme Switcher + Mobile Toggle) -->
    <div class="flex items-center gap-3">
      <button 
        onclick={toggleTheme}
        aria-label="Toggle theme"
        class="p-2.5 rounded-full border border-[var(--border-color)] bg-[var(--bg-card)]/80 backdrop-blur-md text-[var(--gold)] hover:border-[var(--gold)] hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all focus:outline-none"
      >
        {#if isDark}
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        {:else}
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        {/if}
      </button>

      <button 
        onclick={() => isMobileMenuOpen = !isMobileMenuOpen}
        aria-label="Toggle mobile menu"
        class="md:hidden p-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)]/80 backdrop-blur-md text-[var(--text-primary)] hover:border-[var(--gold)] transition-all"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </div>

  <!-- Mobile Dropdown Menu with Glassmorphism -->
  {#if isMobileMenuOpen}
    <div class="md:hidden border-b border-[var(--border-color)] bg-[var(--bg-card)]/90 backdrop-blur-2xl px-6 py-6 flex flex-col gap-4 text-base font-semibold shadow-xl">
      <a href="#home" onclick={() => isMobileMenuOpen = false} class="text-[var(--text-primary)] hover:text-[var(--gold)] transition-colors">Home</a>
      <a href="#shop" onclick={() => isMobileMenuOpen = false} class="text-[var(--text-primary)] hover:text-[var(--gold)] transition-colors">Shop</a>
      <a href="#about" onclick={() => isMobileMenuOpen = false} class="text-[var(--text-primary)] hover:text-[var(--gold)] transition-colors">About</a>
      <a href="#contact" onclick={() => isMobileMenuOpen = false} class="text-[var(--text-primary)] hover:text-[var(--gold)] transition-colors">Contact</a>
    </div>
  {/if}
</header>