<script lang="ts">
  import { products, type Product } from '$lib/Data/products';
  import { ShoppingCart, Sparkles, BookOpen, ExternalLink, Award } from '@lucide/svelte';

  let selectedCategory = $state('All');

  // Derive unique categories using Svelte 5 $derived
  let categories = $derived(['All', ...Array.from(new Set(products.map((p: Product) => p.category)))]);
  
  // Derive filtered product list reactively
  let filteredProducts = $derived(
    selectedCategory === 'All' 
      ? products 
      : products.filter((p: Product) => p.category === selectedCategory)
  );
</script>

<section id="shop" class="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[var(--border-color)]">
  <!-- Subtle background glow -->
  <div class="absolute right-10 top-1/3 w-[400px] h-[400px] bg-[var(--gold)]/5 rounded-full blur-[140px] pointer-events-none -z-10"></div>

  <!-- Header Section -->
  <div class="text-center max-w-3xl mx-auto mb-16">
    <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--gold)]/30 bg-[var(--bg-card)]/60 backdrop-blur-md mb-4 shadow-sm">
      <Sparkles class="w-4 h-4 text-[var(--gold)] animate-pulse" />
      <span class="text-xs font-bold tracking-wider uppercase text-[var(--gold)]">
        Premium Curriculums & Diction Guides
      </span>
    </div>

    <h2 class="text-3xl sm:text-5xl font-extrabold tracking-tight">
      Educational & <span class="text-[var(--gold)]">Diction Shop</span>
    </h2>
    <p class="text-[var(--text-muted)] mt-4 text-base sm:text-lg font-light leading-relaxed">
      Instantly access structured lesson plans and professional diction eBooks. Select any item to checkout securely via Paystack.
    </p>

    <!-- Category Filter Pills (Glassmorphic) -->
    <div class="flex flex-wrap justify-center gap-2.5 mt-8">
      {#each categories as category}
        <button 
          onclick={() => selectedCategory = category}
          class="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 border backdrop-blur-md
            {selectedCategory === category 
              ? 'bg-[var(--gold)] text-black border-[var(--gold)] shadow-lg shadow-[var(--gold)]/20 scale-105' 
              : 'bg-[var(--bg-card)]/60 text-[var(--text-muted)] border-[var(--border-color)] hover:border-[var(--gold)]/50 hover:text-[var(--text-primary)]'}"
        >
          {category}
        </button>
      {/each}
    </div>
  </div>

  <!-- Product Grid (shadcn Card style with glassmorphism) -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {#each filteredProducts as product (product.id)}
      <div class="group flex flex-col justify-between p-7 rounded-3xl bg-[var(--bg-card)]/70 backdrop-blur-xl border border-[var(--border-color)] hover:border-[var(--gold)] transition-all duration-500 shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-[var(--gold)]/10 hover:-translate-y-1">
        <div>
          <!-- Card Top Row: Category Badge & Special Badge -->
          <div class="flex items-center justify-between mb-4">
            <span class="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--gold)] px-3 py-1 rounded-lg bg-[var(--gold)]/10 border border-[var(--gold)]/20">
              <BookOpen class="w-3.5 h-3.5" />
              {product.category}
            </span>
            {#if product.badge}
              <span class="inline-flex items-center gap-1 text-xs font-extrabold px-2.5 py-1 rounded-lg bg-gradient-to-r from-[var(--gold)] to-amber-300 text-black shadow-sm">
                <Award class="w-3.5 h-3.5" />
                {product.badge}
              </span>
            {/if}
          </div>

          <!-- Title -->
          <h3 class="text-xl font-bold mb-3 text-[var(--text-primary)] group-hover:text-[var(--gold)] transition-colors leading-snug">
            {product.title}
          </h3>

          <!-- Description -->
          <p class="text-sm text-[var(--text-muted)] leading-relaxed font-light mb-6">
            {product.description}
          </p>
        </div>

        <!-- Card Footer: Price & Checkout CTA -->
        <div class="pt-5 border-t border-[var(--border-color)] flex items-center justify-between gap-4 mt-auto">
          <div>
            <span class="text-[11px] uppercase tracking-wider text-[var(--text-muted)] block font-medium">Investment</span>
            <span class="text-2xl font-black text-[var(--gold)] tracking-tight">
              ₦{product.priceNGN.toLocaleString()}
            </span>
          </div>

          <a 
            href={product.paystackUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold bg-[var(--gold)] text-black hover:opacity-95 transition-all text-sm shadow-lg shadow-[var(--gold)]/20 group/btn"
          >
            <ShoppingCart class="w-4 h-4 transition-transform group-hover/btn:scale-110" />
            <span>Buy Now</span>
            <ExternalLink class="w-3.5 h-3.5 opacity-70" />
          </a>
        </div>
      </div>
    {/each}
  </div>
</section>