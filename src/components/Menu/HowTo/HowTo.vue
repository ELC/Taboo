<template>
  <div class="how-to">
    <h3>Reglas del juego</h3>
    <ol>
      <li>Ingresa tu nombre y la duración del turno.</li>
      <li>Selecciona la categoria.</li>
      <li>Tienes un turno de {{ roundLength }} segundos para hacer que tu equipo adivine la palabra mostrada</li>
      <li>No puedes utilizar en tu explicación ninguna de las palabras en rojo.</li>
      <li>Presiona el botón Verde si tu equipo adivinó la palabra</li>
      <li>Presiona el botón Rojo si quieres saltear la tarjeta o si mencionaste alguna de las palabras prohibidas.</li>
    </ol>
    <small>Todos los resultados se guardan automaticamente en el navegador.</small>
  </div>
</template>

<script>
  export default {
    name: 'HowTo',
    computed: {
      roundLength() {
        return this.$store.state.timerDefault
      }
    }
  };
</script>
