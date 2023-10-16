<script setup lang="ts">
import type { SelectRootEmits, SelectRootProps, SeparatorProps } from 'radix-vue'
import { SelectRoot, useEmitAsProps } from 'radix-vue'
import { SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel, SelectItem } from "./"
import { cn } from '@/lib/utils'
import { Label } from '../label'

interface CustomSelectProps extends SelectRootProps{
  data?: { value: string|number, name: | string }[];
  placeholder:string
  label?: string | number
}

const props = defineProps<CustomSelectProps>();

const emits = defineEmits<SelectRootEmits>()
</script>

<template>
  <Label>{{ props.label }}</Label>
  <SelectRoot  v-if="props.data?.length" v-bind="{ ...props, ...useEmitAsProps(emits) }">
    <SelectTrigger :class="cn($attrs.class ?? '')">
      <SelectValue :placeholder="props.placeholder" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectItem v-for="{ value, name } in props.data" :value="value.toString()">
          {{ name }}
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </SelectRoot>
</template>
