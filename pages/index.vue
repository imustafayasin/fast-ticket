<template>
  <div class="h-screen flex items-center justify-center">
    <div class="border w-full max-w-md p-4 mx-auto">
      <UiRadioGroup default-value="option-one" class="flex mb-8 justify-center">
        <div class="flex items-center space-x-2">
          <UiRadioGroupItem id="option-one" value="option-one" />
          <UiLabel for="option-one">Bus</UiLabel>
        </div>
        <div class="flex items-center space-x-2">
          <UiRadioGroupItem id="option-two" value="option-two" />
          <UiLabel for="option-two">Flight</UiLabel>
        </div>
      </UiRadioGroup>
      <UiButton>Click me</UiButton>
      <UiInput type="email" placeholder="Email" />
    </div>
  </div>
</template>

<script setup>
const supabase = useSupabaseClient();
const cities = ref();
(async () => {
  const { data } = await supabase.from('City').select();
  cities.value = data
})()
</script>