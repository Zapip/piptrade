<template>
  <article class="flex flex-col gap-4">
    <section class="flex flex-col gap-2">
      <h1 class="text-4xl font-semibold text-t1 dark:text-t1-dark w-full">Journal</h1>
      <h2 class="text-2xl text-t2 dark:text-t2-dark w-full">Here is your transaction list, covering all financial
        activities that show Profit and Loss.</h2>
    </section>
    <section class="p-6 bg-background dark:bg-background-dark rounded-3xl">
      <table class="w-full">
        <!-- Table Header -->
        <thead class="bg-input dark:bg-input-dark rounded-xl">
          <tr>
            <th v-for="header in headers" :key="header"
              class="px-2 py-3 font-bold text-t1 dark:text-t1-dark text-center whitespace-nowrap">
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
            <td class="px-2 py-4 whitespace-nowrap text-t2 dark:text-t2-dark truncate">
              {{ asset.date }}
            </td>

            <!-- Final Price -->
            <td class="px-2 py-4 whitespace-nowrap  text-t2 dark:text-t2-dark ">
              {{ asset.quantity }}
            </td>

            <!-- Fee -->
            <td class="px-2 py-4 whitespace-nowrap  text-t2 dark:text-t2-dark">
              Rp{{ formatNumber(asset.entryPrice) }}
            </td>

            <!-- Total Spent -->
            <td class="px-2 py-4 whitespace-nowrap  text-t2 dark:text-t2-dark">
              Rp{{ formatNumber(asset.exitPrice) }}
            </td>
            <td class="px-2 py-4 whitespace-nowrap  text-t2 dark:text-t2-dark">
              {{ asset.profitLoss }}
            </td>


          </tr>
        </tbody>
      </table>
    </section>
  </article>
</template>

<script setup>
import { ref } from 'vue'

const headers = [
  'No',
  'Asset Name',
  'Asset Type',
  'Date',
  'Quantity',
  'Entry Price',
  'Exit Price',
  'Profit/Loss',
]

const assets = ref([
  {
    id: 1,
    name: 'BTC',
    type: 'Crypto',
    date: '28 Okt - 1 Nov 2028',
    quantity: '0.12224',
    entryPrice: 620000000,
    exitPrice: 630000320,
    profitLoss: 'Rp10.000.320 (1.61%)',
  },
  {
    id: 2,
    name: 'ETH',
    type: 'Crypto',
    date: '15 Nov - 20 Nov 2029',
    quantity: '0.14567',
    entryPrice: 750000000,
    exitPrice: 740000500,
    profitLoss: '-Rp9.999.500 (-1.33%)',
  },
  {
    id: 3,
    name: 'XRP',
    type: 'Crypto',
    date: '15 Nov - 20 Nov 2029',
    quantity: '0.12224',
    entryPrice: 620000000,
    exitPrice: 620000320,
    profitLoss: 'Rp320 (0.00%)',
  },
  {
    id: 4,
    name: 'BBCA',
    type: 'Stock',
    date: '20 Nov - 25 Nov 2029',
    quantity: '200 Lot',
    entryPrice: 620000000,
    exitPrice: 630000000,
    profitLoss: 'Rp10.000.000 (1.61%)',
  },
  {
    id: 5,
    name: 'DOOH',
    type: 'Stock',
    date: '10 Nov - 15 Nov 2029',
    quantity: '0.12224',
    entryPrice: 620000000,
    exitPrice: 620000500,
    profitLoss: 'Rp500 (0.00%)',
  },
  {
    id: 6,
    name: 'BBRI',
    type: 'Stock',
    date: '15 Nov - 20 Nov 2029',
    quantity: '200 Lot',
    entryPrice: 700000000,
    exitPrice: 710000000,
    profitLoss: 'Rp10.000.000 (1.43%)',
  }
])


const formatNumber = (number) => {
  return new Intl.NumberFormat('id-ID').format(number)
}
</script>
