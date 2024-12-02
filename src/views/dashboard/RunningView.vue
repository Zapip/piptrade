<template>
  <article class="flex flex-col gap-4">
    <section class="flex flex-col gap-2">
      <h1 class="text-4xl font-semibold text-t1 dark:text-t1-dark w-full">Running Transaction</h1>
      <h2 class="text-2xl text-t2 dark:text-t2-dark w-full">Here is the list of your ongoing transactions, don't forget
        to close the transactions that are completed!</h2>
    </section>
    <section class="p-6 bg-background dark:bg-background-dark rounded-3xl">
      <table class="w-full">
        <!-- Table Header -->
        <thead class="bg-input dark:bg-input-dark rounded-xl">
          <tr>
            <th v-for="header in headers" :key="header"
              class="px-2 py-3 font-bold text-t1 dark:text-t1-dark text-center  whitespace-nowrap">
              {{ header }}
            </th>
          </tr>
        </thead>

        <!-- Table Body -->
        <tbody class="divide-y divide-gray-100">
          <tr v-for="(asset, index) in assets" :key="asset.id">
            <!-- No -->
            <td class="px-2 py-4 whitespace-nowrap text-t2 dark:text-t2-dark">
              {{ index + 1 }}
            </td>

            <!-- Asset Name -->
            <td class="px-2 py-4 whitespace-nowrap font-medium text-t2 dark:text-t2-dark">
              {{ asset.name }}
            </td>

            <!-- Asset Type -->
            <td class="px-2 py-4 whitespace-nowrap flex justify-center">
              <span class=" font-medium text-xs rounded px-3" :class="{
                'bg-yellow-100 text-[#ffa500]': asset.type === 'Crypto',
                'bg-blue-100 text-[#0050ff]': asset.type === 'Stock'
              }">
                {{ asset.type }}
              </span>
            </td>

            <!-- Quantity -->
            <td class="px-2 py-4 whitespace-nowrap  text-t2 dark:text-t2-dark ">
              {{ asset.quantity }}
            </td>

            <!-- Final Price -->
            <td class="px-2 py-4 whitespace-nowrap  text-t2 dark:text-t2-dark ">
              Rp{{ formatNumber(asset.finalPrice) }}
            </td>

            <!-- Fee -->
            <td class="px-2 py-4 whitespace-nowrap  text-t2 dark:text-t2-dark">
              Rp{{ asset.fee }}
            </td>

            <!-- Total Spent -->
            <td class="px-2 py-4 whitespace-nowrap  text-t2 dark:text-t2-dark">
              Rp{{ formatNumber(asset.totalSpent) }}
            </td>

            <!-- Status -->
            <td class="px-2 py-4 whitespace-nowrap">
              <span class="px-3 text-xs font-medium rounded" :class="{
                'bg-purple-100 text-running': asset.status === 'Running',
                'bg-red-100 text-rejected': asset.status === 'Deleted',
                'bg-emerald-100 text-complete': asset.status === 'Completed'
              }">
                {{ asset.status }}
              </span>
            </td>

            <!-- Actions -->
            <td class="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
              <div class="flex space-x-2">
                <button
                  class="p-1 rounded-md text-button hover:bg-input dark:hover:bg-input-dark transition-colors duration-200 border border-button">
                  <TrashIcon class="h-5 w-5" />
                </button>
                <button
                  class="px-2 py-1 bg-button text-white font-bold rounded-md hover:bg-buttonHover transition-colors duration-200">
                  Close
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </article>
</template>

<script setup>
import { ref } from 'vue'
import { TrashIcon } from '@heroicons/vue/24/outline';

const headers = [
  'No',
  'Asset Name',
  'Asset Type',
  'Quantity',
  'Final Price',
  'Fee',
  'Total Spent',
  'Status',
  'Action'
]

const assets = ref([
  {
    id: 1,
    name: 'BTC',
    type: 'Crypto',
    quantity: '0.12224',
    finalPrice: 620000000,
    fee: 320,
    totalSpent: 620000320,
    status: 'Running'
  },
  {
    id: 2,
    name: 'BBRI',
    type: 'Stock',
    quantity: '200 Lot',
    finalPrice: 620000000,
    fee: 320,
    totalSpent: 620000320,
    status: 'Running'
  },
  {
    id: 3,
    name: 'XRP',
    type: 'Crypto',
    quantity: '0.12224',
    finalPrice: 620000000,
    fee: 320,
    totalSpent: 620000320,
    status: 'Running'
  },
  {
    id: 4,
    name: 'PTBA',
    type: 'Stock',
    quantity: '0.12224',
    finalPrice: 620000000,
    fee: 320,
    totalSpent: 620000320,
    status: 'Running'
  },
  {
    id: 5,
    name: 'BBCA',
    type: 'Stock',
    quantity: '0.12224',
    finalPrice: 620000000,
    fee: 320,
    totalSpent: 620000320,
    status: 'Deleted'
  },
  {
    id: 6,
    name: 'DOOH',
    type: 'Stock',
    quantity: '0.12224',
    finalPrice: 620000000,
    fee: 320,
    totalSpent: 620000320,
    status: 'Completed'
  }
])

const formatNumber = (number) => {
  return new Intl.NumberFormat('id-ID').format(number)
}
</script>
