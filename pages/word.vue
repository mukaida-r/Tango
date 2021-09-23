<template>
  <div>
    <div class="text-center mt-4">
      <p>{{ $route.query.id.name }}</p>
      <p>{{ $route.query.id.id }}</p>
    </div>
    <div class="flex justify-center mt-4">
      <EditWord />
      <CreateWord />
    </div>
  </div>
</template>
