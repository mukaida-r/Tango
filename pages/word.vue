<template>
  <div>
    <div class="text-center mt-4">
      <p>{{ $route.query.id.icon }}</p>
      <p>{{ $route.query.id.title }}</p>
      <p>{{ $route.query.id.date }}</p>
    </div>
    <WordEdit />
    <CreateWord />
  </div>
</template>
