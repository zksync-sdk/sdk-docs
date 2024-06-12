<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

interface Select {
  id: string;
  label: string;
  href: string;
  icon?: string;
}
const selected = ref<Select>({
  id: '',
  label: '',
  href: '',
  icon: '',
});

const selectors: Select[] = [
  {
    id: 'JavaScript',
    label: 'JavaScript',
    href: '/sdk/js/ethers',
    icon: 'i-heroicons-code-bracket',
  },
  {
    id: 'Golang',
    label: 'Golang',
    href: '/sdk/go/getting-started',
    icon: 'i-heroicons-cog',
  },
  {
    id: 'Python',
    label: 'Python',
    href: '/sdk/python/getting-started',
    icon: 'i-heroicons-circle-stack',
  },
  {
    id: 'Java',
    label: 'Java',
    href: '/sdk/java/getting-started',
    icon: 'i-heroicons-rectangle-group',
  },
  {
    id: 'Swift',
    label: 'Swift',
    href: '/sdk/swift/getting-started',
    icon: 'i-heroicons-rocket-launch',
  },
  {
    id: 'Rust',
    label: 'Rust',
    href: '/sdk/rust/getting-started',
    icon: 'i-heroicons-wrench',
  },
];

selected.value = selectors[0];

const router = useRouter();

const handleSelect = (option: Select) => {
  selected.value = option;
  if (option.href.startsWith('http')) {
    window.open(option.href, '_blank');
  } else {
    router.push(option.href);
  }
};
</script>

<template>
  <div class="dropdown">
    <button class="dropdown-toggle">
      <template v-if="selected.icon">
        <UIcon
          :name="selected.icon"
          class="h-5 w-5"
        />
      </template>
      {{ selected.label }}
    </button>
    <ul class="dropdown-menu">
      <li
        v-for="selector in selectors"
        :key="selector.id"
        @click="handleSelect(selector)"
      >
        <template v-if="selector.icon">
          <UIcon
            :name="selector.icon"
            class="h-5 w-5"
          />
        </template>
        {{ selector.label }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
  width: 100%;
}
.dropdown-toggle {
  background-color: inherit;
  width: 100%;
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 18px;
  border: 1px solid #334155;
  padding: 10px 17px;
  border-radius: 10px;
  font-size: 13px;
}
.dropdown-menu {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  width: 100%;
}
.dropdown:hover .dropdown-menu {
  display: block;
}
.dropdown-menu li {
  padding: 8px 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 18px;
  font-size: 13px;
}
.dropdown-menu li:hover {
  background-color: #ddd;
}
</style>
