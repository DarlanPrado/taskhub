//## Logs personalizados

const dia = String(new Date().getDate()).padStart(2, '0');
const mes = String(new Date().getMonth() + 1).padStart(2, '0'); // O mês começa em 0
const ano = new Date().getFullYear();

// Formata o horário no formato desejado (por exemplo, "hh:mm:ss")
const horas = String(new Date().getHours()).padStart(2, '0');
const minutos = String(new Date().getMinutes()).padStart(2, '0');
const segundos = String(new Date().getSeconds()).padStart(2, '0');

// Combina as partes formatadas em uma string de data e horário
const dataHoraFormatada = `${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`;

export default defineNuxtPlugin(() => {
    return {
      provide: {
        logger: {
            log(text: any): void {
            if (process.env.NODE_ENV == 'development') {
                console.log(`LOG[${dataHoraFormatada}]: ${text}`);
            }
        },

        /**
         * Registra uma mensagem de erro.
         * [Apenas ambiente de desenvolvimento]
         * @param {any} text - O texto da mensagem de log.
         */
        error(text: any): void {
            if (process.env.NODE_ENV == 'development') {
                console.error(`ERROR[${dataHoraFormatada}]: ${text}`);
            }
        },

        /**
         * Registra uma mensagem de info.
         * [Ambiente de desenvolvimento e produção]
         * @param {any} text - O texto da mensagem de log.
         */
        info(text: any): void {
            console.info(`INFO[${dataHoraFormatada}]: ${text}`);
        },

        /**
         * Registra uma mensagem de warn.
         * [Apenas ambiente de desenvolvimento]
         * @param {any} text - O texto da mensagem de log.
         */
        warn(text: any): void {
            if (process.env.NODE_ENV == 'development') {
                console.warn(`WARNING[${dataHoraFormatada}]: ${text}`);
            }
        },
            }
        }
    }
});