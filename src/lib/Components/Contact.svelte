<script lang="ts">
  import { Mail, Phone, MapPin, Send, CheckCircle2 } from '@lucide/svelte';

  let name = $state('');
  let email = $state('');
  let message = $state('');
  let isSubmitted = $state(false);

  function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    if (!name || !email || !message) return;
    
    // Construct the mailto link parameters
    const recipient = 'bettydiction@gmail.com';
    const subject = encodeURIComponent(`Inquiry from ${name} via BettyDiction Website`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

    // Trigger the email client
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;

    // Show the success state
    isSubmitted = true;
    
    // Reset fields after a delay
    setTimeout(() => {
      name = '';
      email = '';
      message = '';
    }, 3000);
  }
</script>

<section id="contact" class="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[var(--border-color)]">
  <div class="text-center max-w-3xl mx-auto mb-16">
    <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md border border-[var(--gold)]/20 bg-[var(--gold)]/10 text-[var(--gold)] text-xs font-bold uppercase tracking-wider mb-4">
      Get in Touch
    </div>
    <h2 class="text-3xl sm:text-5xl font-extrabold tracking-tight">
      We’d Love to <span class="text-[var(--gold)]">Hear From You</span>
    </h2>
    <p class="text-[var(--text-muted)] mt-4 text-base sm:text-lg font-light leading-relaxed">
      Have questions about our diction lesson plans, teacher training resources, or custom coaching? Drop us a message below.
    </p>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
    <!-- Left Column: Contact Information Cards -->
    <div class="space-y-6 lg:col-span-1">
      <div class="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-sm flex items-start gap-4">
        <div class="w-12 h-12 rounded-xl bg-[var(--gold)]/10 border border-[var(--gold)]/20 text-[var(--gold)] flex items-center justify-center shrink-0">
          <Mail class="w-5 h-5" />
        </div>
        <div>
          <h4 class="text-xs uppercase font-bold tracking-wider text-[var(--text-muted)] mb-1">Email Address</h4>
          <a href="mailto:bettydiction@gmail.com" class="text-sm font-semibold text-[var(--text-primary)] hover:text-[var(--gold)] transition-colors">
            bettydiction@gmail.com
          </a>
        </div>
      </div>

      <div class="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-sm flex items-start gap-4">
        <div class="w-12 h-12 rounded-xl bg-[var(--gold)]/10 border border-[var(--gold)]/20 text-[var(--gold)] flex items-center justify-center shrink-0">
          <Phone class="w-5 h-5" />
        </div>
        <div>
          <h4 class="text-xs uppercase font-bold tracking-wider text-[var(--text-muted)] mb-1">Phone & WhatsApp</h4>
          <a href="tel:+2348032320712" class="text-sm font-semibold text-[var(--text-primary)] hover:text-[var(--gold)] transition-colors">
            +234 (803) 232-0712
          </a>
        </div>
      </div>

      <div class="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-sm flex items-start gap-4">
        <div class="w-12 h-12 rounded-xl bg-[var(--gold)]/10 border border-[var(--gold)]/20 text-[var(--gold)] flex items-center justify-center shrink-0">
          <MapPin class="w-5 h-5" />
        </div>
        <div>
          <h4 class="text-xs uppercase font-bold tracking-wider text-[var(--text-muted)] mb-1">Location</h4>
          <p class="text-sm font-semibold text-[var(--text-primary)]">
            Lagos, Nigeria
          </p>
        </div>
      </div>
    </div>

    <!-- Right Column: Interactive Form -->
    <div class="p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-lg lg:col-span-2">
      {#if isSubmitted}
        <div class="py-16 text-center flex flex-col items-center justify-center space-y-4">
          <div class="w-16 h-16 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/30 text-[var(--gold)] flex items-center justify-center">
            <CheckCircle2 class="w-8 h-8" />
          </div>
          <h3 class="text-2xl font-bold text-[var(--text-primary)]">Opening Email Client...</h3>
          <p class="text-[var(--text-muted)] text-sm max-w-md font-light">
            Thank you for reaching out to BettyDiction Academy. Your message details have been formatted for your email client to send to bettydiction@gmail.com.
          </p>
          <button 
            onclick={() => isSubmitted = false}
            class="mt-4 px-6 py-2.5 rounded-xl font-bold text-xs bg-[var(--gold)] text-black hover:opacity-95 transition-all"
          >
            Send Another Message
          </button>
        </div>
      {:else}
        <form onsubmit={handleSubmit} class="space-y-6">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label for="name" class="block text-xs uppercase font-bold tracking-wider text-[var(--text-muted)] mb-2">Your Name</label>
              <input 
                type="text" 
                id="name" 
                bind:value={name} 
                required 
                placeholder="Enter your name"
                class="w-full px-4 py-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-primary)] focus:border-[var(--gold)] focus:outline-none transition-colors text-sm"
              />
            </div>
            <div>
              <label for="email" class="block text-xs uppercase font-bold tracking-wider text-[var(--text-muted)] mb-2">Email Address</label>
              <input 
                type="email" 
                id="email" 
                bind:value={email} 
                required 
                placeholder="name@example.com"
                class="w-full px-4 py-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-primary)] focus:border-[var(--gold)] focus:outline-none transition-colors text-sm"
              />
            </div>
          </div>

          <div>
            <label for="message" class="block text-xs uppercase font-bold tracking-wider text-[var(--text-muted)] mb-2">Your Message</label>
            <textarea 
              id="message" 
              bind:value={message} 
              required 
              rows="5" 
              placeholder="How can we assist your learning or teaching goals?"
              class="w-full px-4 py-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-primary)] focus:border-[var(--gold)] focus:outline-none transition-colors text-sm resize-none"
            ></textarea>
          </div>

          <button 
            type="submit" 
            class="w-full sm:w-auto px-8 py-4 rounded-xl font-bold bg-[var(--gold)] text-black hover:opacity-95 transition-all shadow-md text-sm flex items-center justify-center gap-2 group"
          >
            <Send class="w-4 h-4 transition-transform group-hover:translate-x-1" />
            <span>Send Message</span>
          </button>
        </form>
      {/if}
    </div>
  </div>
</section>