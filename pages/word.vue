<template>
  <div>
    <div class="text-center mt-4">
      <p>{{ $route.query.id.title }}</p>
      <p>{{ $route.query.id.date }}</p>
    </div>
    <div class="flex justify-center mt-4">
      <EditWord />
      <CreateWord />
    </div>
  </div>
</template>
