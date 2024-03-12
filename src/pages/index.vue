<template>
  <!-- Hero Panel -->
  <section class="dark:bg-gray-800 dark:text-gray-100">
    <div
      class="max-w-8xl container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between"
    >
      <div
        class="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-3xl xl:max-w-4xl lg:text-left"
      >
        <!-- Adjusted max-width here -->
        <span class="block mb-2 dark:text-violet-400 text-xl"
          >Parmazip Pharmacy Management System (PMS)</span
        >
        <h1 class="text-5xl font-bold leadi sm:text-7xl">
          The 'All-in-One' PMS for community drugstores.
        </h1>
        <p class="mt-6 mb-8 text-lg sm:mb-12">
          Modernize your pharmacy operations with a BIR-accredited POS and
          Inventory system designed for pharmacies in the Philippines. It works
          offline, too!
        </p>
        <div
          class="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start"
        >
          <a
            rel="noopener noreferrer"
            href="#"
            class="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900 bg-red-400 text-white"
            >Join the waitlist</a
          >
        </div>
      </div>

      <div
        class="flex items-center justify-center p-6 mt-8 lg:mt-0 h-[desired-height] sm:h-[desired-height] lg:h-[desired-height] xl:h-[desired-height] 2xl:h-[desired-height]"
      >
        <img
          src="../assets/images/parmazip-hero.png"
          alt=""
          class="rounded-3xl object-contain h-[desired-height] sm:h-[desired-height] lg:h-[desired-height] xl:h-[desired-height] 2xl:h-[desired-height]"
        />
      </div>
    </div>
  </section>

  <!-- Problem Panel -->

  <section class="bg-white mb-20">
    <div
      class="container flex flex-col items-center px-4 py-16 pb-8 mx-auto text-center lg:pb-8 md:py-32 md:px-10 lg:px-32 dark:text-gray-900 bg-white"
    >
      <h1
        class="-mt-10 font-bold text-6xl leadi sm:text-5xl xl:max-w-4xl dark:text-gray-900 font-inter text-gray-800"
      >
        Why do you need a PMS?
      </h1>
      <p
        class="max-w-5xl mx-auto mt-4 text-xl dark:text-gray-400 font-inter text-gray-500"
      >
        Getting things organized to grow and establish a pharmacy business can
        be tough.
      </p>
    </div>

    <generic-panel>
      <div class="grid grid-cols-1 md:grid-cols-3 justify-center gap-10">
        <div class="flex flex-col items-center">
          <img
            class="mb-4 rounded-xl"
            width="max"
            src="../assets/images/parmazip-problem-1.png"
            alt="parmazip"
          />
          <h2 class="uppercase text-lg text-center font-bold mb-4">
            Analog Setup
          </h2>
          <p class="text-center text-md">
            You’re tired of using multiple Excel sheets and paperwork to
            collect, organize, and manage your medicine sales and supplies.
          </p>
        </div>
        <div class="flex flex-col items-center">
          <img
            class="mb-4 rounded-xl"
            width="max"
            src="../assets/images/parmazip-problem-2.png"
            alt="parmazip"
          />
          <h2 class="uppercase text-lg text-center font-bold mb-4">
            Incomplete System
          </h2>
          <p class="text-center text-md">
            Your current POS and Inventory software is incomplete - no medicine
            expiry tracker, not BIR-accredited, no pharmacy tools...
          </p>
        </div>
        <div class="flex flex-col items-center">
          <img
            class="mb-4 rounded-xl"
            width="max"
            src="../assets/images/parmazip-problem-3.png"
            alt="parmazip"
          />
          <h2 class="uppercase text-lg text-center font-bold mb-4">
            Inefficient workflow
          </h2>
          <p class="text-center text-md">
            You want to improve your pharmacy practice so that your customers
            will always choose you for prescription refills.
          </p>
        </div>
      </div>
    </generic-panel>
  </section>

  <!-- SOLUTION -->
  <generic-panel class="max-w-7xl border rounded-3xl border-gray-500">
    <section class="dark:bg-gray-800 dark:text-gray-100">
      <!-- logo-center -->
      <div class="logo-container">
        <img
          src="../assets/images/parmazip-logo.png"
          alt="Logo"
          class="logo mt-20"
        />
      </div>
      <div
        class="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl"
      >
        <div>
          <h2
            class="-mt-10 text-3xl font-bold tracki text-center sm:text-5xl dark:text-gray-50"
          >
            Here comes Parmazip!
          </h2>
          <p
            class="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-400"
          >
            The 'All-in-One' Pharmacy Management System.
          </p>
        </div>
        <div class="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <!-- <h3 class="text-2xl font-bold tracki sm:text-3xl dark:text-gray-50">
              Ad vix debet docendi
            </h3>
            <p class="mt-3 text-lg dark:text-gray-400">
              Ne dicta praesent ocurreret has, diam theophrastus at pro. Eos
              etiam regione ut, persius eripuit quo id. Sit te euismod
              tacimates.
            </p> -->
            <div class="mt-5 space-y-12">
              <div class="flex">
                <div class="flex-shrink-0">
                  <div
                    class="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      class="w-7 h-7"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h4 class="text-3xl font-medium leadi dark:text-gray-50">
                    Designed for community pharmacies
                  </h4>
                  <p class="mt-2 dark:text-gray-400">
                    We built a system that addresses the unique needs of
                    community pharmacies with tools that empower and elevate
                    your pharmacy practice and business
                  </p>
                </div>
              </div>

              <div class="flex">
                <div class="flex-shrink-0">
                  <div
                    class="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      class="w-7 h-7"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h4 class="text-3xl font-medium leadi dark:text-gray-50">
                    Manage medicines and prescriptions
                  </h4>
                  <p class="mt-2 dark:text-gray-400">
                    Have all prescriptions and your customers’ data securely
                    stored in one place so you can personalize patient care and
                    serve them better.
                  </p>
                </div>
              </div>

              <div class="flex">
                <div class="flex-shrink-0">
                  <div
                    class="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      class="w-7 h-7"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h4 class="text-3xl font-medium leadi dark:text-gray-50">
                    Powerful POS and Inventory System
                  </h4>
                  <p class="mt-2 dark:text-gray-400">
                    It is equipped with a user-friendly interface that uses the
                    latest technologies and robust features to efficiently
                    manage your retail pharmacy.
                  </p>
                </div>
              </div>

              <div class="flex">
                <div class="flex-shrink-0">
                  <div
                    class="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      class="w-7 h-7"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h4 class="text-3xl font-medium leadi dark:text-gray-50">
                    BIR-Accredited POS Provider
                  </h4>
                  <p class="mt-2 dark:text-gray-400">
                    We made sure you stay compliant with the receipt and
                    reporting requirements of the BIR to prevent any penalties
                    and maintain accurate reporting.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" class="mt-10 lg:mt-0">
            <img
              src="../assets/images/parmazip-fly.png"
              alt=""
              class="mx-auto dark:bg-gray-500"
            />
          </div>
        </div>
      </div>
    </section>
  </generic-panel>

  <!-- DEMO VIDEO -->
  <section>
    <div class="dark:bg-violet-400">
      <div
        class="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900"
      >
        <h1
          class="text-5xl font-bold leadi sm:text-6xl xl:max-w-3xl dark:text-gray-900"
        >
          How it Works
        </h1>
        <p class="mt-6 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900">
          Point-of-sale and Pharmacy Management System rolled into one
          purpose-built platform.
        </p>
        <div class="flex flex-wrap justify-center">
          <button
            type="button"
            class="px-8 py-3 m-2 text-lg font-semibold bg-red-400 text-white rounded dark:bg-gray-800 dark:text-gray-50"
          >
            Join the Waitlist
          </button>
        </div>
      </div>
    </div>
    <img
      src="../assets/images/parmazip-video.png"
      alt=""
      class="w-2/4 mx-auto mb-12 -mt-30 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500"
    />
  </section>

  <!-- Whats INSIDE Parmazip -->

  <section class="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100 mb-40">
    <div class="max-w-6xl container mx-auto space-y-12">
      <div class="flex flex-col overflow-hidden lg:flex-row">
        <img
          src="../assets/images/parmazip-how-1.png"
          alt=""
          class="h-80 dark:bg-gray-500 aspect-video"
        />
        <div class="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
          <!-- <span class="text-xs uppercase dark:text-gray-400"
            >Join, it's free</span
          > -->
          <h3 class="text-3xl font-bold">Key Pharmacy Tools</h3>
          <p class="my-6 dark:text-gray-400">
            Elevate your pharmacy experience with efficiency, accuracy, and
            top-tier customer care.
          </p>
          <ul class="list-disc pl-5 space-y-2">
            <li>Prescription history tracking</li>
            <li>Prescription refills</li>
            <li>Dangerous drugs dispense tracker</li>
            <li>Patient record management</li>
          </ul>
        </div>
      </div>
      <div class="flex flex-col overflow-hidden lg:flex-row-reverse">
        <img
          src="../assets/images/parmazip-how-2.png"
          alt=""
          class="h-80 dark:bg-gray-500 aspect-video"
        />
        <div class="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
          <h3 class="text-3xl font-bold text-right">Powerful Point of Sale</h3>
          <p class="my-6 dark:text-gray-400 text-right">
            Revolutionize pharmacy operations with our specialized POS feature.
          </p>
          <ul class="list-disc pl-5 space-y-2 ml-auto w-max">
            <li>Beautiful digital and printable receipts</li>
            <li>Record discounts and coverages</li>
            <li>Capture prescription information</li>
            <li>Store customer info for future reference</li>
          </ul>
        </div>
      </div>
      <div class="flex flex-col overflow-hidden lg:flex-row">
        <img
          src="../assets/images/parmazip-how-3.png"
          alt=""
          class="h-80 dark:bg-gray-500 aspect-video"
        />
        <div class="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
          <h3 class="text-3xl font-bold">Inventory Management that matters</h3>
          <p class="my-6 dark:text-gray-400">
            Seamlessly track expiration dates with precision, ensuring product
            freshness and regulatory compliance.
          </p>
          <ul class="list-disc pl-5 space-y-2">
            <li>Easily import products using AI</li>
            <li>Track medication expirations</li>
            <li>Produce daily and weekly reports</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- AND ALL THE TOOLS -->
  <section class="mt-20">
    <div
      class="-mt-40 px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-8 lg:py-20 dark:bg-gray-800 dark:text-gray-100"
    >
      <h2 class="mb-8 text-4xl font-bold leadi text-center">
        Plus all the tools made to simplify and automate your workflow and
        practice.
      </h2>
      <ul class="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        <li class="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="w-5 h-5 fill-current dark:text-violet-400"
          >
            <path
              d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"
            ></path>
            <polygon
              points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"
            ></polygon>
          </svg>
          <span>Sales invoicing</span>
        </li>
        <li class="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="w-5 h-5 fill-current dark:text-violet-400"
          >
            <path
              d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"
            ></path>
            <polygon
              points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"
            ></polygon>
          </svg>
          <span>Receipt generation </span>
        </li>
        <li class="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="w-5 h-5 fill-current dark:text-violet-400"
          >
            <path
              d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"
            ></path>
            <polygon
              points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"
            ></polygon>
          </svg>
          <span>Multiple payments</span>
        </li>
        <li class="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="w-5 h-5 fill-current dark:text-violet-400"
          >
            <path
              d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"
            ></path>
            <polygon
              points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"
            ></polygon>
          </svg>
          <span>Sales & gross profit reports</span>
        </li>
        <li class="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="w-5 h-5 fill-current dark:text-violet-400"
          >
            <path
              d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"
            ></path>
            <polygon
              points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"
            ></polygon>
          </svg>
          <span>Barcode scanning</span>
        </li>
        <li class="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="w-5 h-5 fill-current dark:text-violet-400"
          >
            <path
              d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"
            ></path>
            <polygon
              points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"
            ></polygon>
          </svg>
          <span>Inventory tracking</span>
        </li>
        <li class="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="w-5 h-5 fill-current dark:text-violet-400"
          >
            <path
              d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"
            ></path>
            <polygon
              points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"
            ></polygon>
          </svg>
          <span>Stock level alerts</span>
        </li>
        <li class="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="w-5 h-5 fill-current dark:text-violet-400"
          >
            <path
              d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"
            ></path>
            <polygon
              points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"
            ></polygon>
          </svg>
          <span>AI-enabled import tool</span>
        </li>
        <li class="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="w-5 h-5 fill-current dark:text-violet-400"
          >
            <path
              d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"
            ></path>
            <polygon
              points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"
            ></polygon>
          </svg>
          <span>Auto-reorder</span>
        </li>
        <li class="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="w-5 h-5 fill-current dark:text-violet-400"
          >
            <path
              d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"
            ></path>
            <polygon
              points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"
            ></polygon>
          </svg>
          <span>P2P capability</span>
        </li>
        <li class="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="w-5 h-5 fill-current dark:text-violet-400"
          >
            <path
              d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"
            ></path>
            <polygon
              points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"
            ></polygon>
          </svg>
          <span>User roles & access</span>
        </li>
        <li class="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="w-5 h-5 fill-current dark:text-violet-400"
          >
            <path
              d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"
            ></path>
            <polygon
              points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"
            ></polygon>
          </svg>
          <span>Centralized patient database</span>
        </li>
        <li class="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="w-5 h-5 fill-current dark:text-violet-400"
          >
            <path
              d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"
            ></path>
            <polygon
              points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"
            ></polygon>
          </svg>
          <span>Prescription management</span>
        </li>
        <li class="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="w-5 h-5 fill-current dark:text-violet-400"
          >
            <path
              d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"
            ></path>
            <polygon
              points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"
            ></polygon>
          </svg>
          <span>Near-expiry alerts</span>
        </li>
        <li class="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="w-5 h-5 fill-current dark:text-violet-400"
          >
            <path
              d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"
            ></path>
            <polygon
              points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"
            ></polygon>
          </svg>
          <span>QX and Z reading reports</span>
        </li>
        <li class="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="w-5 h-5 fill-current dark:text-violet-400"
          >
            <path
              d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"
            ></path>
            <polygon
              points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"
            ></polygon>
          </svg>
          <span>EHR integration</span>
        </li>
        <li class="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="w-5 h-5 fill-current dark:text-violet-400"
          >
            <path
              d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"
            ></path>
            <polygon
              points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"
            ></polygon>
          </svg>
          <span>PSC/PWD/Controlled substance tracking</span>
        </li>
        <li class="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="w-5 h-5 fill-current dark:text-violet-400"
          >
            <path
              d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"
            ></path>
            <polygon
              points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"
            ></polygon>
          </svg>
          <span>In-app FAQs & tutorials</span>
        </li>
        <li class="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="w-5 h-5 fill-current dark:text-violet-400"
          >
            <path
              d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"
            ></path>
            <polygon
              points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"
            ></polygon>
          </svg>
          <span>Email support</span>
        </li>
      </ul>
    </div>
  </section>

  <!-- MORE PARMAZIP DETAILS -->
  <section>
    <div
      class="container flex flex-col items-center px-4 py-16 pb-8 mx-auto text-center lg:pb-8 md:py-32 md:px-10 lg:px-32 dark:text-gray-900 bg-white"
    >
      <h1
        class="-mt-10 font-bold text-6xl leadi sm:text-5xl xl:max-w-4xl dark:text-gray-900 font-inter text-gray-800"
      >
        Why Parmazip?
      </h1>
      <!-- <p
        class="max-w-5xl mx-auto mt-4 text-xl dark:text-gray-400 font-inter text-gray-500"
      >
        aka the 'All-in-One' Pharmacy Management System
      </p> -->
    </div>
    <!-- 3 Descriptions -->
    <!-- CARDS HERE -->

    <div
      class="max-w-7xl mx-auto dark:bg-gray-800 dark:text-gray-100 text-gray-700"
    >
      <div class="flex flex-col md:flex-row justify-center mt-4">
        <!--Card 1  -->

        <div
          class="mx-2 w-full md:w-1/3 card card-compact w-96 bg-white shadow-lg border-gray-300 rounded-3xl border"
          ,
          data-aos="zoom-in"
        >
          <figure class="pt-3 px-3">
            <img
              src="../assets/images/parmazip-feature-1.png"
              alt="Shoes"
              class="border rounded-xl"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title text-center">
              Stay organized and be proactive.
            </h2>
            <p>
              On top of the standard sales and inventory tools of a POS,
              Parmazip offers pharmacy-centric features such as prescription log
              sheet, medication expiry alerts, dangerous drugs monitoring, and
              multi-user collaborative access, all while staying BIR-compliant.
            </p>
          </div>
        </div>

        <!-- Card 2 -->
        <div
          class="mx-2 w-full md:w-1/3 card card-compact w-96 bg-white shadow-lg border-gray-300 rounded-3xl border"
          ,
          data-aos="zoom-in"
        >
          <figure class="pt-3 px-3">
            <img
              src="../assets/images/parmazip-feature-2.png"
              alt="Shoes"
              class="border rounded-xl"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title text-center">
              Work offline with peace of mind.
            </h2>
            <p>
              Protect your pharmacy’s data with new technology that puts data
              privacy and security first! Utilize a standalone system and
              collaborate with users locally through a sync framework even
              without internet connection. Get data when you need it, as you
              need it.
            </p>
            <!-- <div class="card-actions justify-end">
    <button class="btn btn-primary">Buy Now</button>
</div> -->
          </div>
        </div>

        <!-- Card 3 -->
        <div
          class="mx-2 w-full md:w-1/3 card card-compact w-96 bg-white shadow-lg border-gray-300 rounded-3xl border"
          ,
          data-aos="zoom-in"
        >
          <figure class="pt-3 px-3">
            <img
              src="../assets/images/parmazip-feature-3.png"
              alt="Shoes"
              class="border rounded-xl"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title text-center">
              Know and keep your data securely.
            </h2>
            <p>
              Keep all data in a local system and benefit from reports that keep
              you on your toes while staying well-informed. Gain advantage from
              Sales reporting, Inventory analytics, Incoming and outgoing
              summaries, and BIR-compliant reports.
            </p>
            <!-- <div class="card-actions justify-end">
    <button class="btn btn-primary">Buy Now</button>
</div> -->
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Join Panel -->
  <section class="dark:bg-gray-800 dark:text-gray-100">
    <div
      class="max-w-7xl container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between"
    >
      <div
        class="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-3xl xl:max-w-4xl lg:text-left"
      >
        <!-- Adjusted max-width here -->
        <h1 class="text-4xl font-bold leadi sm:text-6xl">
          "I'm running my pharmacy like a pro!"
        </h1>
        <p class="mt-6 mb-8 text-lg sm:mb-12">
          And you can too! Get early access to experience an all-in-one pharmacy
          that supports your business and professional practice.
        </p>
        <div
          class="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start"
        >
          <a
            rel="noopener noreferrer"
            href="#"
            class="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900 bg-red-400 text-white"
            >Join the waitlist</a
          >
        </div>
      </div>
      <div
        class="flex items-center justify-center p-6 mt-8 lg:mt-0 h-[desired-height] sm:h-[desired-height] lg:h-[desired-height] xl:h-[desired-height] 2xl:h-[desired-height]"
      >
        <img
          src="../assets/images/parmazip-lady.png"
          alt=""
          class="rounded-3xl object-contain h-[desired-height] sm:h-[desired-height] lg:h-[desired-height] xl:h-[desired-height] 2xl:h-[desired-height]"
        />
      </div>
    </div>
  </section>

  <!-- FOOTER -->

  <div class="dark:bg-gray-800 dark:text-gray-100 my-30">
    <footer class="px-4 divide-y dark:bg-gray-800 dark:text-gray-100">
      <div
        class="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0"
      >
        <div class="lg:w-1/3">
          <a
            rel="noopener noreferrer"
            href="#"
            class="flex justify-center space-x-3 lg:justify-start"
          >
            <div
              class="flex items-left justify-left h-10 rounded-full dark:bg-default-400"
            >
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Back to homepage"
                class="flex items-center"
              >
                <img
                  src="../assets/images/parmazip-logo-long.png"
                  alt="Your Logo"
                  class="object-contain h-10 mt-1 w-auto dark:text-default-400"
                />
              </a>
              <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" class="flex-shrink-0 w-5 h-5 rounded-full dark:text-gray-900">
							<path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
						</svg> -->
            </div>
            <!-- <span class="self-center text-2xl font-semibold">EasyJoey</span> -->
          </a>
        </div>
        <div
          class="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4"
        >
          <div class="space-y-3">
            <h3 class="tracki uppercase dark:text-gray-50">Product</h3>
            <ul class="space-y-1">
              <li>
                <a rel="noopener noreferrer" href="#">Features</a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">Integrations</a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">Pricing</a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">FAQ</a>
              </li>
            </ul>
          </div>
          <div class="space-y-3">
            <h3 class="tracki uppercase dark:text-gray-50">Company</h3>
            <ul class="space-y-1">
              <li>
                <a rel="noopener noreferrer" href="#">Privacy</a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">Terms of Service</a>
              </li>
            </ul>
          </div>
          <div class="space-y-3">
            <h3 class="uppercase dark:text-gray-50">Developers</h3>
            <ul class="space-y-1">
              <li>
                <a rel="noopener noreferrer" href="#">Public API</a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">Documentation</a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">Guides</a>
              </li>
            </ul>
          </div>
          <div class="space-y-3">
            <div class="uppercase dark:text-gray-50">Social media</div>
            <div class="flex justify-start space-x-3">
              <a
                rel="noopener noreferrer"
                href="#"
                title="Facebook"
                class="flex items-center p-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  class="w-5 h-5 fill-current"
                >
                  <path
                    d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"
                  ></path>
                </svg>
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                title="Twitter"
                class="flex items-center p-1"
              >
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 fill-current"
                >
                  <path
                    d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"
                  ></path>
                </svg>
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                title="Instagram"
                class="flex items-center p-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  class="w-5 h-5 fill-current"
                >
                  <path
                    d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="py-6 text-sm text-center dark:text-gray-400">
        © 2024 Parmazip. All rights reserved.
      </div>
    </footer>
  </div>
</template>

<script>
import { useHead } from "#app";
import { definePageMeta } from "#imports";
import GenericPanel from "~/components/commons/GenericPanel";
import ogBanner from "../assets/images/parmazip-banner.png";
import featuresInventory from "../assets/images/features-inventory.png";
import featuresPOS from "../assets/images/features-pos.png";
import featuresReports from "../assets/images/features-reports.png";

export default {
  components: {
    GenericPanel,
  },
  setup() {
    definePageMeta({
      layout: "default",
    });

    useHead({
      title: "Parmazip",
      description: "The 'All-in-One' Pharmacy Management System.",
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
      meta: [
        {
          hid: "og:image",
          name: "og:image",
          property: "og:image",
          content: ogBanner,
        },
      ],
    });

    const features = [
      {
        src: featuresPOS,
        title: "Powerful Point-of-Sale",
        description: "Description here",
        alt: "Point-of-sales",
      },
      {
        src: featuresInventory,
        title: "Inventory Tracking",
        description: "DEscription here",
        alt: "Inventory tracking",
      },
      {
        src: featuresReports,
        title: "Pharmacy Tools",
        description: "Description here",
        alt: "Smart reports",
      },
    ];

    return {
      features,
    };
  },
};
</script>

<style scoped>
.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px; /* Adjust the margin as needed */
  margin-top: -80px;
}

/* Style for the logo */
.logo {
  max-width: 100px; /* Set the maximum width of your logo */
  height: auto; /* Maintain the aspect ratio */
  margin-right: 10px; /* Adjust the margin as needed */
}
</style>
