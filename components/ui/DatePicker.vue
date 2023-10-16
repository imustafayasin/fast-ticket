<script setup lang="ts">
import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-vue-next'

import { ref } from 'vue'
import { cn } from '@/lib/utils'
import { Button } from './button'
import { Calendar } from './calendar'
import { Label } from './label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from './popover'

const date = ref<Date>();

const props = defineProps<{
  label?: string | number
}>()
</script>

<template>
  <Popover>
    <Label
    v-if="label"
    :class="cn('block text-sm tracking-tight font-medium text-foreground text-left')"
  >
    {{ label }}
  </Label>
    <PopoverTrigger as-child>
      <Button
        :variant="'outline'"
        :class="cn(
          'w-[280px] justify-start text-left font-normal w-full',
          !date && 'text-muted-foreground',
          $attrs.class ?? ''
        )"
      >
        <CalendarIcon class="mr-2 h-4 w-4" />
        <span>{{ date ? format(date, "PPP") : "Pick a date" }}</span>
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-auto p-0">
      <Calendar v-model="date" />
    </PopoverContent>
  </Popover>
</template>