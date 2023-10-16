<template>
  <div class="h-screen flex items-center justify-center">
    <div class="border w-full max-w-sm p-4 mx-auto rounded">
      <UiRadioGroup default-value="option-one" class="flex mb-4 justify-center">
        <div class="flex items-center space-x-2">
          <UiRadioGroupItem id="option-one" value="option-one" />
          <UiLabel for="option-one">Bus</UiLabel>
        </div>
        <div class="flex items-center space-x-2">
          <UiRadioGroupItem id="option-two" value="option-two" />
          <UiLabel for="option-two">Flight</UiLabel>
        </div>
      </UiRadioGroup>
      <UiSelect label="Depart city" class="mb-3" placeholder="Select city"
        :data="cities.map(t => ({ value: t.id, name: t.name }))">Find ticket</UiSelect>
      <UiSelect label="Destination city" class="mb-3" placeholder="Select city"
        :data="cities.map(t => ({ value: t.id, name: t.name }))">Find ticket</UiSelect>
      <UiDatePicker label="Date" v-model="date" class="w-full mb-4" />
      <UiButton class="block ml-auto">Find ticket</UiButton>
    </div>
  </div>
</template>

<script setup>
const supabase = useSupabaseClient();

const cities = ref([]);
const date = ref(new Date())

const fetchCities = async () => {
  const { data } = await supabase.from('City').select().in('id', [435, 436, 407, 1, 417]);
  cities.value = data
};

fetchCities();
</script>