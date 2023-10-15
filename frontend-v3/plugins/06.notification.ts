//## Notificação para o usuário

function notificationInject(html: string) {
    const bodyElement = document.body;
    if (bodyElement) {
        const div = document.createElement('div');
        div.className = `notification fade-in`; // Aplica a classe "notification" e a animação de surgimento

        div.style.cssText = 'position: absolute; bottom: 15px; right: 15px; margin: 0px; padding: 0px;';

        div.innerHTML = html;
        bodyElement.appendChild(div);

        setTimeout(() => {
            div.classList.remove('fade-in');
            div.classList.add('fade-out');
            setTimeout(() => {
                if (div.parentNode) {
                    div.parentNode.removeChild(div);
                }
            }, 500); // Tempo de espera antes de remover o elemento (0,5 segundos no exemplo)
        }, 5000); // Tempo de espera antes de desaparecer (5 segundos no exemplo)
    }
}

export default defineNuxtPlugin(() => {
    return {
      provide: {
        notification: {
            default(title: string, message: string): void{
                let html = '';
        
                html += `<article class="message is-dark">`
                html += `    <div class="message-header">`
                html += `        <p>${title}</p>`
                html += `    </div>`
                html += `    <div class="message-body">`
                html += `        ${message}`
                html += `    </div>`
                html += `</article>`
                
                notificationInject(html);
            },
            info(title: string, message: string): void{
                let html = '';
        
                html += `<article class="message is-info">`
                html += `    <div class="message-header">`
                html += `        <p>${title}</p>`
                html += `    </div>`
                html += `    <div class="message-body">`
                html += `        ${message}`
                html += `    </div>`
                html += `</article>`
                
                notificationInject(html);
            },
            success(title: string, message: string): void {
                let html = '';
        
                html += `<article class="message is-success">`
                html += `    <div class="message-header">`
                html += `        <p>${title}</p>`
                html += `    </div>`
                html += `    <div class="message-body">`
                html += `        ${message}`
                html += `    </div>`
                html += `</article>`
                
                notificationInject(html);
            },
            warning(title: string, message: string): void{
                let html = '';
        
                html += `<article class="message is-warning">`
                html += `    <div class="message-header">`
                html += `        <p>${title}</p>`
                html += `    </div>`
                html += `    <div class="message-body">`
                html += `        ${message}`
                html += `    </div>`
                html += `</article>`
                
                notificationInject(html);
            },
            danger(title: string, message: string): void{
                let html = '';
        
                html += `<article class="message is-danger">`
                html += `    <div class="message-header">`
                html += `        <p>${title}</p>`
                html += `    </div>`
                html += `    <div class="message-body">`
                html += `        ${message}`
                html += `    </div>`
                html += `</article>`
                
                notificationInject(html);
            }
        }
      }
    }
});

/*
import Vue from 'vue';

function notificationInject(html: string) {
    const bodyElement = document.body;
    if (bodyElement) {
        const div = document.createElement('div');
        div.className = `notification fade-in`; // Aplica a classe "notification" e a animação de surgimento

        div.style.cssText = 'position: absolute; bottom: 15px; right: 15px; margin: 0px; padding: 0px;';

        div.innerHTML = html;
        bodyElement.appendChild(div);

        setTimeout(() => {
            div.classList.remove('fade-in');
            div.classList.add('fade-out');
            setTimeout(() => {
                if (div.parentNode) {
                    div.parentNode.removeChild(div);
                }
            }, 500); // Tempo de espera antes de remover o elemento (0,5 segundos no exemplo)
        }, 5000); // Tempo de espera antes de desaparecer (5 segundos no exemplo)
    }
}

declare module 'vue/types/vue' {
    interface Vue {
        $notification: {
            default(title: string, message: string): void;
            info(title: string, message: string): void;
            success(title: string, message: string): void;
            warning(title: string, message: string): void;
            danger(title: string, message: string): void;
        },
    }
}

Vue.prototype.$notification = {
    default(title: string, message: string): void{
        let html = '';

        html += `<article class="message is-dark">`
        html += `    <div class="message-header">`
        html += `        <p>${title}</p>`
        html += `    </div>`
        html += `    <div class="message-body">`
        html += `        ${message}`
        html += `    </div>`
        html += `</article>`
        
        notificationInject(html);
    },
    info(title: string, message: string): void{
        let html = '';

        html += `<article class="message is-info">`
        html += `    <div class="message-header">`
        html += `        <p>${title}</p>`
        html += `    </div>`
        html += `    <div class="message-body">`
        html += `        ${message}`
        html += `    </div>`
        html += `</article>`
        
        notificationInject(html);
    },
    success(title: string, message: string): void {
        let html = '';

        html += `<article class="message is-success">`
        html += `    <div class="message-header">`
        html += `        <p>${title}</p>`
        html += `    </div>`
        html += `    <div class="message-body">`
        html += `        ${message}`
        html += `    </div>`
        html += `</article>`
        
        notificationInject(html);
    },
    warning(title: string, message: string): void{
        let html = '';

        html += `<article class="message is-warning">`
        html += `    <div class="message-header">`
        html += `        <p>${title}</p>`
        html += `    </div>`
        html += `    <div class="message-body">`
        html += `        ${message}`
        html += `    </div>`
        html += `</article>`
        
        notificationInject(html);
    },
    danger(title: string, message: string): void{
        let html = '';

        html += `<article class="message is-danger">`
        html += `    <div class="message-header">`
        html += `        <p>${title}</p>`
        html += `    </div>`
        html += `    <div class="message-body">`
        html += `        ${message}`
        html += `    </div>`
        html += `</article>`
        
        notificationInject(html);
    }
};
*/