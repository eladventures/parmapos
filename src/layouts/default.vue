<template>
  <div class="bg-white">
    <!-- Removed :data-theme="theme" -->
    <div class="container flex justify-between items-center h-12 mx-auto">
      <div class="flex items-center">
        <a
          rel="noopener noreferrer"
          href="#"
          aria-label="Back to homepage"
          class="flex items-center p-2"
        >
          <img
            src="../assets/images/parmazip-logo-long.png"
            alt="Your Logo"
            class="object-contain h-6 mt-1 w-auto"
          />
        </a>
        <ul class="items-stretch hidden space-x-3 lg:flex">
          <li class="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              class="flex items-center px-4 -mb-1"
              >How it works</a
            >
          </li>
          <li class="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              class="flex items-center px-4 -mb-1"
              >Features</a
            >
          </li>
          <li class="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              class="flex items-center px-4 -mb-1"
              >Pricing</a
            >
          </li>
          <li class="flex">
            <a
              rel="noopener noreferrer"
              href="https://blog.parmazip.com/about/"
              class="flex items-center px-4 -mb-1"
              target="_blank"
              >About</a
            >
          </li>
        </ul>
      </div>
    </div>
    <slot />
  </div>
</template>

<!-- Removed the <script> section entirely as it's no longer needed for fixed theme -->
