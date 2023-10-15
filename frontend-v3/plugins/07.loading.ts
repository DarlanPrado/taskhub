//## Mostra a barra de carregamento, sua estilização fica no css global

let loadingElement: HTMLElement | null = null;
let currentWidth = 0;

function createLoadingBar(): HTMLElement {
    const loadingBar = document.createElement('div');
    loadingBar.className = 'loading-bar';

    document.body.appendChild(loadingBar);

    return loadingBar;
}

export default defineNuxtPlugin(() => {
    return {
      provide: {
        loadingBar:{
            async start(): Promise<void> {
                return new Promise((resolve) => {
                    if (!loadingElement) {
                        loadingElement = createLoadingBar();
                    }
                    setTimeout(() => {
                        if (loadingElement) {
                            currentWidth = 85;
                            loadingElement.style.width = `${currentWidth}%`;
                            loadingElement.classList.add('light-animation');
                            resolve(); // Resolvemos a Promise quando a barra de loading iniciar
                        }
                    }, 10);
                });
            },
            async finish(): Promise<void> {
                return new Promise((resolve) => {
                    if (loadingElement) {
                        currentWidth = 100;
                        loadingElement.style.width = `${currentWidth}%`;
                        loadingElement.classList.remove('light-animation');
                        setTimeout(() => {
                            if (loadingElement && loadingElement.parentNode) {
                                loadingElement.parentNode.removeChild(loadingElement);
                                loadingElement = null;
                                resolve(); // Resolvemos a Promise quando a barra for removida
                            }
                        }, 1000);
                    } else {
                        resolve(); // Se a barra já foi removida anteriormente, resolvemos imediatamente
                    }
                });
            },
        }
      }
    }
});