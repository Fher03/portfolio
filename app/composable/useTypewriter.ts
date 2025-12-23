export const useTypewriter = (
  texts: string[],
  typingSpeed = 100,
  deleteSpeed = 50,
  pauseTime = 2000
) => {
  const displayedText = ref("");
  const currentIndex = ref(0);
  const isDeleting = ref(false);
  const isPaused = ref(false);

  const startTyping = () => {
    const type = () => {
      const currentText = texts[currentIndex.value] || "";

      if (isPaused.value) {
        setTimeout(() => {
          isPaused.value = false;
          isDeleting.value = true;
          type();
        }, pauseTime);
        return;
      }

      if (!isDeleting.value) {
        if (displayedText.value.length < currentText.length) {
          displayedText.value = currentText.slice(
            0,
            displayedText.value.length + 1
          );
          setTimeout(type, typingSpeed);
        } else {
          // Terminó de escribir, activar pausa
          isPaused.value = true;
          type(); // ⬅️ Llamar de nuevo para entrar en el bloque de pausa
        }
      }
      // 3. Si SÍ está borrando
      else {
        if (displayedText.value.length > 0) {
          displayedText.value = displayedText.value.slice(0, -1);
          setTimeout(type, deleteSpeed);
        } else {
          // Terminó de borrar, pasar al siguiente texto
          isDeleting.value = false;
          currentIndex.value = (currentIndex.value + 1) % texts.length;
          setTimeout(type, 500);
        }
      }
    };

    type();
  };

  return {
    displayedText,
    isPaused,
    startTyping,
  };
};
