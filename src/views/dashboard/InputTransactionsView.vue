<template>
  <article class="flex flex-col gap-4">
    <section class="flex flex-col gap-2">
      <h1 class="text-4xl font-semibold text-t1 dark:text-t1-dark w-full">Input Transaction</h1>
      <h2 class="text-2xl text-t2 dark:text-t2-dark w-full">
        Come on, enter your transaction data here and see the projections of the transactions you make!
      </h2>
    </section>

    <section class="rounded-3xl flex gap-4">
      <section class="bg-background dark:bg-background-dark size-fit p-6 rounded-3xl w-1/2 shadow">
        <form @submit.prevent="handleSubmit" class="flex flex-col gap-3">
          <section>
            <label class="block font-medium text-t1 dark:text-t1-dark mb-1">Select Asset Type</label>
            <div class="relative">
              <select v-model="form.assetType" @change="clearForm"
                class="w-full px-4 py-2 bg-input dark:bg-input-dark text-t1 dark:text-t1-dark border border-primary rounded-lg focus:ring-2 focus:ring-button focus:border-button pl-10 appearance-none">
                <option value="" disabled selected>Select an option</option>
                <option value="crypto">Cryptocurrency</option>
                <option value="stocks">Stocks</option>
                <option value="forex">Forex</option>
              </select>
              <DocumentIcon class="size-5 text-primary absolute left-3 top-2.5" />
              <ChevronDownIcon class="size-5 text-primary absolute right-3 top-2.5" />
            </div>
          </section>

          <section v-if="form.assetType" class="">
            <label class="block font-medium text-t1 dark:text-t1-dark mb-1">Select Coin/Token/Stock/Forex</label>
            <div class="relative">
              <select v-model="form.asset"
                class="w-full px-4 py-2 border bg-input dark:bg-input-dark text-t1 dark:text-t1-dark border-primary rounded-lg focus:ring-2 focus:ring-button focus:border-button pl-10 appearance-none">
                <option value="" disabled selected>Select an option</option>
                <option v-if="form.assetType === 'crypto'" value="BTC">BTC</option>
                <option v-if="form.assetType === 'crypto'" value="ETH">ETH</option>
                <option v-if="form.assetType === 'stocks'" value="AAPL">AAPL</option>
                <option v-if="form.assetType === 'stocks'" value="GOOG">GOOG</option>
                <option v-if="form.assetType === 'forex'" value="EUR/USD">EUR/USD</option>
                <option v-if="form.assetType === 'forex'" value="GBP/USD">GBP/USD</option>
              </select>
              <CubeTransparentIcon class="size-5 text-primary absolute left-3 top-2.5" />
              <ChevronDownIcon class="size-5 text-primary absolute right-3 top-2.5" />
            </div>
          </section>

          <section v-if="form.asset" class="">
            <label class="block font-medium text-t1 dark:text-t1-dark mb-1">Quantity</label>
            <section class="relative">
              <input type="number" v-model="form.quantity" placeholder="Enter quantity"
                class="w-full bg-input dark:bg-input-dark text-t1 dark:text-t1-dark px-4 py-2 border border-primary rounded-lg focus:ring-2 focus:ring-button focus:border-button pl-10"
                required />
              <BanknotesIcon class="size-5 text-primary absolute left-3 top-2.5" />
            </section>

          </section>

          <section v-if="form.asset" class="">
            <label class="block font-medium text-t1 dark:text-t1-dark mb-1">Price Per Asset</label>
            <section class="relative">
              <input type="number" v-model="form.priceasset" placeholder="Enter price per asset"
                class="w-full bg-input dark:bg-input-dark text-t1 dark:text-t1-dark px-4 py-2 border border-primary rounded-lg focus:ring-2 focus:ring-button focus:border-button pl-10"
                required />
              <BanknotesIcon class="size-5 text-primary absolute left-3 top-2.5" />
            </section>
          </section>

          <section v-if="form.asset" class="">
            <label class="block font-medium text-t1 dark:text-t1-dark mb-1">Transaction Fee</label>
            <section class="relative">
              <input type="number" v-model="form.fee" placeholder="Enter transaction fee"
                class="w-full px-4 bg-input dark:bg-input-dark text-t1 dark:text-t1-dark py-2 border border-primary rounded-lg focus:ring-2 focus:ring-button focus:border-button pl-10"
                required />
              <BanknotesIcon class="size-5 text-primary absolute left-3 top-2.5" />
            </section>
          </section>

          <section v-if="form.quantity && form.priceasset && form.fee" class="">
            <div class="text-xl font-medium text-t1 dark:text-t1-dark flex flex-col gap-1">
              <span class="font-medium">Total Spend: </span>
              <span class="font-semibold text-2xl">
                {{ totalSpend.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' }) }}
              </span>
            </div>
          </section>

          <section class="w-full flex justify-end">
            <button type="submit"
              class="w-fit bg-button text-white py-2 px-4 rounded-lg hover:bg-button-focus flex gap-1 items-center justify-center font-bold">
              Add
              <CursorArrowRaysIcon class="size-4" />
            </button>
          </section>
        </form>
      </section>
      <section
        class="w-full h-fit bg-background dark:bg-background-dark rounded-3xl flex flex-col gap-6 p-6 items-center shadow">
        <h3 class="text-2xl font-bold text-primary">Transaction Projections</h3>
        <section v-if="!isFormComplete" class="text-center text-t2 dark:text-t2-dark text-lg">
          Fill in the transaction form first and see your transaction projections.
        </section>
        <section v-else>
          <section class="flex flex-col gap-3 w-full">
            <section class="flex flex-col gap-1 ">
              <h4 class="text-xl font-semibold text-t1 dark:text-t1-dark">Take Profit and StopLoss</h4>
              <p class="text-t2 dark:text-t2-dark">Based on the data you entered, here are the recommended levels for
                Take
                Profit and Stop Loss.</p>
            </section>
            <section class="flex gap-6">
              <section class="flex gap-6 w-full">
                <section v-for="(item, index) in projections.tpsl" :key="index"
                  :class="['flex flex-col gap-3 p-4 rounded-xl flex-grow', item.color]">
                  <p class="text-sm text-t2 dark:text-t2-dark">{{ item.type }} {{ item.percentage }}%</p>
                  <h5 class="font-semibold text-xl text-t1 dark:text-t1-dark">Rp{{ item.price.toLocaleString() }}</h5>
                </section>
              </section>
            </section>
          </section>
          <section class="flex flex-col gap-3 w-full">
            <section class="flex flex-col gap-1">
              <h4 class="text-xl font-semibold text-t1 dark:text-t1-dark">Risk and Reward</h4>
              <p class="text-t2 dark:text-t2-dark">Minimum Risk Reward 1:2
                Profit and Stop Loss.</p>
            </section>
            <section class="flex gap-6">
              <section class="flex gap-6 w-full">
                <section v-for="(item, index) in projections.rr" :key="index"
                  :class="['flex flex-col gap-3 p-4 rounded-xl flex-grow', item.color]">
                  <p class="text-sm text-t2 dark:text-t2-dark"> {{ item.content }}</p>
                  <h5 class="font-semibold text-xl text-t1 dark:text-t1-dark">{{ item.num }}</h5>
                </section>
              </section>
            </section>
          </section>
          <section class="flex flex-col gap-3 w-full">
            <section class="flex flex-col gap-1">
              <h4 class="text-xl font-semibold text-t1 dark:text-t1-dark">Risk Per Trade</h4>
              <p class="text-t2 dark:text-t2-dark">Maximum 2% of capital.</p>
            </section>
            <section class="flex gap-6">
              <section class="flex gap-6 w-full">
                <section v-for="(item, index) in projections.rrptd" :key="index"
                  :class="['flex flex-col gap-3 p-4 rounded-xl flex-grow', item.color]">
                  <p class="text-sm text-t2 dark:text-t2-dark">{{ item.percentage }}%</p>
                  <h5 class="font-semibold text-xl text-t1 dark:text-t1-dark">Rp{{ item.price.toLocaleString() }}</h5>
                </section>
              </section>
            </section>
          </section>
          <section class="flex flex-col gap-3 w-full">
            <section class="flex flex-col gap-1">
              <h4 class="text-xl font-semibold text-t1 dark:text-t1-dark">Capital Allocation</h4>
              <p class="text-t2 dark:text-t2-dark">Maximum funds used 25%-30% of capital</p>
            </section>
            <section class="flex gap-6">
              <section class="flex gap-6 w-full">
                <section v-for="(item, index) in projections.ca" :key="index"
                  :class="['flex flex-col gap-3 p-4 rounded-xl flex-grow', item.color]">
                  <p class="text-sm text-t2 dark:text-t2-dark">{{ item.content }}</p>
                  <h5 class="font-semibold text-xl text-t1 dark:text-t1-dark">{{ item.price.toLocaleString() }}</h5>
                </section>
              </section>
            </section>
          </section>
        </section>
      </section>
    </section>
  </article>
</template>

<script setup>
import { CubeTransparentIcon, ChevronDownIcon, DocumentIcon, BanknotesIcon, CursorArrowRaysIcon } from '@heroicons/vue/24/solid'
import { ref, computed } from 'vue'

const form = ref({
  assetType: '',
  asset: '',
  quantity: '',
  priceasset: '',
  fee: '',
})

const projections = ref({
  tpsl: [
    { type: 'Stoploss', percentage: -10, price: 2000000, color: 'bg-rejected/20' },
    { type: 'Take Profit #1', percentage: 20, price: 4000000, color: 'bg-complete/20' },
    { type: 'Take Profit #2', percentage: 30, price: 6000000, color: 'bg-complete/20' },
    { type: 'Take Profit #3', percentage: 40, price: 8000000, color: 'bg-complete/20' },
  ],
  rr: [
    { content: 'Risk Reward based on TP #1', num: '1/2', color: 'bg-complete/20' },
    { content: 'Risk Reward based on TP #2', num: '3/6', color: 'bg-complete/20' },
    { content: 'Risk Reward based on TP #3', num: '13/7', color: 'bg-complete/20' },
  ],
  rrptd: [
    { percentage: 1, price: 200000, color: 'bg-caption/20' },
    { percentage: 1.50, price: 300000, color: 'bg-caption/20' },
    { percentage: 2, price: 400000, color: 'bg-caption/20' },
  ],
  ca: [
    { content: 'Maximum capital used', price: 'Rp20.000.000-Rp6.000.000', color: 'bg-complete/20' },
  ],
})

const clearForm = () => {
  form.value.asset = ''
  form.value.quantity = ''
  form.value.priceasset = ''
  form.value.fee = ''
}

const totalSpend = computed(() => {
  if (form.value.quantity && form.value.priceasset && form.value.fee) {
    const quantity = parseFloat(form.value.quantity)
    const pricePerAsset = parseFloat(form.value.priceasset)
    const fee = parseFloat(form.value.fee)
    return (quantity * pricePerAsset) + fee
  }
  return 0
})

const isFormComplete = computed(() => {
  return form.value.assetType && form.value.asset && form.value.quantity && form.value.priceasset;
});

const handleSubmit = () => {
  console.log('Form submitted:', form.value)
}
</script>
